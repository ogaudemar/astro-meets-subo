# Terminology architecture

> Moved verbatim from the 2026 roadmap on 2026-11-13. **Canonical home of rulings T1-T11**, cited by
> number from `CLAUDE.md`, both copies of the `subo-glossary` skill, `lexicon.json` and
> `scripts/check-lexicon.mjs`. The per-cell app-string migration lives in the app repo at
> `subo/docs/terminology-migration.md`.


Cross-cutting, like the scale-family launch: it spans the app, the site, and the skills.
Opened because the French wave forced the question and the answer turned out to be a
structural one, not a wording one.

**The problem, stated once.** Subo sells three overlapping jobs (decide / understand /
process a submission) with one product family, and every language has three or four
candidate nouns for them. English hides this because *poll* and *survey* are cleanly split.
French does not: `sondage` is simultaneously the highest-volume term we have (~13,000
impressions) and the least precise, because in French a sondage can have forty questions.
Naming rounds so far have tried to encode *one question vs. many* into the noun. **Nobody
searches that way, and in French it is not even true.**

## The audit that opened this (2026-08-26)

Three French vocabularies are live at once, and no artifact reconciles them:

| Layer | poll | survey / Convo | Authority |
|---|---|---|---|
| `subo-localization` skill (app repo) | **vote** | **enquête** | The ruled table |
| Live Discord commands (user, 2026) | **/sondage** | **/enquete** | What users type |
| Marketing site (`fr.json`, blog) | **sondage** | *drifting, see below* | What ranks |

- **The skill's FR row looked half-migrated.** The user's first translation was poll=*vote
  rapide*, survey=*sondage*; the second was poll=*sondage*, survey=*enquête*. The table's survey
  column matches the current naming and its poll column matches the abandoned one.
  **⚠️ RESOLVED BY A1, and not the way this predicted — see the A1 RESULT block in
  `subo/docs/terminology-migration.md`.** The skill is an *accurate* record of the
  app; the split is inside the app itself, between the command (`sondage`) and the web UI
  (`vote`). This was never documentation drift.
- **`subo-localization` lives only in the app repo.** `subo-glossary` is deliberately vendored in
  both, and its site-repo copy points at `subo-localization` **four times** ("Per-language
  equivalents: see subo-localization"). From this repo that is a dangling pointer to the one
  document that answers the question. **This is why the question keeps recurring.**
- **The site has four phrasings for one product** — **and A1b found English has a fifth**
  ("survey convo", lowercase, in `en.json`), which is where the French ones came from. `fr.json` carries "ENQUÊTES
  CONVERSATIONNELLES" (heading), "enquête conversationnelle" (body), "sondages conversationnels"
  (elsewhere); the 2026-08-26 post added a fourth. **All four violate an existing app-side
  ruling** (below) that nobody in this repo could see.
- **Both French blog posts instruct readers to type `/poll`, `/survey`, `/template`, `/draft`.**
  See ruling T6 for why that is half-wrong rather than wrong, and what the fix is.

## ⭐ THE FRAMEWORK (settled 2026-08-26) — two vocabularies, joined at one point

**This is the section to read if you read nothing else here.** It reconciles the market/SEO
imperative (the words people use for the *need* they have) with the product/marketing mandate
(a clear vision of what Subo actually is). The two were fighting because they were being asked
to share one vocabulary. They get two.

**1. Problem vocabulary (demand side).** What a person calls their need before they know Subo
exists. Many words, localized, job-indexed, evidence-driven: *sondage, questionnaire,
formulaire, quiz, encuesta, Fragebogen*. These are **doors**. They belong in titles, H1s, meta
descriptions, blog topics, command descriptions and directory listings.

**2. Product vocabulary (supply side).** What Subo actually has. **Exactly two nouns: `poll`
and `Convo`.** They belong in the app UI, schema, `llms.txt`, the API and the glossary.

**3. The rule that decides which one gets translated:**

> ### Localize what the platform owns. Brand what you own.

`poll` is **Discord's** primitive and Discord already localized it, so we adopt Discord's word
in every locale (T2b). `Convo` is **Subo's** invention, so it stays invariant everywhere. The
split is not half-hearted localization; it is two different ownership situations.

**4. The reclassification this forces, and it is the useful part: "survey" is a problem word,
not a product word.** It stays as the English door and the brand descriptor (Survey Bot,
`/survey`), but it is not a primitive. `subo-localization` already half-says this with "survey
(a.k.a. convo)". **Nothing needs renaming.** Every existing word just gets sorted into one of
the two buckets, and the errors fall out on their own: *sondage conversationnel* is a problem
word wearing a product word's clothes, which is exactly why it reads wrong.

**5. The join.** Every surface converts problem to product at one named place: *"You came for X.
In Subo that's a Y."* On a page that is the first section under the H1; in the app it is the
command description. **Give it a place or it degenerates into a vibe.**

**6. Do not invent a job taxonomy.** The three jobs (**engage / understand / organize**) are
already the site's three use-case pillars: built, localized, carrying template links. Door words
attach to a pillar *and* resolve to an instrument, which makes it a matrix rather than a list,
because a poll can serve engage or understand. Inventing a fourth axis is the main way this
goes wrong.

## Rulings

**T1. Disambiguate by job, not by question count.** Matches the three use-case pillars, so
vocabulary and IA reinforce each other instead of cutting across.

**T2. The lexicon is per-locale × per-job, NOT one word per locale.**
⚠️ **Amended 2026-08-26 after the market-research objection (user).** An earlier draft of this
table had a single "survey / Convo" column, which collapsed jobs that T1 had just separated and
put Subo in a market-research box. **Every borrowed noun in every language drags in a
market-research frame** that reads wrong for quizzes, application forms and onboarding flows.
`subo-localization` already identified this and already ruled the answer (Convo, untranslated);
the site simply never received it.

**Borrowed nouns are job-specific by nature. That is the feature, not the defect.** No
translated word can span quizzes, forms and research, which is precisely why Convo has to be a
brand noun. French, as the worked example:

| Job / pillar | Door words (borrowed) | Owns (one canonical URL) | Resolves to |
|---|---|---|---|
| decide | **sondage**, **vote** | `/fr/polls`, the poll how-to | `poll` |
| understand | **questionnaire**, **enquête** | the questionnaire how-to | `Convo` |
| organize (get things done) | **formulaire** | `/fr/use-cases/get-things-done` | `Convo` |
| engage | **quiz**, **pronostics** | none yet | `poll` or `Convo` |

`enquête` and `vote` are *activities*; `sondage`, `questionnaire`, `formulaire` are *artifacts*.
That is why they never felt like clean alternatives to each other. **`questionnaire` is one door
among four** and is banned from being the site's general product noun, or appearing in any
string that must also cover a quiz or an application form. Concretely: the questionnaire how-to
is fine as a door, but **`/fr/survey-convos` must not take *questionnaire* as its H1 noun** (DE
and ES already went to *Formular* / *formularios*, which was the same instinct).

**T2b. A locale's poll word IS Discord's poll word.** Fighting the platform's
vocabulary is unwinnable: Discord's UI sets every user's mental model.
⚠️ **Amended 2026-09-28 (user): "no exceptions" is relaxed, and Spanish is the one exception.**
A check of how other platforms translate *poll* (below) found Discord's word is the majority, not
the rule: Meta says *Abstimmung* (DE) and *votación* (ES) across Facebook, Messenger and WhatsApp
(ES WhatsApp: *encuesta*), and X says *question* in French. The user's argument, as a Spanish
speaker: platforms with only a one-question feature lose nothing by calling it *encuesta*, but
Subo has both a poll and a multi-question survey and needs two words. Spanish therefore keeps
**`votación` = poll, `encuesta` = survey, `cuestionario` = quiz**, which is what the app already
says (so A2c is not needed for ES). The cost, a Spanish poll searcher landing on the survey page,
is handled in copy on both pages. German and French stay on Discord's word; German also gains
*Abstimmung* as a second door on `/de/polls/`, the twin of French *vote*.

| Platform (checked 2026-09-28) | FR | DE | ES |
|---|---|---|---|
| Discord | sondage | Umfrage | encuesta |
| X | **question** | Umfrage | encuesta |
| Facebook Groups | sondage | **Abstimmung** | **votación** |
| Messenger | sondage | **Abstimmung** | **votación** |
| WhatsApp | sondage | **Abstimmung** | encuesta |
| Telegram | sondage | Umfrage | encuesta (quiz mode: *Cuestionario*) |
| Reddit | sondage | Umfrage | encuesta |

Sources: each platform's localized help center (Telegram: its translation platform's applied
strings for `Poll`, `NewPoll`, `AnonymousPoll`, `QuizPoll`).

