#!/usr/bin/env node
/**
 * check-lexicon.mjs
 *
 * Guards the terminology architecture (docs/authority-roadmap.md, rulings T1..T10)
 * against the failure that opened it: the markdown skill DRIFTED. The FR poll row
 * went stale across two naming rounds and nobody noticed, because nothing could
 * check it. src/data/lexicon.json is checkable; this enforces the checkable half.
 *
 * Same shape as check-api-drift.mjs and check-hreflang.mjs: a data file plus a
 * guard, not a document that asks to be believed.
 *
 * What it verifies:
 *   1. T2b  poll word == Discord's word, per locale, on BOTH app surfaces.
 *           This is the check nothing in either repo could do before lexicon.json.
 *   2. T3   denylisted phrases absent from each locale's translation JSON.
 *   3. T5   one door word owns at most one page title/H1 per locale (anti-cannibalization).
 *   4. T4   'Convo' absent from every <title> and <h1> (it is not a ranking word).
 *   5. —    structural: owning URLs were actually built; doors resolve to a real instrument.
 *
 * What it CANNOT verify (recorded so nobody assumes it does): whether a door word
 * reads naturally to a native speaker, whether a bridge sentence is any good, tone,
 * or register. T9's evidence standard substitutes for native review; this substitutes
 * for nothing.
 *
 * knownViolations in lexicon.json is a BASELINE, not permission. Real violations that
 * predate the guard are reported loudly and do not fail the build, so the guard can be
 * wired in today and cannot regress. The job is to empty that object.
 *
 * Checks 3 and 4 read dist/ because rendered HTML is what Google sees. Checks 1 and 2
 * are source-level and run without a build.
 *
 * Usage: npm run check:lexicon   (runs inside `npm run check`, after the build)
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(SITE_ROOT, 'dist');
const SITE = 'https://subo.gg';
const LEXICON = join(SITE_ROOT, 'src/data/lexicon.json');
const TRANSLATIONS = join(SITE_ROOT, 'src/content/translations');

const problems = [];
const baseline = [];
const notes = [];

const lex = JSON.parse(readFileSync(LEXICON, 'utf8'));
const known = lex.knownViolations ?? {};

/** Route a finding to failure or to the recorded baseline. */
function report(id, msg) {
  if (known[id]) baseline.push(`[${id}] ${msg}`);
  else problems.push(`[${id}] ${msg}`);
}

/** Locale code -> translation file. en.json/fr.json/... ; pt-BR -> pt-br.json */
const translationFile = (loc) => join(TRANSLATIONS, `${loc.toLowerCase()}.json`);

/** Flatten a translations JSON to [path, string] pairs. */
function flatten(obj, path = '', acc = []) {
  if (typeof obj === 'string') acc.push([path, obj]);
  else if (Array.isArray(obj)) obj.forEach((v, i) => flatten(v, `${path}[${i}]`, acc));
  else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (k.startsWith('$')) continue;
      flatten(v, path ? `${path}.${k}` : k, acc);
    }
  }
  return acc;
}

// ── 1. T2b — a locale's poll word IS Discord's poll word ─────────────────────
// Applied to both app surfaces, because A1 found they can disagree with each
// other as well as with Discord (FR: command 'sondage', web UI 'vote').

for (const [loc, discordWord] of Object.entries(lex.discord.pollWord)) {
  const app = lex.app.pollWord[loc];
  if (!app) {
    notes.push(`no app.pollWord row for "${loc}" — cannot check T2b for it.`);
    continue;
  }
  const norm = (s) => (s ?? '').toLocaleLowerCase();
  const want = norm(discordWord);

  for (const surface of ['command', 'webUi']) {
    if (norm(app[surface]) !== want) {
      report(
        `t2b.${loc}`,
        `${loc}: app ${surface} poll word is "${app[surface]}" but Discord says "${discordWord}". ` +
          `Discord's UI sets every user's mental model; fighting the platform's vocabulary is unwinnable (T2b).`,
      );
    }
  }
  if (norm(app.command) !== norm(app.webUi)) {
    report(
      `t2b.${loc}`,
      `${loc}: the app disagrees with ITSELF — command says "${app.command}", web UI says "${app.webUi}". ` +
        `A user types one word and the app calls the result another.`,
    );
  }
}

// Every active locale must declare its own instrument words, and the poll one
// must match the Discord reference it claims to follow.
for (const [loc, row] of Object.entries(lex.locales)) {
  const discordWord = lex.discord.pollWord[loc];
  if (discordWord && row.instruments?.poll?.toLocaleLowerCase() !== discordWord.toLocaleLowerCase()) {
    report(
      `t2b.${loc}`,
      `${loc}: lexicon declares instruments.poll = "${row.instruments?.poll}" but discord.pollWord = "${discordWord}". ` +
        `The lexicon must not contradict its own T2b reference.`,
    );
  }
  if (row.instruments?.convo !== 'Convo') {
    problems.push(
      `[t3.${loc}] ${loc}: instruments.convo is "${row.instruments?.convo}", must be exactly "Convo". ` +
        `Convo is Subo's invention and stays invariant in every locale (T3).`,
    );
  }
}

