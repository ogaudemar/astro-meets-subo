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

`src/content.config.ts` defines the `blog` collection loading from `src/content/blog/`. Translation JSON files in `src/content/translations/` are imported directly by pages (not a content collection).
