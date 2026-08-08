---
name: discord-announcement
description: House style for announcement posts in the Subo Support Server on Discord. Use whenever drafting a message to post in the server, most often a feature or release announcement pointing at a blog post, but also maintenance notes, small shipped changes and community updates. Covers length, the @Updates ping convention, link-embed control, and what to deliberately leave out. Defers to subo-glossary for terminology and blog-writing for the anti-AI-tell rules.
---

# Subo Support Server announcements

The channel is not the blog. An announcement is a **pointer**, not a summary: enough
for a member to know whether they care, and a link for the ones who do. The blog post
already exists and does the explaining.

This skill owns length, ping convention and Discord mechanics. Terminology comes from
`subo-glossary`. The no-em-dash rule, US English and the anti-AI-tell rules come from
`blog-writing` and apply here unchanged.

## The ping

- **`@Updates`, always.** A designated opt-in role. People who hold it asked for exactly
  this kind of message.
- **Never `@everyone` or `@here`** for a regular announcement. Reserve them for something
  genuinely everyone must act on, an outage or a breaking change, and ask the user first.
- Put the ping on its own opening line, not buried mid-sentence.

## Length

**Aim for under ~1,200 characters. Hard ceiling 2,000** (Discord's per-message limit).
A two-feature post should still fit in one message.

Per feature: one line saying what it does for the member, then **at most three bullets**,
then the link. If you need a fourth bullet, the post is doing the blog's job.

## What to leave out

This is where the drafts run long. Cut, every time:

- **The backstory.** Why we built it, what prompted it, who asked. That is the blog post's
  opening and it is the first thing to go here.
- **Internal reasoning.** Design trade-offs, what we deliberately did not do, known nits.
- **Caveats and edge cases.** Deleted-role fallbacks, what happens on the web vs Discord,
  which two fields lost a feature. Real and worth documenting, not worth channel space.
- **Feature inventory.** Every surface a thing landed on. Name the one people will use.
- **Restating the link's own title.** The embed already shows it.

Keep a specific, concrete detail if it is the thing that makes someone click. Cut the
other four.

## Mechanics

- **Embeds:** a bare URL renders a preview card; `<https://…>` suppresses it. Two bare
  links in one message is a wall of cards. Let the **better-looking hero** embed and wrap
  the other, or split into two messages if both deserve a card.
- **Discord markdown:** `#`/`##` headings, `**bold**`, `` `code` ``, `•` or `-` bullets.
  No tables, no nested lists.
- **Emoji:** one per heading at most, as a visual anchor. The server's own custom emoji
  are better than generic ones where they fit.
- Write `@Updates` and role names as plain text in the draft. The user resolves them to
  real mentions when posting.

## Shape

```
@Updates

## <emoji> <Feature name>: <what it does for you, one line>

<One or two sentences, or up to three bullets.>

<link>

<Optional: one line for a second feature, same shape.>

<Closing line: where to reply, or what to try.>
```

## Tone notes (append as they come up)

- Talk to admins who already use Subo. No onboarding, no explaining what a survey is.
- Plan/tier line only when it is genuinely good news ("every plan, free included") and
  only once per post, not per feature. Same hard rule as `feature-launch`: **never state
  a plan or tier without the user confirming it in-session.**
- Close with an invitation to reply, not a marketing CTA. The server is the place people
  already are; "add Subo to your server" is nonsense here.

<!--
Add tone/voice observations below as the user reacts to drafts. This file is meant to
sharpen over time, the way blog-writing did.
-->
