---
title: "Discord Moderator Application Form with Automatic Role Assignment"
description: "Replace ad-hoc DM recruiting with a moderator application: one gating question decides who lands in the trial pool, everyone else gets a waitlist role, and you keep the answers for review."
pubDate: "Aug 05 2026"
audience: "community managers and admins recruiting volunteer mods"
setupTime: "~10 minutes"
bestFor: "servers ready to expand the mod team and tired of ad-hoc DM recruiting"
dimension: "get-things-done"
features: ["skip logic", "action blocks", "roles", "applications"]
relatedSlugs: ["playtester-selection", "welcome-quiz", "event-rsvp-streak"]
templateSlugs: []
faq:
  - q: "How do you run a moderator application in Discord?"
    a: "Post a short application survey, gate it on the one answer that actually decides the outcome (weekly time commitment), and let two mutually exclusive action blocks grant either a trial role or a waitlist role. You review the collected answers before promoting anyone."
  - q: "Can an application form assign a Discord role automatically?"
    a: "Yes. Two action blocks with opposite skip-logic conditions mean exactly one fires per applicant, so the role is granted the moment they finish."
  - q: "How do I stop someone applying repeatedly?"
    a: "Set max_completes_per_user to 1 on the project. That is the only protection against re-applying, so leave it in place if you reopen the funnel."
  - q: "Why use a role instead of an achievement for mods?"
    a: "Mod Trial and Waitlist are operational tags that organise channel access, not milestones worth displaying forever. Use an achievement only if your community treats \"I was a mod here\" as a permanent badge."
---Screen volunteer-moderator applicants with a single decisive question
(weekly time commitment), grant the matching role automatically, and
collect data for the human review of the qualifying pool.

---

## The scenario

You need more mods. The DMs work but they're chaotic. You keep asking
the same five questions and you've lost track of who said what. A short
application form solves both problems: every applicant answers the same
questions, the *qualifying* answer (weekly commitment) decides who gets
into the trial pool, and everyone else lands on a Waitlist role so you
can run another round without losing their interest.

