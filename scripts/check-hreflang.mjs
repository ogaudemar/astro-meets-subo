#!/usr/bin/env node
/**
 * check-hreflang.mjs
 *
 * Guards the hreflang annotations against the class of bug that reached
 * production and cost us /pricing: on 2026-08-23 Search Console reported
 * "Duplicate, Google chose different canonical than user" for
 * https://subo.gg/pricing/. Cause: the canonical is generated from the URL and
 * carries a trailing slash, while every hreflang href is hand-written in each
 * page's `alternates` array and did not. The page declared one URL canonical
 * while its own hreflang cluster named another, so Google picked for us.
 *
 * It was not one page. 42 of 52 hreflang-bearing pages had it, 214 hrefs.
 *
 * The failure mode this defends against is that hreflang is INVISIBLE. Nothing
 * renders, no test fails, the build is green, and you find out weeks later from
 * Search Console. The ten pages that were correct were the blog posts, which
 * build their hrefs from postUrl() instead of hand-writing them; every
 * hand-written array is a chance to reintroduce this.
 *
 * Runs against dist/, not src/, on purpose: the built HTML is what Google
 * actually reads, and comparing rendered canonical to rendered hreflang is the
 * only check that cannot be fooled by how the array was authored.
 *
 * What it verifies:
 *   1. Self-reference  — a page's canonical appears in its own hreflang cluster.
 *   2. Reciprocity     — if A lists B as an alternate, B lists A back.
 *   3. Live targets    — every hreflang href is a page that was actually built.
 *   4. No duplicates   — one href per hreflang code per page.
 *   5. x-default       — noted, not failed, when a multi-language cluster omits it.
 *
 * What it CANNOT verify: that the language code matches the language of the
 * page. A French page annotated hreflang="de" passes every check here.
 *
 * Usage: npm run check:hreflang  (runs inside `npm run check`, after the build)
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(SITE_ROOT, 'dist');
const SITE = 'https://subo.gg';

const problems = [];
const notes = [];
const fail = (msg) => problems.push(msg);

// ── dist/ must exist. Skip rather than fail: this is wired after `astro build`
//    inside `npm run check`, but someone running it standalone should get a
//    hint, not a red X for a check they simply haven't built for.
if (!existsSync(DIST)) {
  console.log('check-hreflang: no dist/ — run `astro build` first. Skipping.');
  process.exit(0);
}

// ── Collect every built page ─────────────────────────────────────────────────

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else if (entry.name === 'index.html') acc.push(full);
  }
  return acc;
}

/** dist/pricing/index.html -> https://subo.gg/pricing/ ; dist/index.html -> https://subo.gg/ */
function urlFor(file) {
  const rel = relative(DIST, file).split(sep).slice(0, -1).join('/');
  return rel ? `${SITE}/${rel}/` : `${SITE}/`;
}

const files = walk(DIST);
const builtUrls = new Set(files.map(urlFor));

const CANONICAL_RE = /<link\s+rel="canonical"\s+href="([^"]+)"/i;
const ALTERNATE_RE = /<link\s+rel="alternate"\s+hreflang="([^"]+)"\s+href="([^"]+)"/gi;

/** url -> { canonical, alts: Map<lang, href> } for every page carrying hreflang */
const pages = new Map();

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const canonical = html.match(CANONICAL_RE)?.[1];
  const alts = new Map();
  const dupes = [];

  for (const [, lang, href] of html.matchAll(ALTERNATE_RE)) {
    if (alts.has(lang) && alts.get(lang) !== href) dupes.push(lang);
    alts.set(lang, href);
  }
  if (alts.size === 0) continue;

  const url = urlFor(file);
  if (!canonical) {
    fail(`${url} has hreflang annotations but no canonical. hreflang without a canonical is ambiguous by construction.`);
    continue;
  }
  for (const lang of dupes) {
    fail(`${url} declares hreflang="${lang}" more than once with different hrefs.`);
  }
  pages.set(url, { canonical, alts });
}

// ── 1. Self-reference ────────────────────────────────────────────────────────
// Google requires hreflang annotations to point at canonical URLs, and the set
// must include the page itself. A cluster that names a URL the page does not
// consider canonical hands Google two candidates for one page.

for (const [url, { canonical, alts }] of pages) {
  const hrefs = [...alts.values()];
  if (hrefs.includes(canonical)) continue;

  const nearMiss = hrefs.find(
    (h) => h.replace(/\/$/, '') === canonical.replace(/\/$/, ''),
  );
  fail(
    nearMiss
      ? `${url}: canonical is "${canonical}" but its own hreflang cluster says "${nearMiss}". Trailing-slash mismatch — this is the /pricing bug. Canonicals are generated WITH a slash; hand-written alternates must match.`
      : `${url}: canonical "${canonical}" does not appear anywhere in its own hreflang cluster.`,
  );
}

// ── 2. Reciprocity ───────────────────────────────────────────────────────────
// hreflang is only honored when it is bidirectional. x-default is excluded: it
// is a fallback pointer, not a claim about a language, so it is not returned.

for (const [url, { alts }] of pages) {
  for (const [lang, href] of alts) {
    if (lang === 'x-default') continue;
    if (!pages.has(href)) continue; // covered by check 3

    const theirAlts = pages.get(href).alts;
    const pointsBack = [...theirAlts.values()].includes(url);
    if (!pointsBack && href !== url) {
      fail(
        `${url} lists ${href} as its hreflang="${lang}" alternate, but ${href} does not list ${url} back. ` +
          `hreflang is ignored unless it is reciprocal, so this annotation is dead weight on both pages.`,
      );
    }
  }
}

// ── 3. Live targets ──────────────────────────────────────────────────────────
// An alternate pointing at a URL that was never built is a 404 in the cluster.

for (const [url, { alts }] of pages) {
  for (const [lang, href] of alts) {
    if (!href.startsWith(SITE)) {
      fail(`${url}: hreflang="${lang}" points off-site to ${href}.`);
      continue;
    }
    if (!builtUrls.has(href)) {
      fail(
        `${url}: hreflang="${lang}" points at ${href}, which is not a page in this build. ` +
          `Either the route was removed or the href has a typo.`,
      );
    }
  }
}

// ── 4. x-default, noted only ─────────────────────────────────────────────────
// Recommended by Google, not required, so this is a note. Worth surfacing
// because a cluster that grows a language without gaining an x-default is
// usually an oversight rather than a decision.

for (const [url, { alts }] of pages) {
  const langs = [...alts.keys()].filter((l) => l !== 'x-default');
  if (langs.length > 1 && !alts.has('x-default')) {
    notes.push(`${url} has ${langs.length} language alternates but no x-default.`);
  }
}

// ── Report ───────────────────────────────────────────────────────────────────

console.log(`check-hreflang: ${pages.size} pages with hreflang, ${builtUrls.size} pages built`);
for (const n of notes) console.log(`  note: ${n}`);

if (problems.length === 0) {
  console.log('check-hreflang: OK — every cluster is self-referencing, reciprocal, and live.');
  process.exit(0);
}

console.error(`\ncheck-hreflang: ${problems.length} problem(s) found\n`);
for (const p of problems) console.error(`  ✗ ${p}`);
console.error(
  '\nhreflang problems are invisible on the page and surface weeks later in Search\n' +
  'Console as duplicate-canonical or ignored-annotation errors. Fix them here.\n' +
  'Most alternates are hand-written per page in `alternates={[...]}`; the blog\n' +
  'builds its own from postUrl() in src/utils/blog.ts, which is why the blog has\n' +
  'never had this bug.\n',
);
process.exit(1);
