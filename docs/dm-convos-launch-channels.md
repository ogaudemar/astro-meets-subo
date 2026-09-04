# Convos in your DMs launch: channel copy

Paste-from drafts for the distribution channels of the DM answer-surface release.
Written 2026-09-03.

Order is the canonical one from the `feature-launch` skill, warmest audience to coldest:
**blog post → Support Server → X thread → top.gg.** The blog post is live, so everything
here links to it.

- Announcement post: `/blog/convos-in-your-dms/`

**Tier line confirmed by the user in-session (2026-09-03): every part of this release is on
all plans, free included.** It appears once per channel, as good news, per the standing
hard rule.

**Screenshot** lives in `public/images/blog/DM-convos/check-your-DMs.png`. It shows the
invitation in the channel with the ephemeral "Check your DMs" confirmation under it, which
is the frame that reinforces the accuracy point below. It reads at thumbnail size, so it is
the image to pair with the X post.

**The one accuracy point that governs every channel:** Subo never DMs anyone unprompted. A
member receives the DM only after pressing Start on an invitation themselves. Getting this
wrong reads as spam, and on X it reads as spam to people who have no reason to give us the
benefit of the doubt.

**top.gg is not drafted here yet.**

---

## 1. Discord Support Server (`@Updates`)

One message, 811 characters, inside Discord's 2,000 limit. One bare URL, so one embed card.
Resolve `@Updates` and the two channel names to real mentions when posting.

```
## 📬 Convos now run in DMs, not in threads

When a member presses Start, Subo sends the Convo to their DMs. If their DMs are closed it falls back to a private thread, then to a web link, so the button always leads somewhere.

- Anonymous projects run in a DM or on the web, never in a thread: a private thread is readable by anyone with Manage Threads and shows up in the audit log
- Threads that do open are kept and reused now, so members pick up where they left off
- Members still start from the invitation button in your server. Subo never DMs anyone unprompted

Every plan, free included.

https://subo.gg/blog/convos-in-your-dms/

Questions, issues, suggestions? Share them in #✨┃feedback-suggestions  - or for support, please open a private ticket in #🎫┃support-ticket  

:green_heart: :subo:
@Updates
```

The Manage Threads detail earns its space **here** and not on X: this channel is admins who
already run Subo, for whom it is useful operational context rather than an advertisement of
a weakness.

---

## 2. X thread

Four posts. Character counts assume the 280 limit with every URL counted as 23, per the
`x-thread` skill. Attach the screenshot to post 2.

**1/** (186)

```
Privacy on Discord is on a lot of people's minds right now.

So here is what a Subo survey does: it arrives in your members' DMs, and it never asks anyone to type their name into a form.
```

**2/** (233, + image)

```
Press Start on the invitation, answer in your DMs. Nothing sits in the server for anyone else to scroll past.

DMs turned off? Subo hands them a private web link instead, so the button always leads somewhere.

https://subo.gg/blog/convos-in-your-dms/
```

**3/** (217)

```
And it already knows who they are.

Subo authenticates through Discord, so it can confirm server membership and gate a survey by role without one identity field.

No "what is your username?" No honor system. No typos.
```

**4/** (273)

```
Which is how a Subo survey is anonymous and members-only at the same time.

Verified as your member, one response each, and the link between account and answers dropped before results reach you.

On Anonymous projects: DM or web, never a thread.

Every plan, free included.
```

### Why this thread is shaped the way it is

Written during a live privacy backlash on Discord (a rumored return of global age
verification, days after a reported leak of government IDs). Three calls worth keeping,
because the situation will recur:

1. **The hook rides the mood without naming the news.** Neither event was verifiable at
   drafting time, and standing next to a leak of real people's identity documents while
   announcing a feature reads as opportunistic to the exact privacy-minded audience it is
   aimed at. If a news event is ever worth addressing directly, the honest form is a
   separate post that sells nothing.

2. **Never lead on Discord being the problem.** We are a Discord bot, our users like
   Discord, and criticizing the platform during a backlash trades a day of engagement for a
   lasting association.

3. **Do not claim more privacy than we deliver.** Subo runs on Discord and the DM delivery
   is Discord's own infrastructure, so none of this protects anyone from platform-level data
   collection or from age verification. Every claim in the thread is scoped to what we
   actually control: where the answers sit, who on the admin team can open them, and what we
   never have to ask for.

### Rejected drafts

- **Leading on what threads exposed** (*"If it runs in a private thread, anyone with Manage
  Threads can open it"*). Rejected by the user 2026-09-03. It is the blog post's argument,
  correct and useful for admins who already trust us, but to a stranger scrolling X the only
  sentence that survives is "Subo surveys were readable by mods." **Do not sell a fix by
  advertising the flaw to an audience that never knew about it.**
- **A dedicated "here is what we cannot do" post.** It was load-bearing while the thread
  argued about who can read what. Once the thread made only supportable claims, it was
  answering an accusation nobody had made. The scoping now lives in the claims themselves.
