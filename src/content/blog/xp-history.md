---
title: "XP History: every point, with a reason attached"
description: "Members can now see a complete, auditable record of how and why their XP changed, on the web and in Discord. Available on all plans, including free."
pubDate: "August 3 2026"
author: "Subo Team"
heroImage: "/images/blog/xp-history/subo-xp-statement.webp"
tags: ["announcement", "features", "xp", "rewards"]
draft: false
---

This summer we ran a World Cup Prediction Contest in our Support Server. Almost every day a new prediction poll went up, with odds pulled from the major prediction markets. Vote and you earned 10 XP on the spot. If your pick won, you earned the odds-based payout on top once the result was in. The Final was priced at 17 XP for Spain and 23 XP for Argentina; the people who called Spain took the 17, and the people who backed Argentina got the 10 for voting and nothing more. Members got into it.

Afterward I ran a Subo survey to see how it landed. The contest scored well. But one request kept coming back: members wanted a way to see their own XP. How much had they won? For which poll? When? With the payouts changing every day, the running total was hard to hold in your head.

The contest just made the gap loud. It was never specific to prediction polls. Any time XP moves, whether from a completed survey, a reward, or a manual adjustment, members want to know why. And admins want the other side of that: confirmation the points they sent actually landed. I've had the doubt myself after granting XP by hand: did that go through, and is it counted?

XP History answers both. Every member now gets a complete, auditable record of how and why their XP changed.

---

## On the web: a member's own history

There's a new **XP History** tab on the Account page in your community. It lists every change to a member's XP, newest first, 20 per page.

![The XP History tab on a member's web Account page](/images/blog/xp-history/xp-history-web-app-account.png)

Each row tells the whole story of one change:

- the **reason**, in plain language: "Completed *{survey}*", "Reward from *{survey}*", "Poll vote in *{survey}*", "Manual adjustment by *{admin}*", or "Starting balance"
- the **amount**, green for a gain, red for a loss
- the **running balance** right after that change
- a **timestamp**

No more asking an admin why the number moved. The record is right there, in the member's own words.

---

## In Discord: `/xp-history`

Members who live in Discord don't have to open the web app. Any member can run the new **`/xp-history`** slash command and get their history back as a private, ephemeral message: a paginated embed with ◀ and ▶ buttons, the same per-row reasons as the web, and a footer showing their total XP.

![The result of the /xp-history slash command in Discord](/images/blog/xp-history/xp-history-discord-command.png)

It's self-service. The member checks their own points without pinging anyone.

---

## For admins: the same view, per member

Open a member's detail sidebar on the **Members** page and you'll find a new collapsible **XP History** section, sitting between Stats and Achievements. It shows that member's full history: the same reasons, amounts, running balance, and timestamps they see for themselves.

![The XP History section in a member's detail sidebar on the Members page](/images/blog/xp-history/xp-history-web-app-member-details.png)

For a manual adjustment or a reset, the row names the admin who made the change. For a survey-driven change, it names the survey. So when you grant XP by hand, you can open the sidebar and confirm it landed, instead of wondering.

---

## A note on the name

XP is renamable in Subo. Each community can rename its points, so your members might see "Points History", "Karma History", or whatever term you've set. It's the same feature under your community's word for XP.

---

## Read it through the API

There's also a new endpoint to read a member's XP history programmatically. It's admin-scoped and lives in the [public API](/blog/public-api-launch/) at `api.subo.ai`, newest first and paginated like the rest. It's additive, so nothing about your existing integrations changes.

---

XP History is available on **all plans, including free**. If your community uses XP, your members have it now, on the web and in Discord.

This is the natural follow-on to [dynamic XP scoring](/blog/scoring-piping-quizzes/), the release that let you reward members based on how they answered, including the odds-based payouts that ran that World Cup contest. Rewards that move fast are only worth as much as members trust them, and a record they can check for themselves is how that trust gets built. If you're just starting to reward participation, our guide to [gamifying a Discord community with XP](/blog/gamify-discord-community-xp-survey-rewards/) is a good place to begin.

For a build where the XP ledger earns its keep, see the [attendance streak recipe](/recipes/event-rsvp-streak/): members cross tier thresholds on their own across many events, so the history is the only place the story is legible.

[Come see it in the Support Server →](https://subo.gg/support)

---

*Subo is a research tool for communities. Run surveys and polls, reward participation with XP, achievements and roles, and understand what your members actually think.*
