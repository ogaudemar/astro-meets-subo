---
title: "Discord Welcome Quiz: Auto-Assign Roles and Regions on Join"
description: "Onboard new members with a short welcome quiz that records their region and language as achievements, grants notification roles automatically, and awards XP for finishing."
pubDate: "Aug 05 2026"
audience: "community managers running a Discord server"
setupTime: "~15 minutes (most of which is creating achievements and roles in your community settings, not authoring the survey)"
bestFor: "servers with members in multiple regions or languages, or servers that use opt-in roles for notifications"
dimension: "understand"
features: ["skip logic", "achievements", "roles", "XP"]
relatedSlugs: ["member-segmentation", "volunteer-moderator-funnel", "event-rsvp-streak"]
templateSlugs: ["player-onboarding-profiler"]
faq:
  - q: "How do you automatically give someone a role in Discord when they join?"
    a: "Ask for what you need in a short onboarding survey, then attach an action block to the answer. When a member picks \"Americas\", the matching action block fires and Subo grants the role without a moderator touching anything. This recipe wires three notification roles that way."
  - q: "Should I use an achievement or a Discord role?"
    a: "Use an achievement for permanent facts about a member (their region, their language) that should show on their profile and survive the server. Use a role for anything operational, like who gets pinged for giveaways. The recipe has a full comparison table."
  - q: "Can one survey grant more than one role?"
    a: "Yes. A multi-select question grants one role per selected option, so a member who ticks Announcements and Events gets both. Each option carries its own action block."
  - q: "Do welcome quiz answers stay attached to the member?"
    a: "Achievements do. They are recorded against the member in your community and stay readable in later surveys and in the Members API, so you can segment on region or language months later without asking again."
---Onboard new community members by recording their region, language, and
notification preferences, and granting the matching Discord roles
automatically.

---

## The scenario

You run a community Discord with members across the Americas, Europe, and
Asia-Pacific. You'd like new members to introduce themselves with a short
quiz that does three things at once:

1. **Records who they are**, their region and preferred language, in a
   way that surfaces on their profile and persists across surveys.
2. **Subscribes them to the right notifications**: Announcements,
   Giveaways, Events, without asking them to navigate to a separate
   roles channel.
3. **Welcomes them by name** with a small XP bonus for completing.

