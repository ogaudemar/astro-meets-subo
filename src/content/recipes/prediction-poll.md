---
title: "Discord Prediction Poll with Dynamic XP Rewards"
description: "Run prediction contests where XP scales with how bold the call was. Set the correct answer after the event resolves and Subo awards the right amount to every member automatically."
pubDate: "Aug 05 2026"
audience: "community managers running gaming, sports, esports, or current-events servers"
setupTime: "~15 minutes to author; correct answer set after the event resolves"
bestFor: "communities that run weekly predictions, tournament brackets, or any \"call it before it happens\" engagement mechanic"
dimension: "engage"
features: ["scoring", "XP", "polls", "action blocks"]
relatedSlugs: ["event-rsvp-streak", "world-capitals-quiz", "hogwarts-house-sorting-quiz"]
templateSlugs: ["event-prediction-contest", "match-prediction-poll"]
faq:
  - q: "How do you run a prediction contest in Discord?"
    a: "Post a poll before the event with a score weight on each option, then set the correct answer once the result is in. XP is awarded from the winning option's weight, so a correct long-shot pick pays more than a safe one."
  - q: "How do you decide the score weights?"
    a: "Weights can mirror real betting odds from a public market, or you can make them up. They do not need to update in real time, and if you cannot find odds, give every correct pick the same value."
  - q: "Is this gambling?"
    a: "No, and do not turn it into gambling. Subo is not a betting platform, so members stake nothing and win only XP. Do not wire it to real-money wagers."
  - q: "Can members change their prediction?"
    a: "Set max_completes_per_user to 1 so each member makes one call. Responses carry timestamps, so you can also spot who predicted before a specific cutoff."
---A prediction poll where members predict an outcome before it is known, the
admin sets the correct answer after the event, and XP is automatically
awarded based on the score weight assigned to the winning option, rewarding
bolder or riskier predictions more generously.

> ⚠️ **Fun, not gambling.** This plays for **XP and bragging rights, never
> money.** Subo is not a betting platform, so don't wire it to real-money wagers,
> deposits, or payouts. "Odds" here are only a scoring flavour that rewards bold
> calls. Because it's a game, the weights can be rounded, slightly stale, or
> completely made up, and there's no need to update them in real time. Just
> **close the poll when the event starts** so picks lock before the outcome is
> known.

---

## The scenario

Your gaming community runs weekly tournament prediction polls. Before a big
match, you ask members to pick the winner. After the match, you set the
correct answer and award XP, but not the same flat amount to everyone.

Members who correctly predicted an **upset** (the underdog winning) earn
more XP than members who picked the favourite. You encode this as a `score`
weight on each option: favourite = 10 points, underdog = 30 points.
Score-based XP means winners earn exactly what their option was worth.

