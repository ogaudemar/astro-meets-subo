# Screenshot brief: "File Uploads" and "Optional Questions" posts

For: the screenshot agent. Self-contained: you need no access to the code.
Requested: 2026-11-12. Two posts, two folders, nine shots.

- Post A: https://subo.gg/blog/discord-file-uploads/ (5 shots)
- Post B: https://subo.gg/blog/discord-survey-optional-questions/ (4 shots)

Both posts are drafts waiting for these images. Both features are live on production.

## What the posts are about

**A. File uploads.** A new block type, **File Upload**, lets respondents send files as their
answer: on the web they choose or drop files in, in Discord they attach them to a normal
reply. The admin picks which kinds of file are accepted (Images, Documents, Audio, Video,
Archives), how many (Min files, Max files) and the size per file. Files are stored
privately; admins see them in the Responses tab, the Results tab and the exports.

**B. Optional questions.** Every question block has a **Required** switch, on by default.
Turned off, respondents see a **Skip** button, on the web and in Discord, and results show
"Skipped: N" next to the response count.

## Storylines (reuse the same projects across shots)

- **Post A: a bug report Convo** named "Bug report". Blocks: "Which part of the game is
  affected?" (single choice), "What happened?" (open text), then a File Upload block
  "Attach a screenshot or a log" accepting **Images and Documents**, Min files 0, Max files 3.
  Use believable files: two or three in-game screenshots (PNG), one `crash-log.txt`.
- **Post B: a post-event feedback Convo** named "Tournament feedback". Blocks: "How was the
  tournament?" (rating), "Anything we should change next time?" (open text, **Required off**),
  "Which day suits you for the next one?" (single choice, **Required off**).

## Rules for every shot (same as the last brief, plus two lessons)

- **Test community and test accounts only.**
- 🔴 **New: no personal usernames or nicknames in frame.** The last batch showed
  `kylianmb5579`, `Kylian` and `odg` in several shots. Use accounts with neutral display
  names (for example "Tester One", "Raid Lead", "Alex") and neutral avatars, or crop names
  out. This includes the poll and invitation footer line ("Poll N (id) by username"): crop
  it out or make sure the creator shown is a neutral test account.
- 🔴 **New: in Discord, crop to the messages the caption is about.** No channel list, member
  list, server name or other people's messages.
- File **sizes may be shown** in these shots ("One file, up to 10 MB", "Your plan allows up
  to 100 MB per file"): unlike image uploads, these figures are published. **Do not** show
  any credit balance or credit amount other than the editor's line "Uploads use credits."
- English UI, dark mode everywhere, browser and Discord zoom 100%, retina capture fine.
- Crop tight to the subject, with enough context to recognize the place (panel title, tab
  name). Target width 500 to 1,200 px at 1x.
- No annotations or arrows. No cursor unless it points at the thing shown.
- PNG, ideally under 200 KB each.

## Delivery

- Post A files go to `subo-site/public/images/blog/file-uploads/`
- Post B files go to `subo-site/public/images/blog/optional-questions/`

Use the exact file names below and reply with a list: file name, what it shows, anything that
did not match.

---

## Post A: File uploads

### A1. The File Upload Settings panel

- **File:** `file-uploads-settings.png`
- **Where:** web app → Script Editor → the "Bug report" project → select the File Upload
  block → its settings panel, **File Upload Settings**.
- **State:** **Accepted files** with Images and Documents ticked (their formats listed), the
  other three kinds visible and unticked; **Min files** 0, **Max files** 3; **Max size** empty
  or at its default, with the line under it; the cost line "Uploads use credits." with its
  **See pricing** link.
- **Must be readable:** the five kinds of file, Min/Max files, the cost line.

### A2. A web Convo answering the block

- **File:** `file-uploads-web-convo.png`
- **Where:** the project's web link, in a browser at **phone width** (about 390 px; use the
  device toolbar).
- **State:** the question "Attach a screenshot or a log", the **Choose files** button with the
  limits line under it, and **two files in the list: one finished, one still uploading with
  its progress bar** visible, each with its **Remove** button. Throttle the network in the
  browser's dev tools (for example "Slow 3G") to catch the progress bar mid-upload.
- **Nice to have:** the answers above it (the category picked, the "What happened?" text) in
  the conversation.

### A3. Discord: attachments and the ✅ / ❌ receipt

- **File:** `file-uploads-discord-receipt.png`
- **Where:** the same project answered in Discord (a DM or private thread with the bot).
- **State:** the bot's question with its hint ("Attach the file(s) to your reply." and the
  limits), then the test user's reply with **two attachments**: one accepted (a PNG
  screenshot) and one refused (for example an MP3, since the block accepts only Images and
  Documents), then the bot's **receipt**: ✅ for the kept file, ❌ with the reason for the
  refused one.
- **Must be readable:** both receipt lines.

### A4. The Responses tab with files

- **File:** `file-uploads-responses.png`
- **Needs:** at least 4 test responses to the bug report, most with files (some with 1, one
  with all 3, one with the log file), one that skipped the upload.
- **Where:** web app → the project → **Responses** tab, with one response's **details
  panel** open.
- **State:** the File Upload column showing up to three thumbnails and "+N" where relevant,
  and in the details panel the **file tiles** with name and size.
- **Crop out:** respondent names if they are not neutral test names (see the red rule).

### A5. The Results tab's file card

- **File:** `file-uploads-results.png`
- **Where:** web app → the project → **Results** tab → the card for the File Upload block.
- **State:** the totals line (for example "N file(s) from N response(s), N MB in all"), the
  count per kind of file, and the gallery of the newest files.

---

## Post B: Optional questions

### B1. The Required switch in the Script Editor

- **File:** `optional-required-switch.png`
- **Where:** web app → Script Editor → the "Tournament feedback" project → select "Anything
  we should change next time?".
- **State:** in the block's settings, the **Required** switch **off**, with its help text
  "Respondents see a Skip button. A skipped question is saved with no answer." visible. If
  the block list fits in the same crop, show the card with "· Optional" after its type.
  Otherwise deliver that card as a second file, `optional-card-label.png`.

### B2. Skip on the web

- **File:** `optional-web-skip.png`
- **Where:** the project's web link at phone width (about 390 px).
- **State:** the rating answered, then "Anything we should change next time?" skipped, which
  shows a **"Skipped"** bubble in the conversation, then "Which day suits you for the next
  one?" on screen with its **Skip** button visible under it.

### B3. Skip in Discord

- **File:** `optional-discord-skip.png`
- **Where:** the same project answered in Discord.
- **State:** "Which day suits you for the next one?" with its choice buttons and the **Skip**
  button in the same button row. A second capture of the open-text question with Skip on its
  message is welcome as `optional-discord-skip-text.png`.

### B4. "Skipped: N" in the Results tab

- **File:** `optional-results-skipped.png`
- **Needs:** at least 5 test responses, with 2 or 3 of them skipping "Which day suits you for
  the next one?".
- **Where:** web app → the project → **Results** tab → the card for that question.
- **State:** the chart with "**Skipped: N**" next to the response count.

---

## Not in this brief

Hero images for both posts are illustrations, briefed separately.
