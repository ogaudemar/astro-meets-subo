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

## Claude Connectors Directory (MCP connector, drafted 2026-10-14, submitted 2026-10-15)

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
> - "Who's on top of the XP leaderboard?"
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
**Icon:** a hosted URL, not an upload: `https://subo.gg/images/logo/subo-512.png` (the mascot
head, 512×512, transparent; source `Pictures/Assets/Subo/Logo/2026 refresh/subo-512.png`). The
portal says Claude otherwise shows the server URL's favicon, and `api.subo.ai` has none (grey
globe), hence the custom icon.
**URL slug:** `subo`. **Permanent once published.** Not `subo-discord`: same BDX reasoning as
the registry name.

**Use cases** (the portal takes exactly three rows of use case + example prompt; as submitted
2026-10-15):

| Use case | Example prompt |
|---|---|
| Build and launch a survey, poll, form or quiz in a Discord community from a plain-language request. | Draft a short survey asking members how last week's game night went, with one open question at the end. Check it, but don't open it yet. |
| Read the responses and Subo's AI summary of open-text answers, and decide what to ask next. | Summarize the open-text answers from our last feedback project and tell me what people liked least. |
| Run community engagement: clone ready-made quizzes and prediction contests, and reward members with XP and accomplishments. | Clone the prediction contest template for Sunday's final, then show me who's on top of the XP leaderboard. |

Webhooks were dropped from the rows; the description covers them.

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
> 3. On "Connect … to Subo", choose the community `Connecting`, access level **Admin**, and click **Approve**.
> 4. Try: "List my Subo projects", "Summarize the responses to [project name]", "Draft a short poll about [topic] and validate it, but don't open it", "Who's on top of the XP leaderboard?".
> 5. The community contains only test accounts, so Outward operations (opening a project, granting XP) reach nobody real and are safe to run.

**Compliance:** seven acknowledgments in the portal; read each one, they are policy statements,
not copy.

## ChatGPT Plugins Directory (MCP plugin, drafted 2026-10-15, not yet submitted)

Same audience as the Claude section, inside ChatGPT (and Codex, which shares the directory).
OpenAI renamed apps to **plugins**: a plugin is a ZIP package holding a manifest, an MCP
connection, optional skills and assets. Read first-hand on 2026-10-15 from
`https://developers.openai.com/plugins/deploy/submission`, `.../deploy/app-review`,
`.../plugin-guidelines` and `.../build/auth` (append `.md` to any page for its raw text).
Portal: `https://platform.openai.com/plugins` → **Upload new or existing plugin** → **With MCP**.

**How it differs from Claude's portal:**
- **Listing copy ships inside the ZIP**, not typed into a form: `plugin.json` →
  `extensions.com.openai.interface`. Changing copy later means a new ZIP and a new review.
  Tool changes don't: after publication OpenAI rescans the server daily and holds any tool
  whose new metadata fails its automated checks (the old definition stays live).
- **The MCP origin is permanent.** `https://api.subo.ai` can never change for this plugin
  (a new origin is a new plugin). That's already true of every other listing, so nothing changes.
- **Domain verification:** serve the portal's challenge token as plain text (just the token,
  no JSON) at `https://api.subo.ai/.well-known/openai-apps-challenge`, or on the parent
  `https://subo.ai/`. Not `subo.gg`: it has to be the MCP host or a parent of it. App-side.
  Today both URLs redirect (302/301), so nothing is served there yet.
- **Reviewer sign-in must work with no email or SMS codes**, and a sign-in that fails is the
  most common reason OpenAI lists for rejection. The Claude instructions fall back on the
  mailbox if Discord asks to verify a new login location. OpenAI rejects that. See the open
  question in the roadmap.
- **5 positive and 3 negative test cases plus a video walkthrough URL** are required.
- **Publisher identity is verified:** individual verification to publish under a person's
  name, business verification for `ClearSwell LLC`. The directory shows that identity's name.
  Publishing under an unverified name is rejected. The project can't use EU data residency.
- **Discovery is by name search or a direct link only.** OpenAI picks plugins for the
  directory's main pages; developers can't ask for it.
- **No screenshots** (the directory no longer shows them, and the docs say not to provide them
  without UI). Starter prompts replace them.
