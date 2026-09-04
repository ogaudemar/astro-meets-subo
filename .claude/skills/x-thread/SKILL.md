---
name: x-thread
description: House style for Subo posts and threads on X (Twitter). Use when drafting a launch announcement, a multi-release recap, or any single post for the Subo X account. Covers the hook rule, thread shape, the 280-character math with links, image pairing, and the hook patterns that have been tried and rejected. Defers to subo-glossary for terminology and blog-writing for the anti-AI-tell rules.
---

# Subo on X

A thread is read by people who do not know us. The blog post explains, the Discord
announcement notifies, and X has to earn a stranger's attention in one post before any of
that matters.

**Third of four.** Release distribution runs blog post → Support Server → **X thread** →
top.gg, warmest audience to coldest. See step 6b of `feature-launch`.

Terminology comes from `subo-glossary`; the no-em-dash rule, US English and the
anti-AI-tell rules come from `blog-writing` and apply unchanged.

## The hook rule (the one that matters)

**Open on the reader's problem. Never on ours.**

The first post decides whether the thread is read. It gets one job: name something the
reader is about to deal with, then promise the thread helps. It is not the place for our
release cadence, our announcement history, our internal story, or anything shaped like a
confession.

The approved example, from the August 2026 summer recap:

```
Your server is about to get busy again.

Subo shipped four things over the summer to make it easier.
```

Two lines. Their situation first, our releases second, and the second line only earns its
place because the first one landed. Note what is absent: no date, no "we haven't posted in
a while," no throat-clearing.

### Hook patterns tried and rejected (do not re-propose these)

- **The release log.** *"Our last update here was June 9. Four releases have shipped
  since."* Nobody cares when we last posted. Our publishing schedule is not content.
- **The confession.** *"We shipped four things this summer and barely told anyone."*
  Rejected twice over: it reads as LinkedIn-style manufactured vulnerability, and it was
  **not even true**, since the releases were announced where it mattered and only X was
  skipped. A hook that requires bending a fact is disqualified before it is judged on
  style. Self-deprecation is not a substitute for relevance.
- **The fix framed as the flaw.** *"Your 'anonymous' survey is not anonymous if it runs in a
  private thread. Anyone with Manage Threads can open it."* Rejected 2026-09-03. The claim
  was true and it is the right opening for the blog post, where the reader already uses
  Subo and the next paragraph resolves it. On X it is read by strangers who never knew
  there was a problem, and the only sentence that survives the scroll is the one where our
  product looks bad. **Announce the capability, not the gap it closed.** Where a
  before-and-after is genuinely the story, state the new behavior plainly and let the
  improvement be implicit.
- **Result-first, image-led.** *"This invitation took under a minute to write."* Works in a
  blog post, where the image sits above the fold and the reader already clicked. On X it
  forces the thread to lead with whichever feature the image shows, which in that case was
  the **most minor** of the four. **Lead with the biggest release, not the prettiest
  screenshot.**

## Thread shape

```
1  Hook: their problem, then the promise. No link.
2  Biggest release. One line of what it does, one of what it saves. Link.
3  Next release, same shape.
…  One release per post, ordered by how much the reader will care.
n  Closer: the tier line if it is good news, and one link.
```

- **Order by reader value, not by ship date.** A recap is not a timeline.
- Number the releases (`1.`, `2.`) inside the posts so a reader landing mid-thread has
  their bearings.
- Six posts is a comfortable ceiling for a recap. Past that, split the topic.

## The 280 math

X counts **every URL as 23 characters** regardless of real length, so a long
`subo.gg/blog/…` slug costs the same as a short one. Count before shipping:

```bash
node -e 'const p=`…post text…`; console.log(p.replace(/https?:\/\/\S+/g,"x".repeat(23)).length)'
```

Assume the 280 limit, not the paid longer one.

## Images

**A text-only thread underperforms. Pair an image with every release post.** The assets
usually exist already: blog hero images in `public/images/blog/<slug>/`, plus any product
screenshots that shipped with the post.

Pick the one that reads at thumbnail size. A Discord embed or a slash-command result reads
well small; a wide editor screenshot with fine UI text does not.

## Voice

- Concrete over clever. "No role IDs" beats "streamlined role management."
- Plain verbs, no launch-speak: no *thrilled*, *excited to share*, *game-changing*.
- One emoji at most, and only where it does work (🧵 to mark a thread).
- The tier line goes in the closer, once, and only when it is good news. Same hard rule as
  `feature-launch`: **never state a plan or tier without the user confirming it in-session.**

<!--
Add hook patterns, voice notes and rejected drafts below as they come up. Recording what
was rejected and why is the point: it stops the same bad hook being re-proposed.
-->
