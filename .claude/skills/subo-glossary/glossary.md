# Subo product nouns — canonical definitions

Each entry: what it is · the legacy term it replaces · **never write** · public-API spelling.

## community
The top-level tenant — one Discord server (guild). Everything (projects, members, webhooks,
API keys) is scoped to a community.
- Replaces: **server**, **guild**.
- **Never write** "server" or "guild" in user-facing copy to mean the tenant. (Only use "Discord
  server" when literally describing the Discord-side object during setup/onboarding.)
- Public API: `community` / `communityId`. For a Discord community the id is the server snowflake.

## project
A survey or poll that collects structured participant responses. `type` is fixed at creation:
`convo` (multi-step conversational survey) or `poll` (single-question vote).
- Replaces: **survey** (as the product noun), **questionnaire**, **form**.
- **Never write** "form" for a Subo project (the anti-form is the whole brand). "Survey" is fine
  as the plain-English category ("run a survey") and in code (`survey`, `serverSurvey`), but the
  named product object in UI/marketing is a **project** (or specifically a Convo or a poll).
- Public API: `project` / `projectId`, `type: convo | poll`.

## script
The ordered list of blocks (questions and content slides) that make up a project. Editable only
while the project is inactive. The authoring surface is the **Script Editor** (kept in English).
- Replaces: **questionnaire**, **question list**, **flow** (as a noun for the block set).
- **Never write** "questionnaire" for the block set.
- Public API: `script`.

## block
One unit in a script — a question or a content/action slide. Types: single_punch, multi_punch,
open_text, open_numeric, content_block, action_block.
- Replaces: **question** (a block is broader than a question).
- **Never write** "question" when you mean any block; use "block" for the general unit and
  "question" only for actual question-type blocks.
- Public API: `block`, with `type` values above.

## analysis
The results layer: computed distributions/stats (free, always current) plus AI summaries of
open-text blocks (async, credit-consuming).
- Replaces: **results engine**, **stats page**.
- **Never write** "the algorithm" or expose internal builder names in copy.
- Public API: `analysis`.

## responses
Participant answer records for a project — one response per completed session, each with an
`answers` array. Immutable once submitted.
- Replaces: **submissions**, **entries**, **answer records**.
- **Never write** "submissions" in UI/API copy; the object is a **response**.
- Public API: `responses` / `responseId`.

## Convo
The conversational survey experience itself — the respondent-facing chat (ConvoChat) and the
`convo` project type. Capitalized as a product name.
- Replaces: **survey chat**, **DM survey**, **the bot conversation**.
- **Never write** "chatbot survey" or lowercase "convo" in copy (it is a proper product noun).
- Public API: `convo` (project `type`).

## poll vs. survey — distinct concepts, never conflate
- **poll** = a single closed question (one vote).
- **survey / Convo** = a conversational series of questions, open or closed.
- **Never** call a poll a survey or vice-versa.
- **Per-language equivalents: `lexicon.json`.** Vendored byte-identical in both repos, like this
  glossary — `subo-site/src/data/lexicon.json` and
  `subo/.claude/skills/subo-localization/lexicon.json`. **Edit one, copy to the other in the same
  change.** Enforced by `npm run check:lexicon` in `subo-site`; rulings T1..T10 in
  `subo-site/docs/authority-roadmap.md`. Prefer it over the `subo-localization` table, which is a
  human-readable mirror and has drifted before.

## member
A platform user (Discord account) linked to a community, with an access level
(admin / creator / member) and a community-scoped XP balance.
- Replaces: **user** (when community-scoped), **panelist**, **respondent** (a respondent is
  anyone who answers; a member is enrolled in the community).
- Public API: `member` / `memberId`; look up by `platform_id` (Discord snowflake).