This recipe uses **two mutually-exclusive action blocks** so exactly one
of them fires per applicant. Q1 is a welcoming intro, q2 is the gate,
q3-q5 collect data you'll read when deciding who to promote from the
qualifying pool.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Hey [UserName]! Thanks for considering  │
  │  helping us moderate 🛡"                 │
  │ → [ Let's go! 🚀 ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐  ← the gate
  │ q2: Weekly time commitment?              │
  │  🏆 5+ hours    🤝 1–4 hours   👋 <1 hour│
  └──────────────────────────────────────────┘
                    │
        ┌───────────┴───────────┐
        ▼                       ▼
     5+ hours              ≠ 5+ hours
        │                       │
        ▼                       ▼
  ┌──────────────────────────────────────────┐
  │ q3: Time zone bucket                     │
  │ q4: Prior moderation experience          │
  │ q5: Conflict-resolution example (text)   │
  └──────────────────────────────────────────┘
        │                       │
        ▼                       ▼
  ┌──────────────────┐   ┌──────────────────┐
  │ 🛡 Mod Trial     │   │ 🙏 Waitlist      │
  │ role granted     │   │ role granted     │
  │ [ Continue ]     │   │ [ Continue ]     │
  └──────────────────┘   └──────────────────┘
```

> **Why q2 and not q1 for the gate?** The intro `content_block` counts
> as q1. Skip-logic position numbering includes every block, not just
> questions.

---

## Prerequisites

### 1. Two Discord roles

Create these in your server. No achievement needed: these are
operational tags, not credentials worth surfacing on member profiles.

| Role name | Suggested ID |
|---|---|
| `@🛡 Mod Trial` | `1382089724239417460` |
| `@🙏 Mod Waitlist` | `1382089724239417461` |

### 2. Project

Create a project named "Mod Recruitment" via
`POST /v1/communities/{id}/projects` or the web app. Leave
`max_completes_per_user: 1`, because you don't want one applicant flooding the
form with attempts to fish for the gate condition.

---

## The script

The full payload is published as the `volunteerModeratorFunnel` example on the `PUT /script`
endpoint in [the API reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript). Walkthrough:

### Intro: q1

```jsonc
{
  "type": "content_block",
  "prompt": "Hey [UserName]! Thanks for considering helping us moderate 🛡 A few quick questions.",
  "image_url": "https://i.ibb.co/GfB0H7Z6/subo-equalizer.gif",
  "continue": { "after": "click", "label": "Let's go! 🚀" }
}
```

A serious application deserves a warm opening. `[UserName]` substitutes
the respondent's display name; the GIF + acknowledge button sets the
"this is a moment" tone before the questions start.

### The gate: q2

```jsonc
{
  "type": "single_punch",
  "prompt": "How much time can you commit to moderating each week?",
  "options": [
    { "value": "5+ hours",         "label": "🏆 5+ hours" },
    { "value": "1-4 hours",        "label": "🤝 1–4 hours" },
    { "value": "Less than 1 hour", "label": "👋 Less than 1 hour" }
  ]
}
```

Q2 is the **single decisive question**. The `value` field is
case-sensitive in skip-logic comparisons, so pick values you can match on
later without ambiguity. The labels can carry friendlier copy and emoji.

### Data collection: q3, q4, q5

```jsonc
{ "type": "single_punch", "prompt": "Which time zone bucket fits…",  /* … */ }
{ "type": "single_punch", "prompt": "Have you moderated a community before?", /* … */ }
{ "type": "open_text", "prompt": "In 2–3 sentences: how would you handle a heated argument between two members? ✍️", "required": true }
```

These don't gate anything; they're for **you**, the reviewer. The
required open-text (q5) is a quiet filter: low-effort applicants quit
before submitting it.

### The two mutually-exclusive action blocks

```jsonc
{
  "type": "action_block",
  "prompt": "🛡 Mod Trial granted — you'll get a DM with next steps. Welcome to the trial team!",
  "action_kind": "give_role",
  "action_config": { "role_id": "1382089724239417460" },
  "precondition": "NOT (q2 = \"5+ hours\")",
  "continue": { "after": "click", "label": "Continue" }
}
```

```jsonc
{
  "type": "action_block",
  "prompt": "🙏 Thanks for your interest! We're keeping your application on file for the next round.",
  "action_kind": "give_role",
  "action_config": { "role_id": "1382089724239417461" },
  "precondition": "q2 = \"5+ hours\"",
  "continue": { "after": "click", "label": "Continue" }
}
```

- **Mod Trial:** hide unless `q2 = "5+ hours"` → `NOT (q2 = "5+ hours")`
- **Waitlist:** hide when `q2 = "5+ hours"` → `q2 = "5+ hours"`

Because the conditions are mutually exclusive, exactly one fires per
applicant. No score, no math, just one question gating one outcome.

In the Script Editor's skip-logic panel, the **Show / Hide** toggle lets
you author this without writing `NOT`. Pick **Show only when** and
`q2 = "5+ hours"`; the editor stores it as the negated form for you.

### Why `after: "click"` instead of auto-pause?

The Mod Trial role grant is a commitment: the applicant just accepted
responsibility for the community. An acknowledge button feels more
deliberate than an auto-advance pause. The Waitlist branch uses the same
pattern for parity (the applicant explicitly closes the loop).

---

## Variations

### Two-stage funnel: trial → full mod

After someone holds Mod Trial for a month, run a *second* project
gating on the Mod Trial role itself (using project audience targeting,
not skip logic). That project's gate could be a simple "Ready to be
promoted to full mod?" → "Mod" role grant. Splitting trial vs. full as
two projects keeps each script short.

### Add a Discord-side experience tier

Add a fourth tier to q2 ("10+ hours") for applicants who can commit
even more time. Update the Mod Trial precondition to
`NOT (q2 in ["5+ hours", "10+ hours"])` so both qualify. Or branch
further with a third action block for a "Senior Mod Trial" role gated
on `NOT (q2 = "10+ hours")`.

### Notify the admin team in a channel

Use the project's `completeNotifications` setting (web UI: Project →
Notifications) to post a summary into a `#mod-recruiting` channel
whenever an applicant submits. You'll see the gate result, time zone,
and open-text answer without needing to dig into responses.

---

## When this recipe doesn't fit

- **You want to weight multiple criteria** (e.g. "qualify if 3 of 5
  criteria met"). Skip logic supports compound expressions but the
  action-block count grows quickly. Scoring is the clean path there: see
  the [member segmentation recipe](/recipes/member-segmentation). This
  recipe deliberately picks the single most predictive question instead.
- **You need to verify experience claims.** This recipe asks. If you
  need *evidence* (links to communities they've moderated, references),
  add an open-text q6 collecting those, but be aware they're
  unverifiable today. Identity / community verification integrations are
- **You want gate criteria the applicant can't see.** All preconditions
  are admin-side; the *applicant* doesn't see the rule. But they will
  notice that "5+ hours" gets a different outcome than other options if
  they retake. `max_completes_per_user: 1` is your only protection.

---

## Related
- [Welcome quiz recipe](/recipes/welcome-quiz): onboarding pattern (region / language / notifications)
- [Event RSVP recipe](/recipes/event-rsvp-streak): recurring engagement pattern
- [Playtester selection recipe](/recipes/playtester-selection): same single-gate funnel pattern, game-dev framing
- [Skip logic reference](https://api.subo.ai/docs#tag/Script): operator and value-type tables

---

## Why role and not achievement?

This recipe uses `give_role` for both branches. Mod Trial and Waitlist
are **operational tags**: they exist to organize who can post in
mod-only channels and who's on the bench. They're not credentials worth
displaying on a member's profile forever.

If your community treats "I was a mod here" as a milestone (e.g. a
permanent retirement badge after someone steps down), switch the Mod
Trial branch to `give_achievement` with a "Mod Alumni" achievement
that's also linked to the Mod Trial role. See the
[achievements vs. roles table in the welcome-quiz recipe](/recipes/welcome-quiz#achievements-vs-roles)
for the broader rule.
