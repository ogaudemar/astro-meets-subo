# Content

## Blog Posts

Blog posts live in `src/content/blog/`. The collection is defined in `src/content.config.ts`.

**Frontmatter schema:** `title`, `description`, `pubDate`, `author` (required); `updatedDate`, `heroImage`, `heroHeadline`, `tags`, `draft`, `faq`, `locale`, `translationOf` (optional).

**The collection holds every language** (since 2026-08-25). `locale` defaults to `"en"`;
non-English posts live in `src/content/blog/{locale}/` and are served from
`/{locale}/blog/<slug>/`. **Never call `getCollection('blog')` directly from a page** —
use `getBlogPosts(locale)` / `postUrl()` from `src/utils/blog.ts`, or French posts end up
in the English listing, feed and changelog. Full rules in
**[i18n.md](i18n.md#blog--one-collection-many-languages)**.

`faq` is an array of `{q, a}`. When present, `BlogPost.astro` renders it as a visible
FAQ section at the end of the post **and** emits `FAQPage` JSON-LD alongside the usual
`BlogPosting`. The two must match: Google requires FAQ markup to reflect visible page
content, and the visible Q&A is what LLMs actually quote. Answers may contain inline
HTML (links, `<code>`); it is stripped for the JSON-LD.

### Draft Posts (review before publishing)

**One draft left** (verified 2026-08-25 by grepping `^draft: true`):

- `scheduling-recurring-surveys-community-pulse.md` — never read, never ruled on.

Don't maintain this list by hand; it went stale twice. Re-derive it:

```bash
grep -rl '^draft: true' src/content/blog/
```

**⚠️ `draft: true` does NOT deindex a post.** `src/pages/blog/index.astro` filters drafts
out of the *listing*, but `getStaticPaths` maps every entry, so each draft is built at its
public URL and lands in the sitemap. Treat drafts as live pages that are merely unlinked.
Whether to change that is an open decision in
[authority-roadmap.md](authority-roadmap.md) (it would deindex real URLs), not a hygiene fix.

**Ruled since this list was written**, each worth more revised than deleted:
- `content-blocks-new-way-to-design-survey-flows` — rewritten and published (2026-08-13).
- `5-discord-community-types-surveys-they-should-run` — rebuilt as a three-pillar hub and
  published (2026-08-13).
- `how-to-use-skip-logic-smarter-discord-surveys` — **deleted**, merged into
  `mastering-skip-logic-…` and 301'd via `public/_redirects` (2026-08-14).
- `gamify-discord-community-xp-survey-rewards`, `ai-powered-survey-summaries-subo`,
  `complete-guide-anonymous-surveys-discord`, `subo-vs-google-forms-typeform-discord-communities`
  — all published.

The user has directly edited some posts to correct product details — **always read a post before editing it**.

---

## Subo Product Facts

Keep these accurate in all copy. When in doubt, cross-reference the web admin React app at:
`C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\subo\web2\react`

### Question Types
**8 question types**, since the scale family shipped (brief:
`subo/docs/releases/2026-08-13-scale-family-blocks.md`):

| Type | API name | What it does |
|---|---|---|
| Single Choice | `single_punch` | Pick one option. Also covers yes/no. |
| Multiple Choice | `multi_punch` | Pick several options. |
| Open Text | `open_text` | Free text. The input for AI analysis. |
| Numeric | `open_numeric` | A number. |
| Rating | `rating` | Rate on 2-10 points. Stars, numbers or an emoji set. |
| Opinion Scale | `opinion_scale` | Agreement or satisfaction between two named ends. Label every point for a Likert item. |
| NPS | `nps` | The standard 0-10 recommendation question. Range and anchors are locked. |
| Ranking | `ranking` | Put options in order, best first. `rank_top_n` asks for a partial ranking. |

Plus **three non-question blocks**: `content_block` (says something without asking),
`action_block` (grants XP, a role or an achievement mid-conversation), `calculated_block`
(computes a value from earlier answers).

**Don't hand-maintain this list.** The machine-checked copy is
`src/data/api-surface.json` → `blockTypes`, which `npm run check:api` re-derives from the
app's Python source and fails on drift. If this table and that file disagree, the file wins.

**Likert is not a block type.** It is an Opinion Scale with every point labeled. Say so
that way in copy; the release brief is explicit about it.

### Survey Creation
- `/survey` — manual builder
- `/poll` — one-question poll built in Discord (23 options on the command)
- `/template` — start from a ready-made template
- `/draft` — AI generates a survey from your objectives
- Subo web app (`app.subo.gg`) — full visual builder and management UI

⚠️ **Command names are localized and DB-backed.** They resolve through
`user_messages` first and `surveyLib/model/defaultMessages.py` only as a fallback, so the
Python constant is not proof of the live name. Check the DB, or a live server, before
changing a command name in copy.

**Worked example: `/draft`.** `Wizard_comamnd_name = "wizard"` in `defaultMessages.py`.
The live command has been **`/draft` since launch** (user, confirmed 2026-08-25), so the
code constant is simply stale and the DB has always overridden it. Copy saying `/draft` is
correct. Anyone re-deriving command names from the Python source will get this one wrong.

### Survey Invite Flow
Subo **posts an invite message in a Discord channel** — it does not DM members directly. Members click the invite and respond privately (in Discord or on the web).

### Web Surveys
Admins choose whether a survey runs natively in Discord or on the web, and whether it's open to anyone or restricted to community members. Members do not choose their mode.

### XP System
Available on all plans. Custom XP name/value and per-survey role rewards require Premium+. Standard leaderboard (all-time XP) on all plans; monthly leaderboard on Premium+.

### Skip Logic
Simple skip logic available on all plans. Advanced custom logic (write your own syntax) on VIP and Custom Bot only.

**Verified 2026-08-25** against `priceTable` in `en.json`: *Skip Logic & Conditional
Rewards* is ✓ on all four tiers (Free, Premium, VIP, Custom); *Advanced Expression Editor*
is ✗/✗/✓/✓. **Free is included** — a published post once said "Premium, VIP and Custom bot
subscribers" and that was fixed sitewide on 2026-08-12. Don't reintroduce it.

### Anonymity
Three modes, defined by who can see an individual's answers:
- **Transparent** — every member can see any other member's individual answers.
- **Semi-Private** — the Creator/Admin can see individual answers, but other members cannot.
- **Anonymous** — no one (not even the Creator/Admin) can see who wrote which answer.

**Default:** Anonymous on a new server (changeable in `/settings`). Set per-project via the `/poll` `privacy` option or, for surveys, `Edit Privacy Mode` in Edit Mode.
**Irreversible:** once an Anonymous project receives its first response, it can't be switched to another mode (protects already-collected anonymous answers).
**Results impact:** privacy mode never changes aggregated results (`/results` is always identifier-free); it only affects the Full Report's Responses tab + response notifications (which carry Discord name/ID except in Anonymous).
**Rewards + Anonymous:** role/XP rewards *do* work with Anonymous (respondents are authenticated; their identity just isn't tied to answers). But a completion reward reveals who *participated* (not what they said), so with few respondents it can undermine anonymity. Advise skipping rewards when anonymity is critical and the respondent pool is small.

### Terminology / translations source of truth
When unsure of the exact user-facing term for an app/bot feature, check the
**`user_messages` table in the Subo repo** — it holds all bot + web-app strings in
every supported language. The bot and web app support **more languages than this
marketing site**: site = EN/FR/ES/DE/IT/PT-BR (6); bot/web app also add **Dutch,
Polish, Russian, Turkish** (10 total).

### Company
Founded 2021. Small team with decades of enterprise survey platform experience. Bootstrapped, self-funded, independent.

---

## Content Collections

`src/content.config.ts` defines **three** collections:

| Collection | Source | What it is |
|---|---|---|
| `blog` | `src/content/blog/` | Posts, all languages (see the i18n note at the top). |
| `templates` | `src/content/templates/` | Public landing pages for the gated template library. Taxonomy: `dimension` × `audiences` × `features`, `kind: hub \| spoke`. |
| `recipes` | `src/content/recipes/` | The *design* twin of a template: a template sells the outcome, a recipe shows how the script is built. Brought on-domain 2026-08-06 from the app repo's `docs/recipes/`, which had been served as raw markdown from the old domain. |

`templates` ↔ `recipes` cross-link on the same taxonomy: `templates.recipeUrl` points at a
recipe, `recipes.templateSlugs` points back. The relation is **not** strictly inverse (one
recipe can serve several templates, each template picks a single best twin).

All three share the same `faq` contract: rendered visibly **and** emitted as `FAQPage`
JSON-LD, because Google requires the markup to match the page and the visible Q&A is what
gets quoted.

Translation JSON files in `src/content/translations/` are imported directly by pages (not a
content collection).