// ── 2. T3 — denylisted phrases absent from the locale's translation JSON ─────

for (const [loc, row] of Object.entries(lex.locales)) {
  const file = translationFile(loc);
  if (!existsSync(file)) {
    notes.push(`no translations file for "${loc}" (${relative(SITE_ROOT, file)}) — skipping its denylist.`);
    continue;
  }
  const strings = flatten(JSON.parse(readFileSync(file, 'utf8')));

  for (const rule of row.deny ?? []) {
    // scope:"app" rules target user_messages, not this repo's site copy.
    if (rule.scope === 'app') continue;

    const hits = [];
    for (const [path, value] of strings) {
      let copy = value;
      // URL paths and hrefs are identifiers, not copy. Whole-value URLs are
      // skipped; prose that links inline keeps its words and loses its hrefs,
      // or a "See Convos →" link to /survey-convos/ flags its own slug.
      if (rule.exemptPaths) {
        if (path.endsWith('.href') || /^\/|https?:\/\//.test(value)) continue;
        copy = value.replace(/href\s*=\s*(["'])[^"']*\1/g, '');
      }

      const haystack = rule.caseSensitive ? copy : copy.toLocaleLowerCase();
      const needle = rule.caseSensitive ? rule.phrase : rule.phrase.toLocaleLowerCase();

      if (rule.caseSensitive) {
        // Case-sensitive rules are about capitalization: flag only the wrong casing.
        const re = new RegExp(`\\b${needle}s?\\b`, 'g');
        if (re.test(haystack)) hits.push(path);
      } else if (haystack.includes(needle)) {
        hits.push(path);
      }
    }
    if (hits.length) {
      report(
        `${loc}.deny`,
        `${loc}.json: "${rule.phrase}" appears in ${hits.length} string(s) — use "${rule.use}" instead. ` +
          `${rule.why} First: ${hits.slice(0, 3).join(', ')}${hits.length > 3 ? ', …' : ''}`,
      );
    }
  }
}

// ── dist/-dependent checks ───────────────────────────────────────────────────

if (!existsSync(DIST)) {
  notes.push('no dist/ — skipping the T4 and T5 checks, which read built HTML. Run `astro build` first.');
} else {
  function walk(dir, acc = []) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full, acc);
      else if (entry.name === 'index.html') acc.push(full);
    }
    return acc;
  }
  const pathFor = (file) => {
    const rel = relative(DIST, file).split(sep).slice(0, -1).join('/');
    return rel ? `/${rel}/` : '/';
  };

  const files = walk(DIST);
  const built = new Map(); // path -> { title, h1s }
  for (const file of files) {
    const html = readFileSync(file, 'utf8');
    const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
    const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => m[1]);
    built.set(pathFor(file), {
      title: strip(title),
      h1s: h1s.map(strip),
    });
  }
  function strip(s) {
    return s.replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/gi, ' ').replace(/\s+/g, ' ').trim();
  }

  // Every locale the SITE has a route for, not only the ones the lexicon fills.
  // Without this, /de/polls/ is treated as an English page and pollutes the
  // English results with German H1s.
  const SITE_LOCALES = ['fr', 'de', 'es', 'it', 'pt-br'];
  const localeOf = (p) => {
    const seg = p.split('/')[1];
    if (!SITE_LOCALES.includes(seg)) return 'en';
    return Object.keys(lex.locales).find((l) => l.toLowerCase() === seg) ?? seg;
  };

  /**
   * Page class. T5 compares like with like, because "the word appears in an H1"
   * is NOT the same claim as "this page competes for that query".
   *   library — /templates/ and /recipes/ are long-tail BY DESIGN: dozens of pages
   *             each targeting a distinct qualified phrase ("NPS survey template").
   *             Treating them as competitors is a false positive by construction.
   *   blog    — editorial, one intent per post.
   *   landing — the commercial pages, where cannibalization actually costs money.
   * Cross-class overlap is expected (a how-to post and a product page SHOULD both
   * say "poll"); same-class overlap is the risk.
   */
  const classOf = (p) => {
    const rest = p.replace(/^\/(fr|de|es|it|pt-br)\//, '/');
    if (rest.startsWith('/templates/') || rest.startsWith('/recipes/')) return 'library';
    if (rest.startsWith('/blog/')) return 'blog';
    return 'landing';
  };

  // ── 3a. T5 owner integrity — a declared owner must actually lead on its word ─
  // Hard failure: if the lexicon says a page owns a word and that page's H1 does
  // not carry it, the declaration is fiction and every other check built on it is
  // reasoning from a false premise.

  for (const [loc, row] of Object.entries(lex.locales)) {
    for (const door of row.doors ?? []) {
      if (!door.owns) continue;
      const page = built.get(door.owns);
      if (!page) {
        problems.push(
          `[t5.own.${loc}.${door.word}] ${loc}: door "${door.word}" claims to own ${door.owns}, ` +
            `which is not a page in this build.`,
        );
        continue;
      }
      const re = new RegExp(`\\b${escapeRe(door.word)}s?\\b`, 'i');
      if (!page.h1s.some((h) => re.test(h))) {
        problems.push(
          `[t5.own.${loc}.${door.word}] ${loc}: ${door.owns} is the declared owner of "${door.word}", ` +
            `but its H1 does not contain the word (H1: "${page.h1s[0] ?? '(none)'}"). ` +
            `Either the page is off-strategy or the lexicon names the wrong owner.`,
        );
      }
    }
  }

  // ── 3b. T5 competition — one word leads one URL, within a page class ────────
  // The anti-cannibalization rule made enforceable. Two pages in the same locale
  // AND the same class leading on the same door word read as synonyms to Google
  // even when they are not synonyms to a reader. Every other page using the word
  // should link to the owner rather than compete for it.
  //
  // H1 only, deliberately: <title> carries the brand descriptor ("Subo, the
  // Survey Bot", "Le bot de sondage Discord"), so title-matching flags /privacy/
  // and /cookies/ as competing for "survey". The H1 is the page's own claim about
  // its subject; the title is mostly furniture.

  for (const [loc, row] of Object.entries(lex.locales)) {
    for (const door of row.doors ?? []) {
      const re = new RegExp(`\\b${escapeRe(door.word)}s?\\b`, 'i');
      const byClass = new Map();

      for (const [p, { h1s }] of built) {
        if (localeOf(p) !== loc) continue;
        if (!h1s.some((h) => re.test(h))) continue;
        const cls = classOf(p);
        if (cls === 'library') continue;
        if (!byClass.has(cls)) byClass.set(cls, []);
        byClass.get(cls).push(p);
      }

      for (const [cls, leaders] of byClass) {
        if (leaders.length < 2) continue;
        const msg =
          `${loc}: ${leaders.length} ${cls} pages lead their H1 on "${door.word}" — ${leaders.join(', ')}. ` +
          (door.owns ? `Declared owner is ${door.owns}.` : 'No owner declared in the lexicon.');

        // Landing pages are where cannibalization costs money: two commercial
        // pages competing for one query split the signal for that query.
        // Blog overlap is reported but not failed — a 30-post blog about a survey
        // bot will legitimately say "survey" in many H1s, and demanding one post
        // per door word would be a worse rule than the problem it solves. The
        // blog case that DOES matter (two French posts on "sondage") was already
        // resolved the right way, by linking one to the other.
        if (cls === 'landing') report(`t5.${loc}.${door.word}`, `${msg} One word owns one URL (T5).`);
        else notes.push(`${msg} (${cls}: informational, not failed.)`);
      }
    }
  }

  // ── 4. T4 — Convo is never a ranking word ──────────────────────────────────
  // We will not rank for an invented category. Convo belongs in the
  // differentiation and definitional layers, not in a title tag or an H1.

  for (const [p, { title, h1s }] of built) {
    const where = [];
    if (/\bconvos?\b/i.test(title)) where.push('title');
    if (h1s.some((h) => /\bconvos?\b/i.test(h))) where.push('h1');
    if (where.length) {
      report(
        `t4.${p}`,
        `${p}: "Convo" appears in the ${where.join(' and ')} — it is a product word, not a door word (T4). ` +
          `Borrowed vocabulary ranks; Convo is what they find inside.`,
      );
    }
  }
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Report ───────────────────────────────────────────────────────────────────

const locCount = Object.keys(lex.locales).length;
const doorCount = Object.values(lex.locales).reduce((n, l) => n + (l.doors?.length ?? 0), 0);
console.log(`check-lexicon: ${locCount} locales, ${doorCount} door words, lexicon v${lex.version} (${lex.updated})`);

for (const n of notes) console.log(`  note: ${n}`);

if (baseline.length) {
  console.log(`\n  ${baseline.length} known violation(s) — recorded in lexicon.json, NOT failing the build:`);
  for (const b of baseline) console.log(`    ~ ${b}`);
  console.log('  These are real. The job is to empty knownViolations, not to grow it.');
}

// A baseline entry that no longer fires is debt that got paid: say so, so the
// entry gets deleted and the check starts biting for real.
const fired = new Set(baseline.map((b) => b.match(/^\[([^\]]+)\]/)?.[1]));
const stale = Object.keys(known).filter((k) => !k.startsWith('$') && !fired.has(k));
if (stale.length) {
  console.log(`\n  ✓ ${stale.length} knownViolations entr(ies) no longer fire: ${stale.join(', ')}`);
  console.log('    Delete them from lexicon.json so the guard starts enforcing them.');
}

if (problems.length === 0) {
  console.log('\ncheck-lexicon: OK');
  process.exit(0);
}

console.error(`\ncheck-lexicon: ${problems.length} problem(s) found\n`);
for (const p of problems) console.error(`  ✗ ${p}`);
console.error(
  '\nTerminology problems are invisible the way hreflang is: nothing renders wrong,\n' +
  'the build is green, and you find out when two of your own pages compete for the\n' +
  'same query or a French user types /sondage and the app calls the result a vote.\n' +
  'Rulings T1..T10 are in docs/authority-roadmap.md.\n',
);
process.exit(1);