**Parked (user, 2026-09-28): Spanish *entrevista*.** It suits the conversational format, but better
fits the planned gen-AI mode where the script works as a discussion guide rather than a fixed
sequence of questions. Revisit when that ships, not for today's Convo. Trivially verifiable,
and it settles a debate that has now recurred three times. **The user reached this
independently for French** (switching to `/sondage` was aligning with Discord) and it was right.

**Discord's native poll term per locale (user-supplied, 2026-08-26), vs. the `subo-localization`
table. In six of nine locales, Discord's word for POLL is exactly Subo's word for SURVEY:**

| Locale | Discord poll | Subo poll | Subo survey | |
|---|---|---|---|---|
| **PT-BR** | enquete | **enquete** | pesquisa | ✅ aligned |
| **FR** | sondage | vote *(command is `/sondage`)* | enquête | ⚠️ app split, see A1 RESULT |
| **NL** | peiling | poll *(English)* | enquête | ⚠️ untranslated, no collision |
| **ES** | encuesta | votación | **encuesta** | ❌ inverted |
| **DE** | Umfrage | Meinungsumfrage | **Umfrage** | ❌ inverted |
| **IT** | sondaggio | poll *(English)* | **sondaggio** | ❌ inverted |
| **PL** | ankieta | głosowanie | **ankieta** | ❌ inverted |
| **TR** | anket | oylama | **anket** | ❌ inverted |
| **RU** | опрос | голосование | **опрос** | ❌ inverted |

- **Spanish is worse than French ever was**, because the site adds a third word: `/es/polls`
  leads on *bot de sondeos* while `/es/survey-convos` leads on *encuestas*, and Discord says
  *encuesta* = poll. **Spanish poll searchers land on the survey page.**
- **German argues for the site over the skill:** `/de/polls` already leads on *Umfrage-Bot*,
  matching Discord, while the skill says *Meinungsumfrage*. The site is right.
- **`ankietę` is accusative** (from a UI string like "Utwórz ankietę"); the lexicon needs
  nominative *ankieta*. Same for the capitalized *Anket*.
- **The questionnaire solution generalizes.** Nearly every language has a distinct
  questionnaire-noun Discord did *not* take: *cuestionario, Fragebogen, questionario,
  анкета, vragenlijst*. French was not a special case, it was the first instance of a general
  fix. **PL and TR do not resolve cleanly** and are held under T9.
| **Convo** | the product | the differentiation + definitional layers | a title tag or H1 |

**T3. Convo stays untranslated, and "sondage/enquête conversationnel(le)" is retired.** This is
**not a new ruling**: `subo-localization` already requires it in all ten languages, with the
right rationale (every market-research noun drags in a frame that reads wrong for quizzes,
applications and registration forms). The site simply never received it.

**T4. Three layers per page.** Borrowed vocabulary is the door; Convo is what they find inside.
- *Ranking layer* (title, description, H1, H2s): borrowed words only.
- *Differentiation layer* (first section under the H1): where Convo is named and the
  conversation-not-a-form difference is made.
- *Definitional layer* (`llms.txt`, schema, glossary, app UI): Convo as a proper noun, defined
  identically every time. **This is the GEO asset.** We will not rank for an invented category,
  but an LLM will learn a consistently defined one.

**T5. One word owns one URL.** French cannibalization is the live risk: these read as synonyms
to Google even though they are not to a French reader. Every other page using the word links to
the owner rather than competing. Already applied between the two French posts; now a rule.

**T6. Command names: do not rename. Publish both names.** Two separate findings:
- **Slash command names are not a search surface** (typed by people who already installed the
  bot), so stop letting SEO pull on them. `/sondage` is correct and should be locked: Discord's
  own French UI says *sondage*, and fighting the platform's vocabulary is unwinnable. `/enquete`
  is defensible; a third rename costs DB rows, `defaultMessages.py`, ~40 Notion pages, every
  screenshot and both blog posts. Only fold `/questionnaire` in if a French string sweep is
  happening anyway. The one honest argument against *enquête*: in a moderation context it reads
  as *investigation into a member*.
- **⭐ The name a user sees depends on their Discord client locale, not their language** (user,
  2026-08-26). A French speaker with an English client sees `/survey`; the English name always
  works regardless. **So site content must name both** (`/enquete` (ou `/survey`)), in every
  locale. This is an accuracy fix and a coverage win: people search in one language with a
  client set to the other, in both directions.

