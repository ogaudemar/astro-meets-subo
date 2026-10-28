---
title: "Discord Staff Application Template | Mod Applications That Screen Themselves"
description: "Screen staff applicants in 5 minutes: availability, experience, and how they'd handle a real conflict. An optional age gate politely declines applicants under 16."
slug: "staff-application"
templateId: 108018
kind: "hub"
dimension: "get-things-done"
audiences: ["Communities", "Gamers"]
features: ["Skip logic", "Opinion scale", "Multi-select", "Age gate"]
eyebrow: "Organize · Staff application"
heroTitle: "A mod application that does the screening for you"
heroSubtitle: "Every applicant answers the same questions: when they're online, how much time they really have, whether they've moderated before, and how they'd handle a conflict involving a friend."
ctaLabel: "Use this template"
workedExample: "a Discord moderator application"
featureCallouts:
  - emoji: "🕐"
    title: "Real commitment, averaged"
    desc: "\"How many hours a week\" is a 4-point scale (Under 2, 2 to 5, 5 to 10, More than 10), so you see the applicant pool's average, not a pile of free text."
  - emoji: "🌍"
    title: "Coverage at a glance"
    desc: "Timezone plus \"when are you usually online\" (mornings, afternoons, evenings, late nights, weekends) shows which hours each applicant covers."
  - emoji: "🛡️"
    title: "Experience in three steps"
    desc: "\"A mod somewhere now\", \"in the past\" or \"first time\". First-timers skip the \"where, and what were you responsible for?\" follow-up."
  - emoji: "⚖️"
    title: "A real scenario"
    desc: "\"Two members start arguing in a public channel and it's turning into insults. One of them is a long-time regular you get along with. What do you do?\" It tests fairness toward a friend, the classic moderation failure."
  - emoji: "🔞"
    title: "Optional age gate"
    desc: "Applicants under 16 get a polite decline and skip the rest. Change the age or remove the gate to fit your server."
steps:
  - title: "Clone it and make it yours"
    desc: "Adjust the age gate (or remove it) and the conflict scenario to fit your server."
  - title: "Turn on notifications"
    desc: "Turn on New Response Notifications (Premium) with a private staff channel, so reviewers see each application the moment it's in."
  - title: "Post it"
    desc: "Post it where members who might apply will see it."
  - title: "Compare applicants"
    desc: "Read every application side by side in the Responses tab."
faq:
  - q: "How do I know when someone applies?"
    a: "Turn on New Response Notifications (Premium) in the project's Details tab, pick a private staff channel as the Notification Channel, and optionally mention admins. Developers can subscribe to the response.submitted webhook through the Public API instead."
  - q: "Does it give the applicant a role automatically?"
    a: "No, on purpose: accepting a mod is a human decision. Participation XP is off too, so nobody applies just to farm points."
  - q: "Can I change the minimum age?"
    a: "Yes. The gate is a visual condition on the age question; change which age option declines, or delete the decline and its conditions."
  - q: "Why is \"Anything else?\" a Yes/No first?"
    a: "A question can't be skipped in a Subo conversation, so a Yes/No lets people with nothing to add move on in one tap."
recipeUrl: "/recipes/volunteer-moderator-funnel/"
relatedSlugs: ["playtester-beta-recruitment", "onboarding-certification", "welcome-new-members"]
pubDate: 2026-10-28
draft: false
---

"DM me if you want to be a mod" gets you a stack of one-line replies and no fair way to compare them. This template asks every applicant the same questions, in the same order, so you read applications side by side instead of chasing details across DMs.

## What every applicant answers

- **When they're around:** their timezone, and the parts of the day they're usually online.
- **How much time they really have,** on a 4-point scale from "Under 2" to "More than 10" hours a week.
- **Their experience:** a mod somewhere now, in the past, or for the first time. Only those with experience get asked where, and what they were responsible for.
- **A conflict involving a friend:** an argument in a public channel turning into insults, with a long-time regular they get along with on one side. How someone answers this tells you more than any list of past servers.
- **Anything else,** asked as a Yes/No first, so people with nothing to add move on.

An optional age gate at the start politely declines applicants under 16 and skips the rest.

## Why it stops at the application

Accepting a mod is a human decision, so the template collects applications and leaves the choice to your team. There's no automatic role and no participation XP. If you'd rather have a gating question hand out a trial role on the spot, the [moderator funnel recipe](/recipes/volunteer-moderator-funnel/) shows that approach.

## Variants

- **Event staff or helpers:** keep the availability questions and swap the scenario for one from your own events.
- **Your own age rule:** change which age option declines, or delete the gate if your server doesn't need one.
- **A different conflict:** replace the scenario with the situation your mods actually run into most.
