# Japanese & Korean i18n Feasibility Research

_Research date: 2026-02-24_

## Verdict

**Yes — technically feasible, no critical blockers.**

- UTF-8 encoding: already standard in the project
- Text direction: both JA and KO are LTR — no RTL complexity
- Google Fonts: Noto Sans JP and Noto Sans KR are available

---

## One Gap: CJK Fonts

The current fonts (Figtree for body, IBM Plex Mono for headings/code) have **no CJK character coverage**. Without fallback fonts, Japanese/Korean text renders in the browser's default serif, which looks inconsistent.

### Fix

1. Add to the Google Fonts URL in `src/components/BaseHead.astro`:
   ```
   &family=Noto+Sans+JP&family=Noto+Sans+KR
   ```

2. Add CSS lang selectors in `src/styles/global.css`:
   ```css
   :lang(ja) body { font-family: 'Noto Sans JP', sans-serif; }
   :lang(ko) body { font-family: 'Noto Sans KR', sans-serif; }
   ```

---

## Hardcoded Locale Arrays (must update when implementing)

These locations contain hardcoded locale lists and must be updated when adding JA/KO:

| File | Line (approx) | What it is |
|---|---|---|
| `astro.config.mjs` | ~19 | `locales: ["en", "fr", "es", "de", "pt-br"]` |
| `src/components/BaseHead.astro` | multiple | 6 arrays across homepage + pricing redirect hreflang blocks |
| `src/components/LanguageSwitcher.astro` | top of script | `availableLangs` array + path-stripping array |

---

## Files to Create (per language)

6 new files per language pair (12 total for JA + KO):

| File | Notes |
|---|---|
| `src/content/translations/ja.json` | Full translation of en.json (652 lines) |
| `src/content/translations/ko.json` | Full translation of en.json (652 lines) |
| `src/pages/ja/index.astro` | Copy from `src/pages/de/index.astro`, update lang/translation imports |
| `src/pages/ja/pricing.astro` | Copy from `src/pages/de/pricing.astro` |
| `src/pages/ko/index.astro` | Copy from `src/pages/de/index.astro` |
| `src/pages/ko/pricing.astro` | Copy from `src/pages/de/pricing.astro` |

**Template to copy:** `src/pages/de/` — it's the most recently added locale and follows all current patterns.

---

## Files to Update

17 files need locale additions:

1. `astro.config.mjs` — add `"ja"`, `"ko"` to locales array
2. `src/components/BaseHead.astro` — add hreflang alternate links (6 arrays)
3. `src/components/LanguageSwitcher.astro` — add to lang arrays
4. All 10 locale index + pricing pages — add `<link rel="alternate" hreflang="ja/ko">` entries

### hreflang Updates

Add `ja` and `ko` alternate entries to these 10 existing pages:
- `src/pages/index.astro`
- `src/pages/pricing.astro`
- `src/pages/fr/index.astro`
- `src/pages/fr/pricing.astro`
- `src/pages/es/index.astro`
- `src/pages/es/pricing.astro`
- `src/pages/de/index.astro`
- `src/pages/de/pricing.astro`
- `src/pages/pt-br/index.astro`
- `src/pages/pt-br/pricing.astro`

---

## Translation Scope

- `en.json` is 652 lines — substantial translation effort
- Testimonials: currently English-only across all locales (consistent approach — can keep in English for JA/KO too)
- Legal pages (`/privacy`, `/cookies`) and blog posts remain English-only (consistent with current approach)
- Only `index.astro` and `pricing.astro` are translated per locale

---

## Effort Estimate

| Task | Time |
|---|---|
| Code changes (all files above) | ~3–4 hours |
| Translation (en.json × 2 languages) | **Bottleneck** — requires professional translation or careful LLM review |

Translation quality is the real constraint. Machine translation of UI copy (especially marketing/CTA strings) requires human review to avoid awkward phrasing.

---

## Verification Checklist

After implementing, verify:

- [ ] `/ja` and `/ko` routes load without 404
- [ ] `/pricing` redirects correctly for JA/KO (check `src/config/redirects.js` if applicable)
- [ ] Language switcher shows JA/KO options and switches correctly
- [ ] hreflang tags present in `<head>` on all locale pages
- [ ] CJK characters render correctly (Noto Sans fonts loading)
- [ ] No console errors for missing translation keys
- [ ] `npm run check` passes (build + tsc + wrangler dry-run)
