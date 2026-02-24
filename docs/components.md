# Components & Pages

## Key Components

- **`BaseHead.astro`** — included on every page; imports `global.css`; handles hreflang alternates; contains the client-side language redirect script. Only place to add global `<head>` tags.
- **`Header.astro`** — receives `translations.header`; contains `LanguageSwitcher.astro`
- **`Footer.astro`** — receives `translations.footer`
- **`Hero.astro`** — receives `translations.hero`
- **`Features.astro`** — receives `translations.features`
- **`UseCases.astro`** — receives full `translations` object. `usecasesList` is an array of plain strings with emojis embedded (not `{ icon, text }` objects).
- **`Testimonials.astro`** — receives full `translations` object
- **`CTA.astro`** — receives full `translations` object
- **`PriceTable.astro`** — receives full `translations` object; renders `translations.priceTable`
- **`LanguageSwitcher.astro`** — standalone; reads/writes `localStorage('preferredLang')`; strips lang prefix before redirecting

### Unused Components
- **`Reasons.astro`** — exists but unused (was replaced by `UseCases` on the FR homepage). Do not delete without checking git history.

---

## Page Notes

- **`survey-convos.astro`** — uses `translations.surveyConvos` keys. English only (no `/fr/`, `/es/`, `/de/` equivalents yet). Styles self-contained in page `<style>` block.
- **`about.astro`** — uses `translations.about` keys. English only. Styles self-contained in page `<style>` block.
- Both follow the pattern: import JSON → extract sub-key (`const t = translations.surveyConvos`) → use `set:html` for strings containing HTML markup.

---

## Styling

- `src/styles/global.css` — CSS custom properties (design tokens):
  - `--primary`: #e1287e (pink)
  - `--accent`: #9eff00 (green)
  - `--secondary`: #745399 (purple)
  - `--secondary-dark`: #3C2B50
- Fonts: **Figtree** (body) and **IBM Plex Mono** (titles/mono, class `.mono`) — loaded from Google Fonts in `BaseHead.astro`

---

## Layouts

- `BlogPost.astro` — wraps blog post content
- `LegalLayout.astro` — wraps legal pages (privacy, terms, cookies)

---

## Global Constants

`src/consts.ts`:
- `SITE_TITLE`, `SITE_DESCRIPTION`
- `DISCORD_STORE_URL` — single source of truth for the Discord upgrade link

---

## Tracked Redirects

`src/config/redirects.js` defines outbound links (Discord, Stripe, top.gg, etc.) with analytics names. `src/pages/[redirect].astro` renders a redirect page per key (e.g. `/invite`, `/support`, `/portal`), firing `gtag` events before redirecting.
