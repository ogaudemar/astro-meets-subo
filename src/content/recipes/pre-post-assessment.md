---
title: "Pre and Post Survey: Measuring Program Impact in a Community"
description: "Measure whether an event, course or campaign actually changed anything. Two identical survey waves with the same score buckets give you a before and after you can compare per member."
pubDate: "Aug 05 2026"
audience: "community researchers, developers or educators running structured programs on Discord, moderators tracking the effect of specific initiatives"
setupTime: "~20 minutes per wave (identical questions; second project is a clone with the dates changed)"
bestFor: "any community running a program where you want evidence of impact, not just anecdote"
dimension: "understand"
features: ["scoring", "grading", "cloning", "research"]
relatedSlugs: ["member-segmentation", "study-quiz", "welcome-quiz"]
templateSlugs: ["community-health-engagement"]
faq:
  - q: "How do you measure the impact of a community program?"
    a: "Run the same survey twice, once before the program and once after, with identical questions and identical score bucket names. The change in each score is your evidence, rather than anecdote."
  - q: "How do you match responses between the two waves?"
    a: "The Discord handle is the natural join key because it is consistent across both waves and requires no extra question."
  - q: "Why score several questions per dimension?"
    a: "A single item conflates dimensions and is noisy. Three or four items scored into one bucket produce a more stable construct score you can actually compare across waves."
  - q: "Should the rating scale have a midpoint?"
    a: "Avoid one. Midpoints attract satisficing responses and add noise without adding information about direction."
  - q: "Do I have to rebuild the survey for wave two?"
    a: "No. Clone wave one and change the dates. All blocks, weights and bucket names carry over, which is what keeps the two waves comparable."
---A two-wave survey design that measures change in knowledge or attitudes
across your community before and after an intervention: an event, a
content series, a campaign, or a moderation change. Each wave is a separate
Subo project with identical questions; joining the exports on Discord handle
gives you individual-level change scores.

---

## The scenario

You run a game-development Discord with 1,500 members. You're launching a
4-week "Indie Dev Bootcamp", with weekly talks, live critique sessions, shared
build exercises. You want to know whether it actually changed participants'
confidence and knowledge, and whether the effect differs between members who
showed up to most sessions versus those who attended once or twice.

You run:
- **Wave 1 (pre-test):** the week before the bootcamp opens. Measures
  baseline confidence across five dimensions and knowledge on three core
  topics.
- **Wave 2 (post-test):** the week after it closes. Same questions,
  same scoring, one additional question about attendance.

You join the two exports on Discord handle and compute individual delta
scores. The result is a participant-level dataset showing who improved,
by how much, and in which dimensions.

---

## Design principles

### Same questions, same weights, different projects

Both waves use identical question blocks and identical `score_values`
weights. Using separate projects (not retakes of a single project)
is deliberate:

- `max_completes_per_user: 1` on each project prevents strategic
  re-taking between waves.
- Separate exports are easier to label ("pre", "post") and join correctly.
- The respondent context in Wave 2 can differ (you can add attendance
  questions or reference the programme in the intro) without changing
  the scored items.

Clone Wave 1's project to create Wave 2, so all blocks, weights, and bucket
names copy exactly. Change the project name and intro text; leave everything
else identical.

### Use scored attitudes, not just counts

A single "How confident are you?" rating question gives a 1-5 score but
conflates dimensions. Scoring across multiple items per dimension, even
3-4 items, produces a more stable and interpretable construct score.

Example: measuring **"confidence in shipping"** across three items:
- "I have a clear picture of what I'd cut to hit a deadline" (1-4 scale,
  encoded as score_values 1-4 on the options)
- "I've shipped something, even small" (binary: 0 or 5)
- "I'd know how to scope a feature for a demo" (1-4 scale)

The `[score_shipping]` bucket total for this respondent ranges 2-13.
That range is more diagnostic than a single 1-5 rating.

### Closed options, not free text, for pre/post

Use `single_punch` or `button_list` questions with fixed options and
`score_values`. Free text answers cannot be scored automatically; they
require manual coding and break the join logic. Save open-ended questions
for items that are not part of the scored constructs.

### Include a response-matching anchor

The Discord handle is the natural join key: it is consistent across both
waves and appears in the Responses export. No extra question needed.
But if any respondents might use different Discord accounts, add a
free-text "nickname" question whose answer can serve as a secondary key.

---

