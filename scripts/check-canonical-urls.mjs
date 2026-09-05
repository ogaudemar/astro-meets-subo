#!/usr/bin/env node
/**
 * check-canonical-urls.mjs
 *
 * Guards the trailing slash on ABSOLUTE subo.gg URLs that only machines read:
 * JSON-LD structured data and the /templates.json feed.
 *
 * docs/i18n.md has said "every internal link ends with /" since 2026-08-25, and
 * the sweep that day fixed 7,893 hrefs across 119 URLs. It fixed hrefs ONLY.
 * Absolute URLs written into JSON-LD were never in scope, so on 2026-09-05
 * twelve of them were still naming the slashless form:
 *
 *   RecipePage.astro   canonical -> mainEntityOfPage, url, breadcrumb item
 *   TemplatePage.astro canonical -> breadcrumb item
 *   recipes/index, templates/index, tutorials/index, api.astro  CollectionPage
 *     url + ItemList entries + breadcrumb items
 *   templates.json.ts  the public feed's `url` field
 *   config/redirects.js  the tracked /tutorial redirect target
 *
 * Every one of those pointed at a URL that answers 307 and redirects to the
 * slashed form, which is also the form in the sitemap and in the page's own
 * <link rel="canonical">. So each page's structured data named a different URL
 * than the same page's canonical tag — the exact shape of the /pricing bug that
 * check-hreflang.mjs exists to prevent, in a surface that check never looks at.
 *
 * Why it matters and why it stayed invisible: JSON-LD `url` and
 * `mainEntityOfPage` are what Google resolves an entity to, and breadcrumb
 * `item` values are what render as the breadcrumb trail in results. Nothing
 * about a slashless URL is *broken* — it 307s, a crawler follows it — so
 * nothing renders wrong, no build fails, and it costs you a redirect hop and a
 * split signal that only shows up in Search Console weeks later.
 *
 * Runs against dist/, like check-hreflang.mjs and for the same reason: the
 * rendered output is what crawlers read, and that is the only thing a check
 * cannot be fooled about by how the URL was authored.
 *
 * What it verifies, for every https://subo.gg/... URL in a JSON-LD block or in
 * templates.json:
 *   1. It resolves to a page this build actually produced.
 *   2. It carries the trailing slash that page's canonical carries.
 *
 * What it CANNOT verify: that the URL is the *right* page. A recipe whose
 * JSON-LD claims another recipe's URL passes both checks here.
 *
 * Usage: npm run check:canonical  (runs inside `npm run check`, after the build)
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(SITE_ROOT, 'dist');
const SITE = 'https://subo.gg';

const problems = [];
const fail = (msg) => problems.push(msg);

if (!existsSync(DIST)) {
  console.log('check-canonical-urls: no dist/ — run `astro build` first. Skipping.');
  process.exit(0);
}

// ── Every page this build produced, as the canonical path form ("/recipes/") ──

function walk(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const allFiles = walk(DIST);

const builtPaths = new Set(
  allFiles
    .filter((f) => f.endsWith(`${sep}index.html`))
    .map((f) => {
      const rel = relative(DIST, dirname(f)).split(sep).join('/');
      return rel === '' ? '/' : `/${rel}/`;
    })
);

// Non-page assets legitimately never take a trailing slash (/rss.xml,
// /llms.txt, images). Collect them so a URL naming one is accepted as-is.
const builtAssets = new Set(
  allFiles
    .filter((f) => !f.endsWith(`${sep}index.html`))
    .map((f) => `/${relative(DIST, f).split(sep).join('/')}`)
);

// ── Pull the URLs out of the surfaces that machines read ─────────────────────

const JSONLD_RE = /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
const URL_RE = new RegExp(`${SITE}(/[^"'\\s\\\\]*)?`, 'g');

/** Every subo.gg URL inside `text`, as path strings. */
function urlsIn(text) {
  return [...text.matchAll(URL_RE)].map((m) => m[1] ?? '');
}

const found = []; // { path, source }

for (const file of allFiles.filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const page = `/${relative(DIST, file).split(sep).join('/')}`;
  for (const [, block] of html.matchAll(JSONLD_RE)) {
    for (const p of urlsIn(block)) found.push({ path: p, source: `${page} (JSON-LD)` });
  }
}

const feed = join(DIST, 'templates.json');
if (existsSync(feed)) {
  for (const p of urlsIn(readFileSync(feed, 'utf8'))) {
    found.push({ path: p, source: '/templates.json' });
  }
}

// ── Verify ───────────────────────────────────────────────────────────────────

// "https://subo.gg" bare and "https://subo.gg/" both mean the homepage.
// "#organization" / "#website" are @id node identifiers, not fetchable URLs:
// they name a node in the graph and are never resolved, so a trailing slash on
// them would be meaningless. Anchors keep the slash before the fragment.
const seen = new Set();

for (const { path, source } of found) {
  if (path === '' || path === '/') continue;
  if (path.startsWith('/#')) continue;

  const [bare] = path.split('#');
  const key = `${bare} ${source}`;
  if (seen.has(key)) continue;
  seen.add(key);

  if (builtAssets.has(bare)) continue;
  if (builtPaths.has(bare)) continue;

  if (builtPaths.has(`${bare}/`)) {
    fail(
      `${source}: ${SITE}${path} is missing its trailing slash — ` +
        `that URL 307s to ${SITE}${bare}/, which is the page's own canonical.`
    );
  } else {
    fail(`${source}: ${SITE}${path} is not a page or asset in this build.`);
  }
}

// ── Report ───────────────────────────────────────────────────────────────────

const checked = seen.size;

if (problems.length) {
  console.error(`\ncheck-canonical-urls: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ✗ ${p}`);
  console.error(
    `\nEvery absolute subo.gg URL in JSON-LD or templates.json must name the ` +
      `same URL the page declares canonical, trailing slash included. See ` +
      `docs/i18n.md § "Internal links: always end with a trailing slash".\n`
  );
  process.exit(1);
}

console.log(`check-canonical-urls: OK — ${checked} absolute subo.gg URLs, all canonical.`);
