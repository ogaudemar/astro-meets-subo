#!/usr/bin/env node
/**
 * check-api-drift.mjs
 *
 * The /api page and public/llms.txt document a surface that lives in a different
 * repo. This script re-derives the machine-checkable half of that surface from
 * the app repo's Python source and asserts our copy still agrees.
 *
 * It reads the app repo READ-ONLY. It never edits anything.
 *
 * Finding the app repo, in order:
 *   1. SUBO_APP_REPO env var
 *   2. ../subo relative to this repo
 * If neither exists the script SKIPS with exit 0 — CI and contributors without
 * the app checked out should not be blocked by a check they cannot run.
 *
 * What it CAN verify: route paths, block types, webhook events + headers,
 * per-tier rate limits, privacy modes, the signature scheme, the API key prefix.
 * What it CANNOT verify: whether the prose and curl samples still describe the
 * behaviour correctly. A field can keep its name and change its meaning. When
 * this script reports drift, re-read the recipes, not just the tables.
 *
 * Usage: npm run check:api
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const problems = [];
const notes = [];
const fail = (msg) => problems.push(msg);

// ── Locate the app repo ──────────────────────────────────────────────────────

function findAppRepo() {
  const candidates = [
    process.env.SUBO_APP_REPO,
    resolve(SITE_ROOT, '..', 'subo'),
  ].filter(Boolean);

  for (const dir of candidates) {
    if (existsSync(join(dir, 'web2', 'public_api', 'routes'))) return dir;
  }
  return null;
}

const APP_REPO = findAppRepo();

if (!APP_REPO) {
  console.log(
    'check-api-drift: SKIPPED (app repo not found).\n' +
    '  Set SUBO_APP_REPO to the Subo app checkout to enable this check.\n' +
    '  Looked for: $SUBO_APP_REPO, ../subo'
  );
  process.exit(0);
}

const API_DIR = join(APP_REPO, 'web2', 'public_api');
const readApp = (...parts) => readFileSync(join(API_DIR, ...parts), 'utf8');

// ── Small parsers over the Python source ─────────────────────────────────────
// These are deliberately narrow. If a parser finds nothing, that is itself
// reported as drift: it means the app repo moved the thing we were reading.

/** Pull the literal body of `NAME = { ... }` / `NAME = frozenset({ ... })`. */
function literalBody(source, name) {
  const start = source.indexOf(`${name} =`);
  if (start === -1) return null;
  const open = source.indexOf('{', start);
  if (open === -1) return null;
  let depth = 0;
  for (let i = open; i < source.length; i++) {
    if (source[i] === '{') depth++;
    else if (source[i] === '}') {
      depth--;
      if (depth === 0) return source.slice(open + 1, i);
    }
  }
  return null;
}

/** Keys of a `{"a": ..., "b": ...}` dict literal. */
function dictKeys(source, name) {
  const body = literalBody(source, name);
  if (body === null) return null;
  return [...body.matchAll(/["']([^"']+)["']\s*:/g)].map((m) => m[1]);
}

/** All quoted strings in a set/frozenset literal. */
function setMembers(source, name) {
  const body = literalBody(source, name);
  if (body === null) return null;
  return [...body.matchAll(/["']([^"']+)["']/g)].map((m) => m[1]);
}

/** `ServerTier.Foo: 123` pairs. */
function tierLimits(source) {
  const body = literalBody(source, '_TIER_LIMITS');
  if (body === null) return null;
  const out = {};
  for (const m of body.matchAll(/ServerTier\.(\w+)\s*:\s*(\d+)/g)) {
    out[m[1]] = Number(m[2]);
  }
  return out;
}

/** Every @bp.route("<path>") in routes/, normalised to {param} form. */
function routePaths() {
  const dir = join(API_DIR, 'routes');
  const paths = new Set();
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.py'))) {
    const src = readFileSync(join(dir, file), 'utf8');
    for (const m of src.matchAll(/\.route\(\s*["']([^"']+)["']/g)) {
      // "<int:sourceId>" and "<communityId>" both become "{sourceId}" / "{communityId}"
      paths.add(m[1].replace(/<(?:[^:>]+:)?([^>]+)>/g, '{$1}'));
    }
  }
  return paths;
}

/** Compare paths by shape, so {communityId} vs {serverId} does not false-alarm. */
const shape = (p) => p.replace(/\{[^}]+\}/g, '{}');

// ── Load both sides ──────────────────────────────────────────────────────────

const surface = JSON.parse(readFileSync(join(SITE_ROOT, 'src', 'data', 'api-surface.json'), 'utf8'));
const llmsTxt = readFileSync(join(SITE_ROOT, 'public', 'llms.txt'), 'utf8');
const apiPage = readFileSync(join(SITE_ROOT, 'src', 'pages', 'api.astro'), 'utf8');

const scriptPy = readApp('schemas', 'script.py');
const projectPy = readApp('schemas', 'project.py');
const projectCreatePy = readApp('routes', 'projects.py');
const responsesPy = readApp('routes', 'responses.py');
const responseSchemaPy = readApp('schemas', 'response.py');
const webhooksPy = readApp('routes', 'webhooks.py');
const authPy = readApp('auth.py');
const dispatchPy = readFileSync(
  join(APP_REPO, 'surveyLib', 'domain', 'webhookDispatch.py'),
  'utf8'
);

