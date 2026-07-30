# Directory Listing Kit — canonical copy for bot directories (P1)

Single source of truth for **Subo**'s bot-directory listings. Paste from here so
every directory carries the **same name, domain, and description** — entity
consistency reinforces the Organization schema (see
[authority-roadmap.md](authority-roadmap.md) P1).

**Replaces** the stale 2023 block in Notion ("0xSurvey" / "SurveyBot", subo.ai,
10-question cap, old support link). Keep this file authoritative; sync Notion to
it, not the reverse.

> Product claims verified against `docs/content.md` (Subo Product Facts) and
> `public/llms.txt`. Don't add features not listed there without checking the app repo.

---

## Canonical links (use these everywhere)

| Field | Value |
|-------|-------|
| Name | **Subo** (display: *Subo — Survey Bot*) |
| Website | `https://subo.gg` |
| Invite URL (raw OAuth) | `https://discord.com/api/oauth2/authorize?client_id=946888973035380806&permissions=398090292240&scope=bot%20applications.commands` |
| Invite URL (tracked/branded) | `https://subo.gg/invite` |
| Support server | `https://discord.gg/SvX6KdEUnu` |
| Top.gg page | `https://top.gg/bot/946888973035380806` |
| Discord App Directory | `https://discord.com/discovery/applications/946888973035380806` |
| Client / App ID | `946888973035380806` |
| Prefix | `/` (slash commands) |
| Pricing | `https://subo.gg/pricing` |
| API docs | `https://api.subo.ai/docs` |

**Categories / tags** (pick what each directory supports):
`survey` · `poll` · `quiz` · `form` · `feedback` · `questionnaire` · `vote` ·
`trivia` · `engagement` · `economy` · `leveling` · `utility`

---

## Headline (≤140 chars — top/trending/search lists)

Pick one; option A is default.

- **A.** Conversational surveys, polls, quizzes & forms for Discord. Get honest answers, then reward members with XP and roles. *(117)*
- **B.** The survey & poll bot for Discord communities — ask questions, get honest answers, reward participation. AI-built in seconds. *(124)*
- **C.** Run surveys, polls, quizzes & prediction contests right inside Discord (or on the web). Honest answers, gamified participation. *(127)*

---

## Micro description (<190 chars — e.g. discordbotlist.com)

> Subo turns questions into a friendly conversation in Discord. Build surveys by
> hand or with AI, run polls, quizzes & prediction contests, and reward members
> with XP and roles. *(175)*

Tighter alt *(151)*:

> Subo turns questions into a friendly Discord conversation. Build surveys by hand
> or with AI, run polls & quizzes, and reward members with XP and roles.

---

## Short description (~300 chars — cards / small directories)

> **Subo** turns questions into a friendly conversation inside Discord. Build a
> survey by hand or let AI draft it from your goal, then run polls, quizzes, and
> prediction contests too. Answers stay private, open-text gets AI-summarized, and
> members earn XP and roles for taking part. Trusted by 15,000+ communities.

---

## Long description (min 200 chars — main listing body)

> **Subo** is the survey and poll app trusted by **15,000+ Discord communities**.
> It turns questions into a friendly, back-and-forth conversation — no sending your
> members off to a web form. Everything happens inside Discord (or on the web, your
> choice), end to end.
>
> **Ask anything, your way**
> - ✅ Five question types: single-choice, multiple-choice, open text, numeric, and yes/no
> - ✅ Build manually with `/survey`, or let AI draft a full survey from your goal with `/draft`
> - ✅ Manage everything from the Subo web admin — or programmatically via the public REST API
>
> **Get honest, useful answers**
> - ✅ Privacy-first: choose Transparent, Semi-Private, or Anonymous responses
> - ✅ AI summaries turn messy open-text answers into a clear read
> - ✅ Run it natively in Discord, or share a web survey link anyone can answer — no Discord account required
>
> **Make participation fun**
> - ✅ Polls, quizzes with auto-grading, and prediction contests
> - ✅ Members earn XP for every answer; reward completion with custom currency, roles, and accomplishments
> - ✅ Leaderboards to spark friendly competition
> - ✅ Ready-made, cloneable templates for surveys, polls, and quizzes
>
> **Member commands:** `/leaderboard`, `/profile`
> **Admin commands:** `/survey`, `/draft`, `/poll`, `/results`, `/template`, `/settings`, `/help`
>
> Privacy matters: members can view, export, update, or delete their own data at
> any time with `/profile`.
>
> 🤖 Invite **Subo** today and get to know your community → https://subo.gg

---

## Screenshot / video assets

- **Hero demo capture** — the localized self-playing Discord-conversation demo on
  subo.gg (survey-as-chat → reaction → follow-ups → XP + role). Best single asset
  for top.gg video/screenshots (roadmap P1 + P4). Capture EN for directories.
- Suggested stills: a live survey invite in a channel · an open-text AI summary ·
  the leaderboard · the web-admin survey builder · a template landing page.

---

## Per-directory field cheat sheet

Most directories ask for the same fields. Map them from the tables above:

| Directory field | Use |
|-----------------|-----|
| Short tagline / headline | Headline A |
| Long/description | Long description |
| Prefix | `/` |
| Website / links | `https://subo.gg` |
| Support server | `https://discord.gg/SvX6KdEUnu` |
| Invite / OAuth | See "Which invite URL?" below |
| Tags/categories | From the categories list |

### Which invite URL?

- **Use `https://subo.gg/invite`** wherever the field is a free-form link (or the
  directory also asks for a plain "invite/website" URL). It's **tracked**
  (`redirect_click` in PostHog/GA), **branded/entity-consistent** (points to
  subo.gg), and **future-proof** — if permissions change, edit `redirects.js` once
  instead of every listing.
- **Use the raw `discord.com/api/oauth2/...` URL** wherever the directory
  **validates the invite** or auto-derives the bot from a Discord authorize URL
  (many have a dedicated OAuth/Invite field that rejects non-discord.com links).
  When unsure, the raw URL always works — reach for the tracked one where it's allowed.

**Always double-check** the listing shows **Subo** (not 0xSurvey/SurveyBot) and
links to **subo.gg** (not subo.ai) before saving.
