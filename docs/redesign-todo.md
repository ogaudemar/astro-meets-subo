# Marketing site redesign — remaining work

Context: an aesthetics polish pass moved the site to a single flat dark base + accent
glows, a fluid type scale, dark-glass cards, and a "mono hero / sans sections" type
system. The homepage, all **English** pages, and the **pricing page restructure**
(plan cards + themed sticky comparison table) are done. See the
`project-marketing-site-design-system` memory for the conventions.

## 1. Translation pass (the big one)

Apply the same flat-base treatment + new pricing keys to non-English pages.

- [x] **`fr/*` (9 files)** — duplicate the English inline styles, so apply the same
  changes already made to the English pages: hero pink-glow + `--bg-base`, section
  backgrounds → `transparent`, dark-glass cards (`rgba(255,255,255,0.05)` + border),
  hero `<h1>` → IBM Plex Mono, type scale tokens. Files: `about, features, polls,
  survey-convos, custom-survey-bot, pricing, use-cases/{research,engagement,get-things-done}`.
- [x] **`es|de|it|pt-br/pricing.astro` (4 files)** — same flat-base treatment (their
  index pages already inherit the fixed shared components).
- [x] **All non-EN `priceTable`** — add + translate the new keys that currently exist
  in `en.json` only:
  - `comparisonTitle`
  - `categoryTitles` → keys: `limits, builder, responses, branding, engagement, support`
  - `includesLabel`
  - `inheritsLabel` — **keep the `{tier}` placeholder**
  - `cardFeatures` — 4 arrays (one per tier)

## 2. "project" terminology (per-language)

"project" is the umbrella unit covering both polls AND surveys. English pricing copy
was updated; the same must be applied **in each language** (their unit words differ):

- [x] Per-unit limits: e.g. FR "X / sondage", ES "X / encuesta" → local "project" word.
- [x] "poll or survey-level" equivalent → "project-level" equivalent.
- [x] "surveys & polls stored" equivalent → "projects stored".
- [x] Role-reward note ("…answering any poll/survey" equivalent) → "…any project".

## 3. Copy decisions (English, pending your call)

- [x] **`en.json` features/polls XP benefit** — "Every completed poll or survey earns XP"
  → "Every completed project earns XP". Mirrored in all languages.
- [x] **`/survey` command descriptions** — `/survey` command name stays; surrounding "a survey" noun stays. Confirmed.
- [x] **"Survey Convos" / `/survey-convos`** — product feature name + URL, kept as-is.
- [x] **Broad brand usage** — intentional SEO/brand positioning; out of scope for unit change.

## 4. Minor / maintenance

- [x] Sticky comparison header: `Header.astro` now sets `--nav-height` via JS (measured
  on load + resize); `PriceTable.astro` uses `top: var(--nav-height, 84px)`.
- [x] Pricing hero subtitles: kept commented out ("let the tables speak for themselves").
- [x] Mono h1 on non-EN pages: applied consistently; verify visually in browser.
