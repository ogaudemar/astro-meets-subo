# English `user_messages` terminology inventory — the A1c work order

Companion to **[authority-roadmap.md § TERMINOLOGY ARCHITECTURE](authority-roadmap.md#-terminology-architecture--disambiguation-as-an-authority-lever-opened-2026-08-26)**.
This file is the cell-by-cell execution list for **A1c**; the roadmap holds the reasoning.

**Source:** `<TRANSLATIONS_DIR>/user_messages_all_2026-08-18.xlsx`, English (`en-US`) column,
2,568 rows. **~94% of active communities render English** (see A1b), so this is the primary surface.

> ⚠️ **Do not execute this as a find/replace.** The audit's main finding is that the 31 doublet
> cells are **not one defect**. Three different things are going on and one of them must not be
> touched at all. Classification first, rewrite second.

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

## And on the site: `en.json` (4 strings)

The same lowercase phrasing, English-side: **"survey convo"** in `surveyConvos.whatBody`,
`surveyConvos.webDesc`, `useCasesResearch.sections[0].cards[0].desc`,
`useCasesGetThingsDone.sections[0].cards[0].desc`. Do these in the same pass so the app and the
site land on one phrasing at once.

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