// ── Checks ───────────────────────────────────────────────────────────────────

/** Set equality, reported in both directions with actionable wording. */
function compareSets(label, ours, theirs, { file }) {
  if (theirs === null) {
    fail(`${label}: could not parse the app repo source. It probably moved or was renamed — update the parser in scripts/check-api-drift.mjs.`);
    return;
  }
  const oursSet = new Set(ours);
  const theirsSet = new Set(theirs);
  const missing = [...theirsSet].filter((x) => !oursSet.has(x));
  const stale = [...oursSet].filter((x) => !theirsSet.has(x));
  if (missing.length) {
    fail(`${label}: the API has ${missing.length} we do not document — ${missing.join(', ')}. Add to ${file}.`);
  }
  if (stale.length) {
    fail(`${label}: we document ${stale.length} the API no longer has — ${stale.join(', ')}. Remove from ${file}.`);
  }
}

const SURFACE_FILE = 'src/data/api-surface.json';

// 1. Block types
compareSets(
  'Block types',
  surface.blockTypes.map((b) => b.type),
  dictKeys(scriptPy, '_BLOCK_TYPE_TO_QT'),
  { file: SURFACE_FILE }
);

// 2. Privacy modes
compareSets(
  'Privacy modes',
  surface.privacyModes.map((m) => m.mode),
  dictKeys(projectPy, '_PRIVACY_TO_ANON_KEY'),
  { file: SURFACE_FILE }
);

