/**
 * <lastmod> for the sitemap.
 *
 * The sitemap had none: 122 bare <loc> entries, no change signal of any kind.
 * Search Console last read it on 2026-07-30 while the site had gained ~44 URLs
 * since, and lastmod is the field Google uses to decide which URLs are worth
 * recrawling. Everything published in August was invisible to that decision.
 *
 * Dates are real, never "now for everything". A sitemap that claims all 122
 * pages changed on every deploy is noise, and Google discounts lastmod it
 * decides is automated. Two honest sources, in order:
 *
 *   1. Content pages (blog, recipes, templates) use their own frontmatter
 *      `updatedDate ?? pubDate`. That is the editorial truth, and it is already
 *      what the BlogPosting schema publishes as dateModified — a page that told
 *      Google two different dates for the same change would be worse than
 *      telling it none.
 *   2. Everything else uses the last git commit that touched its source file.
 *
 * Anything unresolvable (a file not yet committed) simply gets no lastmod,
 * which is the correct answer rather than a guessed one: the field is optional
 * and a wrong date is worse than an absent one.
 */

import { execSync } from "node:child_process";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const SITE = "https://subo.gg";

/** Most recent commit date per tracked file, from a single git pass. */
function gitDates() {
  const dates = new Map();
  try {
    // %x00 delimits commits so a filename can never be mistaken for a date.
    const log = execSync("git log --format=%x00%cI --name-only -- src", {
      cwd: ROOT,
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    }).toString();

    for (const chunk of log.split("\0")) {
      const lines = chunk.split("\n").map((l) => l.trim()).filter(Boolean);
      if (!lines.length) continue;
      const [date, ...files] = lines;
      // git log is newest-first, so the first date seen for a file wins.
      for (const file of files) if (!dates.has(file)) dates.set(file, date);
    }
  } catch {
    // No git (shallow CI clone, tarball). Fall through: content pages still
    // get frontmatter dates, static pages get none.
  }
  return dates;
}

/**
 * `updatedDate ?? pubDate` out of a markdown file's frontmatter.
 *
 * Reads the whole frontmatter block, not a fixed head slice: template
 * frontmatter runs long (featureCallouts, steps, faq are all inline), and
 * `pubDate` sits past 3KB in some files. A 2000-char window silently missed all
 * 25 templates.
 */
function frontmatterDate(file) {
  if (!existsSync(file)) return null;
  const source = readFileSync(file, "utf8");
  if (!source.startsWith("---")) return null;
  const end = source.indexOf("\n---", 3);
  const head = end === -1 ? source : source.slice(0, end);
  const pick = (key) => head.match(new RegExp(`^${key}:\\s*["']?([^"'\\n]+)`, "m"))?.[1]?.trim();
  const raw = pick("updatedDate") || pick("pubDate");
  if (!raw) return null;
  const date = new Date(raw);
  return Number.isNaN(date.valueOf()) ? null : date.toISOString();
}

/** Every markdown file in a content collection, as slug -> path. */
function collection(dir) {
  const base = join(ROOT, "src", "content", dir);
  const found = new Map();
  if (!existsSync(base)) return found;
  const walk = (d) => {
    for (const entry of readdirSync(d, { withFileTypes: true })) {
      const full = join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.mdx?$/.test(entry.name)) {
        const slug = relative(base, full).split(sep).join("/").replace(/\.mdx?$/, "");
        found.set(slug, full);
      }
    }
  };
  walk(base);
  return found;
}

export function buildLastmodLookup() {
  const git = gitDates();
  const map = new Map();

  const add = (path, iso) => { if (iso) map.set(`${SITE}${path}`, iso); };

  // ── Content collections, from frontmatter ──────────────────────────────────
  // Blog ids carry their locale folder: "fr/foo" -> /fr/blog/foo/, "foo" -> /blog/foo/.
  for (const [slug, file] of collection("blog")) {
    const parts = slug.split("/");
    const url = parts.length > 1 ? `/${parts[0]}/blog/${parts.slice(1).join("/")}/` : `/blog/${slug}/`;
    add(url, frontmatterDate(file));
  }
  for (const [slug, file] of collection("recipes")) add(`/recipes/${slug}/`, frontmatterDate(file));
  for (const [slug, file] of collection("templates")) add(`/templates/${slug}/`, frontmatterDate(file));

  // ── Static routes, from git ────────────────────────────────────────────────
  // src/pages/fr/polls.astro -> /fr/polls/ ; src/pages/index.astro -> /
  for (const [file, date] of git) {
    const m = file.match(/^src\/pages\/(.+)\.astro$/);
    if (!m || m[1].includes("[")) continue; // dynamic routes are handled above
    const route = m[1].replace(/\/?index$/, "");
    add(route ? `/${route}/` : "/", date);
  }

  return map;
}
