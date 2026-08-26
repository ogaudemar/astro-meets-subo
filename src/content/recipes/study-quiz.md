---
title: "Discord Study Quiz for Education and Exam-Prep Servers"
description: "A low-stakes practice quiz that explains each answer as it goes, allows unlimited retakes, and awards XP proportional to the score so members can watch themselves improve."
pubDate: "Aug 05 2026"
audience: "moderators of education, exam-prep, language-learning, or certification communities on Discord"
setupTime: "~25 minutes"
bestFor: "servers where members are actively studying toward a goal and want low-stakes practice with immediate feedback"
dimension: "engage"
features: ["scoring", "grading", "XP", "quizzes"]
relatedSlugs: ["world-capitals-quiz", "pre-post-assessment", "hogwarts-house-sorting-quiz"]
templateSlugs: ["onboarding-certification"]
faq:
  - q: "How do you run practice quizzes in a study Discord?"
    a: "Allow unlimited retakes, explain the correct answer immediately after each question, and award XP equal to the score so a better run is visibly worth more. No pass or fail and no public leaderboard."
  - q: "How do you let members retake a quiz?"
    a: "Set max_completes_per_user to null for unlimited attempts, and scope the XP action block to the session so every attempt earns its own XP."
  - q: "Should a mastery badge fire on every attempt?"
    a: "No. Scope achievement blocks to the respondent so a Mastery badge is awarded once, even though the XP block fires on every run."
  - q: "Can I track whether members are improving?"
    a: "Yes. Retakes are stored as separate responses, so the Responses tab shows each attempt and its score over time."
---A knowledge-reinforcement quiz that gives respondents immediate right/wrong
feedback on every question, shows their final score, and awards XP
proportional to correct answers, encouraging re-attempts as members
study toward a target score.

---

## The scenario

You run a study server for a professional certification (e.g., AWS Solutions
Architect, JLPT N3 Japanese, AP History). You want a 10-question practice
quiz that:

1. **Teaches immediately.** The bot explains the correct answer right after
   each question, win or lose, while the memory is fresh.
2. **Rewards improvement.** XP equals the score, so a 90% run earns 9× the
   XP of a 10% run, creating a real incentive to review and retry.
3. **Lets members track progress.** Retakes are allowed; the Responses tab
   shows per-respondent score history, so moderators can see who is improving.
