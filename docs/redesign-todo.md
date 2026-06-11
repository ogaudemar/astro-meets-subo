# Marketing site redesign — remaining work

Context: an aesthetics polish pass moved the site to a single flat dark base + accent
glows, a fluid type scale, dark-glass cards, and a "mono hero / sans sections" type
system. The homepage, all **English** pages, and the **pricing page restructure**
(plan cards + themed sticky comparison table) are done. See the
`project-marketing-site-design-system` memory for the conventions.

## 1. Translation pass (the big one)

Apply the same flat-base treatment + new pricing keys to non-English pages.

- [ ] **`fr/*` (9 files)** — duplicate the English inline styles, so apply the same
  changes already made to the English pages: hero pink-glow + `--bg-base`, section
  backgrounds → `transparent`, dark-glass cards (`rgba(255,255,255,0.05)` + border),
  hero `<h1>` → IBM Plex Mono, type scale tokens. Files: `about, features, polls,
  survey-convos, custom-survey-bot, pricing, use-cases/{research,engagement,get-things-done}`.
- [ ] **`es|de|it|pt-br/pricing.astro` (4 files)** — same flat-base treatment (their
  index pages already inherit the fixed shared components).
- [ ] **All non-EN `priceTable`** — add + translate the new keys that currently exist
  in `en.json` only:
  - `comparisonTitle`
  - `categoryTitles` → keys: `limits, builder, responses, branding, engagement, support`
  - `includesLabel`
  - `inheritsLabel` — **keep the `{tier}` placeholder**
  - `cardFeatures` — 4 arrays (one per tier)

## 2. "project" terminology (per-language)

"project" is the umbrella unit covering both polls AND surveys. English pricing copy
was updated; the same must be applied **in each language** (their unit words differ):

- [ ] Per-unit limits: e.g. FR "X / sondage", ES "X / encuesta" → local "project" word.
- [ ] "poll or survey-level" equivalent → "project-level" equivalent.
- [ ] "surveys & polls stored" equivalent → "projects stored".
- [ ] Role-reward note ("…answering any poll/survey" equivalent) → "…any project".

## 3. Copy decisions (English, pending your call)

- [ ] **Recommended:** `en.json` features/polls XP benefit — "Every completed poll or
  survey earns XP" → **"Every completed project earns XP"** (same interchangeable-unit
  usage). Then mirror in all languages.
- [ ] **`/survey` command descriptions** (EN + all langs, "Create a survey using the
  /survey command…") — the `/survey` command name must stay; decide whether to reword
  the surrounding noun ("a survey" → "a project"). Default: keep.
- [ ] **"Survey Convos" / `/survey-convos`** — product/feature name + URL. Default: keep.
- [ ] **Broad brand usage** (~120 "survey/poll" mentions: "the survey bot" positioning,
  titles, hero copy, blog) — intentional SEO/brand, not part of the unit change. Leave
  unless a wider rebrand is wanted.

## 4. Minor / maintenance

- [ ] Sticky comparison header uses `top: 84px`, tied to the current nav height (~87px,
  driven by the CTA buttons). If the nav height changes, update this. Optional: wire the
  nav height into a CSS variable so the table reads it automatically.
- [ ] Pricing hero subtitles are currently commented out in `pricing.astro` (uncluttered
  look). Confirm keep, or restore.
- [ ] Other-page heroes (`features`, `polls`, etc.) were given mono `<h1>` to match the
  homepage hero; confirm this reads well once viewed across languages.
