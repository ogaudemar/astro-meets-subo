# Content

## Blog Posts

Blog posts live in `src/content/blog/`. The collection is defined in `src/content.config.ts`.

**Frontmatter schema:** `title`, `description`, `pubDate`, `author` (required); `updatedDate`, `heroImage`, `tags`, `draft` (optional).

### Draft Posts (review before publishing)

All marked `draft: true` — do not publish without review:

- `subo-vs-google-forms-typeform-discord-communities.md`
- `how-to-use-skip-logic-smarter-discord-surveys.md`
- `gamify-discord-community-xp-survey-rewards.md`
- `ai-powered-survey-summaries-subo.md`
- `complete-guide-anonymous-surveys-discord.md`
- `scheduling-recurring-surveys-community-pulse.md`
- `5-discord-community-types-surveys-they-should-run.md`

The user has directly edited some posts to correct product details — **always read a post before editing it**.

---

## Subo Product Facts

Keep these accurate in all copy. When in doubt, cross-reference the web admin React app at:
`C:\Users\ogaud\OneDrive - ClearSwell LLC\Documents\Subo\Code\survey\web2\react`

### Question Types
Only **5 publicly supported**: Open Text, Numeric, Yes/No, Single Choice, Multiple Choice.
Other types (Button List, Date, URL, Color Picker, Discord Role) are partial/not public — do not advertise.

### Survey Creation
- `/survey` command — manual builder
- `/draft` command — AI generates survey from objectives
- Subo web admin — full management UI

### Survey Invite Flow
Subo **posts an invite message in a Discord channel** — it does not DM members directly. Members click the invite and respond privately (in Discord or on the web).

### Web Surveys
Admins choose whether a survey runs natively in Discord or on the web, and whether it's open to anyone or restricted to community members. Members do not choose their mode.

### XP System
Available on all plans. Custom XP name/value and per-survey role rewards require Premium+. Standard leaderboard (all-time XP) on all plans; monthly leaderboard on Premium+.

### Skip Logic
Simple skip logic available on all plans. Advanced custom logic (write your own syntax) on VIP and Custom Bot only.

### Anonymity
Three modes — Identified (default), "More Anonymous" (participation tracked, responses private), Full Anonymous (no identity link). Role rewards for completion are not compatible with Full Anonymous.

### Company
Founded 2021. Small team with decades of enterprise survey platform experience. Bootstrapped, self-funded, independent.

---

## Content Collections

`src/content.config.ts` defines the `blog` collection loading from `src/content/blog/`. Translation JSON files in `src/content/translations/` are imported directly by pages (not a content collection).
