---
title: "Pre and Post Survey: Measuring Program Impact in a Community"
description: "Measure whether an event, course or campaign actually changed anything. Two identical survey waves, scored the same way, give you a before and after you can compare per member."
pubDate: "Aug 05 2026"
updatedDate: "Aug 14 2026"
audience: "community researchers, developers or educators running structured programs on Discord, moderators tracking the effect of specific initiatives"
setupTime: "~20 minutes per wave (identical questions; second project is a clone with the dates changed)"
bestFor: "any community running a program where you want evidence of impact, not just anecdote"
dimension: "understand"
features: ["scoring", "grading", "cloning", "research"]
relatedSlugs: ["member-segmentation", "study-quiz", "welcome-quiz"]
templateSlugs: ["community-health-engagement"]
faq:
  - q: "How do you measure the impact of a community program?"
    a: "Run the same survey twice, once before the program and once after, with identical questions and identical scoring. The change in each score is your evidence, rather than anecdote."
  - q: "How do you match responses between the two waves?"
    a: "The Discord handle is the natural join key because it is consistent across both waves and requires no extra question."
  - q: "Why score several questions per dimension?"
    a: "A single item conflates dimensions and is noisy. Three or four opinion_scale items averaged into one construct score produce a more stable measure you can actually compare across waves."
  - q: "Should the rating scale have a midpoint?"
    a: "Avoid one. Midpoints attract satisficing responses and add noise without adding information about direction. An opinion_scale with an even number of points has no middle to hide in."
  - q: "Do I have to rebuild the survey for wave two?"
    a: "No. Clone wave one and change the dates. All blocks, scale points, calculated fields and bucket names carry over, which is what keeps the two waves comparable."
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

### Same questions, same scoring, different projects

Both waves use identical question blocks, identical scale points and
identical calculated-field names. Using separate projects (not retakes of a single project)
is deliberate:

- `max_completes_per_user: 1` on each project prevents strategic
  re-taking between waves.
- Separate exports are easier to label ("pre", "post") and join correctly.
- The respondent context in Wave 2 can differ (you can add attendance
  questions or reference the program in the intro) without changing
  the scored items.

Clone Wave 1's project to create Wave 2, so all blocks, scale points,
calculated fields and bucket names copy exactly. Change the project name and intro text; leave everything
else identical.

### Use scored attitudes, not just counts

A single "How confident are you?" rating question gives you one number but
conflates dimensions. Scoring across multiple items per dimension, even
3-4 items, produces a more stable and interpretable construct score.

Example: measuring **"confidence in shipping"** across three items:
- "I have a clear picture of what I'd cut to hit a deadline" (4-point
  agreement scale)
- "I'd know how to scope a feature for a demo" (4-point agreement scale)
- "I could name the one thing I would cut first" (4-point agreement scale)

Averaged, those give a `Shipping` score on a 1.0 to 4.0 range. That is more
diagnostic than a single rating, and it stays on a scale a reader already
understands.

### Closed questions, not free text, for pre/post

Use `opinion_scale` for attitude items and `single_punch` for knowledge
items. Free text answers cannot be scored automatically; they require manual
coding and break the join logic. Save open-ended questions for items that
are not part of the scored constructs.

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
  │ "Confidence in shipping" (opinion_scale) │
  │ averaged → [Shipping], 1.0-4.0           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q6–q9: Dimension 2 items (4 questions)   │
  │ "Confidence in scoping" (opinion_scale)  │
  │ averaged → [Scoping], 1.0-4.0            │
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
  │ Shows [Shipping], [Scoping] and          │
  │ [correct_answers]/[max_correct_answers]  │
  └──────────────────────────────────────────┘
```

---

## Prerequisites

### Constructs (3 total, same names in both projects)

Two kinds, because attitude items and knowledge items score differently now:

| Display name | How it is built | Range | Meaning |
|---|---|---|---|
| Shipping | `calculated_block` averaging the `opinion_scale` items | 1.0-4.0 | Confidence in shipping decisions |
| Scoping | `calculated_block` averaging the `opinion_scale` items | 1.0-4.0 | Confidence in scoping and prioritizing |
| Knowledge | score bucket `knowledge` → `[score_knowledge]` | 0-N | Factual knowledge of the topic domain |

Knowledge items keep `score_values`, which is what score buckets are for:
one option is right and carries the points. Attitude items do not, because
the scale already stores a number.

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
// → update q1 intro text to post-program framing
// → add attendance question (q13) at the end of scored items
```

**Important:** verify that the cloned Wave 2 project has identical block
names, identical calculated-field names and identical bucket names before
publishing. A mismatch breaks comparability: Wave 1 `[Shipping]` and Wave 2
`[Shipping_confidence]` are different columns in the export, and a scale
whose points were re-typed in a different order is worse, because it lines
up silently and averages the wrong way.

