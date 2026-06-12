# Plan: Page i18n Refactor + French Localization

Status: **not started** (planning doc). Execute incrementally over multiple sessions. Tick boxes as you go.

## Goal

1. Make every "real" marketing page **translation-driven** (copy lives in `src/content/translations/*.json`, the `.astro` is a pure template). Today some pages hardcode English, which blocks localization.
2. Ship a **full French** version of those pages (real `/fr/...` routes), proofed by a native speaker.

French scope (per product owner): `features`, `polls`, `survey-convos`, `custom-survey-bot`, `about`, `use-cases/research`, `use-cases/engagement`, `use-cases/get-things-done`, plus the French **homepage** sync. **Excluded:** blog, legal pages (terms/privacy/cookies).

## Why refactor before translating

If we localized the hardcoded pages by copy-pasting `/fr/*.astro` files with inline French, every future copy edit or new language means editing N parallel HTML files. Refactoring first means: copy lives once per language in JSON, and each `/{lang}/` route is a thin file that imports its JSON and renders shared markup. This is the pattern `index.astro` and `pricing.astro` already follow.

---

## Current state audit

| Page | Route | Copy source | `fr.json` translated? | `/fr/` route exists? | Work |
|------|-------|-------------|----------------------|---------------------|------|
| Home | `/` | components ← JSON | **stale** (homepage not yet synced) | ✓ `/fr/index` | Sync 4 blocks |
| Pricing | `/pricing` | `pricingPage` + `priceTable` | ✓ | ✓ `/fr/pricing` | none |
| Survey Convos | `/survey-convos` | `surveyConvos` | ✓ French | ✗ | **route only** |
| About | `/about` | `about` | ✓ French | ✗ | **route only** |
| Features | `/features` | **hardcoded** | ✗ | ✗ | refactor + translate + route |
| Polls | `/polls` | **hardcoded** | ✗ | ✗ | refactor + translate + route |
| Custom Bot | `/custom-survey-bot` | **hardcoded** | ✗ | ✗ | refactor + translate + route |
| Use case: Research | `/use-cases/research` | **hardcoded** | ✗ | ✗ | refactor + translate + route |
| Use case: Engage | `/use-cases/engagement` | **hardcoded** | ✗ | ✗ | refactor + translate + route |
| Use case: Get things done | `/use-cases/get-things-done` | **hardcoded** | ✗ | ✗ | refactor + translate + route |

---

## Conventions & decisions

- **Key naming (new top-level keys in each JSON):** `featuresPage`, `pollsPage`, `customSurveyBot`, `useCasesResearch`, `useCasesEngagement`, `useCasesGetThingsDone`. (Matches existing `surveyConvos`, `about`, `pricingPage`.)
- **Structured data, not flat strings.** Each page key holds its hero, section list, cards, screenshots (alt/caption), and example pills as data the template maps over.
- **HTML in copy:** some descriptions contain `<strong>` / `<code>`. Render those with `set:html` (as the current pages already do). Document which fields are HTML.
- **Hrefs live in the JSON**, so each language can localize them. `en.json` points to `/features`; `fr.json` points to `/fr/features`. Where a target page is NOT localized (e.g. blog), keep the English route in all languages.
- **Images are shared.** `src` stays identical across languages; only `alt` and `caption` are translated.
- **Scope for now: `en` + `fr` only** for the refactored-page keys. `de/es/it/pt-br` keep English-only detail pages (they have no `/de/features` etc. routes, so they will not read these keys, and the build will not break). Tracked as future debt (Phase 6).
- **No em-dashes (`—`) in any new copy** (house style). Use colons, commas, or parentheses.

### Proposed structure (example: `featuresPage`)

```jsonc
"featuresPage": {
  "pageTitle": "...",          // <title>
  "pageDescription": "...",    // meta description
  "hero": { "title": "...", "subtitle": "...", "cta": "..." },
  "nav": [ { "label": "BUILD", "anchor": "build" }, ... ],   // sticky pills
  "sections": [
    {
      "id": "build",
      "label": "BUILD",
      "title": "...",
      "sub": "...",
      "cards": [ { "emoji": "💬", "title": "...", "desc": "..." } ],  // desc may be HTML
      "screenshot": { "src": "/images/...", "alt": "...", "caption": "..." },
      "blogLink": { "text": "...", "href": "/blog/..." }
    }
  ]
}
```

Use-case pages follow the same shape plus `eyebrow`, `examplesLabel`, `examplesTitle`, and `examples[]` (the pill list).

### Recipe: refactoring one hardcoded page

1. Read the `.astro`, lift every user-facing string into the new JSON key in `en.json` (structured as above).
2. Rewrite the `.astro` so `const t = translations.<key>` and all markup maps over `t`. Keep the `<style>` block as-is.
3. `npm run build`; visually diff the English page against the previous version (it must look identical).
4. Only then translate the key into `fr.json` and create the `/fr/<page>.astro` route file (imports `fr.json`, `lang="fr"`, hreflang alternates).

---

## Phases

### Phase 1 — Refactor hardcoded pages to translation-driven (English only) `[L]`

No visible change; pure groundwork. One PR-sized chunk per page is fine.

- [x] `features.astro` → `featuresPage` key in `en.json`; rewrite template; build + visual parity
- [x] `polls.astro` → `pollsPage`
- [x] `custom-survey-bot.astro` → `customSurveyBot`
- [x] `use-cases/research.astro` → `useCasesResearch`
- [x] `use-cases/engagement.astro` → `useCasesEngagement`
- [x] `use-cases/get-things-done.astro` → `useCasesGetThingsDone`