The recipe uses **achievements** for region/language (permanent
profile-visible info) and **roles** for notification preferences
(opt-in mentions). The difference matters; the section below on
[achievements vs. roles](#achievements-vs-roles) explains why.

---

## Flow

```
  ┌──────────────────────────────────────────┐
  │ q1: Intro (content_block)                │
  │ "Hey [UserName]! Welcome 🎉              │
  │  Ready to introduce yourself?"           │
  │ → [ Let's go! 🚀 ]                       │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q2: Region?     ▢ Americas               │
  │                 ▢ Europe                 │
  │                 ▢ Asia-Pacific           │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q3: Language?   ▢ English ▢ Spanish      │
  │                 ▢ French  ▢ Japanese     │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ q4: Notifications?                       │
  │ ☐ Announcements ☐ Giveaways ☐ Events     │
  └──────────────────────────────────────────┘
                    │
                    ▼
  ╔══════════════════════════════════════════╗
  ║  Fire matching action blocks based on    ║
  ║  q2, q3, q4 (skip logic, single-question ║
  ║  hide expressions per block):            ║
  ║                                          ║
  ║   q2 → 1 of 3 region achievements        ║
  ║   q3 → 1 of 4 language achievements      ║
  ║   q4 → 0-3 notification roles            ║
  ╚══════════════════════════════════════════╝
                    │
                    ▼
  ┌──────────────────────────────────────────┐
  │ Outro: thank-you + welcome XP bonus      │
  │ (managed via project rewards/settings)   │
  └──────────────────────────────────────────┘
```

> **Why q2/q3/q4 and not q1/q2/q3?** The intro `content_block` counts as
> q1. Skip-logic position numbering includes every block, not just
> questions. If you remove the intro, shift the action-block preconditions
> back to `q1`/`q2`/`q3`.

---

## Prerequisites

You'll set these up once in your community settings, then reference them
by ID in the script.

### 1. Achievements (7 total)

Create these via the Subo Discord bot (`/xp-settings → Achievements`) or
the Rewards section in the web app. For each, set a name, an emoji/image,
and **link a Discord role** so the badge also grants the role
automatically when the achievement fires.

| Achievement name | Linked Discord role | Suggested ID |
|---|---|---|
| 🌎 Americas | `@🌎 Americas` | `xp_role_id: 1001` |
| 🌍 Europe | `@🌍 Europe` | `xp_role_id: 1002` |
| 🌏 Asia-Pacific | `@🌏 Asia-Pacific` | `xp_role_id: 1003` |
| 🗣 English speaker | `@English` | `xp_role_id: 1010` |
| 🗣 Spanish speaker | `@Español` | `xp_role_id: 1011` |
| 🗣 French speaker | `@Français` | `xp_role_id: 1012` |
| 🗣 Japanese speaker | `@日本語` | `xp_role_id: 1013` |

(English is included here so the bot can record it on the user's profile;
the example below only awards Spanish/French/Japanese because English is
the default and skipping the explicit grant keeps the flow shorter.
Adjust to taste.)

### 2. Discord roles for notifications (3 total)

Create these as plain Discord roles in your server. No achievement
needed: these exist purely to enable `@RoleName` mentions in your
announcement channels.

| Role name | Suggested ID |
|---|---|
| `@📣 Announcements` | `1382089724239417454` |
| `@🎁 Giveaways` | `1382089724239417455` |
| `@📅 Events` | `1382089724239417456` |

### 3. Project

Create a project named "Welcome" via `POST /v1/communities/{id}/projects`
or the web app. Leave `max_completes_per_user: 1` (members should only
take this once).

---

## The script

The full payload is published as the `welcomeQuiz` example on the `PUT /script` endpoint in
[the API reference](https://api.subo.ai/docs#tag/Script/operation/replaceScript). The walkthrough below
shows what each section does.

### Intro: q1 (content_block)

```jsonc
{
  "type": "content_block",
  "prompt": "Hey [UserName]! Welcome to the community 🎉 Ready to introduce yourself?",
  "image_url": "https://i.ibb.co/GfB0H7Z6/subo-equalizer.gif",
  "continue": { "after": "click", "label": "Let's go! 🚀" }
}
```

`[UserName]` is substituted with the respondent's display name at
render time. `image_url` displays a GIF or static image (Discord embeds
and the web ConvoChat both support animated GIFs). `continue.after =
"click"` shows a labelled button rather than auto-advancing. The
deliberate tap sets the tone that this is a moment, not just a form.

### Questions: q2, q3, q4

```jsonc
{
  "type": "single_punch",
  "prompt": "Which region are you in?",
  "options": [
    { "value": "Americas",     "label": "🌎 Americas" },
    { "value": "Europe",       "label": "🌍 Europe" },
    { "value": "Asia-Pacific", "label": "🌏 Asia-Pacific" }
  ]
}
```

Three plain question blocks: region (single-select), language
(single-select), notifications (multi-select). The values are what skip
logic will compare against: `"Americas"`, `"Europe"`, `"Asia-Pacific"`
for q2 and so on. Labels are display-only and can include emoji.

The `value` field is **case-sensitive** in skip-logic comparisons. Pick
values you can read in expressions later and stick to them; you'll
reference them by exact string in every action block below.

### Region achievements: one fires, two hide

```jsonc
{
  "type": "action_block",
  "prompt": "Welcome to the Americas crew! 🌎",
  "action_kind": "give_achievement",
  "action_config": { "xp_role_id": 1001 },
  "precondition": "NOT (q2 = \"Americas\")",
  "continue": { "after": "pause", "pause": 2 }
}
```

Three action blocks, one per region. Each is hidden unless `q2` matches
that region's value. Because the conditions are mutually exclusive,
exactly one fires.

The skip-logic pattern is:

> *Hide this block when q2 is **not** Americas.* → `NOT (q2 = "Americas")`

If you're authoring this in the web app, the Script Editor's skip-logic
panel has a **Show / Hide** toggle. Pick **Show only when** and enter
`q2 = "Americas"` and it'll be saved as the negated form for you.

When the Americas action block fires:
- The Americas achievement is recorded on the user's profile.
- Because the achievement is configured with a linked Discord role, the
  role is granted automatically.
- The respondent sees an inline message (*"Welcome to the Americas crew!
  🌎"*) and the script auto-advances after a 2-second pause.

Repeat the same pattern for Europe (`xp_role_id: 1002`) and Asia-Pacific
(`xp_role_id: 1003`).

### Language achievements: same pattern, different question

```jsonc
{
  "type": "action_block",
  "prompt": "Marking you as a Spanish speaker — ¡bienvenido!",
  "action_kind": "give_achievement",
  "action_config": { "xp_role_id": 1011 },
  "precondition": "NOT (q3 = \"Spanish\")",
  "continue": { "after": "pause", "pause": 2 }
}
```

Identical structure to the region blocks, but referencing `q3` instead.
The example skips an explicit English grant because most servers treat
English as the default; add one if your community works differently.

### Notification roles: multi-select means list membership

```jsonc
{
  "type": "action_block",
  "prompt": "You're subscribed to Announcements 📣",
  "action_kind": "give_role",
  "action_config": { "role_id": "1382089724239417454" },
  "precondition": "NOT (\"announcements\" in q4)",
  "continue": { "after": "pause", "pause": 1 }
}
```

Two things change here:

1. **`action_kind` is `give_role`, not `give_achievement`.** Notifications
   are an opt-in subscription, not a milestone. They should not appear on
   the user's profile as a badge.
2. **The skip-logic operator is `in`, not `=`.** Multi-select answers
   evaluate to a list of values, so list membership is the right test.

A respondent who selects only "Announcements" and "Events" will fire
exactly those two role grants. Giveaways stays hidden because
`"giveaways"` is not in the q4 list.

### Outro

The outro (custom thank-you + welcome XP bonus) is managed via project
rewards/settings rather than script blocks. With your project's `useXP`
enabled and a small `xpPoints` configured, every respondent who reaches
the end gets the XP automatically, with no per-respondent skip logic needed.

To customize the outro embed (title, body, image, thumbnail, pause
between embeds), use the **outro fields** in `PUT /script`. See the
[Replace script docs](https://api.subo.ai/docs#tag/Script/operation/replaceScript)
for the supported outro overrides.

---

## Variations

### Add a fourth segmentation: time zone

Insert a fourth `single_punch` question between language and
notifications:

```jsonc
{
  "type": "single_punch",
  "prompt": "Roughly when are you usually online?",
  "options": [
    { "value": "Morning",   "label": "🌅 Morning" },
    { "value": "Afternoon", "label": "🌤 Afternoon" },
    { "value": "Evening",   "label": "🌆 Evening" },
    { "value": "Night",     "label": "🌙 Night" }
  ]
}
```

**Important:** adding this as the new q5 shifts the original q4
(announcements multi-select) to q5. Update every later block that
referenced `q4` (the notifications question) to reference `q5` instead.
Block-position references in skip logic are not stable across reorders.
That's a [documented platform constraint](https://api.subo.ai/docs#tag/Script).

### Use XP instead of an achievement for the regional bonus

If you don't want a permanent profile badge for region and just want a
one-time XP bump per region (some communities prefer this), change the
action blocks from:

```jsonc
"action_kind": "give_achievement",
"action_config": { "xp_role_id": 1001 }
```

to:

```jsonc
"action_kind": "give_xp",
"action_config": { "xp_amount": 25 }
```

The respondent still gets the XP, but no badge is recorded and no role is
auto-granted. Use this when region is operational metadata, not identity.

### Make completion repeatable (e.g. yearly check-in)

Set the project's `max_completes_per_user > 1` (e.g. `99`) so members can
retake annually to update their answers. To award fresh XP each retake,
add an outro give-XP action block with `fire_scope: "session"`. See
[the Event RSVP recipe](/recipes/event-rsvp-streak) for the same pattern
applied to recurring events.

---

## When this recipe doesn't fit

- **You want one role per *combination* of answers** (e.g. "Americas
  English speaker" as a single role distinct from "Europe English
  speaker"). Skip logic supports compound expressions
  (`q1 = "Americas" AND q2 = "English"`) but the action-block count
  explodes quickly. Use a single combined question instead, or score the
  combination into a bucket as the
  [member segmentation recipe](/recipes/member-segmentation) does.
- **You need to verify the answer** ("is this person actually in the
  Americas?"). This recipe uses honor-system answers. Identity
  verification integrations (Steam, Patreon, Twitch) aren't built yet.
- **You want different XP amounts per region.** Each give-XP action
  block carries its own `xp_amount`, so this is doable, but make sure
  you're not optimizing the wrong thing. Variable XP per segment
  encourages segment-shopping by repeat-takers.

---

## Related
- [Volunteer / moderator recruitment funnel](/recipes/volunteer-moderator-funnel)
- [Event RSVP with attendance streaks](/recipes/event-rsvp-streak)
- [Playtester selection](/recipes/playtester-selection)
- [Skip logic reference](https://api.subo.ai/docs#tag/Script): operator and value-type tables

---

## Achievements vs. roles

The recipe makes a deliberate choice between `give_achievement` and
`give_role`. The short version:

| | Achievement (`give_achievement`) | Role (`give_role`) |
|---|---|---|
| **Discord side** | Grants the linked role (if configured) | Grants the role |
| **Subo profile** | Shows as a badge on the member's profile | Invisible |
| **Persists across surveys?** | Yes, recorded on the user permanently | Yes, but only as a Discord role |
| **Survives the Discord server going away?** | Yes, persists on Subo | No |
| **Good for** | Identity, milestones, credentials | Notifications, access control, operational tags |

**Rule of thumb:** if the information is *about who the member is*, use
an achievement with a linked Discord role. If the information is *about
what they want to be notified of or access*, use a role.

Region and language are identity. Notification preferences are access.
Hence the split in this recipe.