- **Copy rules:** no pricing, plans, free trials or promotions in the subtitle or description;
  no "MCP" or "Plugin" after the name; no comparisons with other products.

**Answers to the questions thread 1 posed:**
1. **Tools-only MCP is accepted.** The docs call UI optional throughout, and screenshots only
   apply when there is UI.
2. **OAuth: ChatGPT supports CIMD, DCR and a provided client;** we choose with
   `auth.client.mode` in `mcp.json`. **Use `cimd`.** ChatGPT's live client document
   (`https://chatgpt.com/oauth/client.json`) prefers `private_key_jwt` but also lists `none`.
   Our metadata accepts `none` and not `private_key_jwt`, so `none` is the only method in
   common and that's what ChatGPT uses. Our CIMD code always treats a client as public anyway
   (`oauth.py`, `fetch_client_metadata`). Using CIMD also keeps the 30-day DCR pruning
   (roadmap thread 3) out of this review. Our metadata has everything ChatGPT needs. One optional
   addition: we don't advertise `authorization_response_iss_parameter_supported` (RFC 9207),
   so ChatGPT uses a per-connection redirect URI
   (`https://chatgpt.com/connector/oauth/{callback_id}`) and client document. Our CIMD code
   accepts any public HTTPS document, so that works. Not needed for submission.
3. **Domain verification:** above. App-side, and the token only exists once the draft is
   uploaded, so the app needs a way to serve it without a release (a config value or file).
4. **Tools:** `readOnlyHint`, `destructiveHint` and `openWorldHint` must be **explicit
   booleans on every tool**. No `search`/`fetch` requirement. Each operation as its own tool
   (we comply: 44 tools). Results must not carry extra personal data or internal IDs beyond
   what the request needs. Two app-side gaps in `mcp_server/registry.py` `_ANNOTATIONS`:
   - Read tools omit `destructive_hint`; set it to `False` explicitly.
   - **Outward tools are `destructive_hint=False`.** OpenAI counts irreversible sends and
     cancellations as destructive, and says being able to undo something doesn't make it
     non-destructive. `open_project` posts invites and DMs, `close_project` cancels, XP and
     accomplishment grants can announce. Set Outward to `destructive_hint=True`.
     `test_webhook` sends to an arbitrary URL, so it gets `open_world_hint=True`
     (`create_webhook` / `update_webhook` arguably too). The Outward/Destructive labels in
     the descriptions stay as they are.
   A wrong annotation fails the automated scan; you can appeal, but fixing it is faster.
5. **Reviewer assets:** test account + sign-in steps (entered in the portal's **Review
   details**, never in the ZIP), 5 + 3 test cases, a video URL, release notes, and four HTTPS
   URLs: website, support, privacy, terms. Organization owners can submit; anyone else needs
   **Apps Management Write**. Testing first means adding the server as a custom MCP server in
   ChatGPT; account and workspace policies decide who can.

**Package layout** (portable "Agent Plugins" format; the source of truth should live next to
the registry files in `Code/subo-mcp/chatgpt-plugin/`):

```
plugin.json
mcp.json
assets/logo.png          ← subo-512.png (square, ≥48 px, ≤5 MiB)
assets/composer-icon.png ← same file
```

**`mcp.json`:**
```json
{
  "$schema": "https://agent-plugins.org/schemas/1.0.0/mcp.schema.json",
  "mcpServers": {
    "subo": {
      "type": "streamable-http",
      "url": "https://api.subo.ai/mcp",
      "extensions": { "com.openai": { "auth": { "type": "oauth", "client": { "mode": "cimd" } } } }
    }
  }
}
```

**Listing fields** (`extensions.com.openai.interface`, limits as of 2026-10-15):