// 2b. The privacy mode a survey gets when `privacy_mode` is omitted on create.
// This one is prose on the site, and it drifted silently once already: the route
// used to hardcode a mode, ignoring the community's own setting. It now reads
// `settings.defaultAnonymousMode` with a literal fallback, and that fallback is
// what we document. Parse the fallback and map it back to the public name.
{
  const m = projectCreatePy.match(
    /defaultAnonymousMode["']?\s*,\s*None\s*\)\s*or\s*AnonymousModes\.(\w+)/
  );
  if (!m) {
    fail(
      'Privacy default on create: could not find the `defaultAnonymousMode ... or AnonymousModes.X` ' +
      'fallback in routes/projects.py. Either it moved, or the route went back to hardcoding a ' +
      'privacy mode instead of reading the community setting — check which before touching the parser.'
    );
  } else {
    const anonKey = m[1];
    const body = literalBody(projectPy, '_PRIVACY_TO_ANON_KEY') ?? '';
    const pair = [...body.matchAll(/["']([^"']+)["']\s*:\s*["'](\w+)["']/g)]
      .find(([, , key]) => key === anonKey);
    const publicName = pair?.[1];
    if (!publicName) {
      fail(`Privacy default on create: AnonymousModes.${anonKey} has no entry in _PRIVACY_TO_ANON_KEY, so it has no public name.`);
    } else if (publicName !== surface.privacyFallbackOnCreate) {
      fail(
        `Privacy default on create: the API falls back to "${publicName}", we document ` +
        `"${surface.privacyFallbackOnCreate}". Update privacyFallbackOnCreate in ${SURFACE_FILE}, ` +
        'and re-read the prose in src/pages/api.astro and public/llms.txt — both describe this in words.'
      );
    }
  }
}

// 2c. Which response fields an anonymous project redacts, and which respondent
// filters it refuses. Both are prose on /api and in llms.txt, and this is the
// highest-consequence sentence on the page: it tells an integrator that Subo,
// not their ingestion code, is what keeps a promise of anonymity. A regression
// here is silent from the site's side — the copy keeps claiming redaction while
// the API hands back identity — so read it out of the source every build.
{
  // The schema blanks each field with `None if anonymous else ...`.
  const blanked = new Set(
    [...responseSchemaPy.matchAll(/(\w+)\s*=\s*None if anonymous else\b/g)].map((m) => m[1])
  );
  if (!blanked.size) {
    fail(
      'Anonymous redaction: found no `<field>=None if anonymous else ...` in schemas/response.py. ' +
      'Either the redaction was removed — in which case /api and public/llms.txt are now lying — ' +
      'or it was rewritten in a shape this parser cannot see. Check which before touching the parser.'
    );
  } else {
    compareSets('Anonymous-redacted response fields', surface.anonymousRedactedFields, blanked, {
      file: SURFACE_FILE,
    });
  }

  // A parenthesised tuple, so literalBody() (which hunts for `{`) does not apply.
  const tuple = responsesPy.match(/_RESPONDENT_FILTER_ARGS\s*=\s*\(([^)]*)\)/);
  const refused = tuple ? [...tuple[1].matchAll(/["']([^"']+)["']/g)].map((m) => m[1]) : null;
  if (!refused || !refused.length) {
    fail(
      'Anonymous filter refusal: could not find `_RESPONDENT_FILTER_ARGS` in routes/responses.py. ' +
      '/api and public/llms.txt both promise a 400 when an anonymous project is filtered by ' +
      'respondent; without that tuple the guard cannot confirm it still happens.'
    );
  } else {
    compareSets('Filters refused on anonymous projects', surface.anonymousRefusedFilters, refused, {
      file: SURFACE_FILE,
    });
  }
}

// 3. Webhook events
const appEvents = setMembers(webhooksPy, '_VALID_EVENTS');
compareSets('Webhook events', surface.webhookEvents, appEvents, { file: SURFACE_FILE });

compareSets(
  'Premium-only webhook events',
  surface.premiumWebhookEvents,
  setMembers(webhooksPy, '_PREMIUM_EVENTS'),
  { file: SURFACE_FILE }
);

// llms.txt lists the events as prose, so check membership by substring.
if (appEvents) {
  const missingFromLlms = appEvents.filter((e) => !llmsTxt.includes(e));
  if (missingFromLlms.length) {
    fail(`Webhook events: public/llms.txt does not mention ${missingFromLlms.join(', ')}.`);
  }
}

// 4. Rate limits
const limits = tierLimits(authPy);
if (limits === null) {
  fail('Rate limits: could not parse _TIER_LIMITS from web2/public_api/auth.py.');
} else {
  for (const row of surface.rateLimits) {
    const actual = limits[row.tierKey];
    if (actual === undefined) {
      fail(`Rate limits: ServerTier.${row.tierKey} no longer exists in auth.py (we document it as "${row.tier}").`);
    } else if (actual !== row.rpm) {
      fail(`Rate limits: ${row.tier} is ${actual} req/min in auth.py, we document ${row.rpm}. Update ${SURFACE_FILE}.`);
    }
  }
  // Testing is an internal tier and is intentionally undocumented.
  const documented = new Set(surface.rateLimits.map((r) => r.tierKey));
  const undocumented = Object.keys(limits).filter((t) => t !== 'Testing' && !documented.has(t));
  if (undocumented.length) {
    fail(`Rate limits: new tier(s) in auth.py we do not document — ${undocumented.join(', ')}.`);
  }
}

// 5. Route paths we document must still exist
const appPaths = routePaths();
if (appPaths.size === 0) {
  fail('Routes: parsed zero routes from web2/public_api/routes/. The parser or the route style changed.');
} else {
  const appShapes = new Set([...appPaths].map(shape));
  for (const p of surface.documentedPaths) {
    if (!appShapes.has(shape(p))) {
      fail(`Route: we document "${p}" but no such route exists in the app repo. It was renamed or removed.`);
    }
  }
  notes.push(`${appPaths.size} routes in the app repo, ${surface.documentedPaths.length} documented here.`);
}

// 6. Auth + signature scheme
if (!authPy.includes('X-API-Key') && !readApp('auth.py').includes(surface.authHeader)) {
  fail(`Auth: header "${surface.authHeader}" not found in auth.py.`);
}
for (const h of surface.webhookHeaders) {
  if (!dispatchPy.includes(h.name)) {
    fail(`Webhook header: "${h.name}" not found in surveyLib/domain/webhookDispatch.py.`);
  }
}
if (!dispatchPy.includes(`${surface.signaturePrefix}`)) {
  fail(`Webhook signature: prefix "${surface.signaturePrefix}" not found in webhookDispatch.py — the signing scheme changed.`);
}
if (!dispatchPy.includes('sha256')) {
  fail('Webhook signature: sha256 no longer referenced in webhookDispatch.py.');
}

// 7. Retry schedule (quoted verbatim in the page prose)
const retryMatch = dispatchPy.match(/_RETRY_DELAYS\s*=\s*\[([^\]]+)\]/);
if (!retryMatch) {
  fail('Webhook retries: could not parse _RETRY_DELAYS from webhookDispatch.py.');
} else {
  const actual = retryMatch[1].split(',').map((n) => Number(n.trim()));
  const ours = surface.webhookRetriesSeconds;
  if (actual.join(',') !== ours.join(',')) {
    fail(`Webhook retries: schedule is [${actual}] in the app repo, we document [${ours}]. The /api prose spells this out in words ("30s, 5m, 30m, 2h and 8h") — fix both.`);
  }
}

// 8. The page must actually render from the data file, or these checks are theatre.
if (!apiPage.includes("from '../data/api-surface.json'")) {
  fail('src/pages/api.astro no longer imports api-surface.json — the reference tables have been un-wired from the checked data.');
}

// ── Report ───────────────────────────────────────────────────────────────────

console.log(`check-api-drift: comparing against ${APP_REPO}`);
for (const n of notes) console.log(`  note: ${n}`);

if (problems.length === 0) {
  console.log('check-api-drift: OK — documented API surface matches the app repo.');
  process.exit(0);
}

console.error(`\ncheck-api-drift: ${problems.length} problem(s) found\n`);
for (const p of problems) console.error(`  ✗ ${p}`);
console.error(
  '\nThe API changed. Update src/data/api-surface.json, then re-read the recipes and\n' +
  'reference prose in src/pages/api.astro and public/llms.txt — this script only\n' +
  'verifies names and numbers, not whether the explanations are still true.\n'
);
process.exit(1);
