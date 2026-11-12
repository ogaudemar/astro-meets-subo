# Screenshot brief: "Upload Images and Vote on People, Games and Dates in Discord"

For: the screenshot agent. Self-contained: you need no access to the code.
Post they illustrate: https://subo.gg/blog/discord-poll-images-people-games-dates/ (not
published yet; it waits for these images).
Requested: 2026-11-11.

## What the post is about (so the shots tell the same story)

Two features, both live on production:

1. **Upload images.** Every image field in Subo takes a file from your device: drop it, paste
   it from the clipboard, or click to choose one. In the web app each image field has two
   tabs, **Upload** and **Link**. In Discord, `/poll` has two new options, `image_upload` and
   `thumbnail_upload`, and when the bot asks for an image you can attach it to your reply.
2. **Vote on people, games and dates.** In the Script Editor, typing `@` in an answer option
   opens a picker with four sections, in this order: **Date & time**, **Members** (with
   avatars), **Roles**, **Games** (with icons). Members see names, avatars and game icons
   instead of codes, and dates in their own time zone.

**Use one storyline across all shots: a game-night vote.** The poll is "Which game this
Friday?" with three or four game options (for example Minecraft, Valorant, Rocket League,
Among Us). Where people are the answer, use "Who should lead Saturday's raid?". Where a date
is the answer, use Friday, November 20, 2026 at 8:00 PM. Reusing the same project keeps the
set consistent and saves setup.

## Rules for every shot

- **Test community only.** Use the team's own test server and web app account, never a
  customer community.
- **No real people.** Every member name and avatar visible must be a team or test account.
  No real usernames, emails, server or user IDs, invite links, API keys, other tabs,
  bookmarks, notifications or DMs from anyone else. If something personal is in frame, crop
  it out; do not blur it (blurs look broken in a blog post).
- **🔴 Never show an image upload size limit.** The web drop zone shows a line like "PNG, JPG,
  GIF or WebP, up to … MB", and Discord's bot hint shows the same. We do not publish those
  figures for image uploads (operator decision). Crop that line out of frame. If it cannot be
  avoided in a shot, say so in your report and we will decide.
- **English UI**, in Discord and in the web app.
- **Dark mode** in both the web app and Discord, to match the existing blog screenshots.
- **Browser zoom 100%, Discord zoom 100%.** Retina/2x capture is fine.
- **Crop tight to the subject.** Show the part of the screen the caption talks about plus
  enough context to know where it is (the panel title, the tab name). Not the whole window.
  Target width 500 to 1,200 px at 1x.
- **No annotations, arrows or boxes** unless a shot below asks for one. No mouse cursor
  unless it points at the thing being shown.
- **PNG**, ideally under 200 KB each (run it through a PNG optimizer if larger).
- **The uploaded image itself:** use a simple, colorful game-night banner you made or that
  is free to use, landscape (about 16:9) for the image and square for the thumbnail. No
  third-party logos, no copyrighted game art beyond the game icons Discord shows itself.

## Delivery

Save to `subo-site/public/images/blog/images-vote/` with the exact file names below, and
reply with a list: file name, what it shows, and anything that did not match the brief.

---

## The shots

### 1a. Web image field, Upload tab, empty

- **File:** `images-vote-upload-dropzone.png`
- **Where:** web app → a project → **Script Editor** → select a block → its image field.
- **State:** the **Upload** tab selected (the **Link** tab visible beside it), the empty drop
  zone with the text "Drop or paste an image, or click to choose one".
- **Must be readable:** both tab names and the drop-zone text.
- **Crop out:** the format and size line under the drop zone (see the red rule above).

### 1b. Web image field, after an upload

- **File:** `images-vote-upload-preview.png`
- **Same field as 1a**, after uploading the game-night banner.
- **State:** the preview of the image and the **Remove image** button visible. Same crop
  and framing as 1a, so the two read as before/after.

### 2. `/poll` in Discord with `image_upload` open