4. **Stays low-stakes.** No pass/fail, no public leaderboard pressure. Just
   the member, the questions, and the feedback.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Practice quiz — [topic], [UserName]"    │
  │ → [ I'm ready ]                          │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2–q11: Ten knowledge questions          │
  │ (single_punch, one correct_answer_index) │
  │ Each has:                                │
  │   • when_correct: explanation of WHY     │
  │   • when_incorrect: explanation + [answer]│
  │   • score_values: { "score": 10 } on    │
  │     the correct option only             │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q12: Band calculated_block               │
  │ if [correct_answers] >= 9 then mastery   │
  │ else if [correct_answers] >= 7 then solid│
  │ else if [correct_answers] >= 5 then fair │
  │ else review                              │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q13: Results content_block               │
  │ "[correct_answers]/[max_correct_answers] │
  │  — [q12] level. Score: [score]/[max]"   │
  │ → [ Claim XP ]                           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q14: give_xp (source_key: "score")       │
  │ XP = score = 10 × correct answers        │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║ q15: give_achievement "Mastery"          ║
  ║ fires only when q12 = "mastery"          ║
  ║ fire_scope: respondent (once per person) ║
  ╚══════════════════════════════════════════╝
```

---

## Prerequisites

### 1. Score bucket (1 total)

Create a single bucket named **Score** in the project's scoring settings.
This drives `[score]`, `[max_score]`, `[correct_answers]`, and
`[max_correct_answers]`.

### 2. Achievement: "Mastery" (optional)

Create a "Mastery" achievement in your community Rewards settings (web app →
Settings → Rewards, or the Discord bot `/xp-settings`). Record its
`xp_role_id` for the action block.

### 3. Project

```jsonc
POST /v1/communities/{communityId}/projects
{
  "name": "AWS SAA Practice — Set 1",
  "scoring_enabled": true,
  "settings": { "max_completes_per_user": null }
}
```

`max_completes_per_user: null` allows unlimited retakes, which is the whole point of
a study quiz is to try again after reviewing. Use `fire_scope: "session"` on
the give-XP block so each attempt is rewarded independently.

---

## Key design principles

### Explain, don't just judge

The power of the study quiz format is the `when_correct` and `when_incorrect`
messages. A bare "✅ Correct" wastes the moment. Instead, use every
feedback message to add one new piece of information: a mnemonic, a
contrast with the common wrong answer, a real-world application:

```jsonc
"when_correct": "✅ Correct! An Application Load Balancer operates at Layer 7 (HTTP/HTTPS). Remember: ALB = Application = Layer 7; NLB = Network = Layer 4.",
"when_incorrect": "❌ Not quite — you chose [answer]. A Network Load Balancer works at Layer 4 (TCP/UDP). The question asked for Layer 7, which is the ALB."
```

`[answer]` shows exactly what the respondent chose, making the correction
personal rather than generic.

### Per-attempt rewards, lifetime achievement

Use `fire_scope: "session"` on the XP block, so every attempt earns XP.
Use `fire_scope: "respondent"` on any achievement block, so a Mastery badge
is granted once, the first time the member scores 90%+.

This structure means:
- Members earn XP every time they study (habit reinforcement).
- The Mastery badge is a permanent credential for reaching the benchmark.
- Moderators can see all attempts in the Responses tab, not just the first.

### Use a band calculated field to personalise the closing message

```jsonc
{
  "type": "calculated_block",
  "prompt": "",
  "calculated_formula": "if [correct_answers] >= 9 then mastery else if [correct_answers] >= 7 then solid else if [correct_answers] >= 5 then fair else review"
}
```

The result becomes `[q12]` in the closing content block, so the message reads
"solid level" or "mastery level" instead of a raw number. Members perceive
this as personalised feedback, not a pass/fail grade.

---

## Full script payload (abbreviated)

```jsonc
// PUT /v1/communities/{communityId}/projects/{projectId}/script
{
  "blocks": [
    // q1 — intro
    {
      "type": "content_block",
      "prompt": "AWS Solutions Architect — Practice Set 1\n\nHey [UserName]! 10 questions. Each correct answer earns **10 XP**. You can retake this as many times as you like.\n\nThe bot will explain every answer as you go — win or lose.",
      "continue": { "after": "click", "label": "I'm ready 🧠" }
    },

    // q2 — example question
    {
      "type": "single_punch",
      "prompt": "An application needs to route HTTP requests to different backend services based on URL path. Which load balancer type should you use?",
      "when_correct": "✅ Correct! Application Load Balancers operate at Layer 7 and can route based on URL path, host headers, and query strings — perfect for microservices.",
      "when_incorrect": "❌ Not quite — you chose [answer]. The correct answer is **Application Load Balancer (ALB)**. It operates at Layer 7 (HTTP/HTTPS) and supports path-based routing. NLBs work at Layer 4 and don't inspect HTTP content.",
      "options": [
        { "value": "Classic Load Balancer",     "label": "Classic Load Balancer" },
        { "value": "Application Load Balancer", "label": "Application Load Balancer (ALB)", "score_values": { "score": 10 } },
        { "value": "Network Load Balancer",     "label": "Network Load Balancer (NLB)" },
        { "value": "Gateway Load Balancer",     "label": "Gateway Load Balancer (GLB)" }
      ]
    },

    // … q3–q11: nine more questions, same pattern …

    // q12 — band calculated block
    {
      "type": "calculated_block",
      "prompt": "",
      "calculated_formula": "if [correct_answers] >= 9 then mastery else if [correct_answers] >= 7 then solid else if [correct_answers] >= 5 then fair else review"
    },

    // q13 — closing summary
    {
      "type": "content_block",
      "prompt": "# Your result: [q12] level\n\n**[correct_answers] / [max_correct_answers]** correct — [score] / [max_score] points.\n\nRetake any time to improve. Each attempt earns XP.",
      "continue": { "after": "click", "label": "Claim my XP 🎓" }
    },

    // q14 — score-based XP
    {
      "type": "action_block",
      "action_kind": "give_xp",
      "action_config": { "source_key": "score", "fire_scope": "session" },
      "prompt": "**[xp_points] [xp_name]** for this attempt!\n\nTotal XP: [earned_xp] · This month: [month_total_xp]",
      "continue": { "after": "pause", "pause": 3 }
    },

    // q15 — mastery achievement (once per person, 90%+)
    {
      "type": "action_block",
      "action_kind": "give_achievement",
      "action_config": { "xp_role_id": 9001, "fire_scope": "respondent" },
      "precondition": "NOT((q12=\"mastery\"))",
      "prompt": "🏆 **Mastery achieved!** You've earned the AWS SAA Mastery badge.",
      "continue": { "after": "pause", "pause": 3 }
    }
  ]
}
```

---

## Tracking progress in the Responses tab

Because `max_completes_per_user` is null, each member's attempts all appear
as separate rows in the Responses tab. The Score column shows per-session
totals. To see how a member's score changed over time:

1. Filter Responses by Discord handle.
2. Sort by date ascending.
3. The Score column shows the trajectory session by session.

Moderators can also use the **Give XP** toolbar button to award bonus XP
to top performers after a specific study period. For example, rewarding
every member who scored 90%+ in a given week.

---

## Variations

### Spaced repetition sets

Create multiple projects ("Set 1", "Set 2", "Set 3") each covering a
different topic area. Link them in the server's study channel description.
Members work through sets in order; the XP incentive naturally rewards
breadth of study.

### Timed practice (announcement-driven)

Post a specific project invite link in a study channel for 24 hours. After
the window closes, use the Give XP toolbar button (dynamic mode, source:
`score`) to award XP to everyone who participated. This turns a passive
study quiz into a community event without changing the quiz itself.

### Pre/post assessment

Create two projects with the same questions, "Pre-test" and "Post-test",
each with `max_completes_per_user: 1`. Run the pre-test at the start of a
study programme and the post-test after. Export both Responses tabs to CSV
and join on Discord handle to measure individual improvement.

---

## When this recipe doesn't fit

- **You want randomised question order**: block order is fixed at authoring
  time; question randomisation is not yet supported.
- **You want multi-select (partial credit) grading**: only `single_punch`
  blocks support `correct_answer_index` today.
- **You want a formal pass/fail gate**: add a skip-logic branch: if the
  band calculated field = "review", route to a "please review and retry"
  content block instead of the XP grant. The XP block fires only for
  members who reach the end of the main script branch.

---

## Related

- [World Capitals Quiz](/recipes/world-capitals-quiz/): right/wrong quiz recipe (simpler, single-topic)
- [Hogwarts House Sorting Hat](/recipes/hogwarts-house-sorting-quiz/): multi-bucket personality scoring
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript): full list of `[score_*]`, `[correct_answers]` tokens
