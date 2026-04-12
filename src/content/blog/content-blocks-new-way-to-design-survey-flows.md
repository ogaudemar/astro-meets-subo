---
title: "Content Blocks: A New Way to Design Survey Flows"
description: "Content blocks let you add messages, intros, GIFs, and pauses to any survey or web convo — without asking a question. Here's what that unlocks."
pubDate: "Apr 11 2026"
author: "Subo Team"
heroImage: "/images/blog/content-blocks/content-blocks-hero.webp"
tags: ["announcement", "feature", "survey builder", "product"]
draft: true
---

Every survey is a conversation. But until now, Subo's conversations could only move forward when someone answered a question.

Sometimes, that's not what you want. Sometimes you want to say something first — set the scene, give instructions, acknowledge something important — before asking anything at all. Or you want to break up a long series of questions with a breather. Or you want to say "hey, good job getting here" before the hard part.

That's what content blocks are for.

---

## What Is a Content Block?

A content block is a new block type in the survey builder. Like a question block, it appears in the conversation flow one at a time. Unlike a question block, it doesn't ask anything.

It's just a message.

The respondent reads it, then moves on — either automatically after a configurable pause, or by clicking a button (you choose the label: "Got it", "I agree", "Continue", "Let's go!", whatever fits).

Content blocks work in Discord survey convos and web convos. They're available on all plans. On VIP and above, you can customize the button label.

---

## What You Can Do With Them

Here are some ways we've seen content blocks make surveys better — some obvious, some less so.

### 1. The Welcome Screen

Before question one, tell people what they're walking into.

> *"Hey! We're running a quick check-in on your experience so far. It'll take about 3 minutes. Your answers are anonymous and will help us make the community better. Ready when you are."*

This isn't fluff. It sets expectations, reduces the feeling of ambiguity, and gets people in the right mindset before they answer. Completion rates go up when respondents don't feel like they're walking into the unknown.

### 2. The Consent Gate

For surveys that touch sensitive topics — mental health, finances, interpersonal conflicts — a content block with a "I agree" button is a lightweight consent mechanism.

> *"Some of the questions ahead deal with personal experiences that may be sensitive. Your answers are fully anonymous. If you'd prefer not to answer any specific question, you can skip it. Click below to continue."*

You're not just warning them. You're building trust. That matters a lot for response quality on difficult questions.

### 3. The Mid-Survey Section Divider

Long surveys drag when they feel like one endless stream of questions. A content block between logical sections acts as a chapter break — it signals a shift in topic, gives the respondent a moment to reset, and makes the whole thing feel more organized.

> *"Great — that covers the onboarding experience. Now let's talk about day-to-day usage."*

Pair this with skip logic and the section header becomes context-aware: respondents who skipped the onboarding section never see the divider. Everyone else gets a natural transition.

### 4. The Pacing Break (with GIF)

A survey about serious topics — team culture, conflict resolution, difficult product feedback — can feel heavy by question seven. A content block lets you add a moment of levity without breaking the flow.

Drop in an encouraging GIF. Write something human. Let people exhale before continuing.

> *"You're doing great. Just a few more questions. 🎉"*

Small thing. Surprisingly effective. It signals that there's a person on the other side of this survey who actually cares.

### 5. The Instructions Block for Complex Questions

Some question formats need more context than a question title can hold. Especially for ranking exercises, scenario-based questions, or anything that requires a specific mental frame.

> *"For the next two questions, imagine you're evaluating a new community moderator candidate. Don't think about current team members — just the traits you'd want to see in someone new."*

This kind of framing usually lives in a question's description field, getting buried. A full content block before the question puts it front and center, where it'll actually be read.

### 6. The Conditional Acknowledgment (With Skip Logic)

This one gets interesting.

Say you're running a survey about community satisfaction, and one of your early questions asks respondents to rate their overall experience (1–5). If someone gives a 1 or 2, you want to handle that differently — acknowledge it, not just barrel into follow-up questions as if nothing happened.

With a content block wired into skip logic, you can show a specific message only to respondents who gave a low score:

> *"We're really sorry to hear things haven't been great. The next few questions will help us understand what happened and how we can do better. Thank you for being honest."*

Respondents who gave a 4 or 5 skip past this and get a different follow-up path entirely. The conversation responds to how they actually feel — which is exactly what a good conversation does.

### 7. The Eligibility Check Pause

Before getting into the meat of a survey, sometimes you need to confirm that the respondent is actually someone you want to hear from. You've asked a screening question. They qualified. Now you confirm it — and make them feel seen for it.

> *"Perfect — as someone who's been part of the community for more than 6 months, your perspective on what's changed is especially valuable. Let's dig in."*

This isn't just warm fuzzies. It reduces satisficing — the behavior where people rush through surveys without thinking. You've reminded them why their specific input matters.

### 8. The Role-Play Setup

Some surveys are more interesting if respondents are put in a specific frame of mind before answering. Brand perception exercises, new feature evaluation, moderation policy reviews — all of these benefit from a clear setup.

> *"For the next section, try to think from the perspective of someone encountering this community for the first time. What would they notice? What might confuse them? What would make them want to stay?"*

A content block turns a dry questionnaire into something a bit more like structured user research.

### 9. The End-of-Survey Debrief

You can also use content blocks at the very end of a survey — just before the thank-you message — to explain what happens next.

> *"That's it! Results will be shared in #announcements once we've had a chance to go through everything — usually within a week. If you want to discuss anything directly, drop by #feedback-chat."*

Closing the loop on what happens with their input is one of the highest-leverage things you can do for future response rates. People who know their feedback led somewhere are far more likely to participate next time.

---

## Building Content Blocks

In the web app script editor, content blocks appear alongside question blocks in the same drag-and-drop canvas. Add one, type your message, configure the pause duration or the button label, and wire it into the flow like any other block.

Skip logic works the same way — you can set conditions on who sees a content block, just like with questions. Show it to some respondents and skip it for others based on anything they've answered before.

---

## A Note on Button Labels

The default button text is "Continue" — which works for most use cases. On VIP and above, you can change the label to anything that fits the moment:

- "I agree" (consent flows)
- "Got it" (instructions and warnings)
- "Let's go!" (openers and section transitions)
- "I understand" (sensitive topic acknowledgments)
- "Next chapter" (long-form surveys with clear sections)

The label is a small thing, but small things add up. A survey that says "I agree" where it matters and "Let's go!" where it doesn't — that's a survey that feels considered.

---

Content blocks are available now in the survey builder and web convo editor. [Start building →](/app)
