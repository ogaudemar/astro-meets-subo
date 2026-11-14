---
title: "How to Clone a Discord Survey or Poll (Within Your Server or Into Another)"
description: "Copy any Subo survey or poll: duplicate your own to run it again, clone a shared one from another Discord server into yours, or start from a template. What carries over, what resets, and how to share your own."
pubDate: "June 25 2026"
updatedDate: "Nov 13 2026"
author: "Subo Team"
heroImage: "/images/blog/cloning/teleport-clone.webp"
tags: ["guide", "features", "surveys", "polls", "cloning", "templates"]
draft: false
faq:
  - q: "Can I copy a survey from another Discord server?"
    a: "Yes, if its owner has turned on <strong>Allow others to clone this project</strong>. Right-click the survey or poll message, choose <strong>Apps → Clone Survey/Poll</strong>, and pick the server to copy it into. You need to be an admin or creator in that server, and Subo has to be installed there."
  - q: "Does cloning copy the responses?"
    a: "No. A clone copies the script and its settings, never the answers people gave. It starts with zero responses."
  - q: "Why are the channel and roles empty on my clone?"
    a: "When a project moves to another server, anything that belongs to the original server is cleared: channels, roles, XP, theme and interviewer. Those IDs mean nothing in your server, so you set them yourself before launching. A clone inside the same server keeps all of them."
  - q: "How do I stop people from cloning my surveys?"
    a: "Sharing is off by default. A project can only be cloned into other servers when <strong>Allow others to clone this project</strong> is on in its Details tab. Admins and creators of your own server can still copy it between servers they manage."
  - q: "Is a clone posted automatically?"
    a: "No. Every clone starts inactive, so nothing reaches your members until you open it, check the setup and launch it."
---

Cloning makes a copy of a Subo project, a survey or a poll, so you don't rebuild it by hand. There are three reasons people do it:

- **Run your own project again.** Same questions next month, a variant for another channel, or a [pre and post assessment](/recipes/pre-post-assessment/), which is one project cloned with the dates changed.
- **Copy a project from another server.** You saw a good survey in a community you belong to, or you run two servers and want the same poll in both.
- **Start from a template.** Every template in the [template library](/templates/) is a project built to be cloned.

A clone always starts **inactive** and with **no responses**. You review it, then launch it when you're ready.

## Clone a project in your own server

**In the web app**, open **Projects**, use the **Clone** action on the project, name the copy and keep **This server** as the destination. You can jump straight into the copy with **Edit new project**.

<!-- SCREENSHOT 1: Projects page, the Clone action on a project row. -->
<!-- SCREENSHOT 2: Clone Project dialog with the name field and "Clone into which server?" set to "This server". -->

**In Discord**, admins can use the **Clone Survey** or **Clone Poll** button in the edit menu. Subo asks for a name, then offers to switch you to editing the new copy.

A clone inside the same server copies everything, including the channel, roles, XP rewards and theme. Change what you need and launch.

## Clone a project from another server

**In Discord**, right-click the survey or poll message and choose **Apps → Clone Survey/Poll**. Subo asks *"Which of your servers should I clone this into?"*, copies the project there and confirms. If the project isn't shared, Subo says so and nothing is copied.

<!-- SCREENSHOT 3: right-click menu on a Subo survey message, Apps submenu open on "Clone Survey/Poll". -->
<!-- SCREENSHOT 4: the ephemeral "Which of your servers should I clone this into?" picker. -->
<!-- SCREENSHOT 5: the success message, "Cloned ... into ...! It's inactive for now". -->

**In the web app**, the Clone dialog lists every server you manage under **Clone into which server?** Pick another one to copy the project across.

Who can clone into a server: its owner, admins and creators, and Subo has to be installed there. The member who right-clicks needs no special role in the server the survey came from.

## What carries over, and what you set up again

Everything that makes up the project itself comes with it. Anything tied to the original server is cleared, because a role or channel ID from someone else's server means nothing in yours.

| Carries over | Cleared, you set it up in your server |
|---|---|
| Every block: questions, answer options, content and action blocks | Posting channel (your Participant Channel is used if you have one) |
| [Skip logic](/blog/mastering-skip-logic-how-to-make-your-discord-surveys-smarter-with-subo/), [scoring, grading and calculations](/blog/scoring-piping-quizzes/) | Roles: access roles, reward roles, and role or channel mentions in the text |
| Images, colors, button labels, emojis (custom emojis show as long as Subo is in both servers) | XP, which is switched off on the copy |
| Anonymous mode, vote changes, how results are shown | Theme, interviewer and branding |
| Response limits and link mode | End date and schedule, so the copy never launches on its own |

Two kinds of action blocks come across **unfinished** rather than deleted: a block that gives a Discord role keeps its place in the script but needs a role from your server, and an achievement comes over with its name and image and gets a fresh copy in your community. Open the copy and fill those in before you launch.

<!-- SCREENSHOT 6: a cross-server clone open in the web app, showing the empty channel/role fields to fill in (or an unconfigured give-role block). -->

## Start from a template

Templates are projects the Subo team built to be cloned, and you can copy them from three places:

- **On the site:** browse the [template library](/templates/); each page shows the script and links to the app.
- **In the web app:** open **Templates**, filter by category or feature, and choose **Use this template**. The copy goes into the server you have selected.
- **In Discord:** type `/template`, filter by type, category, tags or a search word, preview one and press **✅ Clone**.

<!-- SCREENSHOT 7: web app Templates page with filters and a "Use this template" button. -->
<!-- SCREENSHOT 8: /template in Discord, a template preview with the "✅ Clone" button. -->

Anything posted in the [Support server](/support/) is shared too, so right-click and clone what you like there.

## Share your own projects

Sharing is **off by default**, so nobody outside your server can copy your work until you choose otherwise.

- **One project:** open its **Details** tab and, under **Sharing**, turn on **Allow others to clone this project**.
- **New projects by default:** in **Settings → General**, **Project Cloning** decides whether projects you create from now on start shared. Each project's own switch still has the final say.

<!-- SCREENSHOT 9: project Details tab, Sharing section with "Allow others to clone this project". -->

People who clone your project get the script and settings, never your responses, your members or your roles. Admins and creators of your own server can always copy a project between servers they manage, shared or not.
