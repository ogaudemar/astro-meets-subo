---
name: subo-glossary
description: >-
  Single source of truth for Subo product terminology, canonical naming, capitalization,
  and tone. Use this WHENEVER writing or editing Subo prose in English — UI strings, settings
  labels, error and success messages, respondent/Convo text, marketing content, public-API
  descriptions, AND internal docs/engineering write-ups, which have a habit of being published
  later — so app strings and marketing never drift apart.
  Consult it before choosing a product noun (community, project, script, block, analysis,
  responses, Convo, poll vs. survey), deciding capitalization, or picking a term to keep
  in English. It resolves legacy-vs-current naming and notes where the public API vocabulary
  deliberately diverges from internal code. For translating strings into other languages,
  use the subo-localization skill (this covers the English source of truth only).
---

# Subo Glossary

Subo is a Discord-first, Gamified Conversational Data Collection Platform. Brand belief: the best
interactions with members feel like conversations, not like forms. This skill governs the **English source** copy
so every surface uses the same words. For non-English translation, use **subo-localization**
(app repo only). **The per-locale terminology record is `lexicon.json`**, vendored byte-identical
in both repos like this glossary: `subo-site/src/data/lexicon.json` and
`subo/.claude/skills/subo-localization/lexicon.json`. It carries door words, the page that owns
each, bridge sentences and denylists, and is enforced by `npm run check:lexicon` in `subo-site`.

## Canonical product nouns

The full noun table — each term, the legacy word it replaces, an explicit "never write X"
line, and its public-API spelling — lives in **glossary.md**. Read it before naming anything.

Quick reference:

| Current term | Replaces (never write) | Public API |
|---|---|---|
| community | guild (and see the note below on *server*) | `community` |
| project | survey*, questionnaire, form | `project` (`type: convo` \| `poll`) |
| script | questionnaire, question list | `script` |
| block | question | `block` |
| analysis | results engine, stats | `analysis` |
| responses | submissions, answer records | `responses` |
| Convo | survey chat, DM survey | `convo` (project type) |
| poll | — (a poll is NOT a survey) | `poll` |

\* "survey" stays as a plain-English word for the *category* and inside code identifiers; it is
**not** the product noun for a Subo project in UI/marketing copy. See glossary.md.

### community vs server: a scope distinction, not a synonym

**`community` is the broad term across platforms. `server` is the specific Discord one.**
They are not interchangeable and "server" is not a legacy word to be corrected away:

- Use **community** for the product noun and anywhere the sentence should hold true beyond
  Discord: UI strings, settings labels, the public API, and anything that will still be
  accurate once YouTube, Twitch, Steam, Patreon, Roblox, Reddit or other communities are live.
- Use **server** when you specifically mean a Discord server, especially in copy written for
  Discord owners who call it that themselves: social posts, directory listings, top.gg,
  acquisition pages. "Your server is about to get busy again" is correct and "your community
  is about to get busy again" reads like product jargon.
- **`guild` stays banned** in all user-facing copy, except to describe specifically a gaming guild (which may have a Discord server). It is the Discord API's internal word.

The rule of thumb: if swapping in a non-Discord platform would make the sentence wrong, you
want *server*. If it would still be true, you want *community*.

**Public API divergence is intentional.** The public API says `community` / `project` / `block`
where internal code still says `server` / `survey` / `question`. Do **not** "correct" API
vocabulary back to the internal terms — the divergence is by design and documented.

## Capitalization & terms kept in English (all languages)

- **Always capitalized:** Subo, Discord, Convo, Outro, Spotlight, Script Editor, XP (all-caps).
- **Lowercase in running text:** community, project, script, block, analysis, responses, poll,
  survey — capitalize only as a UI label or at the start of a sentence.
- **Kept in English across every language:** Subo, Discord, XP, Outro, Spotlight, Script Editor,
  Convo. Also: slash commands (`/edit`), emoji syntax, `webhook`, `skip logic`, `block`.
- `questionaire` is a frozen misspelling in the API path — do not "fix" it.

## Spelling: US English everywhere

**All English Subo copy is US English.** Web app UI strings, respondent/Convo text, error and
success messages, marketing pages, blog posts, docs, recipes, templates, `llms.txt`, public-API
descriptions. Write *categorize*, *personalize*, *organize*, *customize*, *summarize*,
*behavior*, *color*, *favorite*, *analyze*, *center*, *labeled*, *program*, *canceled*, never
their British forms. Only deviate when the user says so explicitly for a given surface.

Three things this rule does **not** touch:

- **Code identifiers, API fields, JSON payloads and enum values.** If a variable is named
  `favourite_game` in the app, it stays `favourite_game` in every sample and walkthrough. Copy
  fidelity with the running product beats spelling consistency.
- **Quoted UI strings.** Quote what the interface actually says; fix the interface instead.
- **Non-English locale files.** French `utilisateur` / `analyser`, German `Analysen` and the
  like are just those languages.

Note that *analysis* is the same word in both (and is the canonical product noun above); the
British form to watch is the verb *analyse*.

## Tone by surface (one line each)

| Surface | Voice |
|---|---|
| Admin / web UI (settings, labels, buttons) | Professional, imperative; functional first, personality second. Settings are tools, not conversations. |
| Respondent / Convo experience | Warm, friendly, human — a great community manager talking. |
| Error messages (in-flow) | Playful, light, with emoji; never scold the user. |
| Success messages | Enthusiastic (`🔥 Done! 🔥` energy). |
| Marketing / catalog copy | Outcome-focused, warm, punchy; lead with the benefit. |

Never use the "—" em dash in user-facing copy. Full voice + per-language rules: subo-localization.
