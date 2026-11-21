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
    a: "Yes, if its owner has turned on <strong>Allow others to clone this project</strong>. Right-click the survey or poll message, choose <strong>Apps → Subo the Survey Bot → Clone Project</strong>, and pick the server to copy it into. You need to be an admin or creator in that server, and Subo has to be installed there."
  - q: "Does cloning copy the responses?"
    a: "No. A clone copies the script and its settings, never the answers people gave. It starts with zero responses."
  - q: "Why do I have to set the channel and roles again on my clone?"
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

**In the web app**, open **Projects**, open the **⋮** menu on the project and choose **Clone**.

![The Projects page in the web app with three project cards, the three-dot menu open on the Bug report card and its Clone option highlighted](/images/blog/cloning/clone-projects-menu.png)

Subo asks what to call the copy. The **Clone into which server?** dropdown lists your servers by name and starts on the one you're in, so leave it there, type a name and send it. You can jump straight into the copy with **Edit new project**.

![The Clone Project dialog, with Subo asking what to call the copy of Bug report, the Clone into which server? dropdown set to the current server, KMB10, and Bug report (clone) typed in the name field](/images/blog/cloning/clone-dialog.png)

**In Discord**, admins can use the **Clone Survey** or **Clone Poll** button in the edit menu. Subo asks for a name, then offers to switch you to editing the new copy.

A clone inside the same server copies everything, including the channel, roles, XP rewards and theme. Change what you need and launch.

## Clone a project from another server

**In Discord**, right-click the survey or poll message and choose **Apps → Subo the Survey Bot → Clone Project**.

![The right-click menu on a Subo survey message in Discord, with Apps open on Subo the Survey Bot and Clone Project highlighted above Edit, Repost, See Results and Start / Stop](/images/blog/cloning/discord-clone-context-menu.png)

Subo asks *"Which of your servers should I clone this into?"* and lists the servers where you can create projects. Picking one copies the project right away; there's no second confirmation.

![Subo's private reply asking Which of your servers should I clone this into?, with the dropdown open on two servers, KMB10 and KMB7](/images/blog/cloning/discord-clone-server-picker.png)

Subo then confirms where the copy went and reminds you it's inactive. If the project isn't shared, Subo says so and nothing is copied.

![Subo's confirmation in Discord, Cloned Bug report into KMB7! It's inactive for now, followed by a note to review channels, roles and rewards in Subo or the web app before launching](/images/blog/cloning/discord-clone-success.png)

**In the web app**, use the same **Clone** action and pick another server in **Clone into which server?** The dialog warns you that channel, roles and XP won't carry over.

![The Clone Project dialog with KMB7, a different server, selected and the note Settings like channel, roles, and XP name/value won't carry over. You'll set those up in the new server.](/images/blog/cloning/clone-cross-server-dialog.png)

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

The web app sends you there directly: after a cross-server clone, **Edit new project** opens the copy so you can set up its channel, roles and rewards.

![The Clone Project dialog after a cross-server clone, with Subo saying the project was cloned to your other server and is ready to open to set up a channel, roles, and rewards, and the Edit new project button highlighted](/images/blog/cloning/clone-cross-server-setup.png)

## Start from a template

Templates are projects the Subo team built to be cloned, and you can copy them from three places:

- **On the site:** browse the [template library](/templates/); each page shows the script and links to the app.
- **In the web app:** open **Templates**, filter by category or feature, and choose **Use this template**. The copy goes into the server you have selected.
- **In Discord:** type `/template`, filter by type, category, tags or a search word, preview one and press **✅ Clone**.

![The Templates page in the web app with the type, category and feature filters highlighted and a Use this template button on each template card](/images/blog/cloning/templates-page.png)

![A /template preview in Discord for Game Night: What Are We Playing?, followed by Subo asking Clone this template into one of your servers? with the ✅ Clone button highlighted](/images/blog/cloning/discord-template-clone.png)

Anything posted in the [Support server](/support/) is shared too, so right-click and clone what you like there.

## Share your own projects

Sharing is **off by default**, so nobody outside your server can copy your work until you choose otherwise.

- **One project:** open its **Details** tab and, under **Sharing**, turn on **Allow others to clone this project**.
- **New projects by default:** in **Settings → General**, **Project Cloning** decides whether projects you create from now on start shared. Each project's own switch still has the final say.

![The Sharing section of a project's Details tab, with the Allow others to clone this project switch and its note that channels and roles are stripped on clone and respondent data is never copied](/images/blog/cloning/sharing-allow-clone.png)

People who clone your project get the script and settings, never your responses, your members or your roles. Admins and creators of your own server can always copy a project between servers they manage, shared or not.
