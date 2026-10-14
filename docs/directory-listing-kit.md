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

---

## Astro showcase (P3, optional — read the caveat first)

⚠️ **This is community participation, not a link.** Gallery entries carry
`rel="noopener nofollow ugc"` (verified in the page source, 2026-09-07), and the
submission is a comment in a thread with 2,374+ others. It passes no equity and
reaches web developers, not community managers. P3 is closed for exactly this
reason — see the roadmap. Kept here only so it costs two minutes if you want it.

**Where:** `https://github.com/withastro/roadmap/discussions/521` (this is where
`astro.build/showcase/submit` redirects). Needs a GitHub account, so it is the
user's to post; nothing here can be automated.

**Draft comment:**

> **[Subo](https://subo.gg)** — the marketing site for a Discord survey and poll app
> used by 15,000+ communities.
>
> Astro 5 with the `@astrojs/cloudflare` adapter, deployed to Cloudflare Workers.
> Pure `.astro` components, no UI framework. 138 pages across four languages
> (EN/FR/ES/DE) from a single content collection, with hreflang clusters and the
> template gallery generated at build time from JSON.

**Do not** paste the directory headline/description copy above into this — that copy
is written for people choosing a Discord bot, and this audience is choosing a
framework. The stack is the interesting part here.

---

## Claude Connectors Directory (MCP connector, drafted 2026-10-14)

Different audience from everything above: people inside Claude choosing a connector, not
Discord owners choosing a bot. Submitted at `https://claude.ai/directory/manage` → **Submit new**
→ **MCP connector**. Field limits are from
`https://claude.com/docs/connectors/building/submission`. Listing copy is ours alone: Anthropic
can't edit it, so get it right before submitting.

**Connection:** `https://api.subo.ai/mcp`, one URL for everyone.

**Server name** (≤ 100): `Subo`

**One-liner** (≤ 200; this one is 157):
> Run surveys, polls, forms and quizzes in your Discord community from Claude: build them from a sentence, launch them, and read the responses and AI analysis.

**Description** (≤ 2,000):
> Subo runs conversational surveys, polls, forms and quizzes inside Discord communities and on the web. This connector lets Claude do the work with you: describe what you want to ask your members, and Claude builds the project, checks its script, and launches it when you say so. When the answers come in, ask Claude what people said.
>
> Things to ask:
> - "Draft a short survey asking members how last week's game night went, with one open question at the end. Don't open it yet."
> - "Clone the prediction contest template and set it up for Sunday's final."
> - "Summarize the open-text answers from our last feedback project."
> - "Who earned the most XP this month?"
>
> What Claude can do: create, edit, clone, validate, open, close and delete projects; write a project's script block by block; read responses and Subo's AI analysis; manage members' XP and accomplishments; browse and clone templates; manage webhooks; and read and change community settings.
>
> Every operation is labeled read-only, normal change, Outward (it reaches real people, such as opening a project or granting XP) or Destructive (it deletes something). Claude asks before Outward and Destructive operations. Subo also refuses to delete a project that is still open.
>
> What it can't do, by design: create or delete API keys, change who has access to your community, or connect a new verified-audience source.
>
> Connecting takes the Admin role in a Subo community. You sign in to Subo with Discord, choose one community and an access level (Admin, or the narrower Creator), and approve. One connection reaches one community, and you can revoke it at any time from the Account page of the Subo web app.

**Categories** (1-5; pick the closest from the portal's list, in this order of preference):
Productivity, Communication, Data & Analytics, Marketing, Research.

**Documentation URL:** `https://subo.gg/blog/connect-discord-community-to-ai-agent/`
**Privacy policy URL:** `https://subo.gg/privacy/`
**Support contact:** `hello@subo.ai` (and the Support Server, `https://subo.gg/support/`, if a URL field exists)
**Icon:** `Pictures/Assets/Subo/Logo/2026 refresh/subo-512.png` (the mascot head, 512×512,
transparent). If the preview shows it on a dark background and the pink outline disappears,
ask before swapping in another file.
**URL slug:** `subo`. **Permanent once published.** Not `subo-discord`: same BDX reasoning as
the registry name.

**Use cases:**
1. Build and launch a survey, poll, form or quiz in a Discord community from a plain-language request.
2. Read responses and AI summaries of open-text answers, and decide what to ask next.
3. Run community engagement: clone templates (quizzes, prediction contests), grant XP and accomplishments.
4. Wire results into other tools with webhooks.

**What users need before connecting:** Subo added to their Discord server (free:
`https://subo.gg/invite/`), the Admin role in that community, and a Discord account to sign in
with. No paid plan is needed to connect; AI drafting and AI analysis spend the community's credits.

**Reads or writes:** both.

**Company:** ClearSwell LLC, `https://subo.gg/`. Primary contact: the operator's email.

**Authentication:** OAuth. We support both **client ID metadata documents** (preferred by
Claude; our metadata advertises `client_id_metadata_document_supported: true` and `none`) and
**dynamic client registration**. Pick "OAuth with dynamic client registration / client ID
metadata documents". Not Anthropic-held credentials.

**Data handling:** our own API (Subo's Public API, served in-process). No personal health data,
no sponsored content.

**Test & launch: reviewer instructions** (fill the bracketed parts):
> 1. In Claude, add a custom connector with the URL `https://api.subo.ai/mcp` and click Connect.
> 2. On the Subo page that opens, click to sign in with Discord and use the test account `connect_the_connectors`: email `[…]`, password `[…]`. If Discord asks to verify a new login location, the mailbox for that address is `[…]` with password `[…]`.
> 3. On "Connect … to Subo", choose the community `Muse_Connector_Test`, access level **Admin**, and click **Approve**.
> 4. Try: "List my Subo projects", "Summarize the responses to [project name]", "Draft a short poll about [topic] and validate it, but don't open it", "Show the XP leaderboard".
> 5. The community contains only test accounts, so Outward operations (opening a project, granting XP) reach nobody real and are safe to run.

**Compliance:** seven acknowledgments in the portal; read each one, they are policy statements,
not copy.