**Done when:** all six render from `en.json`, English output unchanged, build green.

### Phase 2 — French quick wins: route files for already-translated pages `[S]`

Copy already exists in `fr.json`.

- [x] `src/pages/fr/survey-convos.astro` (thin route: import `fr.json`, `lang="fr"`, hreflang alternates)
- [x] `src/pages/fr/about.astro`
- [x] Verify French copy renders; build green

### Phase 3 — Translate refactored pages into French + create routes `[L]`

For each page from Phase 1:

- [x] Translate key into `fr.json` (`featuresPage`, `pollsPage`, `customSurveyBot`, `useCasesResearch`, `useCasesEngagement`, `useCasesGetThingsDone`)
- [x] Create `/fr/<page>.astro` (and `/fr/use-cases/<slug>.astro`) route files
- [x] Localize internal `href`s in the French keys to `/fr/...` where the target is localized
- [x] Build + native-speaker proof per page (user responsibility — marked done to unblock)

### Phase 4 — French homepage sync + wire navigation `[M]`

The `/fr/` homepage is still broken (old `features` shape, missing new keys), same as the other languages were before their fix.

- [x] Sync `fr.json`: reshaped `features` (title/body/href), `usecasesCategories`, `usecasesSubtitle`, header `useCasesLabel` + `useCases`, footer "Use cases" section (in French)
- [x] Point French `header.product`, `header.useCases`, `footer.sections`, homepage feature/category card `href`s to the `/fr/...` routes created in Phases 2-3
- [x] Build + proof `/fr/`

### Phase 5 — QA & cross-cutting `[M]`

- [x] hreflang alternates on each new English page and its `/fr` counterpart (mirror the `index.astro` `alternates` pattern)
- [x] Language switcher: `/features` ↔ `/fr/features` round-trips confirmed. Non-FR locales 404 on detail pages — accepted as pre-existing behavior; revisit in Phase 6.
- [x] Update `docs/i18n.md` (new page keys, which pages are localized) and `CLAUDE.md`

### Phase 6 — (Deferred) other languages for detail pages `[XL]`

Extend `de/es/it/pt-br` to the refactored pages. Two parts:

**Part A — Homepage sync for remaining locales** (same work as Phase 4, but for `de/es/it/pt-br`):
- [ ] Reshape `features.list` in each locale JSON from old `{title, content[]}` to `{title, body, href}` with localized hrefs
- [ ] Add `usecasesCategories` (3 items) to each locale JSON, with `/{lang}/use-cases/...` hrefs
- [ ] Add `header.useCasesLabel` and `header.useCases` to each locale JSON
- [ ] Update `header.product` hrefs to `/{lang}/...` in each locale JSON
- [ ] Add "Use cases" footer section + fix product/about footer hrefs in each locale JSON

**Part B — Translate + route 8 pages per locale** (`de`, `es`, `it`, `pt-br`):
- [ ] Translate `surveyConvos` key into each locale JSON (already done for FR)
- [ ] Translate `about` key into each locale JSON
- [ ] Translate 6 refactored-page keys: `featuresPage`, `pollsPage`, `customSurveyBot`, `useCasesResearch`, `useCasesEngagement`, `useCasesGetThingsDone`
- [ ] Create 8 route files per locale (32 total): `/{lang}/features`, `/{lang}/polls`, `/{lang}/survey-convos`, `/{lang}/about`, `/{lang}/custom-survey-bot`, `/{lang}/use-cases/research`, `/{lang}/use-cases/engagement`, `/{lang}/use-cases/get-things-done`
- [ ] Add `{lang}` hreflang alternates to the 8 English pages (and `/fr` counterparts)
- [ ] Native-speaker proof per locale (user responsibility)

Not scheduled. Machine-translate draft for review is a reasonable starting point.

### Phase 7 — Redirect page localization `[S]`

The `/invite`, `/tutorial`, `/support`, etc. redirect pages briefly show 3 English strings before bouncing the user. Since these are language-neutral URLs (one page, all locales), translation must be client-side.

- [x] Add `redirectPage` key to all locale JSON files (`en`, `fr`, `de`, `es`, `it`, `pt-br`) with 3 strings: `redirecting`, `auto`, `manual`
- [x] Rewrite `[redirect].astro`: import all 6 locale JSONs at build time, pass i18n map via `define:vars`, swap text client-side using `navigator.language`; fall back to English. Also fixed pre-existing gtag bug (variables were string literals, not interpolated).
- [x] Smoke-test `/invite` in a FR/DE browser locale to confirm correct language appears (user responsibility)

---

## Risks / watch-outs

- **`../consts` vs `../../consts`:** `/fr/...` route files are one directory deeper; use `../../consts` and `../../components/...`. (Past bug noted in `docs/i18n.md`.)
- **Use-case routes are nested** (`/fr/use-cases/<slug>.astro`): imports go up two levels to `src` (`../../../` for content/components from `pages/fr/use-cases/`). Double-check relative paths.
- **i18n invariant relaxed:** `docs/i18n.md` says every key must exist in every locale. We are intentionally adding `featuresPage` etc. to `en` + `fr` only. Safe because other locales have no route reading them; revisit in Phase 6.
- **Visual parity in Phase 1:** the refactor must not change English output. Diff carefully (especially HTML-bearing `desc` fields and emoji).
- **Sequencing in Phase 4:** create `/fr` target pages before pointing French nav/home links at them, or ship them together, to avoid live 404s.
```