## Flow (both waves identical on scored items)

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ Wave 1: "Quick check-in before we start" │
  │ Wave 2: "How did the bootcamp go?"       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2–q5: Dimension 1 items (4 questions)   │
  │ "Confidence in shipping"                 │
  │ score_values → [score_shipping]          │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q6–q9: Dimension 2 items (4 questions)   │
  │ "Confidence in scoping"                  │
  │ score_values → [score_scoping]           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q10–q12: Knowledge items (3 questions)   │
  │ Right/wrong, with correct_answer_index   │
  │ score_values → [score_knowledge]         │
  │ Immediate feedback in Wave 2 only        │
  └──────────────────────────────────────────┘
                    │
                    ▼  (Wave 2 only)
  ┌──────────────────────────────────────────┐
  │ q13: Attendance question (Wave 2 only)   │
  │ "How many sessions did you attend?"      │
  │ (plain single_punch, no score_values)    │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q14: Summary content_block               │
  │ Shows [score_shipping], [score_scoping], │
  │ [correct_answers]/[max_correct_answers]  │
  └──────────────────────────────────────────┘
```

---

## Prerequisites

### Score buckets (3 total, same names in both projects)

| Display name | Variable key | Meaning |
|---|---|---|
| Shipping | `shipping` → `[score_shipping]` | Confidence in shipping decisions |
| Scoping | `scoping` → `[score_scoping]` | Confidence in scoping and prioritising |
| Knowledge | `knowledge` → `[score_knowledge]` | Factual knowledge of the topic domain |

### Projects (2 total)

```jsonc
// Wave 1
POST /v1/communities/{communityId}/projects
{
  "name": "Bootcamp — Pre-test (Wave 1)",
  "scoring_enabled": true,
  "settings": { "max_completes_per_user": 1, "is_anonymous": false }
}

// Wave 2 — clone Wave 1, then update name and intro block
POST /v1/communities/{communityId}/projects/{wave1Id}/clone
// → update name to "Bootcamp — Post-test (Wave 2)"
// → update q1 intro text to post-programme framing
// → add attendance question (q13) at the end of scored items
```

**Important:** verify that the cloned Wave 2 project has identical bucket
names and identical `score_values` before publishing. A mismatch in
bucket names breaks comparability. Wave 1 `[score_shipping]` and Wave 2
`[score_shipping_confidence]` are different columns in the export.

---

## Scored item design

### Attitude items (Likert-encoded as score_values)

Encode a 4-point Likert scale directly into `score_values`. Avoid 5-point
scales with a midpoint: midpoints attract satisficing responses and add
noise in small community samples.

```jsonc
{
  "type": "single_punch",
  "prompt": "I have a clear picture of what I would cut to hit a deadline.",
  "options": [
    { "value": "Strongly disagree", "label": "Strongly disagree", "score_values": { "shipping": 1 } },
    { "value": "Disagree",          "label": "Disagree",          "score_values": { "shipping": 2 } },
    { "value": "Agree",             "label": "Agree",             "score_values": { "shipping": 3 } },
    { "value": "Strongly agree",    "label": "Strongly agree",    "score_values": { "shipping": 4 } }
  ]
}
```

Group 3-4 items per dimension. Mix positively and negatively framed items
if your sample is sophisticated enough to avoid acquiescence bias. For
most Discord communities, consistently positive framing is less confusing.

### Knowledge items (right/wrong with deferred feedback)

For knowledge items, set `correct_answer_index` and `score_values` on the
correct option only, the same pattern as the [World Capitals Quiz](/recipes/world-capitals-quiz).

In Wave 1, leave `when_correct` and `when_incorrect` blank: you do not
want to give feedback that helps respondents perform better on Wave 2
knowledge items. In Wave 2, you can add feedback text freely because
the pre-test has already been collected.

```jsonc
// Wave 1 — no feedback (don't tip off respondents before post-test)
{
  "type": "single_punch",
  "prompt": "What is the recommended maximum scope for a solo-developer launch milestone?",
  "options": [
    { "value": "1 feature", "label": "1 core feature + polish" },
    { "value": "3 features", "label": "3 features with basic UX", "score_values": { "knowledge": 5 } },
    { "value": "MVP+",       "label": "MVP + growth loop" },
    { "value": "Full launch","label": "Full feature set" }
  ]
}

