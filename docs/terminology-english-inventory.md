# English `user_messages` terminology inventory — the A1c work order

Companion to **[authority-roadmap.md § TERMINOLOGY ARCHITECTURE](authority-roadmap.md#-terminology-architecture--disambiguation-as-an-authority-lever-opened-2026-08-26)**.
This file is the cell-by-cell execution list for **A1c**; the roadmap holds the reasoning.

**Source:** `<TRANSLATIONS_DIR>/user_messages_all_2026-08-18.xlsx`, English (`en-US`) column,
2,568 rows. **~94% of active communities render English** (see A1b), so this is the primary surface.

> ⚠️ **Do not execute this as a find/replace.** The audit's main finding is that the 31 doublet
> cells are **not one defect**. Three different things are going on and one of them must not be
> touched at all. Classification first, rewrite second.

---

## ✅ DONE — uploaded and verified in the DB (2026-08-29)

**A1c is closed.** 42 keys × 9 locales, 378/378 cells, `verify_tr.py` clean, English approved
through v4, uploaded, and then **checked against the post-upload re-export rather than against the
build report**: `verify_upload_landed.py` vs `user_messages_stage_uploaded.xlsx` reports
**420/420 cells landed, 0 blanked, `ro`/`uk` untouched.**

⚠️ **Verify by re-export, every time.** The build script's report says what we *intended* to ship;
only the export says what the DB *holds*. `verify_upload_landed.py` is written to be re-pointed at
the next batch — change the three filenames at the top.

**⚠️ The re-export also carries 56 new keys** (`Web_InviteTab_Surface_*`, `Web_Account_Answers_*`
and others) added by the app repo, plus one removed key. **They are untranslated and are the next
batch's input.** They are not A1c and should not be retrofitted into it.

The rest of this file is the work order as executed, kept for the rulings it produced.

**⚠️ The working files are NOT in either repo.** `user_messages` is a database table, so no repo
path owns this work. It lives in:

```
Subo shared/Messages Translations/A1c-work/
```

| File | Role |
|---|---|
| `a1c_translations_progress.csv` | **Start here.** 42 rows × 9 locales, each marked `translated` or `NOT YET TRANSLATED` |
| `tr_batch1.py` … `tr_batch6.py` | the translations; batch 1 is finished cells, 2-6 are fragment pairs |
| `apply_fragments.py` | resolves fragment batches and asserts every fragment exists in the live cell. **`FRAGMENT_BATCHES` here is the one list of batches** — add a batch to it and both other scripts pick it up |
| `consolidate.py` | run it to print what is outstanding and rebuild the progress CSV |
| `verify_tr.py` | mechanical checks over **every** batch (no argument) or the ones you name |
| `all_locales.json` | the 2026-08-18 export, all 10 columns, so nothing needs re-reading from xlsx |

⚠️ **Run everything with `PYTHONIOENCODING=utf-8`.** Windows' console codec is cp1252 and the
scripts print Cyrillic and Turkish; without it a *reported problem* dies in the traceback that
prints it, so a failing batch can look like a crashing script.

### Batch 6 — the three role / network cells (2026-08-28)

`Setup_server_admin_role`, `Setup_server_creator_role`,
`Setup_server_allow_network_push_prompt`. 27 cells, resolved clean. **⚠️ It found that some locale
cells are not translations of the English at all**, which changes what the remaining 13 keys should
be expected to cost:

- **`Setup_server_creator_role` is a bare stub in DE and PL** — a bold header and the
  current-setting lines, no explanation at all. Written out in full from the approved English.
  The fragment method still applies (the pair is anchored on the header, so the assertion holds),
  and nothing shipped is discarded, because nothing was there.
- **`Setup_server_admin_role` in RU wears the *creator* cell's 🎨 and its "(необязательно)"** —
  copy-paste from the neighbouring setting, on a role that is not optional. Both fixed.
- **Typos fixed in the same edit**, per the standing decision: NL *"kunnen gebruikers mij en."*
  (the verb is missing) and *"Zorg ervoor dat deze toestemming heeft"* (the noun is), TR
  *"yapılandırmalana"*, DE *"fpr"* and *"Diese Umfragen/Umfragen"*, PT-BR *"canal di Criador"* and
  *"dêem"*. Register: NL `u` → `je`, TR `-siniz` → `-sin`, PT-BR European `Certifica-te` / `Queres`
  → the `você` forms the rest of the column uses.
- **⛔ Labels were NOT renamed**, though two read oddly: DE *"Rolle für Umfrageleiter"* and RU
  *"Роль управляющего опросами"* name these roles in other cells too, the settings summary among
  them. That is the `Survey channel` lesson — a label rename is its own scoped decision.

### ⭐ Batch 7 — the first full-refresh batch, and the ruling's evidence (2026-08-28)

Five cells, 45 cells of text, resolved clean: `Setup_server_Q6_channel_change`,
`_Q10_participants_setup`, `_Q19_default_invite_change`, `_anonymous_mode`,
`_invalid_bot_write_perms`. **Every one of them justified the method change on its own:**

- ⭐ **`Setup_server_invalid_bot_write_perms` in DE, IT, PT-BR and RU is a translation of a
  different, older English string** — two bullets about message permissions, no channel list at
  all, where today's English lists four channels and links a tutorial. There was no fragment to
  patch and no way a patch could have produced the right cell.
- **The FR cell of that key ships a half-translated heading**, live:
  *"Problème avec un salon défini Issue with a channel defined in Settings!"*
- **DE's `Q6_channel_change` says `[Kanal]` where the token is `[Channel]`.** The translator
  translated the merge token, so that line has been rendering the brackets literally.
- **PL repeats the permissions URL twice** in the same cell; **`CompleteCount` is undocumented** in
  five locales' `Q19` even though the field works.

**Decisions taken here that later batches must follow:**

- **Command names come from the export, never from intuition** — `Poll_Command_name` and
  `Survey_Command_new` per locale (de `meinungsumfrage`/`umfrage`, es `votación`/`encuesta`,
  fr `sondage`/`enquête`, it `poll`/`sondaggio`, nl `opiniepeiling`/`enquête`,
  pl `głosowanie`/`ankieta`, pt-BR `enquete`/`pesquisa`, ru `голосование`/`опрос`,
  tr `oylama`/`anket`). ⚠️ **DE is `meinungsumfrage` with the `s`**: the export still shows the
  pre-A2b spelling. This is the data A3 wants to make greppable, and it was worth the detour.
- **`</settings:980107102590754887>` stays verbatim in every locale.** It is a command mention
  resolved by ID and NL and TR already ship it. Locales that wrote `` `/einstellungen` `` instead
  were rendering a code span, not a link.
- ⭐ **The new labels are chosen once, here, because the `align` blocks must agree with them**:
  Participant channel → Teilnehmerkanal · Canal de participantes · Salon participants · Canale
  partecipanti · Deelnemerskanaal · Kanał uczestników · Canal de participantes · Канал участников ·
  Katılımcı kanalı. Participation Role → Teilnahmerolle · Rol de participación · Rôle de
  participation · Ruolo di partecipazione · Deelnamerol · Rola za udział · Cargo de participação ·
  Роль за участие · Katılım rolü. **The per-project *role reward* keeps its own name in the same
  sentence**, since the English distinction is the point of the rename.

**And it caught two more bugs in `verify_tr.py`, both of which were the check being too crude:**

- **Six "placeholder LOST" reports were all correct drops** — `[Kanal]` (never a real token) and
  `[BotName]` in the four cells that translated the older English. The script now carries a small
  `DROPPED_ON_PURPOSE` set **with a reason per entry**, because the default reading of a vanished
  placeholder must stay "something broke".
- ⚠️ **The FR retired-word check banned *vote* outright, which contradicts A2b.** *Vote* is correct
  French for the **act** and wrong for the **instrument**, and **the English column is the
  classifier**. The check now allows FR *vote* exactly where the English says vote/voting/voters —
  which is what let `Setup_server_anonymous_mode` ("Individual votes and answers") pass honestly
  instead of by exception.

**Two defects the verifier caught, both in already-"finished" work:**

1. ⭐ **`Poll_edit_confirm` FR was still half-migrated.** English says **poll** three times; French
   rendered two of them as *"sondage de type 'vote rapide'"* — the pre-A2b hybrid, the retired
   *vote* instrument word wearing a suffix. Batch 5 fixed the mode line and walked past both.
   Fixed in `tr_batch5.py`. **The lesson generalizes: A2b's FR sweep and A1c's cells overlap**, so
   a cell can pass one pass and fail the other.
2. **`verify_tr.py` had only ever been run on batch 1**, and hardcoded it. Running it over all six
   showed its placeholder check was wrong: it compared each locale's tokens to **English**, which
   flags divergence that predates A1c (locales that never mentioned `[AdminChannelName]`, or that
   add `[BotName]`). **The baseline is now the live locale cell, and only a LOST token fails** —
   a gained one is usually the point. Locale-vs-English divergence is printed as a note. 38 notes,
   0 problems.

### ⭐ METHOD CHANGED — full refresh, not fragment replacement (user, 2026-08-28)

**There is no mandate to preserve the legacy translations, and the earlier method assumed there
was.** The user's account of how the locale columns were actually built:

> Translators did not always keep up with the pace of changes and experiments in English. Minor
> copy edits almost never went back to them, and new translation work was usually **new strings
> only**. Some cells were translated several years ago.

So a locale cell is **not** a faithful rendering of today's English that needs one clause corrected.
It is often a rendering of an English string that no longer exists. **Prefer a real refresh from
the approved English plus the current glossary strategy.**

This retires the batch 2-6 rule and inverts its reasoning:

| | Old rule (batches 2-6) | ⭐ Now |
|---|---|---|
| Default | fragment replacement, asserted against the live value | **retranslate the cell from the approved English** |
| Untouched text | stays byte-identical by construction | **re-read; keep it only if it is still right** |
| Justification | "full retranslation throws away shipped quality" | **the shipped text is frequently years stale, so there is often no quality to throw away** |

**Batch 6 hit the wall this ruling removes.** `Setup_server_creator_role` was a bare header in DE
and PL, and had to be written out in full anyway; RU's `Setup_server_admin_role` carried the wrong
setting's emoji. Those were treated as exceptions to the method. **They were the method.**

**Fragment replacement is still allowed where it is genuinely the right tool** — a long cell whose
surrounding paragraphs are demonstrably current, or the `align` blocks, where the point is to move
one label without disturbing measured padding. It is no longer the default, and `apply_fragments.py`
keeps working for the batches that use it.

⚠️ **The 29 keys already shipped were done under the old rule**, so they are terminology-correct and
not necessarily *fresh*. They are worth a re-read pass against this standard; it is cheap next to
redoing them and is tracked as its own step below rather than silently assumed done.

**The last 8 keys landed in batches 8, 9 and 10 (2026-08-29).** What they added to the record:

- **Batch 8 (full refresh):** `admin_channel_pinned_message` was **stale in all nine locales** —
  six translate a one-sentence version with no command list, RU translates a third version with a
  settings summary and three merge tokens no English version ever had. ⚠️ **NL's command mentions
  were broken by stray spaces** (`</start-stop: 116…>`, `</delete:1 162…>`, `< /premium:…>`); a
  mention containing a space is not a mention, it is literal text. Also `SurveyBuilder_use_poll_mode`
  (Class C, both nouns kept, survey → Convo) and `SurveyBuilder_name_survey`, where **RU was
  missing the 50-character limit** the English states.
- **Batch 9 (fragments, deliberately):** `HelpMessage_content` and `Welcome_dm_text` are the one
  case the ruling still reserves for fragments — recently translated, matching today's English line
  for line in all nine locales, and long. Rewriting 18 accurate cells to change one line each would
  risk more than it fixes. ⚠️ Both cells confirmed **DE uses *Abstimmung*** (A2b's third German
  word) and **FR uses *vote*** for the instrument, in cells A2b's sweep did not reach because they
  belong to A1c.
- **Batch 10 (the `align` cells): the padding is COMPUTED, not typed.** Each block is declared as
  labels and values and laid out at *widest label + 1*, the same rule the English follows. No literal
  run of spaces exists in the source, so no locale can be misaligned by a typo and adding a row
  cannot silently break a block. Three labels were then shortened because they made the block
  wrap: RU *Результаты в реальном времени* (30 chars, pushing the settings summary to 69 columns
  against English's 59), and the DE/NL "XP per vote in a poll" labels, which now match the wording
  their own `Xp_Settings_Summary` row uses. **Every locale is now within six columns of English.**

⭐ **The verifier caught a mistake of mine in batch 10**: the German `Voting Button` row read
*Abstimmungs-Button*, and *Abstimmung* is the DE poll noun A2b retired. The row means the **act** of
casting a vote, so it became *Stimm-Button* — the same act-vs-instrument distinction the FR *vote*
gate encodes, arrived at from the other direction.

**Standing decisions to carry forward:**
- **⭐ Refresh, don't patch** (user, 2026-08-28) — see the METHOD CHANGED block above. The legacy
  text carries no mandate.
- **Simplify in every language, not just English** (user, 2026-08-28). Each cell takes three passes:
  terminology, the repetition English dropped, and **formal → informal register** where DE/NL/TR
  drifted (`Sie` → `du`, `U heeft` → `Je hebt`, `-iniz` → `-in`). Typos get fixed in the same edit.
- **What a refresh must still respect**, since "no mandate to preserve" is not "no constraints":
  merge tokens (`[ModRoleName]`, `[AllowNetworkSurveyPush]`, …) must survive — `verify_tr.py` fails
  on a lost one; **labels that name a setting in other cells are not renamed here** (DE *Rolle für
  Umfrageleiter*, RU *Роль управляющего опросами*); and Discord's 100-character limit binds the
  command descriptions in every locale.
- **Convo is feminine** in every gendered locale, from the local word for *conversation*. Recorded
  in `lexicon.json` under `instruments.convo.grammar`, with plural rules.
- **Door words per locale come from the `subo-localization` table; `project` comes from the word the
  locale already ships** in the 131 cells whose English says it (`Projekt`, `proyecto`, `projet`,
  `progetto`, `project`, `projekt`, `projeto`, `проект`, `proje`).
- **Upload rule:** ship only the columns being changed, and never leave a blank inside a column you
  included — a blank deletes that translation.

**Remaining steps:**

1. ~~The outstanding keys, as full refreshes.~~ ✅ **DONE 2026-08-29 — all 42 translated.**
2. ~~Re-read the 29 keys done under the old rule.~~ **Closed by the user's approval of v4
   (2026-08-29).** Recorded rather than deleted: batches 1-6 were held to the fragment standard,
   not the refresh one, so **if a stale cell surfaces later it will most likely be among those 29**.
   That is a place to look first, not an open task.
3. ~~Build the file.~~ ✅ **BUILT — `user_messages_A1c_2026-08-29.xlsx`** (see the v4 block above).
4. ~~The upload itself is the user's.~~ ✅ **UPLOADED AND RE-EXPORTED 2026-08-29.** The export
   (`user_messages_stage_uploaded.xlsx`) is now the record — **the DB is the source of truth, and a
   locally merged file is a guess about what the upload did** (A2b's ruling). Verified clean by
   `verify_upload_landed.py`; see the block at the top of this file.

**⚠️ Separate backlog this uncovered, NOT part of A1c:** the locales never received the original
`project` migration either. Of the 131 cells whose English already says *project*, each locale still
says *survey* in roughly a third (DE 39, ES 38, FR 37, IT 40, NL 31, PL 29, PT-BR 33, RU 36, TR 33).
A1c's 42 will land correctly and still sit beside those. Worth its own item.

## ✅ v4 — APPROVED AND BUILT FOR UPLOAD (user, 2026-08-29)

**`Web_About_Description` drops the appositive**: *"created on Discord with Subo, the Survey Bot"* →
**"with Subo."** Shorter, and it removes a translation problem rather than restating it: the
appositive was rendered **nine different ways** — kept in English in DE/IT/NL, translated in the
other six, and **five of those used the locale's survey word**, the exact noun A1c is moving away
from. Deleting it deletes the whole class.

**With that, the user approved the batch and the upload file is built:**
`A1c-work/user_messages_A1c_2026-08-29.xlsx`, by `build_upload.py`.

| | |
|---|---|
| Rows | **42** (only the changed keys, not 2,568) |
| Columns | `Name, en-US, de, es-ES, fr, it, nl, pl, pt-BR, ru, tr` |
| Excluded | ⚠️ **`ro` and `uk`** — `ro` is the batch/scratch column and `uk` is stalled Ukrainian. Ship only what you changed. |
| Empty cells | **0**, asserted before writing — a blank inside an included column **deletes** that translation |
| No-op rows | **0**, asserted — a row identical to live does not belong in the file |

**⚠️ The build reads the LIVE 2026-08-28 export, not the 08-18 working copy, and that mattered.**
A2b uploaded FR/DE edits on 08-28, after `all_locales.json` was taken. Two A1c cells had moved
underneath the work: `HelpMessage_content`/fr and `Welcome_dm_text`/fr, where A2b had already
changed *votes* → *sondages*. **Both are supersets, not conflicts** — batch 9 makes the same change
plus the `/draft` line — and the build asserts A2b's exact strings survive rather than trusting the
reading. **Any future batch must re-run this check**: a working copy is a snapshot, and the DB is
the source of truth.

**11 cells ship unchanged, on purpose.** `Survey_audience_modify_post` (8 locales),
`Setup_server_survey_channel_pick` (es, fr) and `ServerSetup_setup_invite_footer` (ru) are declared
`KEEP` in their batches: the locale already said what the new English says. They are included with
their current value because **blanking them would delete them**.

## ⭐ v3 — three post-approval revisions (user, 2026-08-29)

**The approved English is now `a1c_english_edits_v3.csv`**, and `apply_fragments.EN_CSV` is the one
place that names it. All three revisions were re-translated in all nine locales the same day.

1. **`Setup_server_which_admin_role`: the dash goes.** It read *"allowed as 'admin' - to manage my
   settings"*. A spaced hyphen doing an em dash's job is the same construction in a smaller glyph,
   so the house rule applies. Now *"allowed as 'admin', able to manage…"*.
   ⚠️ **Four locales had copied the construction** (es, fr, it, pt-BR) and are fixed with it.
   A sweep of all 378 cells then found **one more**, in `Setup_server_creator_role`/fr, also fixed.
   **The Polish and Russian dashes are deliberately left alone**: `–` and `—` are ordinary
   punctuation in those languages, and the no-em-dash rule is a house rule for *English* copy.
2. **`Setup_server_anonymous_mode`: the audit-log caveat is removed.** *"Discord admins may see who
   participated in the audit logs and opened threads"* is **only true when the answer surface is a
   Thread**, and an admin can pick Discord DM or Web instead. Stated flatly it reads as a blanket
   carve-out of the anonymity promise, which is worse than saying nothing.
3. **`Setup_server_Q6_channel_change`: rewritten, because the feature changed.** The Participant
   channel is no longer only where invitations are posted: it is **also where Convos run when a
   project's invite lands somewhere threads cannot be created** (an announcement channel, a forum
   post). The old "same thread/channel as command" bullet is gone entirely.
   **Two judgment calls, both flagged rather than silent:** the trailing *"Do you want to edit
   this?"* is kept, since every sibling setting cell ends with it and the prompt needs the
   affordance; and `**Participant channel** :` was normalized to no space before the colon.

## ⭐ STATUS — v2: 42 edits, user-revised and re-verified (2026-08-28)

**The sheet is now `a1c_english_edits_v2.csv`.** The user reviewed all 40 proposals, kept 28
verbatim and revised 12; v2 adds 2 cells and fixes 3 defects found by re-checking their revision.
**Nothing was dropped: all 42 rows still differ from the live cell.** The main editorial change is
theirs and it is a simplification: **in Subo's context an "invitation" needs no qualifier**, so
*"project invitation"* became *"invitation"* in five cells. Two renames they made are treated
below, because each reaches past the cell it was made in.

**Three defects found in the revision, all fixed in v2:**

1. **`Participant Channel:` broke the settings block.** The label is 5 characters longer than
   `Survey Channel:`, which pushed its value to column 23 in a 21-row block aligned at 19 — one
   row visibly out of line in Discord monospace. **The whole block is repadded to column 21**
   (widest label + 1), which is *narrower* than the revision's 23 and only 2 wider than today's.
   Widest rendered line: 59 characters, up from 57.
2. **A garbled sentence** in the `Setup_server_Q6_channel_change` rewrite: *"To post projects in
   forum posts and threads and the run the command from…"* → *"To post in a forum post or a thread,
   run the command from the thread or post where you want the invitation."*
3. **Two cells named a setting twice and disagreed with themselves** after the rename: the header
   said *Participation Role* / *Participant channel* while the *"Current setting for…"* line still
   said *Role reward* / *Survey channel*.

Re-verified on v2: no lowercase `convo`, no command description over Discord's 100 characters,
every monospace block column-aligned, no row that is a no-op.

⚠️ **Colour did not survive the CSV round-trip.** The revision was sent back as `.csv`, so the
green-means-no-change marking is not machine-readable. Read here as *"green = my proposal kept
as-is"*, which matches the 28 rows that are byte-identical to the draft.

## The original draft — 40 edits (2026-08-27)

**The site half is done** (see the `en.json` section below). **The app half is drafted, not
applied**: `user_messages` is a database table, so the deliverable is a proposed-edit sheet, not a
commit. It is `a1c_english_edits.csv` — `key, class, current_en, proposed_en, note` — generated by
`propose.py` from literal find/replace pairs against the live export, so **every character not
named in a pair provably does not change**. All 40 pairs matched their source cell; zero misses.

| Class | Cells | Treatment |
|---|---|---|
| A — admin-facing | 18 | doublet → `project(s)` |
| A-cmd — command descriptions | 5 | ⚠️ **keep the door words**, deepen per T7 (see below) |
| B — respondent-facing | 3 | name the instrument: `polls and Convos` |
| C — the join | 6 | keep both nouns, `survey` → `Convo` |
| caps | 5 | lowercase `convo` → `Convo` |
| align | 3 | monospace label blocks, repadded |

**Verified against the proposed state, not the intent:** no lowercase `convo` survives; all five
command descriptions fit Discord's 100-character limit (longest is 58); every monospace block is
column-aligned; and the only doublets left are the ones that are supposed to be there.

### ⚠️ Three corrections to this document, found by re-scanning rather than trusting it

**1. The re-scan found 42 cells carrying both nouns, not 31.** The original audit matched a list
of phrase shapes (`polls and surveys`, `polls/surveys`, …); scanning instead for *any cell
containing both nouns* found **11 more**. This is the same failure that undercounted `en.json` by
7, from the same cause. **Five are real edits** and are now in the sheet:

| Key | Why it was missed |
|---|---|
| `Web_NewProject_AskTopic` | *"Describe what your survey or poll should be about"* — the AI-draft prompt, one screen from the highest-leverage string, and not on the original list |
| `Poll_edit_confirm` | *"A poll cannot be switched to survey mode"* — nouns 5 words apart |
| `Xp_Settings_xp_points_question` | *"XP per survey question"* vs *"XP per vote in a poll"* — a contrast, not a doublet |
| `Xp_Settings_Summary` | same pair, second surface |
| `ServerSetup_setup_Summary` | the `Survey Channel:` row label, under a heading that already says *new projects* |

**Six are correctly no-change**, and knowing why matters more than the count: `XpHistory_row_pollvote`,
`XpHistory_row_pollunwind`, `Web_Members_XpHistory_Kind_PollVote` and `_PollUnwind` all read
*"Poll vote in [survey]"* where **`[survey]` is a frozen merge token**; `Survey_picker_no_surveys_to_pick`
and `Dashboard_no_suveys_message` name the `/poll` and `/survey` **commands**, which T6 says to
publish, not rename.

**2. ⚠️ T11 overrules this document on the 5 command descriptions.** They were filed under Class A
("collapse to `project`"). But T7 already noted what T11 later generalized: these strings are
**scraped into bot directories**, so the reader has *not* arrived. **Door words belong there**, and
the doublet is correct. What was actually wrong is that they are thin. So they keep *"survey or
poll"* and gain a verb-object:

> `Survey_Command_results_description`: "Results for survey or poll" → **"View results and export
> responses for a survey or poll"**

**3. Same reversal for `EndOfSurvey_footer_text`.** Filed under Class B as → *"Polls, Convos and
XP"*. It is the footer on invitation embeds, read by people scrolling a Discord channel who have
never heard of Subo — a discovery surface. **Left unchanged**, and it is the one cell dropped from
the original 31.

### ~~The two surfaces disagree on a button~~ — WITHDRAWN (user, 2026-08-27)

An earlier draft of this section read the *"New Survey"* / *"New Project"* button pair as A1b's
two-vocabularies problem showing up in a button. **It is not a defect. Each label is correct for the
flow it starts**, and the difference is in the flows, not the words:

- **Discord — "New Survey"** triggers **`/survey`**, and the button is named after the command it
  runs. `/survey` is technically the command for *both* instruments: build a project with a single
  closed question and the bot asks whether to make it a poll or a Convo. That prompt is
  `SurveyBuilder_use_poll_mode`, which is why that string is Class C.
- **Web — "New Project"** opens a dialog that asks poll-or-Convo **first**, so the button cannot
  name an instrument yet. `Web_NewProject_TypeQuestion` *is* that dialog.

So the two buttons are two entry points into the same fork, one asking late and one asking early.
**`Dashboard_no_suveys_message` quoting "Hit the `New Survey` button" is correct** and needs no
coordinated change. Recorded because the wrong reading was reached from the string surface alone,
which is what T8 warns about: the strings do not tell you which flow they sit in.

### ⚠️ Two label renames, one of which reached further than the cell it was made in

The user's revision renamed two settings. Both are right. **One of them appears in cells the sheet
never touched; the other only looked like it did.**

**`Survey channel` → `Participant channel`** (it is where invitations are posted and members answer,
as against the **Creator channel**, which is for creation and admin). The label lives in **6 cells,
covering two different settings**:

| Cell | Meaning | v2 |
|---|---|---|
| `Setup_server_Q6_channel_change` | the setting itself | renamed |
| `Setup_server_Q6_channel_label` | its picker title | **added to the sheet** |
| `ServerSetup_setup_Summary` | its settings-summary row | renamed |
| `Setup_server_invalid_bot_write_perms` | names it in the misconfiguration error | **added to the sheet** |
| `Setup_server_survey_room_tip` | ⛔ the **temporary per-project channels** | **left alone** |
| `SurveyRoomName` | ⛔ same, the Category setting | **left alone** |

The last two are a different feature wearing the same words. Renaming them would have been the
find/replace error this document opens by warning about.

**`Role reward` → `Participation Role`: not the same shape, and an earlier draft of this section
got it backwards.** It read the 24 cells saying "role reward" as one name stretched over three
features, and called the rename under-scoped. **Corrected by the user, 2026-08-28: they are
different things and the names are now right.**

- **Role reward is project-level**: complete project A, get role alpha. That is what
  `Edit_survey_edit_role_reward*`, `Invite_role_reward`, `SurveySummary_reward_role_label` and the
  `Xp_Settings_role_*` family are about, and they keep the name.
- **The Settings one is a different setting**: the role a member gets the **first time they
  participate**, at all, in anything. Renaming *that* to **Participation Role** is a distinction
  being drawn, not a collision being cleaned up, and it is deliberately scoped to the settings page.

**Verified complete at one cell.** `[ParticipantRoleName]` appears in exactly one cell,
`Setup_server_Q10_participants_setup`, whose header and *"Current setting for"* line both move in
v2. Its follow-up prompt `Setup_server_which_participant_role` — *"Which role should be awarded to
your members the first time they participate?"* — describes the behavior and carries no label, so
it is already correct. **Nothing is left behind and no follow-up item is needed.**

The lesson is narrower than the one this section originally drew: **a repeated string is not
evidence of a repeated concept.** The `Survey channel` case above is real because six cells name
two settings; this one looked identical from a grep and was not.

### Constraint 5, learned the hard way

**Monospace settings blocks are column-aligned, and the labels are inside the padding.** Shortening
`Survey Channel:` to `Project Channel:` adds a character and shifts a value one column out of a
21-row block. The first draft of `Xp_Settings_xp_points_question` did exactly that. Every `align`
row in the sheet has been repadded and re-verified by measuring the value column, not by eye.

---

## The rule that resolves all 31: **audience decides the umbrella**

The glossary gives `project` as the umbrella for "a Convo or a poll". But `project` is an
**admin/creator** noun — a respondent answering a poll has no concept of a project and never sees
the word anywhere else. So one replacement cannot serve every cell:

| Audience | Umbrella to use | Why |
|---|---|---|
| **Admin / creator** (setup, commands, settings, dashboard) | **`project(s)`** | The glossary umbrella, already shipped in 131 English cells. Finishing a migration, not a new decision. |
| **Respondent / member** (XP, leaderboard, invitations, end-of-survey) | **name the instrument: `poll` / `Convo`** | "Project" is jargon to someone who just answered a question. This is the framework's product vocabulary applied literally. |
| **Contrast strings** (the string's *job* is poll-vs-survey) | **keep both nouns**, but `survey` → `Convo` | Collapsing these destroys the string. These are T4's *join*, and they are the most valuable cells here, not the most broken. |

---

## Class A — admin-facing, collapse the doublet to `project(s)` (17 cells)

Straight umbrella substitutions. Highest concentration is first-run setup, which is where a new
admin forms their mental model of what Subo is.

| Key | Current fragment | → |
|---|---|---|
| `Setup_server_admin_role` | "can create surveys/polls and has access to all polls/surveys"; "create their own polls/surveys" | "can create projects and has access to all projects in the community"; "create their own projects" |
| `Setup_server_creator_role` | "allows other users to create polls/surveys in the server" | "…to create projects in the community" |
| `Setup_server_which_admin_role` | "access all polls/surveys?" | "access all projects?" |
| `Setup_server_anonymous_mode` | "Individual answers to polls and surveys"; "Individual votes and survey answers" ×3 | "Individual answers to your projects"; "Individual votes and answers" ×3 |
| `Setup_server_Q6_channel_change` | "polls and survey invitations are posted"; "post surveys and polls in threads" | "project invitations are posted"; "post projects in threads" |
| `Setup_server_Q10_participants_setup` | "at least one of your polls or surveys" | "at least one of your projects" |
| `Setup_server_Q19_default_invite_change` | "before the poll or survey invitation message" | "before the project invitation message" |
| `Setup_server_sharing_config` | "after a survey or poll stops" | "after a project stops" |
| `Setup_server_survey_channel_pick` | "post new surveys and polls?" | "post new projects?" |
| `Setup_server_invalid_bot_cant_embed_links` | "necessary to show polls, survey invitations and other…" | "…to show project invitations and other…" |
| `Setup_server_allow_network_push_prompt` | "invited to answer polls and surveys in the Creator channel" | "invited to answer other creators' projects…" |
| `Setup_server_allow_network_push_tip` | "invited to answer polls and surveys" | "invited to answer other creators' projects" |
| `ServerSetup_setup_invite_footer` | "invitation embeds for both polls and surveys" | "invitation embeds for every project" |
| `ServerSetup_error_not_survey_bot_post` | "used on polls and survey invitations sent by" | "used on project invitations sent by" |
| `Survey_audience_modify_post` | "before the poll or survey invitation embed" | "before the project invitation embed" |
| `Survey_command_commandChannel_cant_use_channel_type` | "posting polls and surveys" — **and the next line already says "create your project"** | "posting projects" |
| `Message_command_message_permission` | "edit this survey/poll. **A project** can only be edited by…" — **both vocabularies in one sentence** | "edit this project. A project can only be…" |

**⭐ The last two are the argument for the whole exercise**: a single string that says "survey/poll"
and "project" about the same object, shipped, in the highest-traffic locale.

### Also Class A, but they are command descriptions (T7 applies) — 5 cells

These sit in Discord autocomplete **and get scraped into bot directories**, so they are the rare
dual-purpose strings. T7 says the *description* is what disambiguates, and these are thin.
Rewrite for clarity, not just for the umbrella.

| Key | Current | Note |
|---|---|---|
| `Survey_Command_activate_description` | "Start or stop a survey or poll" | → "Start or stop a project" |
| `Survey_Command_delete_description` | "Delete survey or poll" | → "Delete a project" |
| `Survey_Command_edit_descrition` | "Edit survey or poll" | → "Edit a project" *(note the misspelled key: `descrition`)* |
| `Survey_Command_results_description` | "Results for survey or poll" | → "View results for a project" |
| `Message_slash_cmd_repost_description` | "Repost an open survey or poll (Premium)" | → "Repost an open project (Premium)" |

---

## Class B — respondent-facing, name the instrument (4 cells)

Do **not** use "project" here.

| Key | Current | → |
|---|---|---|
| `Leader_board_table_user_not_ranked` | "Earn [xp_name] by participating in polls and surveys." | "…by answering polls and Convos." |
| `Web_Leaderboard_XPInfo` | "Earn [XpName] by participating in surveys and polls." | "…by answering polls and Convos." |
| `EndOfSurvey_footer_text` | "Surveys, polls and XP in Discord with [BotName]!" | "Polls, Convos and XP in Discord with [BotName]!" |
| `Web_Settings_Blacklist_Description` | "do not earn XP when they answer polls and surveys" | admin-facing *about* respondents → "…when they answer your projects" |

---

## Class C — DO NOT COLLAPSE. These are the join, and they need upgrading, not flattening (5 cells)

The string's entire purpose is to contrast the two instruments. Removing the doublet destroys it.
The fix is `survey` → `Convo` plus making the contrast sharper.

| Key | Why it must keep both |
|---|---|
| `SurveyBuilder_use_poll_mode` | Literally *"You can ask your question as a **poll** or as a **survey**… So... Poll or Survey?"* — the Discord-side type chooser. |
| `Web_NewProject_TypeQuestion` | ⭐ *"Do you want to ask a single question in a **poll** or create a full survey (aka convo)?"* — **the single highest-leverage string on the surface.** Every new project passes through it, and T4's join is currently an afterthought in parentheses with a lowercase product noun. |
| `HelpMessage_content` | Command list; `/poll` and `/survey` are correctly listed separately. Only `/draft`'s *"create survey or poll draft with AI"* is a Class-A doublet. |
| `admin_channel_pinned_message` | Same shape. Only the `/settings` line's *"who can create polls/surveys"* is Class A. |
| `Welcome_dm_text` | Same shape: `/poll` "(for polls)", `/survey` "(for more than one question)" are the join done adequately. Only *"/draft (AI-generated polls and surveys)"* is Class A. |

---

## Separately: capitalize `Convo` (6 copy cells)

Glossary: `Convo` is a proper product noun, never lowercase. Of the 10 English cells with lowercase
`convo`, **4 are identifiers and must be left alone**: `AnonymousThreadName` (`convo-anon`) and the
three `/convos/` URL paths (`SurveyLink`, `SurveyOpenLink`, `SurveyOpenLinkRAW`).

The 6 real ones: `Web_About_Description`, `web_link_inactive`,
`Web_ProjectDetails_LogCompletes_Help`, `Web_ProjectDetails_ResponseNotifications_Description`,
`SurveyBuilder_name_survey` ("name for your survey convo"), `Web_NewProject_TypeQuestion` (also Class C).

## And on the site: `en.json` — ✅ DONE (2026-08-27)

**This section said 4 strings. There were 11**, and the guard is what found the other 7: the
all-caps section headings (`WHAT IS A SURVEY CONVO?`, `TRADITIONAL FORMS vs. SURVEY CONVOS`,
`WHY SURVEY CONVOS WORK BETTER`) do not match a `[Ss]urvey [Cc]onvo` grep, which is the whole
argument for `check:lexicon` existing.

Nine are now `Convo`: the three headings above, `convosColumn`, `surveyConvos.whatBody[0]`,
`surveyConvos.webDesc`, the two *"See survey convos →"* CTAs in `useCasesResearch` /
`useCasesGetThingsDone`, and the `pollsPage` prose. **Lowercase `convo` is gone from `en.json`.**

**The last two, the nav labels, went the same way on the user's call (2026-08-27)**, and the
argument is now **T11** in the roadmap. `header.product[1].text` and
`footer.sections[0].links[1].text` read **"Convos"**; the slug `/survey-convos/` is unchanged, as
are the page's title, description and H1, which is where its door words actually live.

**The nav label was an SEO liability, not an asset.** Header and footer render on all 60 pages, so
the old label was 60 sitewide internal anchors reading "Survey" and pointing at a page the lexicon
says does not own "survey" — the how-to does. **`en.json` is now clean**, and the `en.deny`
baseline entry is deleted, so the guard enforces it from here.

**The two strings outside `en.json` are done too**, under the same rule:

- `src/components/BaseHead.astro` — the sitewide default `<title>` / description. It said
  *"Discord Survey Convo & Poll Bot"*. **Verified unreachable**: all 60 `<BaseHead>` call sites
  pass a title, and the string appears in zero built pages. It now falls back to `SITE_TITLE` /
  `SITE_DESCRIPTION` from `consts.ts` instead of carrying its own copy — a duplicate nothing serves
  is a duplicate nobody notices going stale, which is T8 in miniature.
- `src/content/blog/content-blocks-new-way-to-design-survey-flows.md` — mid-body, not the title,
  H1 or slug, and the post targets *content blocks*. *"Discord survey convos, web convos and
  polls"* → *"Convos, on Discord and on the web, and in polls"*. It was the only `web convos` on
  the site.

**DE / ES / FR carry all of it too**, translated faithfully (`WAS IST EIN SURVEY CONVO?`,
`¿QUÉ ES UNA SURVEY CONVO?`). Out of scope here; it lands with A5/A7.

---

## ⚠️ Constraints that bound all of the above

1. **Merge-field names are frozen.** `[SurveyName]`, `[SurveyId]`, `[SurveyRoles]`, `[CreatedBy]`
   appear in user-customized invite messages and the default footer
   (`[SurveyName] ([SurveyId]) by [CreatedBy]`). **Renaming them breaks live configurations.**
   Their *descriptions* in `Setup_server_Q19_default_invite_change` can and should be reworded
   ("how you named the survey" → "how you named the project"); the tokens themselves cannot.
2. **Editing an English cell invalidates its ten translations.** Batch all of this into **one**
   `pending.csv` round-trip, not four. The `ro` column doubles as the batch stamp for tracking it.
3. **Key names are not in scope**, even the misspelled ones (`Survey_Command_edit_descrition`,
   `PollComamnd_*`, `Wizard_comamnd_name`, `Dashboard_no_suveys_message`). Renaming a key means a
   code change plus a DB migration for zero user-visible gain. Noted, deliberately not fixed.
4. **Do not start before `lexicon.json` (A2) exists** to record the target vocabulary — otherwise
   this becomes a sixth phrasing rather than the last one.
