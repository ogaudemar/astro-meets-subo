# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

Marketing/landing page site for **Subo** (a Discord survey and poll bot) deployed on Cloudflare Workers. Built with Astro 5, pure `.astro` components (no React/Vue/Svelte), with MDX blog support.

## House style (applies to every English string on the site)

- **US English spelling.** *categorize, personalize, organize, customize, behavior, color,
  favorite, analyze, center, labeled, program.* Never the British `-ise` / `-our` / `-re`
  forms. Exceptions: code identifiers and JSON stay verbatim (a field named
  `favourite_game` in the app is written that way in samples), quoted UI strings are quoted
  as they appear, and non-English locale files are their own languages.
- **No em dashes** in user-facing copy.
- Full rules: the **`subo-glossary`** skill (terminology, capitalization, spelling, tone)
  and the **`blog-writing`** skill (editorial voice, anti-AI-tell rules).
- **`subo-glossary` is vendored in both repos** (`.claude/skills/subo-glossary/` here and in
  `subo/`) so each is self-contained and the rules ship with the code that follows them. The
  two copies are byte-identical by intent: **edit one, copy it to the other in the same
  change.** A glossary that disagrees with itself across repos is worse than one location.

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Production build to ./dist/
npm run preview    # Build + local Cloudflare Workers preview via wrangler
npm run deploy     # Deploy to Cloudflare Workers via wrangler
npm run check      # Build + tsc + wrangler dry-run (full validation)
npm run cf-typegen # Regenerate Cloudflare Workers types (worker-configuration.d.ts)
```

## Architecture

- **Astro 5** static site, deployed as a **Cloudflare Workers** static site via `@astrojs/cloudflare` adapter
- Pages in `src/pages/`, components in `src/components/`, styles in `src/styles/global.css`
- `src/consts.ts` — site-wide constants (`SITE_TITLE`, `SITE_DESCRIPTION`, `DISCORD_STORE_URL`)
- `src/config/redirects.js` — tracked outbound redirect pages (invite, support, portal, etc.)
- All user-facing copy lives in `src/content/translations/en.json` (and language siblings). Components receive a `translations` prop and render from it — no hardcoded strings in components.

See detailed docs:
- **[docs/i18n.md](docs/i18n.md)** — languages (EN/FR/ES/DE), translation file structure, add-language checklist, BaseHead redirect logic pitfalls
- **[docs/components.md](docs/components.md)** — component guide, page notes, styling, layouts, constants
- **[docs/content.md](docs/content.md)** — blog posts (draft status), Subo product facts, content collections
- **[docs/analytics.md](docs/analytics.md)** — conversion funnel (PostHog system-of-record + GA4/GTM baseline), events, cross-subdomain stitching with app.subo.gg, structured-data maintenance

## Homepage Sections (index.astro)

Order: Hero → Features → UseCases → Testimonials → DeveloperAPI → CTA

| Component | Translation key | Notes |
|-----------|----------------|-------|
| `Hero.astro` | `hero` | Rotating word animation |
| `Features.astro` | `features` | 3 clickable belief tiles (`title`/`body`/`href`), linking to `/survey-convos`, `/polls`, `/features` |
| `UseCases.astro` | (root-level keys) | 3 use-case category cards (`usecasesCategories`) + random "inspire me" picker (`usecasesList`) |
| `Testimonials.astro` | (root-level keys) | |
| `DeveloperAPI.astro` | `developerApi` | Developer/API audience; links to `api.subo.ai/docs` and `app.subo.gg/app/account` |
| `CTA.astro` | (root-level keys) | |

## Use-case landing pages (`src/pages/use-cases/`)

Detail pages, one per homepage use-case category (linked from `UseCases.astro` cards). Copy lives in `en.json` / `fr.json` under `useCasesResearch`, `useCasesEngagement`, `useCasesGetThingsDone`. French counterparts are at `src/pages/fr/use-cases/`.

| Page | Category label | Focus |
|------|----------------|-------|
| `use-cases/research.astro` | Understand | The research narrative: honest answers, analytics, AI open-text summaries, segmentation |
| `use-cases/engagement.astro` | Engage | Polls, quizzes, prediction contests, XP/leaderboard/role rewards |
| `use-cases/get-things-done.astro` | Get things done | Applications, sign-ups, orders, requests, ticket intake (the "forms, reinvented" story) |

## Navigation & Footer

- Header Resources dropdown: items support `external: true` → rendered with `target="_blank" rel="noopener noreferrer"` via `HeaderLink` props
- Footer sections are data-driven from `footer.sections` in translations; same `external` flag pattern
- When adding nav or footer links, add them to `en.json` only (translations for other languages handled separately)

## Developer & LLM Discovery

- `public/llms.txt` — Static file served at `subo.gg/llms.txt`; describes the product and API for LLM/AI agent discoverability. Update when the API or major features change.
- `src/pages/api.astro` — `subo.gg/api`, the on-domain API quickstart + recipes page. Static and crawlable on purpose (the Scalar reference is JS-rendered and invisible to LLMs). **English-only and not routed through the translations file**, same call as the `/tutorials` hub: it's code samples, not marketing copy. Carries `TechArticle` + `FAQPage` schema.
- `src/data/api-surface.json` — the machine-checkable facts behind that page (routes, block types, privacy modes, webhook events + headers, per-tier rate limits, error codes). `api.astro` renders its reference tables from this file; **don't hand-write those tables back into the page**, it would un-wire the guard below.
- **Guarding against API drift:** `npm run check:api` (also part of `npm run check`) re-derives the above from the app repo's Python source and fails if our copy disagrees, naming what to add or remove. It finds the app repo via `$SUBO_APP_REPO` or `../subo`, reads it read-only, and **skips with exit 0** when it isn't checked out. It verifies names and numbers only — a field that keeps its name and changes its meaning slips through, so re-read the recipes when the API changes. The app repo's `web2/public_api/CLAUDE.md` and the `release-brief` template both point back here.
- API docs live at `api.subo.ai/docs` (Scalar UI); OpenAPI spec at `api.subo.ai/v1/openapi.json`
- API key generation: `app.subo.gg/app/account`

## Related Repositories

The Subo web app (bot backend + web admin) lives at:
- `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\subo`
- Web admin (React): `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\subo\web2\react`
- Public API: `C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\subo\web2\public_api\`

When reviewing or updating feature descriptions, cross-reference the actual components and copy in that repo for accuracy.

**Feature announcements start from a release brief**, not from reading the app code: the Subo repo writes a self-contained `YYYY-MM-DD-<slug>.md` to `...\Code\subo\docs\releases\` when a feature ships. Work from that brief for blog posts, changelog entries, and site copy updates.

## Deployment

Deployed as a Cloudflare Workers static site. `wrangler.json` is minimal — no secrets or env vars needed for the frontend. The `@astrojs/cloudflare` adapter with `platformProxy` enabled handles the build.
