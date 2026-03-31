# Subo Just Got a Web App — Here's Why It Took This Long

*March 2026*

---

We built Subo to live where communities live: inside Discord.

That was the whole point. Your members don't have to leave. You don't have to export a CSV and email a link. The survey shows up in the channel, they hit a button, they answer right there. Done.

For a long time, that was enough.

---

## Where It Started

The first version of Subo was a pure Discord bot. You created surveys through slash commands. You deployed them by typing in a channel. You reviewed results via bot-generated embeds that updated in place.

It was scrappy, but it worked — and people loved it. Community managers started running monthly pulses, post-event check-ins, regular governance votes. Power users built whole feedback loops around it: collect responses, award XP to participants, grant roles based on answers. The Discord-native experience made adoption zero-friction.

Some servers were running 10, 20, 30+ surveys a month.

---

## The Walls Start Showing

But Discord wasn't designed to be a survey builder.

Creating a survey with multiple questions, skip logic, and custom messaging through slash commands and modal dialogs worked — technically. But every survey was a small battle. You'd submit a modal, check the preview bot embed, go back and edit, resubmit. Adding a new question meant digging through a command flow. Reordering questions wasn't really a thing. Changing button labels required knowing the right sub-command.

The more powerful a survey was, the more painful it was to create.

Reviewing results had the same ceiling. You'd run `/results` and get a Discord embed — great for a quick glance, but not something you could actually analyze. There was no way to filter by date, drill into individual responses, or see who answered what. You couldn't sort your open-text answers or identify which members hadn't responded yet.

And when a power user wanted to do something like cross-reference results with member roles, or export data for a community report? That meant cobbling together workarounds.

We kept shipping improvements to the bot, but we knew the real bottleneck wasn't the bot. It was Discord itself.

---

## Building the Next Layer

We didn't want to abandon the Discord-native model. We still believe that's the right UX for respondents — surveys meet people where they are, in the community they're already engaged with.

But the *creator* experience needed a proper home.

So we built one.

The Subo Web App is the admin layer Subo always needed: a full dashboard for building, launching, and analyzing surveys — while keeping Discord as the delivery channel. The bot didn't go anywhere. It got a much better partner.

---

## What Changed

### The Script Editor

This is the one we're most proud of.

Creating a survey used to mean issuing commands and hoping the preview looked right. Now there's a proper visual editor — a canvas where you drag in question blocks, configure each one, and see exactly how it'll look before anyone sees it. Multiple choice, open-ended text, numeric scales, date pickers, yes/no, role selectors — all configurable in one place.

You can set skip logic. Randomize options. Add image attachments. Write custom button labels. Limit the number of selections on multi-punch questions. Everything that used to require knowing the right slash command syntax is now a click.

And you can test the full survey flow from within the editor before you deploy it. No more "I'll just send it and see if it breaks."

### Real-Time Results

Results used to be a snapshot. Now they're live.

The Results tab shows every response visualized as it comes in — horizontal bar charts, vertical breakdowns, response counts. You can flip between chart types. You see completion rates and median completion time at the top. For open-ended text questions, you can trigger an AI summary that synthesizes what respondents actually said, so you don't have to read 200 text answers line by line.

No refreshing a Discord embed and hoping it updated.

### Individual Responses

The Responses tab is something that didn't exist in the bot at all.

You can see every individual response in a filterable, sortable table — filter by date range, filter by specific answer values, resize columns. Click any row to open a sidebar with that respondent's Discord profile: their avatar, roles, when they joined, their XP — and timing data showing when they started, when they finished, and how long they took.

From there you can take action directly: award XP to a batch of respondents, grant a role to everyone who answered a specific way, or delete responses for data management. Things that used to take five bot commands and a lot of copy-pasting now take seconds.

### AI Survey Generation

Starting from scratch on a survey is the hardest part. Now you don't have to.

Describe your topic — "post-event feedback for our weekly game night" or "member sentiment check on our moderation policies" — and Subo's AI generates a complete survey: questions, answer options, question types, question count. You review it, adjust anything you want in the Script Editor, and deploy. The whole thing takes two minutes.

We track credit usage so you always know what you've spent on AI generation and summarization.

### Deployment Control

The Invite tab gives you control over how a survey arrives in Discord. Customize the embed: title, description, color, thumbnail. Choose the call-to-action message. Pick a theme. Assign an interviewer persona with a name and avatar that greets respondents at the start of the convo. Choose whether respondents answer inside Discord or on a web interface.

The web interface option is new — respondents click a button in Discord, but answer on a purpose-built conversational UI in their browser. Same community context, slightly more breathing room for longer surveys.

### The Details Panel

Survey lifecycle management is now visual. Set a start date, an end date, or a response duration window. Configure which Discord roles are eligible. Set XP rewards for completion, with a completion multiplier if you only want to reward people who finish. Preview the survey URL. Clone it. Archive it. All from one screen.

---

## One Thing Hasn't Changed

Subo still lives inside communities.

We didn't build a standalone survey platform that happens to have a Discord integration. The community is still the product. Your members still get invited through Discord. The bot still sends the embeds, tracks who responded, awards the XP, assigns the roles. The web app just makes the admin side of that loop dramatically better.

If you've been running Subo surveys through the bot, all your existing projects, settings, and history are right there in the dashboard.

If you haven't tried Subo yet, the web app is the best place to start.

---

**→ [Get started at subo.ai](https://subo.ai)**

---

*Subo is a community research tool for Discord servers. Run surveys and polls, reward participation with XP and roles, and understand what your members actually think.*