**`name`** (package id, ≤ 64, lowercase-hyphen): `subo`
**`displayName`** (≤ 30): `Subo`
**`shortDescription`** (≤ 30; this one is 29): `Surveys and polls for Discord`
**`developerName`** (≤ 80): set from the verified identity; put the same name here.
**`category`:** `Productivity` (pick from the dashboard's list; Communication if offered).
**`websiteURL`:** `https://subo.gg/` · **`supportURL`:** `https://subo.gg/support/` ·
**`privacyPolicyURL`:** `https://subo.gg/privacy/` · **`termsOfServiceURL`:** `https://subo.gg/terms/`
**`brandColor`:** `#e1287e` (site `--primary`, about 5.5:1 against white) ·
**`brandColorDark`:** `#f34f85` (`--primary-light`, about 4.8:1 against #212121)

**`longDescription`** (≤ 4,000; the Claude description with "Claude" → "ChatGPT"):
> Subo runs conversational surveys, polls, forms and quizzes inside Discord communities and on the web. This plugin lets ChatGPT do the work with you: describe what you want to ask your members, and ChatGPT builds the project, checks its script, and launches it when you say so. When the answers come in, ask ChatGPT what people said.
>
> What ChatGPT can do: create, edit, clone, validate, open, close and delete projects; write a project's script block by block; read responses and Subo's AI analysis; manage members' XP and accomplishments; browse and clone templates; manage webhooks; and read and change community settings.
>
> Every operation is labeled read-only, normal change, Outward (it reaches real people, such as opening a project or granting XP) or Destructive (it deletes something). ChatGPT asks before Outward and Destructive operations. Subo also refuses to delete a project that is still open.
>
> What it can't do, by design: create or delete API keys, change who has access to your community, or connect a new verified-audience source.
>
> Connecting takes the Admin role in a Subo community. You sign in to Subo with Discord, choose one community and an access level (Admin, or the narrower Creator), and approve. One connection reaches one community, and you can revoke it at any time from the Account page of the Subo web app.

The "Things to ask" list from the Claude version moved to `defaultPrompt`.

**`defaultPrompt`** (≤ 3, ≤ 128 each):
1. `Draft a short survey asking members how last week's game night went. Check it, but don't open it yet.` (101)
2. `Summarize the open-text answers from our last feedback project.` (63)
3. `Clone the prediction contest template for Sunday's final.` (56)

**`capabilities`** (≤ 20, ≤ 120 each): `Build surveys, polls, forms and quizzes`,
`Launch and close projects`, `Read responses and AI analysis`, `Manage member XP and accomplishments`,
`Clone templates`, `Manage webhooks`.

**Test cases** (`extensions.com.openai.review.test_cases`; exactly 5 + 3 for the first review).
They assume the ChatGPT test community holds a project named **Server feedback** with
open-text answers and a finished analysis, plus a few members with XP:

| # | Prompt | `tools_triggered` | `expected_behavior` |
|---|---|---|---|
| P1 | List my Subo projects and tell me which ones are open. | list_projects | Lists the test community's projects with each one's status. |
| P2 | Draft a short survey asking members how last week's game night went, with one open question at the end. Check it, but don't open it yet. | create_project, add_block, validate_script | Creates a draft project with the questions, validation passes, and the project stays closed. |
| P3 | Summarize the open-text answers from the Server feedback project and tell me what people liked least. | list_projects, get_analysis | Summarizes the themes from Subo's analysis of that project, without inventing answers. |
| P4 | Clone the prediction contest template and set it up for Sunday's final. | list_templates, clone_template | Creates a new draft project from the prediction contest template; nothing is opened. |
| P5 | Who are the top three members by XP? | list_members | Names the three members with the most XP in the test community, with their totals. |

| # | Prompt | Why it shouldn't act / expected fallback |
|---|---|---|
| N1 | Create a new API key for my community. | Key management isn't exposed by design. Explains that keys are made on the Account page of the Subo web app. |
| N2 | Make the member Alex an admin of our Subo community. | Access levels can't be changed through the plugin. Says so; no tool changes anyone's access. |
| N3 | Show me the responses to a survey in another Discord server. | One connection reaches one community. Says it can only see the connected community. |

Run every case with the test account before submitting, and record the video from those
runs. Shot list: connect and sign in (no codes), then P1 to P5 in order, then one of N1-N3.

**`publication.release_notes`:** `Initial release: build, launch and analyze Subo surveys, polls, forms and quizzes in a Discord community.`
**`publication.countries`:** omit (no restriction) unless the user decides otherwise.
**Translations** (optional; `fr-FR` subtitle ≤ 30): stored but not yet shown by the directory,
so skip for v1.

**Reviewer details** (portal only; fill the brackets): sign-in steps as in the Claude section,
with the ChatGPT community name, but **no fallback mailbox step**: the sign-in has to work with
no verification code at all.
