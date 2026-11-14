# Thin-page review (2026-11-13)

**Question:** are weak pages holding back indexation of `subo.gg`, and should any be noindexed?

**Status: approved and implemented 2026-11-13** (user: delete the scheduling draft outright,
noindex `new-blog`; #1, #3 and #4 as proposed). See [log.md](log.md).

**Answer: no, with two small exceptions.** By every measure we can compute, the site is not
thin. This weakens the "thin pages are a liability" hypothesis raised on 2026-11-13 and
strengthens the authority diagnosis in [../search/README.md](../search/README.md).

## Method

All 142 sitemap URLs, measured in the built `dist/` (text inside `<main>`, scripts and SVG
stripped). For each page:

- **Words**: total words in the main content.
- **Unique words**: words in 5-word sequences that appear on no other page of the site. Shared
  CTAs, FAQ boilerplate and template scaffolding count as not unique.
- **Nearest overlap**: highest Jaccard similarity with any other page (0% = nothing shared).
- **Inbound links**: how many other sitemap pages link to it.

Not measured: per-URL Search Console status (needs the user's export; see Next steps).

## Results

| Signal | Finding |
|---|---|
| Near-duplicates | **None.** The highest overlap anywhere is 19% (`/whats-new/` vs `/changelog/`). Templates overlap each other at 7-17% |
| Template pages (29) | 681-1,111 words, **65-84% unique**, 450-928 unique words each. Not thin |
| Recipes (11) | 1,567-2,990 words, 77-88% unique |
| Locale pages (FR/DE/ES/IT/PT-BR) | 70-100% unique (different language, written rather than machine-flattened). IT and PT-BR are only 2 pages each, but those pages are complete |
| Pages under 300 unique words | Only indexes (`/blog/`, `/fr/blog/`, `/recipes/`), which are hubs and should stay indexed, plus the two blog posts below |

## Recommendations (for approval)

### Noindex (2)

| URL | Why |
|---|---|
| `/blog/scheduling-recurring-surveys-community-pulse/` | `draft: true`, never reviewed, yet **public and in the sitemap** with zero inbound links. A draft drops out of the blog listing but still builds (docs/content.md). **Better fix: make every `draft: true` post emit `noindex` and leave the sitemap**, so this can't recur. It's the only draft today, so nothing live gets deindexed |
| `/blog/new-blog/` | "Welcome to Subo's New Website" (2025): 177 words about switching to Astro. Nothing in it for a user. Noindex, or delete and 301 to `/blog/` |

### Improve (1)

| URL | Why |
|---|---|
| `/blog/clone-surveys-across-servers/` | 222 words on a real feature people use. Expand it into the cloning guide, folding in the Notion "Cloning: Web App" draft (already planned in the content README), including the cross-community "Clone into which server?" dialog |

### Link better (internal links, no new pages)

Linked from one or two pages only, usually just the blog index. That's weak for URLs Google
has "discovered" but not bothered to crawl:

| URL | Inbound | Natural place for a link |
|---|---|---|
| `/whats-new/`, `/fr/whats-new/` | 1 | Footer or changelog header |
| `/blog/5-discord-community-types-surveys-they-should-run/` | 1 | `/use-cases/*`, `/templates/` |
| `/blog/easypoll-alternative/`, `/blog/simple-poll-alternative/` | 2 (blog index + best-poll-bots post) | `/polls/`, the native-polls comparison post |
| `/blog/discord-likert-scale-one-statement-at-a-time/` | 2 | Rating/NPS post, relevant templates |
| `/blog/gamify-discord-community-xp-survey-rewards/` | 2 | `/use-cases/engagement/`, XP history post |
| `/templates/hogwarts-house-sorting/`, `/templates/welcome-new-members/` | 2 | Matching recipes and use-case pages |

### Keep (everything else, 130+ URLs)

Including all templates, recipes, locale pages, legal pages and the 2023 Clyde survey post
(original survey data, which is citable).

## What this means for strategy

- Noindexing won't move indexation in a meaningful way: two weak posts out of 142 aren't what's
  keeping 163 URLs out of the index.
- The evidence keeps pointing at **outside links**. Internal linking (above) is the one on-site
  lever left, and it's cheap.

## Next steps

1. User approves or edits the recommendations above.
2. Implement: draft → `noindex` + out of sitemap; `new-blog` noindex or redirect; the internal links.
3. **User, optional but useful:** export the Search Console list of the 5 indexed and 163 not
   indexed `subo.gg` URLs. If indexed vs not correlates with anything (age, section, inbound
   links), it shows up there, and this review can't see it without that data.
