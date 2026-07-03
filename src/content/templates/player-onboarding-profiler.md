---
title: "Discord Onboarding Survey Template | Welcome & Segment New Members"
description: "A 60-second new-member setup that branches. Newcomers and veterans get different questions, everyone gets a warm welcome, and you learn who just joined."
slug: "player-onboarding-profiler"
templateId: 102102
kind: "hub"
dimension: "understand"
audiences: ["Gamers", "Communities"]
features: ["Skip logic", "Member segmentation", "Answer piping", "Multi-select interests"]
eyebrow: "Understand · Onboarding survey"
heroTitle: "An onboarding survey that adapts to who's joining"
heroSubtitle: "New members and long-time regulars answer different questions, so the welcome feels like a conversation that's listening. You learn who just joined, and everyone lands in the right place."
ctaLabel: "Use this template"
workedExample: "a game community's welcome channel"
featureCallouts:
  - emoji: "🔀"
    title: "It branches on tenure"
    desc: "One question asks how long they've been around, then the survey routes. A first-day member gets asked what they need help with; a veteran gets asked what keeps them here."
  - emoji: "👋"
    title: "It uses their name"
    desc: "The survey echoes the handle a member just typed back at them, so the welcome reads personally instead of like a form."
  - emoji: "🎯"
    title: "You learn who joined"
    desc: "Handle, tenure, activity level and interests come back structured, so you can segment new members instead of guessing."
  - emoji: "✅"
    title: "Everyone lands right"
    desc: "Close with a rules confirmation and a pointer to the channels that match their interests, so onboarding actually ends somewhere useful."
steps:
  - title: "Clone and set your welcome"
    desc: "Swap in your community's name and tweak the intro. Keep the tenure question, since it drives the branching."
  - title: "Write the two branches"
    desc: "Fill in the newcomer follow-up (what do you need help with?) and the veteran follow-up (what keeps you around?). Same survey, two conversations."
  - title: "List your interests and channels"
    desc: "Set the multi-select interest options to match your channels, so the closing pointer sends members somewhere real."
  - title: "Publish as your front door"
    desc: "Wire it to a welcome channel, a slash command, or a role gate. New members complete it in about a minute, in Discord or on the web."
faq:
  - q: "What's the difference from a plain welcome form?"
    a: "A static form asks everyone the same questions. This one segments as it goes: newcomers aren't asked veteran questions and vice versa, so it stays short and completion stays high while you still learn more."
  - q: "How does the branching work?"
    a: "A tenure question drives skip logic. Based on the answer, Subo shows the newcomer branch or the veteran branch and hides the other, automatically."
  - q: "Can I use it as a role or verification gate?"
    a: "Yes. Run it as the step before a member gets access, ending with a rules confirmation. On Discord you can pair it with a role that unlocks the server."
  - q: "Does it work for non-gaming communities?"
    a: "Absolutely. It's a member onboarding profiler for any Discord or web community, and reframes cleanly as a new-user activation survey for a product."
recipeUrl: "https://api.subo.ai/docs"
relatedSlugs: ["feature-roadmap-vote", "playtest-beta-feedback", "lore-trivia-quiz"]
pubDate: 2026-07-02
draft: false
---

Most welcome forms ask a first-day member and a two-year veteran the exact same questions. This one listens: a single tenure question routes each new member to the follow-up that actually fits them, so onboarding feels like a conversation instead of a checklist.

Use it as the front door to your community: a welcome channel, a `/welcome` flow, or the step before a role unlocks. It captures the essentials (handle, how long they've been around, how active they are, what they're into, and a rules agreement) while adapting the questions to who's answering.

## It segments as it goes

Because the survey branches on tenure, newcomers get asked what they need help getting started while veterans get asked what keeps them coming back. Everyone's handle is echoed back so the welcome reads personally, and their interests map straight to the channels you point them at when they finish.

The example runs as a game community's welcome flow. Rename the branches and interests and it fits any server or product.

## Variants

- **Verification gate:** end with a rules confirmation and pair it with a Discord role that unlocks the server.
- **Product activation profiler:** reframe the questions around role, use case, and goal to segment new users on signup.
- **Event or cohort intake:** ask what a new cohort wants to get out of the season and route by experience level.
- **Lightweight welcome:** trim to handle, interests, and rules for a 20-second greeting.