This is the simplest version of a prediction market inside a Discord survey.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Predictions open! [match details]"      │
  │ → [ Make my pick ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2: Who wins? (single_punch)             │
  │  Team A (favourite) — score: 10          │
  │  Team B (underdog)  — score: 30          │
  │  Team C (longshot)  — score: 60          │
  │                                          │
  │ correct_answer_index: set AFTER event    │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q3: Confidence level (optional)          │
  │  Very confident  — score: 0              │
  │  Somewhat sure   — score: 0              │
  │  Just a feeling  — score: 0              │
  │ (captures data; no score weight)         │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q4: Closing content_block                │
  │ "Your pick is locked in, [UserName]!     │
  │  We'll reveal results and award XP       │
  │  after the match."                       │
  └──────────────────────────────────────────┘
```

*After the match, admin steps:*

```
  1. Open Script Editor → set correct_answer_index on q2
  2. Scores recalculate automatically: correct predictors
     get score = their option's weight (10, 30, or 60);
     incorrect predictors get score = 0
  3. Go to Responses tab → Give XP → Dynamic → source: Score
     → award to all respondents
  4. Done — XP is awarded proportionally in one click
```

---

## Prerequisites

### 1. Score bucket (1 total)

Create a single bucket named **Score**. All option weights go into this one
bucket; there is no multi-dimensional scoring needed for this recipe.

### 2. Project

```jsonc
POST /v1/communities/{communityId}/projects
{
  "name": "Week 12 Tournament Predictions",
  "scoring_enabled": true,
  "settings": {
    "max_completes_per_user": 1,
    "is_anonymous": false
  }
}
```

`max_completes_per_user: 1`: each member makes one prediction.
`is_anonymous: false`: required for XP awards (XP is tied to a member
profile). Anonymous predictions cannot receive XP.

---

## Key concepts

### Scoring as odds

Weight each option by its **payout multiplier**, so calling the underdog is
worth more than calling the favourite. There are two ways to pick the numbers:

- **Equal reward (no odds needed).** Every correct answer is worth the same XP
  (e.g. your server's standard 10 XP per poll). Best when no public market
  exists: most in-game events, MVP calls, or silly props.
- **Odds-weighted reward.** When the event is popular enough that a public
  prediction market has priced it, read the payouts off **Kalshi** or
  **Polymarket** (community managers via the market's UI, AI agents via the
  market's API) and set each option's weight with:

```
XP if correct = round( base XP × payout multiplier )     // wrong picks earn 0
```

**Worked example: Mexico vs Ecuador, World Cup 2026.** Kalshi priced Mexico at
63% (**1.52×** payout) and Ecuador at 37% (**2.59×**). With a 10 XP base:

```jsonc
{ "value": "Mexico (favourite)", "score_values": { "score": 15 } },  // round(10 × 1.52)
{ "value": "Ecuador (underdog)", "score_values": { "score": 26 } }   // round(10 × 2.59)
```

A member who correctly backs Mexico earns 15 XP; a member who calls the Ecuador
upset earns 26 XP. Wrong picks earn 0. `correct_answer_index` is set to the
winning option after the event, and only that option carries a score weight.

Because this is for fun, none of it has to be exact: round freely, use slightly
stale odds, or invent weights when no public market exists. And skip the flat
`score` guesswork: if you can't find odds, just give every correct pick the same
XP (the equal-reward option above).

### Setting the correct answer after the event

In the Script Editor web UI:
1. Open the question block.
2. In the Scoring panel, click the correct answer option.
3. Save. Scores are updated immediately for all existing responses.

No re-import or manual calculation needed. The next time the Responses tab
is opened, all score columns reflect the corrected grading.

### Awarding XP from the Responses tab

Once the correct answer is set:

1. Open the **Responses tab** for the project.
2. Click **Give XP** in the toolbar.
3. Select **Dynamic** and choose **Score** as the source.
4. Review the preview (first 5 recipients and their amounts).
5. Confirm. XP is awarded to all respondents who scored > 0 in one
   operation.

Members who predicted incorrectly get 0 XP (the platform skips XP awards
of 0 automatically).

### Optional: add a confidence question

A second question (confidence level) adds nuance to the data without
affecting the XP calculation, assign no `score_values` to its options.
Later, cross-tabulate predictions against confidence in the Responses tab
export to see whether confident members predicted better than uncertain ones.

---

## Full script payload

```jsonc
// PUT /v1/communities/{communityId}/projects/{projectId}/script
{
  "blocks": [
    // q1 — intro
    {
      "type": "content_block",
      "prompt": "# Week 12 Predictions are open!\n\nWho wins the Grand Finals?\n\nPick correctly and earn XP — **more XP for bolder calls**.\n\nYour pick locks in when you click Submit. No changes after that.",
      "image_url": "https://…tournament-banner.png",
      "continue": { "after": "click", "label": "Make my pick 🎯" }
    },

    // q2 — the prediction question
    // correct_answer_index: leave null until after the match
    {
      "type": "single_punch",
      "prompt": "Who wins the Grand Finals?",
      "options": [
        {
          "value": "Team Alpha",
          "label": "🏆 Team Alpha (Favourite)",
          "score_values": { "score": 10 }
        },
        {
          "value": "Team Beta",
          "label": "⚔️ Team Beta (Challenger)",
          "score_values": { "score": 25 }
        },
        {
          "value": "Team Gamma",
          "label": "🔥 Team Gamma (Dark Horse)",
          "score_values": { "score": 60 }
        }
      ]
    },

    // q3 — confidence (optional research question, no score weight)
    {
      "type": "single_punch",
      "prompt": "How confident are you?",
      "options": [
        { "value": "Very confident",  "label": "🦁 Very confident" },
        { "value": "Somewhat sure",   "label": "🤔 Somewhat sure" },
        { "value": "Just a feeling",  "label": "🎲 Just a feeling" }
      ]
    },

    // q4 — lock-in confirmation
    {
      "type": "content_block",
      "prompt": "Your pick is locked in, [UserName]! 🔒\n\nWe'll reveal results and award XP right after the match.\n\nGood luck — may the best prediction win.",
      "continue": { "after": "pause", "pause": 3 }
    }
  ]
}
```

---

## Variations

### Multi-question prediction set

Run a set of predictions (who wins each match in a bracket) as multiple
questions in a single survey. Assign `score_values` to all options across
all questions. The total `[score]` at the end reflects overall prediction
accuracy across the bracket. XP = total score, so a perfect bracket earns
the maximum.

This requires all matches to be part of the same event (resolvable at the
same time). For ongoing tournaments, create one project per round instead.

### Prediction league (recurring)

Use `max_completes_per_user: null` with `fire_scope: "session"` on XP
awards. Each week's predictions are a new session; the XP total on member
profiles accumulates across the season. Use the Responses tab to export
per-member, per-week scores and build a leaderboard.

### Bonus for early predictions

Close the survey an hour before the event. Members who predicted before a
specific cutoff time can be seen in the Responses tab by timestamp, so you can
optionally give a manual XP bonus to early predictors using the Give XP
toolbar with a selection.

---

## When this recipe doesn't fit

- **You want real-money betting**: out of scope by design. This plays for XP and
  bragging rights only; never use it for wagers, deposits, or cash payouts.
- **You want a true prediction market with changing odds**: Subo uses fixed
  weights set at authoring time. If odds should shift as predictions come in
  (e.g., based on how many members pick each option), this is not the right
  tool. For a fun contest it doesn't need to. Set the weights once and close
  the poll at event start.
- **You want anonymous predictions**: XP requires a member profile; set
  `is_anonymous: false`. If anonymity is critical (e.g., a sensitive
  opinion poll), skip the XP award step and use the prediction purely for
  data collection.
- **You want to reveal results inside the survey**: closing content blocks
  are shown at survey-end before the correct answer is known. Post-match
  result reveals work better as a pinned Discord message or a separate
  announcement, not a retroactive survey message.

---

## Related

- [World Capitals Quiz](/recipes/world-capitals-quiz): right/wrong quiz with immediate per-question feedback
- [Hogwarts House Sorting Hat](/recipes/hogwarts-house-sorting-quiz): multi-bucket hidden scoring
- [Study quiz](/recipes/study-quiz): knowledge assessment with per-attempt XP and mastery achievement
- [Scoring variables reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript): score_values, source_key, and dynamic XP docs