---

## Scored item design

### Attitude items (`opinion_scale`, one word on every point)

Use an `opinion_scale` with a label on every point. That is a Likert item,
and the stored answer is the point **number**, so it averages and compares
across waves with nothing configured. Avoid 5-point scales with a midpoint:
midpoints attract satisficing responses and add noise in small community
samples. A 4-point scale has no middle to hide in.

```jsonc
{
  "type": "opinion_scale",
  "prompt": "I have a clear picture of what I would cut to hit a deadline.",
  "min": 1, "max": 4,
  "options": [
    { "value": "1", "label": "Strongly disagree", "emoji": "😡" },
    { "value": "2", "label": "Disagree",          "emoji": "🙁" },
    { "value": "3", "label": "Agree",             "emoji": "🙂" },
    { "value": "4", "label": "Strongly agree",    "emoji": "😍" }
  ]
}
```

Two things to notice, because they are where this differs from a choice
question. `option.value` is the **point number as a string**, not the words:
the words go in `label`, and the number is what gets stored. And a scale
carries **no `score_values`** at all, because it does not need them. The
construct score comes from a calculated field instead, which is the next
section.

> **Before August 2026** this recipe built the same item as a `single_punch`
> with `score_values` 1 to 4 on the options. That was the right workaround
> when Subo had no scale types, but it stores an option id rather than a
> number, so nothing downstream can average it. If you have surveys built the
> old way, they keep working; build new ones with `opinion_scale`.

**The direction rule, and it bites hardest here.** A labelled set must run
low to high. The stored answer is the point number, so a set with "Strongly
agree" at 1 silently inverts every average and every `>= 3` condition built
on it. That also means **reverse-framed items cannot just be dropped in**:
if you write a negatively worded statement to guard against acquiescence
bias, it needs reverse-scoring in the calculated field
(`5 - [Item]` on a 1-4 scale), not a reversed label set. For most Discord
communities, consistently positive framing is less confusing and avoids the
problem entirely.

Group 3-4 items per dimension.

### Turning the items into a construct score

A scale has no score bucket, so a dimension's score is a `calculated_block`
over the items by name:

```jsonc
{
  "type": "calculated_block",
  "name": "Shipping",
  "formula": "([Ship1] + [Ship2] + [Ship3]) / 3"
}
```

That is a **mean on the scale's own 1.0 to 4.0 range**, which is easier to
read across waves than a bucket total: a wave-one 2.3 against a wave-two 3.1
needs no explaining, where "9 out of 12" does.

Two constraints worth knowing before you build it:

- **The formula is arithmetic only because the items pipe numbers.** Label a
  point and `[Ship1]` still resolves to the number in a calculation, but keep
  the item names stable across waves or the two projects stop lining up.
- **Keep a construct homogeneous.** A binary check ("I have shipped
  something, even small") is a `single_punch` and still belongs in a score
  bucket, so it will not sum into the same calculated field for free. Either
  give it its own column or keep it out of the construct. Mixing a 0/5 binary
  into a 1-4 attitude mean was always doing something odd to the scale;
  splitting them is better measurement, not just easier plumbing.

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
on the pre-test, so analyze them separately or exclude depending on your goal.

### Segment by attendance (Wave 2 q13)

Group respondents by their Wave 2 attendance answer (1 session / 2-3 / all
4). Compare mean Δ_shipping, Δ_scoping, Δ_knowledge across attendance groups.
A dose-response pattern (higher attendance → larger positive delta) is the
strongest available evidence that the program caused the improvement.

### Report aggregate change

Average the delta columns across all matched respondents for a program-level
summary: "Participants improved their shipping confidence score by +2.4 points
on average (out of a possible 16), with the largest gains among those who
attended 3 or more sessions."

---

## Variations

### Three-wave design (pre / mid / post)

Add a Wave 1.5 survey at the midpoint of the program. Same structure,
same block, field and bucket names. A mid-program dip in confidence is common: members
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
than individual deltas. Useful for ongoing programs rather than discrete
cohorts.

---

## Limitations and honest notes

- **Self-selection bias:** members who complete both waves are likely more
  engaged than those who complete only one or neither. Delta scores reflect
  participants, not the full community.
- **Test-retest effects:** some improvement in Wave 2 knowledge scores
  comes from memory of Wave 1 questions, not the program. Withholding
  Wave 1 feedback on knowledge items (as noted above) reduces but does
  not eliminate this.
- **No causal inference:** two-wave pre/post without a control group cannot
  prove the program caused the improvement. Community effects, external
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