**T7. What actually disambiguates is the command *description*, not the noun.** These strings
sit next to the command in autocomplete, and are scraped into bot directories, making them one
of the few genuinely dual-purpose app strings. Ours are thin (`Poll_Command_description =
"Create a poll"`). This is the cheapest fix for the clarity problem and needs no rename.

**T8. `defaultMessages.py` is NOT a drift problem, and earlier notes in this roadmap were wrong
to frame it as one.** Correction on the record: `Wizard_comamnd_name = "wizard"` while published
copy says `/draft` is the **intended workflow**, not decay. The developer writes code plus
placeholder copy; the user rewrites copy directly in `user_messages` with no-code tools; the DB
always wins. A row exists for every locale, so the fallback never fires and the code string is
inert.
- **So: do not sync `defaultMessages.py` copy.** It is churn against a string that cannot reach
  a user. This retires the standing "low priority" nag on the subo.ai sweep item above.
- **Two real exceptions.** (i) Strings that would be *wrong* rather than merely unpolished if
  they ever did fire: URLs, prices, tier claims, privacy claims. That is why the subo.ai → subo.gg
  edit was worth making, and it is already made. (ii) **Newly added enums**, where the placeholder
  *is* what ships until it gets styled, which is exactly when nobody has looked.
- **The real cost is documentational, and it has already bitten.** `defaultMessages.py` is the
  only machine-readable inventory of the string surface, so anyone reasoning about the product
  from the code gets the placeholder. That happened twice on 2026-08-26 in this repo. **The fix
  is not to sync the strings; it is to stop the file claiming to be the source of truth**, plus
  give content work a greppable export of the live names (action A3).

**T9. The evidence standard, which substitutes for native review.** There are no volunteer
translators (recorded in the language backlog: "I have no alternative at this point"), so
quality cannot be a judgment call. Make it a test instead:

> **A door word ships only if it comes from Discord's own localized UI, or from search data.
> Never invented.**

Polish and Turkish fail that test today, so they **wait** rather than shipping a guess. This
converts an unresolvable caveat into a rule that resolves itself, and it is the standard the
`subo-localization` skill already gestures at ("flag genuine ambiguities rather than guessing").

**T10. Balance the corpus, not just the page.** Entity signal is built from the corpus in
aggregate, not page by page, so per-page discipline does not protect against a skew. **French
currently has three research-flavored doors shipped (sondage, vote, questionnaire) and zero form
or quiz doors.** That is how Subo ends up read as a French market-research bot despite T2.
Consequence: the French *formulaire* and *quiz* doors are worth seeding **for entity balance
even at low traffic**, which is a stronger argument than the volume-based one this section
carried on 2026-08-26 ("positioning word now, ranking bet later").

**T11. Arrival decides the word. T4, extended from pages to every surface (2026-08-27).**
T4 sorts the *inside of a page* into three layers, which left every surface that is not a page
(nav labels, code defaults, published posts, Discord strings) to be argued one at a time. Three
such arguments in a row resolved the same way, so it is a rule:

> **Convo replaces a door word wherever the reader has already arrived. Door words hold the
> surfaces the reader has not arrived at yet.**

| Reader has NOT arrived → door words | Reader HAS arrived → `poll` / `Convo` |
|---|---|
| title tags, meta descriptions, H1s and H2s | nav labels and in-page links |
| URL slugs | body copy below the fold |
| directory listings, top.gg, social bios | app UI, settings, `llms.txt`, schema |
| blog post titles and target terms | code defaults and placeholder copy |

**The counter-intuitive consequence, and the one that makes the rule worth having: a nav label
carrying a door word is an SEO *liability*, not an asset.** The header and footer render on all
60 pages, so `Survey Convos → /survey-convos/` was 60 instances of sitewide internal anchor text
pushing "survey" at a page the lexicon says does not own it (the how-to does). That is the exact
cannibalization T5 exists to prevent, arriving through a surface nobody was watching because it
looked like navigation rather than SEO. **Renaming it to "Convos" is a small T5 tailwind, not a
cost.** The honest magnitude: internal anchor text is a modest signal, and the reason to do it is
product clarity. The point is that the SEO objection people expect here does not survive contact
with the framework.

**Two corollaries.**
- **A missing door in the nav is fixed by adding a nav item, never by mislabeling a product
  page.** If the nav should carry "survey", it links to the how-to that owns it.
- **`X and Convos` is not the compromise it looks like.** "Surveys & Convos" is the same doublet
  shape A1c is deleting from 31 app cells. A surface picks a layer; it does not hedge.

**Where it was first applied (2026-08-27):** the header/footer nav labels, `BaseHead`'s default
title, and one published post. See A1c.

## Implementation: a data file with a guard, NOT a document

**The markdown skill already proved it drifts** — the FR poll row went stale across two naming
rounds and nobody noticed. This repo already has the better pattern in `src/data/api-surface.json`
plus `npm run check:api`, and `check:hreflang` already proves that parsing `dist/` works.

**One `lexicon.json`, vendored in both repos** the way `subo-glossary` already is (byte-identical
by intent, edit one and copy in the same change). Per locale, per pillar it records: the door
words, the page that owns each, the instrument it resolves to (`poll` / `Convo`), **the bridge
sentence**, and a per-locale denylist. Storing the bridge sentence next to the word is what makes
the framework **generative rather than restrictive**: the conversion copy gets written once per
locale instead of improvised per page.

**`check:lexicon` enforces more than you would expect:**

| Mechanically checkable | Needs a human |
|---|---|
| poll word == Discord's word, per locale (T2b) | whether *kwestionariusz* reads naturally |
| one door word → at most one page title/H1 (T5) | whether the bridge sentence is any good |
| `Convo` absent from every title tag and H1 (T4) | tone and register |
| denylisted phrases absent from the locale JSON (T3) | |
| the resolving product noun present in each page body (T4) | |

The **one-word-one-URL check over `dist/` is the highest-value one**: it is the anti-
cannibalization rule made enforceable, and it is the exact failure the French corpus is now
exposed to.

**The app repo shares the file, not the guard.** `subo-localization` reads its terms from
`lexicon.json` instead of an inline table, and translation batches validate against it.
**The `user_messages` authoring workflow is untouched**, which matters, because it is the part
that works.

## Actions