// Wave 2 — same question, now with feedback
{
  "type": "single_punch",
  "prompt": "What is the recommended maximum scope for a solo-developer launch milestone?",
  "when_correct":   "✅ Correct — 3 focused features with basic UX is the sweet spot for a solo launch. Less is almost always more.",
  "when_incorrect": "❌ The answer is **3 features with basic UX**. The most common mistake is launching too wide; scope creep after commitment is what kills solo projects.",
  "options": [
    { "value": "1 feature", "label": "1 core feature + polish" },
    { "value": "3 features", "label": "3 features with basic UX", "score_values": { "knowledge": 5 } },
    { "value": "MVP+",       "label": "MVP + growth loop" },
    { "value": "Full launch","label": "Full feature set" }
  ]
}
```

---

## Closing block: show the score to the respondent

In Wave 2, show the respondent their score. This closes the loop and
rewards honesty. In Wave 1, you may choose to hide it (to avoid
anchoring the respondent to their pre-test score):

```jsonc
// Wave 2 closing block
{
  "type": "content_block",
  "prompt": "# Your bootcamp results, [UserName]\n\n**Shipping confidence:** [score_shipping] / [max_score_shipping]\n**Scoping confidence:** [score_scoping] / [max_score_scoping]\n**Knowledge check:** [correct_answers] / [max_correct_answers] correct\n\nThanks for taking part — your data helps us make the next cohort better.",
  "continue": { "after": "click", "label": "Done ✓" }
}
```

---

## Analysis: computing change scores

### Export both waves

From the Responses tab → Export → CSV. The export includes:
- Discord handle (join key)
- Completion timestamp
- All answer columns
- Score columns: `score_shipping`, `score_scoping`, `score_knowledge`
- `correct_answers`, `max_correct_answers`

### Join and compute deltas

In any spreadsheet or analysis tool:

```
wave2.score_shipping - wave1.score_shipping  → Δ_shipping
wave2.score_scoping  - wave1.score_scoping   → Δ_scoping
wave2.score_knowledge - wave1.score_knowledge → Δ_knowledge
```

Members present in Wave 2 but not Wave 1 are late joiners or non-completers
on the pre-test, so analyse them separately or exclude depending on your goal.

### Segment by attendance (Wave 2 q13)

Group respondents by their Wave 2 attendance answer (1 session / 2-3 / all
4). Compare mean Δ_shipping, Δ_scoping, Δ_knowledge across attendance groups.
A dose-response pattern (higher attendance → larger positive delta) is the
strongest available evidence that the programme caused the improvement.

### Report aggregate change

Average the delta columns across all matched respondents for a programme-level
summary: "Participants improved their shipping confidence score by +2.4 points
on average (out of a possible 16), with the largest gains among those who
attended 3 or more sessions."

---

## Variations

### Three-wave design (pre / mid / post)

Add a Wave 1.5 survey at the midpoint of the programme. Same structure,
same bucket names. A mid-programme dip in confidence is common: members
learn how much they don't know, and the pre/mid/post trajectory tells a
richer story than a single before/after comparison.

### Segment change by onboarding type

If you've run the [Member Segmentation](/recipes/member-segmentation) survey,
join the segmentation export to the pre/post export on Discord handle. Do
Competitors improve their shipping confidence more than Socials? Do Creators
enter with higher baseline scoping scores? Cross-segment change analysis
adds a third axis to the report.

### Continuous measurement (monthly pulse)

Drop the "pre/post" framing and run the same scored survey monthly as a
community health pulse. Track community-level averages over time rather
than individual deltas. Useful for ongoing programmes rather than discrete
cohorts.

---

## Limitations and honest notes

- **Self-selection bias:** members who complete both waves are likely more
  engaged than those who complete only one or neither. Delta scores reflect
  participants, not the full community.
- **Test-retest effects:** some improvement in Wave 2 knowledge scores
  comes from memory of Wave 1 questions, not the programme. Withholding
  Wave 1 feedback on knowledge items (as noted above) reduces but does
  not eliminate this.
- **No causal inference:** two-wave pre/post without a control group cannot
  prove the programme caused the improvement. Community effects, external
  events, and motivated self-selection all confound the result. A comparison
  group (members who signed up but attended zero sessions) is the minimum
  credible comparison.

These limitations are inherent to naturalistic community research, not
specific to Subo. The platform gives you clean, structured data collection
and automatic score computation. Interpreting that data still requires
judgement.

---

## When this recipe doesn't fit

- **You need validated psychometric instruments**: Subo can implement any
  item battery and weight scheme you provide, but it does not validate
  the instruments themselves. Work with a domain expert to design and
  validate the items before encoding them.
- **You want to track individual respondents without Discord**: this recipe
  uses Discord handle as the join key. For communities where members may
  not have consistent Discord identities (e.g., mixed web + Discord
  audiences), you'll need a manually entered identifier.

---

## Related

- [Member segmentation](/recipes/member-segmentation): onboarding survey with multi-bucket hidden scoring
- [Study quiz](/recipes/study-quiz): per-attempt knowledge assessment with immediate feedback and retakes
- [World Capitals Quiz](/recipes/world-capitals-quiz): right/wrong knowledge quiz, single wave
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript)
