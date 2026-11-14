# Content (blog, landing pages, templates, tutorials, locales)

## Policy (decision 2026-11-13, see [../../decisions.md](../../decisions.md))

- **A page ships when it serves users:** documenting a feature, a guide people need, or
  improving an existing page.
- **No page is built only to rank.** Search intent can shape a page that's already justified
  (title, H1, FAQ); it can't be the whole reason for it.
- **Quality over quantity.** Improving a weak page beats adding a new one.
- Terminology and door words follow [../terminology.md](../terminology.md); copy follows the
  `subo-glossary` and `blog-writing` skills.

## Cadence

Feature posts as releases ship, up to ~5 a month. Each starts from a release brief in
`subo/docs/releases/` and follows the `feature-launch` skill (blog post, changelog,
channel copy in [../../launches/](../../launches/)).

## Inventory (2026-11-13: 142 URLs in the sitemap)

| Section | Count | Notes |
|---|---|---|
| Blog (EN) | 39 | Plus 4 French posts |
| Templates | 29 | `/templates/*`, `FAQPage` schema |
| Recipes | 11 | Survey-design recipes, also served by the API |
| Core EN pages | ~16 | `/polls/`, `/survey-convos/`, `/forms/`, `/features/`, use cases, pricing, API, tutorials hub… |
| FR / DE / ES | 13 / 12 / 12 | Parity with each other; FR also has the blog. B2B pricing in EN and FR only |
| IT / PT-BR | 2 / 2 | Homepage and pricing only |

## Next actions

1. **Thin-page review: DONE 2026-11-13, awaiting approval.** The site is not thin (no
   near-duplicates; templates 65-84% unique). Proposed: noindex 2 posts (the unreviewed draft,
   plus drafts in general; `new-blog`), expand the cloning post, add internal links to ~9
   weakly linked pages. [thin-page-review.md](thin-page-review.md)
2. **Notion tutorial drafts** (hidden since 2026-10-22): Settings is rewritten and waits for
   screenshots, then republish. Members, Subscription and Results next, rewritten from the
   live web app. Skip Logic is a candidate for an on-domain page; Cloning folds into the
   existing Clone tutorial.
3. **Native read** of `/de/forms/` and `/es/survey-convos/` if a reviewer ever appears (copy
   is LLM-only, accepted by the user).

## Open, gated

- **Beyond-Discord spokes** (Twitch, YouTube, Steam, Patreon pages): only when each platform
  ships in the product. Prep is allowed; promotion before launch isn't.
- **New locales** (IT, PT-BR to parity, NL, PL, JA, KO): read
  [locale-parity.md](locale-parity.md) first. JA/KO need the product localized first.
- **`/templates/` question-type filter:** the vocabulary exists in the data; the UI doesn't.
- **Standalone NPS recipe:** only if the scale-family post ranks for *Discord NPS survey*.

## Backlog

- Compress heavy images in `public/images`.
- Remove legacy pages: `success.astro`, `subscriptions.astro`, `StripeSub.astro`.

## Files

- [locale-parity.md](locale-parity.md): how to bring a locale to parity without re-deriving it
- [log.md](log.md): dated content changes that matter for search