**Only the site-side half lives here.** The per-cell app-string migration (A1, A1c, A2b, A2c,
A2d, A3, A5, A9, A10-A13, A15, A17, A19-A22) moved to the app repo on 2026-09-05:
**`subo/docs/terminology-migration.md`**, with its English work order at
`subo/docs/terminology-english-inventory.md`. It moved because `user_messages` rows are Discord
bot runtime strings with no URL — never crawled, never cited — so they are product quality
rather than authority work, and they belong next to the exports and the `subo-localization`
skill. **The rulings above stay canonical here** and are cited by number from there; do not
restate them in both places.

⚠️ **Do not let that file's internal priority order pull on this one.** Its "critical path"
means critical to the migration. Nothing in it outranks P0's checkback, P3 or P5.

What is left here is the copy a crawler can actually read, plus the guard:

- [x] **A2. ✅ BUILT AND WIRED IN (2026-08-26).** `src/data/lexicon.json` +
      `scripts/check-lexicon.mjs`, `npm run check:lexicon`, now part of `npm run check` (after the
      build, alongside `check:hreflang`). **Green, with 28 real violations recorded as a baseline.**
      EN / FR / PT-BR filled, per the plan. What it turned out to be worth knowing:
      - **`knownViolations` is a baseline, not permission.** Everything in it is a genuine
        violation that predates the guard; it reports them loudly and does not fail on them, so the
        guard could be wired in **today** and cannot regress. **The job is to empty that object**,
        and each entry names the action that clears it. The guard also tells you when an entry
        stops firing, so paid-off debt gets deleted instead of silently protecting nothing.
      - **T2b is now machine-checked, which is the thing nothing could do before.** The lexicon
        carries Discord's poll word per locale *and* the live app's, on both surfaces
        (`Poll_Command_name`, `Web_InviteTab_Poll`), so the check compares them. **18 of the 28
        baseline entries are T2b failures**, including three locales where the app disagrees with
        *itself* (FR, DE, NL).
      - **T5 needed two passes to be worth anything, and the first version was wrong.** Matching
        door words against `<title>` flags `/privacy/` and `/cookies/` as competing for "survey",
        because the brand descriptor sits in every title. It now reads **H1 only**, skips
        `/templates/` and `/recipes/` (long-tail by design, competitors by construction otherwise),
        and **compares within a page class**: landing-page collisions fail, blog overlap is a note.
        Demanding one blog post per door word would be a worse rule than the problem it solves.
      - **✅ VENDORED, and the dangling pointer is closed.** `lexicon.json` is byte-identical at
        `subo-site/src/data/lexicon.json` and
        `subo/.claude/skills/subo-localization/lexicon.json`; the sync rule is recorded in
        `CLAUDE.md` next to the `subo-glossary` one. `subo-glossary` (both copies, still
        byte-identical) now names **both paths** instead of pointing at a skill the site repo
        cannot read, which was the reason this question kept recurring.
      - **`subo-localization`'s inline table was NOT overwritten with Discord's words, on purpose.**
        A1 showed it accurately records what the app says *today*; rewriting it to the T2b target
        would tell translators to use words the app does not use yet. It is now relabeled as the
        current-state mirror, with Discord's word and a migration status per row, plus an explicit
        **"do not change a poll word on your own"** warning — because in six locales moving poll
        onto Discord's word collides with the survey word unless both move in one edit (A2c).
- [ ] **A3b. ⚠️ FIX THE CHECKBACK REGEX BEFORE 2026-09-08 — DONE, see the P2 block.** It had no
      `vote`, no `quiz`, no `pronostic`, so it was blind to ~490 of the 815 vote impressions we
      just built content for, and to both of the clusters T10 says we need in order to detect a
      research-ward skew. A scheduled routine quotes it verbatim.
