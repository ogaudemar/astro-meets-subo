---
name: discord-announcement
description: House style for announcement posts in the Subo Support Server on Discord. Use whenever drafting a message to post in the server, most often a feature or release announcement pointing at a blog post, but also maintenance notes, small shipped changes and community updates. Covers length, the @Updates ping convention, link-embed control, and what to deliberately leave out. Defers to subo-glossary for terminology and blog-writing for the anti-AI-tell rules.
---

# Subo Support Server announcements

The channel is not the blog. An announcement is a **pointer**, not a summary: enough
for a member to know whether they care, and a link for the ones who do. The blog post
already exists and does the explaining.

**Second of four.** Release distribution runs blog post → **Support Server** → X thread →
top.gg, warmest audience to coldest. See step 6b of `feature-launch`. The post must exist
and be published before this goes out, since this message links to it.

This skill owns length, ping convention and Discord mechanics. Terminology comes from
`subo-glossary`. The no-em-dash rule, US English and the anti-AI-tell rules come from
`blog-writing` and apply here unchanged.

## The ping

- **`@Updates`, always.** A designated opt-in role. People who hold it asked for exactly
  this kind of message.
- **Never `@everyone` or `@here`** for a regular announcement. Reserve them for something
  genuinely everyone must act on, an outage or a breaking change, and ask the user first.
- **The ping goes last, as part of the sign-off block below.** Not on the opening line.
  The message earns the notification, it does not lead with it.

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

## The sign-off (fixed, use verbatim)

Every announcement ends with this block. It is brand voice, not boilerplate to improvise on:

```
Questions, issues, suggestions? Share them in #✨┃feedback-suggestions  - or for support, please open a private ticket in #🎫┃support-ticket  

:green_heart: :subo:
@Updates
```

Two channels doing two jobs: public feedback in one, private support in the other. Keep the
channel names exactly as written (the emoji and `┃` are part of them), and keep `:subo:`,
which is the server's own emoji. Because this block already closes the message, **do not
write your own "let us know what you think" line** above it. That was the draft's job before
this convention was written down; now it is duplication.

## Shape

```
## <emoji> <Feature name>: <what it does for you, one line>

<One or two sentences, or up to three bullets.>

<link>

<Optional: second feature, same shape.>

<the sign-off block, verbatim>
```

## Tone notes (append as they come up)

- Talk to admins who already use Subo. No onboarding, no explaining what a survey is.
- **Open on what the reader gets, never on our own story.** No release cadence, no
  announcement history, no confessions about what we shipped quietly. That applies across
  every channel; see the hook rule in `x-thread` for the long version.
- Plan/tier line only when it is genuinely good news ("every plan, free included") and
  only once per post, not per feature. Same hard rule as `feature-launch`: **never state
  a plan or tier without the user confirming it in-session.**
- The sign-off block already invites replies, so the body should not. Never a marketing CTA:
  the server is where people already are, so "add Subo to your server" is nonsense here.

<!--
Add tone/voice observations below as the user reacts to drafts. This file is meant to
sharpen over time, the way blog-writing did.
-->
