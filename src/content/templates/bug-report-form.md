---
title: "Discord Bug Report Template | Auto-Triage by Priority"
description: "Collect bug reports that triage themselves. Severity and frequency auto-compute a priority on the spot, so the reports that matter surface instantly."
slug: "bug-report-form"
templateId: 102104
kind: "hub"
dimension: "get-things-done"
audiences: ["Gamers", "Businesses"]
features: ["Calculated field", "Auto-priority scoring", "Skip logic", "Answer piping"]
eyebrow: "Organize · Bug intake"
heroTitle: "A bug form that triages itself"
heroSubtitle: "Reporters answer a few structured questions. Subo weighs severity against frequency, computes a triage priority on the spot, and shows it back to them, so the important bugs surface the moment they land."
ctaLabel: "Use this template"
workedExample: "a game's #report-a-bug channel"
featureCallouts:
  - emoji: "🧮"
    title: "It computes priority"
    desc: "Severity and frequency are weighted, and a calculated field derives a HIGH, MEDIUM or LOW triage priority automatically. No human does the first pass."
  - emoji: "📨"
    title: "Reporters see the result"
    desc: "The computed priority is echoed back to the reporter, so they know a bad crash was taken seriously the instant they submit."
  - emoji: "🔁"
    title: "Repro steps only when needed"
    desc: "Skip logic asks for reproduction steps only from reporters who say the bug reproduces, keeping the form short for everyone else."
  - emoji: "🗂️"
    title: "Structured, not a chat blob"
    desc: "Summary, area, severity, frequency, platform and steps come back as fields, so your team reads a triaged queue instead of scrolling a channel."
steps:
  - title: "Clone and set your areas"
    desc: "Swap in the parts of your game or product a bug could hit (UI, gameplay, performance, and so on) as the affected-area options."
  - title: "Keep or tune the weights"
    desc: "Severity and frequency carry scoring weights that feed the priority. Leave the defaults for standard triage, or adjust the thresholds to your team's bar."
  - title: "Publish as your intake"
    desc: "Point a #report-a-bug channel, a beta QA form, or a support flow at it. Reporters answer in Discord or on the web."
  - title: "Work the triaged queue"
    desc: "Every report arrives with a priority already computed, so your team starts with the HIGH ones instead of triaging by hand."
faq:
  - q: "How is the priority calculated?"
    a: "Severity and frequency each carry a weight. Subo adds them into a score, and a calculated field maps that score to HIGH, MEDIUM or LOW using simple if/then/else rules you can edit."
  - q: "Can I change the priority thresholds?"
    a: "Yes. The calculated field is just a formula over the score, so you can move where MEDIUM becomes HIGH or add tiers to match how your team works."
  - q: "What are calculated fields?"
    a: "They derive a new value from earlier answers, like turning severity and frequency into a priority label. Almost nobody discovers this feature on their own, which is exactly why this template shows it off."
  - q: "Does it work for support tickets, not just game bugs?"
    a: "Yes. It's a self-triaging issue intake for any product or SaaS team. Rename the areas and severity levels and it becomes a support-ticket form."
recipeUrl: "/recipes#get-things-done"
relatedSlugs: ["feature-roadmap-vote", "playtester-beta-recruitment", "playtest-beta-feedback"]
pubDate: 2026-07-02
draft: false
---

A `#bugs` channel is a scroll of half-formed reports someone has to triage by hand. This form captures what your team needs to reproduce and prioritize, then does the first pass of triage itself, before a human ever reads it.

Use it as your community's front door for bugs: a `#report-a-bug` channel, a QA intake during a beta, or a support form. It asks for a one-line summary, the affected area, severity, frequency, whether it reproduces, and platform, then computes a priority and shows it back to the reporter.

## It prioritizes for you

Severity and frequency are weighted, and a calculated field turns them into a HIGH, MEDIUM or LOW priority on the spot. A crash that happens every session outranks a cosmetic glitch nobody hits, with no human doing the sorting. The reporter sees the priority echoed back, so they know a serious bug was heard, and your team starts the day with an already-triaged queue.

The example runs as a game's `#report-a-bug` intake. Rename the areas and severity levels and it becomes a support form for any product.

## Variants

- **Support ticket intake:** rename the areas to product surfaces and route HIGH priority to a dedicated channel.
- **Beta QA form:** run it during a playtest to catch and rank issues before launch.
- **Feature request board:** repurpose the scoring to rank incoming requests by impact and reach.
- **Crash-only fast lane:** trim to severity, platform, and repro steps for a rapid crash report.