- [x] **A4. ✅ SHIPPED 2026-09-06 — both halves. `fr.deny` is deleted from `knownViolations`;
      25 known violations remain, down from 28.** The item said "the four 'conversationnel'
      phrasings"; the guard counted **13 strings**, and the blog markdown the guard cannot read
      held two more.
      - **T3 half, 13 `fr.json` strings.** The nav label and the footer link went to **"Convos"**
        per T11 (they were *Enquêtes conversationnelles* on all 60 pages — the exact sitewide
        anchor-text liability T11 exists to name, and English fixed in A1c). The
        `/fr/survey-convos/` headings and body took **Convo**, feminine, matching the bridge
        sentence and `siteDescription`'s existing "des Convos".
      - ⚠️ **The two meta descriptions did NOT take Convo.** `useCasesResearch.pageDescription`
        and `featuresPage.pageDescription` are the **ranking layer** (T4), so
        *sondages conversationnels* became **door words** — *questionnaires qui ressemblent à une
        conversation* and *sondages et questionnaires en mode conversation* — not the product
        noun. Retiring a phrasing is not the same as replacing it with Convo everywhere; the
        layer decides.
      - **T6 half.** Both posts named `/survey` and `/poll` only. They now lead on `/enquete` and
        `/sondage`, name the English form alongside at the description, FAQ, first body mention,
        step and CTA, and each carries a short note box explaining that **the command name follows
        the Discord client's language, not the reader's**, and that the screenshots are from an
        English client. Two `fr.json` strings had the same defect (`surveyConvos.howSteps[0]`,
        the XP card's `/poll`) and were fixed with them.
      - ⚠️ **CORRECTED 2026-09-06 (user). The French commands are `/brouillon` and `/modele`,
        and they were already live.** The first pass left `/draft` and `/template` in English on
        the grounds that no artifact in either repo records a French name — the absence was real,
        the conclusion was not. **Nothing in this repo knows the localized command names**, which
        is exactly how `/sondage` and `/enquete` came to be user-supplied in T6, and the right
        move was to ask rather than to publish English names on a French page. Recorded here so
        the next pass does not re-derive it: **FR = `/sondage`, `/enquete`, `/brouillon`,
        `/modele`.**
      - ⚠️ **SCOPE, on the record (user, 2026-09-06): the T6 half of A4 should not have been
        on this roadmap.** T6 itself says slash command names are **not a search surface**. Put
        against the 2026-09-05 test — name the URL it changes, the link it earns, or the number it
        measures — the command-naming half names none of them. It is an accuracy fix and product
        quality, the same category the per-cell app-string migration was moved out for.
        **The T3 half passes the test** (sitewide nav anchor text, two meta descriptions, the
        `/fr/survey-convos/` headings) and belonged here. **A4 was one item holding two kinds of
        work, and the authority half is what justified it.** Do not file another item that mixes
        them: if it does not change a crawlable URL, it goes to the app repo.
      - **Two retired phrasings the denylist structurally could not see** were fixed in the same
        pass: *sondages conversationnels* twice in the poll how-to and *questionnaires
        conversationnels* as anchor text in the questionnaire how-to. **`check:lexicon` reads the
        locale JSON only; blog markdown is outside it.** That is a real gap in the guard, not an
        oversight in this pass — see A23.

- [x] **A23. The denylist now reads blog markdown. ✅ DONE 2026-09-08 — and the phrases it was
      written for were already gone.** Scope as opened: run each locale's `deny` rules over
      `src/content/blog/<locale>/` as well as the locale JSON, because the posts are the
      highest-value crawlable surface per locale and were the one place the rule went
      unenforced.
      - **⚠️ A4's two named phrases were not there.** *sondages conversationnels* and
        *questionnaires conversationnels* return **zero hits** in `src/content/blog/fr/` as of
        2026-09-08. The only `conversationnel` left in the French blog is *"blocs d'action
        conversationnels"*, which is the action-blocks feature and correct. Either they were
        fixed and unrecorded, or A4 mis-attributed them. **The guard is still worth having** —
        it found six other things — but the item's stated premise did not survive, which is
        now the third time in three items. Do not cite A4's two phrases again without grepping.
      - **What it actually found: six real violations, and two were invisible.** Lowercase
        `convo` (T3 says capitalized, always) in `convos-in-your-dms.md`,
        `subo-web-app-launch.md` ×3, and **twice inside image alt text** in
        `how-to-create-a-survey-…`. **Alt text is indexed copy and nothing had ever checked
        it.** All six fixed 2026-09-08.
      - **Design: what counts as copy.** The check reads prose, headings, frontmatter
        `title`/`description`, and **image alt text**; it skips what a crawler reads as an
        identifier — fenced and inline code, link and image *targets*, bare URLs, and the
        frontmatter keys holding slugs, tags and paths. Without that split, every
        `/survey-convos/` href and every `/images/blog/DM-convos/` path is a false positive,
        and the check would have been switched off inside a week.
      - **`actFiles` = `actPaths` for prose.** Same per-file, deliberate shape as the German
        `Abstimmung` exception, and it reports stale entries the same way. One is in use:
        `comment-creer-un-sondage-sur-discord.md` carries the H2 *"Sondage ou vote : sur
        Discord, c'est le même outil"*, which exists to tell a French reader that the word
        they searched and the word Discord shows name one thing. That is **T2b's own argument
        written for a reader**, not the instrument doublet the rule bans.
      - **✅ The one open decision was taken by the user, 2026-09-08: capitalize.**
        `dawn-of-convos.md`, the manifesto that coined the word, wrote lowercase *convo*
        seven times (*"We call it a convo"*, *"The future belongs to convos"*). The lowercase
        was the rhetorical device of the coinage, but the post is crawled and cited, and a
        lowercase coinage teaches Google and every LLM that Convo is a common noun — the exact
        dilution T3 exists to prevent. **All seven capitalized; the manifesto still reads.**
        The `tags:` entry was left alone: it is taxonomy, not prose, and the guard skips it.
        **`en.blog.deny` was therefore never left in `knownViolations`** — it was added and
        cleared the same day, so the object is unchanged at 10 entries and the blog check
        enforces from a clean baseline. **The guard bites for real: there is no blog
        exemption anywhere.**
      - `npm run check` green. Both vendored copies of `lexicon.json` updated in the same
        change, per the repo rule.

- [x] **A24. ✅ DONE 2026-09-28** in the DE + ES parity pass (language backlog). Both navs now
      carry the three door words, each pointing at its owner, and a *Survey Convo* deny rule
      guards both files. Original scope, kept for the record: **`de.json` and `es.json` nav still say "Survey Convos".** T11's corollary is explicit
      that `X and Convos` is not a compromise, and A1c deleted the doublet from English while A4
      deleted it from French. German and Spanish still render it on all their pages. One string
      each (`header.product[1].text`, `footer.sections[0].links[0].text`) — but **German's is
      entangled with A18**, which is scoping the whole `Umfrage`/survey question in `de.json`, so
      do it there rather than as a drive-by. Spanish is standalone and cheap.
- [ ] **A6. Apply T4's layer discipline to the existing FR pages** on their next edit. Not a
      dedicated pass; too cheap to justify one and too easy to forget without a rule.
      - ⚠️ **A6 was ALSO named as the fix for `t5.en.form` / `t5.fr.formulaire`
        ("decide which page owns 'form' and move the other off it"). That half is
        WITHDRAWN, 2026-09-05.** Both entries are downgraded from REAL to a considered
        judgment in `lexicon.json`, which now carries the full reasoning and the honest
        counter-argument. Headline: T5's own remedy (non-owner links to owner) was
        **already in place**, the page actually targeting the query is a **blog post** the
        check cannot fail, and there is **no evidence** either landing page draws "form"
        impressions. Re-evaluate against the 2026-09-08 checkback, not before.
      - **The near-miss is the lesson, and it is the third instance this session.** The
        drafted fix rewrote `/survey-convos/`'s H1 from "The Discord form that feels like a
        conversation" to a vaguer app-noun phrasing — trading a concrete door word for one
        that pleased the checker but served no reader — and it got as far as a written
        proposal before anyone asked whether the flagged problem was real. **A guard reports
        a pattern; whether the pattern costs anything is a human read.** `lexicon.json` had
        already said so three times (`t5.en.survey`, `t5.de.Umfrage`, `t5.fr.sondage`) and
        this still happened. Same shape as ITEM 4 and ITEM 7: **verify the premise before
        planning against it.**
      - **✅ What did ship instead (2026-09-05), because it is what T5 actually asks for:**
        `/use-cases/get-things-done/` — the declared owner of "form" — had **no link to
        `/blog/how-to-make-a-discord-form/`**, while `/survey-convos/` did. Added as a
        `blogLink` on section 0 ("WHY A CONVERSATION WINS"), which is the section the post's
        own subtitle argues ("and Why a Conversation Beats a Form"). No page-code change: the
        `section.blogLink` mechanism and `.uc-blog-link` CSS already existed.
        **EN only, on purpose — there is no French translation of that post**, so
        `/fr/use-cases/get-things-done/` has nothing to point at. That absence is also why
        the FR half of the T5 entry cannot be cleared by an edit today: moving
        `/fr/survey-convos` off *formulaire* would leave French holding a door word with no
        page behind it, which T10 makes worse rather than better. **The unblocker for French
        is translating that post**, and it is now recorded as the entry's `clearedBy`.
- [~] **A7. Backfill `lexicon.json` for DE/ES/PT-BR, then IT. — SPLIT 2026-09-02 into A7a and
      A7b, because only half of it was ever gated.** **DE and PT-BR are DONE** (entries exist;
      DE landed with A2c-DE). What remained was ES, IT, NL and RU, plus PL/TR under T9 — and it
      sat blocked as one item because a `locales` entry was treated as all-or-nothing. It is not:
      `doors` is optional in the schema (`row.doors ?? []`), so the evidence-free half can ship
      today. **⚠️ ES is not cosmetic** — it is inverted against Discord (T2b) and Spanish sends
      poll searchers to the survey page. **PT-BR was the model locale**: Discord's word, the
      skill's word and its top measured query (*como fazer enquete no discord*) all agree.
- [x] **A7a. ✅ DONE 2026-09-04.** `instruments`-only `locales` entries for ES, IT, NL, RU, PL and TR. **UNBLOCKED —
      no evidence needed, no migration implied.** Six entries carrying `instruments.poll` (the
      word the app says TODAY, from `app.pollWord`) and `instruments.convo: "Convo"`, with
      `doors` omitted and `deny` empty. **Recording what a locale says is not moving it** — A7a
      changes nothing a user reads.
      - ⚠️ **What this buys is NOT the poll word.** `app.pollWord` already covers all ten locales
        and `check:lexicon` already compares them against `discord.pollWord`; `t2b.es/it/nl/pl/ru/tr`
        are recorded in `knownViolations` today. Anyone claiming the six are unchecked has misread
        the guard (this roadmap did, on 2026-09-02 — see A19).
      - **What it actually buys, in order:** (1) **`instruments.convo` is pinned per locale by a
        HARD-FAIL check** — the T3 branch pushes straight to `problems` and is not routable to the
        baseline, so once an entry exists that locale can never quietly stop saying `Convo`;
        (2) **the locale gains a `deny` list**, which is the mechanism that caught real regressions
        in FR (A16) and DE (A14) and is unavailable to a locale with no entry; (3) the door/T5
        machinery is then one field away when evidence arrives.
      - **Safe to land in one commit:** adding `instruments.poll` fires `t2b.<loc>`, and all six
        ids are **already** in `knownViolations`, so the build stays green and the entries join an
        existing baseline instead of growing it. **The one hard requirement is
        `instruments.convo: "Convo"` exactly** — anything else fails the build immediately, which
        is the intended behavior, not an obstacle.
      - **PL and TR get entries too, and `held` stays.** `held` is about door words, not
        instruments; an entry with no doors is precisely what "held" should look like in the data
        rather than as an absence a reader has to infer.
      - **✅ RESULT 2026-09-04 — six rows added, build green, baseline unchanged.** `check:lexicon`
        now reports **10 locales, 14 door words**. The six new `t2b.<loc>` messages joined the ids
        already in `knownViolations` rather than creating new ones, exactly as the item predicted.
      - **The T3 pin was verified by breaking it, not by reading the code.** Setting
        `tr.instruments.convo` to `Anket` fails the build with `[t3.tr]` and is not routable to the
        baseline. That is the thing A7a actually bought.
      - **`locales` gained a `$about`** documenting the three `status` values (`active`, `seeded`,
        `instruments-only`) and stating why `instruments.poll` records the CURRENT word rather than
        T2b's target: a row holding the target would be tautological and the check could never fire.
      - ⚠️ **`check-lexicon.mjs` had to be hardened first.** All four loops iterated
        `Object.entries(lex.locales)` directly, so adding that `$about` would have been read as a
        locale and hard-failed on `t3.$about` — a message about Convo, pointing nowhere near the
        cause. They now go through a `localeRows` helper that skips `$`-prefixed keys, which is the
        convention the rest of the file already used. **A documentation key should never be able to
        break the guard that reads the document.**

- [ ] **A7b. Door words, the bridge sentence and the deny list, per locale — STILL GATED on
      per-locale search evidence.** ⚠️ **DE and ES went ahead on 2026-09-28 by user decision**,
      seeded under T10 rather than evidenced under T9 (see the DE + ES parity block). Their
      rows carry that in each door's `evidence` field, so a later Search Console export can
      confirm or overturn them rather than having to rediscover why they exist. This is the half T9 governs: a door word carries the page that
      owns it and the query volume behind it, and inventing either is what T9 forbids. Runs as
      Step 0 of the LOCALE-PARITY PLAYBOOK, not standalone, one locale at a time as its Search
      Console export lands. **IT after ES/NL/RU** on the original ordering.
- [ ] **A8. Seed the French `formulaire` and `quiz` doors** once A2 lands. **Justified by T10
      (corpus balance), not by volume** — 24 FR impressions at position 20.8 is the circularity
      this roadmap's own guiding principle warns about, since we have no French page targeting it
      and rank at 20. It is also the job where Convo's difference is most visible, because a form
      is the thing people already dislike.

- [x] **A14. ✅ SHIPPED 2026-08-31 — 30 strings moved, 8 kept, `de.deny` emptied.** The site half of
      A2c-DE, and a **different defect from the app half**: `de.json` never said *Meinungsumfrage*,
      it says *Abstimmung*, which A2b retired as an instrument and kept as the act. See finding 7
      of the A2c-DE EXECUTION SCOPE block.
      - **It needs no decision and no gate.** The target word is *Umfrage*, which is Discord's,
        the measured one (150 imp vs 44), and already what `/de/polls/`'s own H1 says.
      - ⚠️ **Not a find/replace.** Keep the act: `abstimmen` and `Stimme` are correct in 11 strings
        and must survive. Judgment cases exist — *Governance-Abstimmungen* and *Community-
        Abstimmungen zur Auswahl einer Führungsperson* describe real-world votes, not Subo polls,
        and should keep the word. This is the same act/instrument test that saved nine French cells
        in A2b (i).
      - **The guard is already wired**: `de.deny` in `knownViolations` fires on all 37 today.
        Emptying that entry is how this item is declared done.
      - **Also fix `pollsPage.sections[3].cards[5].desc`** while in the file: *Stimme* is being used
        for English *voice* next to *Stimmabgabe*.
      - **Independent of the A2c-DE decision** — different repo, different surface, no command
        names involved. It can ship first, and probably should: it makes the German site consistent
        with the word the app is about to move onto.
      - **✅ Done. See the A14 RESULT block below.**

- [x] **A16. ✅ SHIPPED 2026-08-31 — 7 strings, and the premise below was wrong.**
      ⚠️ **Read the A16 RESULT block before believing the rest of this item.** It was written from
      A14 by analogy and got the central fact backwards: French `vote` is a **declared door word**
      (815 imp, `resolvesTo: poll`), not a retired one, so the `actPaths` plan named below is
      exactly what A16 could not do. The defect turned out to be narrower and different in kind:
      an **inversion**, not a retirement. Kept unedited as a record of the wrong guess.

- [ ] ~~**A16 (as originally scoped). `fr.json` uses `vote` as an instrument — the French A14, and currently unguarded.**~~
      Found while executing A14, which is the point: the two files have the same defect and only
      one of them was being checked. `priceTable.cardFeatures[0][1]` is *"Sondages, votes & quiz"*
      for EN *"Surveys, polls & quizzes"*; `priceTable.tableData[4][0]` is *"Sondages et votes
      ouverts ou programmés"*; `surveyConvos.heroSubtitle` is *"Pas juste un vote"*.
      - ⚠️ **`fr.deny` has no `vote` rule**, so unlike German this was never counted and the real
        number is unknown. **Scope it by sweeping the file, case-insensitively** — A14's 37th string
        was an all-caps heading a case-sensitive grep missed.
      - **A2b (i) is not a reason to skip it.** A2b (i) applied the act/instrument test to nine
        cells and kept them; it did not sweep `fr.json`, and the cells above are instrument uses it
        never looked at.
      - **The mechanism already exists**: add a `vote` deny rule with an `actPaths` allowlist for
        the genuine act uses, exactly as `de` now carries for `Abstimmung`. French *vote* is the
        act/instrument split the T-rulings have cited since A2b — this is where it gets enforced
        instead of asserted.
      - ⚠️ **Watch the pairs.** French's survey half is `sondage`, so *"Sondages, votes & quiz"*
        cannot simply become *"Sondages, sondages & quiz"*. Same forced pairing A14 hit; the FR
        answer is `Convo`, and `fr.deny` already wants the retired conversational-survey phrasings
        gone (3 open entries in `knownViolations`). **Consider doing both in one edit.**

- [x] **A18. ✅ DONE 2026-09-28, site half**, in the DE + ES parity pass (language backlog).
      Survey-sense *Umfrage* went to **Convo** in body copy and **Fragebogen** in the ranking
      layer; *Umfrage* now means the poll across `de.json`. Every remaining *Umfrage* is a poll,
      except *Umfrageplattformen* in the founding story, which names the real-world industry.
      It did not wait for A15: the app repo's own rule is that a locale's survey *noun* never
      did, only sentence-level refresh. Original scope, kept for the record:
      **The German site still says `Umfrage` for the survey — 73 strings.** ⚠️ **A14 filed this
      as "the site half of A11-DE" and that was wrong.** Of the 73 `de.json` strings carrying
      `Umfrage` whose English never says *poll*, **zero say *project*** and **65 say *survey***.
      This is **the survey vacate**, the site counterpart of what A2c-DE did to the app — not the
      project umbrella.
      - **The collision is real and it is on the poll's own door.** `/de/polls/` owns `Umfrage`
        (150 imp, position 1.0, Discord's word). Marketing prose using the same noun for the survey
        is the exact ambiguity A2c-DE spent 207 cells removing from the app.
      - **`de.json` says `Convo` in 16 strings and `Umfrage` in 117.** The German site is still
        mostly pre-Convo prose, and A14 only moved the strings where a poll/survey pair forced it.
      - ⚠️ **This one is not "volume, not judgment".** The English source often says *survey* as the
        plain-English category, which the glossary explicitly permits — so each string needs the
        instrument/category test, and a blanket `Umfrage` → `Convo` would read as product-speak in
        marketing copy. **Closer to A15's shape than A11's.** Scope it after A15 settles the English.


## ⭐ A14 RESULT — the German site now says `Umfrage`, and the act survived (2026-08-31)

**37 strings carried `Abstimmung`; 29 moved to `Umfrage`, and 8 stayed because they are the ACT.**
`de.deny` is deleted from `knownViolations` — 23 known violations down to 22, the second baseline
entry paid off in three days after `t2b.de`.

**What moved.** The nav label (`footer.sections[0].links[2].text`, *Abstimmungen* → *Umfragen*,
pointing at `/de/polls/`), `siteDescription`, `footer.brandDescription`,
`useCasesEngagement.pageTitle`, `pollsPage.pageDescription`, `about.pageDescription`, and the
`features` / `usecases` / `priceTable` / `featuresPage` copy around them. The page and its own nav
label finally agree: `/de/polls/`'s H1 already said *Umfrage-Bot*.

**⭐ The 37th string was invisible to a case-sensitive scan.** `features.list[1].title` is
**`ABSTIMMUNGEN, DIE MEHR KÖNNEN`** — an all-caps tile heading. Grepping for `Abstimmung` found 36;
the guard, which lowercases, found 37, and the difference was the loudest string on the homepage.
**Scan case-insensitively, or the biggest type on the page is the one you miss.** This is a fourth
entry in the A2c-DE list of shapes that hide from a prose scan.

**⭐ The pairs are where the real decision was, and A2c-DE had already made it.** Eight strings said
*poll* **and** *survey* in one sentence — `"Umfragen, Abstimmungen & Quiz"`,
`"Abstimmungen und Umfragen duplizieren"`, `"Subos Abstimmungen, Umfragen und Quizze"`. Moving poll
onto `Umfrage` without moving the survey half would have printed the same word twice. **They took
`Convo`**, exactly as finding 6 of the A2c-DE EXECUTION SCOPE block predicted for the app
(*Convos und Umfragen*). Two more resolved to **`Projekt`** because the English already said
*project* (`priceTable.tableData[3][0]`, `[10][0]`) — those are A11-DE's shape, arriving early
because the collision forced them.
- ⚠️ **This is why A14 could not be "36 strings" in isolation.** Same lesson as A2c-DE finding 5:
  the poll rename and the survey vacate are **one edit**, and the pairs are what proves it.
- **`de.json` says `Convo` in 8 strings and `Umfrage` in ~100.** The German site is still mostly
  pre-Convo prose; A14 only touched the strings where the collision forced it. ~~**The rest is the
  site half of A11-DE and is not yet scoped.**~~ ⚠️ **Wrong, corrected by A11-DE:** of the 73 whose
  English never says *poll*, **zero say *project*** and 65 say *survey*. It is the survey vacate,
  filed as **A18**.

**⭐ The guard learned the act/instrument split instead of being baselined around it.**
`check-lexicon.mjs` deny rules now take **`actPaths`**, a per-path allowlist. The eight survivors
are German for *vote*, not for *poll*: two real-world governance votes (`usecasesList[12]`,
`usecasesList[23]`, both named in advance by the A2c-DE RESULT block), `useCasesGetThingsDone.examples[5].text`,
two testimonials, and three *"More than a quick vote"* / *"fine for a snap vote"* headings that
mirror the English word exactly.
- **Why per-path and not a whole-locale baseline:** a baseline would have hidden regressions in the
  other 29. Every exception has to be typed out, and **a listed path whose string no longer carries
  the phrase is reported as stale**, so the allowlist cannot rot into a second baseline.
- **This mechanism is reusable and French will want it.** `fr.json` uses *vote* as an instrument in
  the same places German used *Abstimmung* (`"Sondages, votes & quiz"`, `"Pas juste un vote"`,
  `"Sondages et votes ouverts ou programmés"`) — the identical defect, one locale over, and
  **currently unguarded because `fr.deny` has no `vote` rule.** ⚠️ Worth scoping as its own item
  before assuming A2b (i) settled it: A2b (i) tested nine cells, it did not sweep the file.

**Also fixed while in the file**, as the scope block asked: `pollsPage.sections[3].cards[5].desc`
rendered English *voice* (tone) as **`Stimme`** in a sentence that goes on to say *Stimmabgabe*.
German *Stimme* is both *voice* and *vote*; the reader got the wrong one. Now **`Tonalität`**.

**⛔ `Blitzumfrage` stayed out.** EN *"Snap polls, hot takes, and meme brackets"* was
*Blitz-Abstimmungen* and became **`Schnelle Umfragen`**, not *Blitz-Umfragen* — the deny rule from
A2c-DE finding 5 held under the one pressure that would actually have broken it, a sentence whose
English wants a punchier word.

## ⭐ A16 RESULT — French was inverted, not polluted, and the analogy to A14 was wrong (2026-08-31)

**7 strings fixed.** `fr.json` called the **poll** a `vote` and the **survey** a `sondage`, while
`lexicon.json` says the poll **is** the `sondage` and the survey is a `Convo`. Same inversion
German's app had between `Meinungsumfrage` and `Umfrage` — one locale over, on the site instead of
the app.

**⭐ The item as scoped yesterday was wrong, and the way it was wrong is the lesson.** A16 was
written straight off A14: *"`fr.json` has German's exact defect… add a `vote` deny rule with an
`actPaths` allowlist."* But **`vote` is a declared French door word** — 815 impressions,
`resolvesTo: poll`, folded into the sondage post on 2026-08-26 — and it is also correct French for
the act. `Abstimmung` was **retired**; `vote` is **load-bearing**. Denying it would have attacked
one of French's own doors.
- **⭐ The general lesson: a locale's defect is not portable just because its shape rhymes.** A14
  finished with *"French will want this"*, which was right about there being a defect and wrong
  about every property of it. **Check the target locale's own lexicon row before assuming the
  previous locale's remedy applies** — the row is right there and it says `vote` is a door.
- **The sweep is what caught it.** 33 strings matched `\bvote`; **26 of them are the act and
  correct** (*"Chaque vote, c'est un membre qui choisit de participer"*, *"Choisir qui peut voter"*,
  *"ne font que compter les votes"*). Only 7 were the instrument, and all 7 were the same inversion.
  A find/replace would have wrecked the page.

**Where the inversion lived: the pricing table, and two sitewide strings.** `priceTable` accounted
for 5 of 7 (*"Sondages, votes & quiz"* for EN *"Surveys, polls & quizzes"*; *"Sondages et votes
ouverts ou programmés"* for *"Polls and surveys open or scheduled"*), plus `siteDescription` and
`surveyConvos.heroSubtitle` (*"Pas juste un vote"* for *"Not just a poll"*). **`pollsPage` was
already correct** — *"Subo est le bot de sondage Discord qui transforme un sondage en quiz"* — so
the page that owns the poll never had the bug, and the pricing table quietly disagreed with it.
- **The pairs forced the survey half again**, third time in three items: three of the five
  `priceTable` rows took **`Convo`**, and two took **`projet`** because the English already said
  *project*. **A14's pairing lesson is now locale-independent.**
- **Bonus: `siteDescription` also carried a retired A4 phrasing** (*"sondages conversationnels"*),
  cleared as a side effect. `fr.deny`'s `sondages conversationnels` rule went 3 → 2 and the
  `knownViolations` note went 14 → 13.

**⭐ The guard is five collocation rules, and it deliberately is not `actPaths`.** After the fix
there are **26 act uses and 0 violations** — an `actPaths` allowlist would have been 26 exceptions
guarding nothing, which is precisely the "baseline in disguise" that `actPaths` exists to prevent.
So `fr.deny` gained rules on the exact phrasings the inversion produced (`sondages et votes`,
`sondages, votes`, `sondage ou vote`, `des votes, des sondages`, `juste un vote`). All five fire
zero times today.
- ⚠️ **Brittle to rephrasing, on purpose, and that is the honest limit**: a *new* inverted phrasing
  will not be caught. The alternative was a schema flag (`uiRole: "door-only"` — *may rank, must
  never name the instrument*) that would have been a documented intention rather than a check.
  **The gap is real and worth naming: `lexicon.json` cannot currently express "door word, never the
  instrument's name in UI copy",** which is what `vote` actually is.

**⚠️ Found in passing, not fixed: the `examples` arrays are reordered between EN and FR.** Same
length and same set in all three use-case pages, different index order (EN
`useCasesGetThingsDone.examples[8]` is *"Collect RSVPs"*, FR's is *"Organiser un vote de
gouvernance"*). Nothing is broken — they are independent per-locale lists — but **any tool that
compares locales by path will silently mis-pair them**, and `actPaths`/`exemptPaths` allowlists are
path-keyed, so an exception can drift onto a different string. Worth knowing before writing the
next path-keyed guard.

**The `questionnaire` half of this branch's name is not a cleanup.** All six `questionnaire` strings
in `fr.json` mirror an English `questionnaire` exactly, and it is a declared door word (314 imp,
`resolvesTo: convo`, owns `/fr/blog/comment-creer-un-questionnaire-sur-discord/`). Nothing to do.


---