- **File:** `images-vote-poll-image-upload.png`
- **Where:** Discord desktop, a channel of the test server, typing the `/poll` command.
- **State:** `question` filled with "Which game this Friday?", the game options filled in,
  and the **`image_upload`** option selected with Discord's file drop area open (the one
  that says to drag and drop or click to upload). A file already chosen is fine too.
- **Must be readable:** the `image_upload` option name.
- **Crop:** the command bar and the option area only, not the channel history.

### 3. The resulting poll in Discord

- **File:** `images-vote-poll-in-discord.png`
- **State:** the poll posted from shot 2: the invitation showing the **uploaded image**
  (large) and the **thumbnail** (small, top right), the question, and the game options as
  buttons.
- **Needs:** the test server on **Premium** or above (the thumbnail is a Premium option).
  Upload the square image with `thumbnail_upload`.
- **Crop:** the full poll message, nothing else from the channel.

### 4. Attaching an image to a reply in Discord

- **File:** `images-vote-attach-reply.png`
- **Where:** any place the bot asks for an image in Discord. Easiest: `/edit` on the poll →
  change the invitation image.
- **State:** the bot's question, with the short hint line under it ("You can also attach an
  image to your reply: …"), then the test user's reply with the image **attached** (not a
  link), then the bot's confirmation if it fits.
- **Crop out:** the size part of the hint line if it shows a figure (red rule above). If
  cropping would cut the sentence awkwardly, keep the whole shot and tell us.

### 5. The @ picker in an answer option

- **File:** `images-vote-at-picker.png`
- **Where:** web app → Script Editor → a single-choice block → an answer option field.
- **State:** `@` just typed in an answer option, the picker open, showing all four
  sections in order: **Date & time** at the top, then **Members** with their avatars,
  **Roles**, **Games** with their icons. If the list is too tall, scroll so Date & time,
  Members and the start of Games are all visible.
- **Nice to have:** another option in the same block already holding a chip (a game icon
  and name, or a member's avatar and name), so the reader sees the result too.
- **Members shown:** test accounts with real-looking avatars and plain names. Four is plenty.

### 6. The Date & time chooser

- **File:** `images-vote-date-time.png`
- **Where:** from the @ picker, choose **Date & time**.
- **State:** Friday, November 20, 2026, 8:00 PM picked, and the list of display styles
  showing their **live previews** (full date and time, short date, weekday with date,
  relative "in N days"). One style selected. The **Insert** button visible.
- **Must be readable:** at least three of the style previews.

### 7. The game poll in Discord and on the web, side by side

Two files, same poll, so we can place them next to each other:

- **7a. File:** `images-vote-game-poll-discord.png`. The "Which game this Friday?" poll in
  Discord with the game options shown **by name** (no codes like `<@$123…>`).
- **7b. File:** `images-vote-game-poll-invite-preview.png`. The same poll in the web app on
  the **Invite** tab, in its **live preview**, showing the same game names.
- Similar heights help. If it is easy, also deliver a combined `images-vote-game-poll.png`
  (7a left, 7b right, 24 px gap, dark background).

### 8. A Convo on the web with members and a date

- **File:** `images-vote-web-convo.png`
- **Where:** the respondent's web link of a test Convo, opened in a browser at **phone
  width** (about 390 px wide; use the browser's device toolbar).
- **State:** a question "Who should lead Saturday's raid?" whose options show **member
  avatars and names**, and, above or below it in the conversation, a message containing the
  date (Friday, November 20, 2026, 8:00 PM) shown in the reader's local time.
- **Note in your report** which time zone the browser was in.

### 9. Analysis tab with names as chart labels

- **File:** `images-vote-analysis.png`
- **Where:** web app → the project from shot 7 (or 8) → **Analysis** tab.
- **Needs:** real votes. Answer the poll with at least 5 test accounts, spread across the
  options so the bars differ.
- **State:** the chart for the poll question with the **game names** (or member names, for
  the raid question) as the bar labels. Both is even better, as two separate charts in one
  shot.
- **Crop:** the question card with its chart and counts.

---

## Not in this brief

The hero image (top of the post) is an illustration, briefed separately. No video or GIF
is needed for this post.
