---
name: feature-launch
description: Turn a release brief from the Subo app repo into a launch announcement blog post plus the site copy changes that ship with it. Use when announcing a newly released app/bot feature on the marketing site. Handles the post draft, landing-page copy edits, cross-linking, the changelog entry, and a localization flag pass. Defers to the blog-writing skill for voice.
disable-model-invocation: true
argument-hint: <path-to-release-brief>
---

# Feature Launch

Take a release brief (written in the Subo **app** repo) and produce the marketing-site
work that announces it: an announcement post plus the copy edits and links on the rest
of the site that should reflect the new feature.

This skill orchestrates the launch; it does **not** own editorial voice. Voice, structure,
and anti-AI-tell rules come from the `blog-writing` skill. Terminology comes from
`subo-glossary`. Hero art comes from `mascot-illustration`. Reference them, don't restate them.

## Hard rule (non-negotiable)

**Never write, change, or add a pricing, plan, or tier claim without explicit confirmation
from the user in this session** — which plan a feature is on, what a tier costs, what's
gated behind Premium/VIP/Custom, rate-limit-by-tier tables, "available on all plans," etc.
This holds **even when the release brief states the tier explicitly.** Briefs go stale and
pricing is the easiest thing to get wrong. When the brief implies a plan/tier fact, quote it
back and ask before it lands anywhere (post body, frontmatter, landing copy, changelog).

## Before you start: read the ground truth

Do not work from memory of the repo. Each launch, re-check:

- **Collection schema** — `src/content.config.ts`, the `blog` collection. Required: `title`,
  `description`, `pubDate`, `author`. Optional: `updatedDate`, `heroImage`, `heroHeadline`,
  `tags`, `draft`.
- **Two or three recent launch posts** for the current shape — e.g.
  `src/content/blog/public-api-launch.md`, `action-blocks-release.md`,
  `subo-web-app-launch.md`. Note: `author: "Subo Team"`, `tags` lead with `"announcement"`,
  `draft: false` on publish, `pubDate` like `"May 1 2026"`; body uses `---` section
  dividers, `##` headings, root-relative internal links, a closing CTA, and an italic
  product-boilerplate line.
- **Where site copy lives.** Landing pages render from translation JSON, not hardcoded
  strings — `src/content/translations/en.json` (siblings: `fr/es/de/it/pt-br`). A "landing
  page copy edit" is almost always an edit to a key in `en.json`, not to a `.astro` file.

## Workflow

### 1. Read the brief

Read the file at `$ARGUMENTS`. If it's empty or missing, stop and ask for the path. Pull out:
what shipped, who it's for, the user-facing names (verify against `subo-glossary`), any
tier/plan statements (see hard rule), and whether the brief says strings were localized.

### 2. Defer to `blog-writing` for voice

Load and follow the `blog-writing` skill for all editorial decisions: no em dashes, the
anti-AI-tell rules, tone. Don't reproduce those rules here. If the feature has a natural
hero visual, brief it via `mascot-illustration`; otherwise a placeholder is fine.

### 3. Propose angle, title, target keyword — then STOP

Before drafting, present:
- the **angle** (what story this release tells, who it's for),
- a **title** (schema `title`, blog-writing rules apply),
- one **target keyword / search intent**.

Then **wait for approval.** Do not draft until the user responds. If any tier/plan claim is
load-bearing to the angle, surface it here and get the hard-rule confirmation in the same turn.

### 4. Draft the post

Write to `src/content/blog/<slug>.md` with valid frontmatter matching the schema in
`src/content.config.ts`. Match the launch-post conventions from step's ground-truth read
(`author: "Subo Team"`, `announcement` tag first, `pubDate`, closing CTA + italic
boilerplate). Keep every product detail accurate to the brief and `subo-glossary`.
Cross-link relevant existing posts and landing pages inline with root-relative paths
(`/blog/<slug>`, `/polls`, `/features`, etc.).

Set `draft: true` unless the user has said to publish — this repo keeps unreviewed posts as
drafts.

### 5. List copy edits + inbound links — propose diffs, never apply blind

Produce two lists for review:
- **Pages whose copy should change** to reflect the feature — usually `en.json` keys
  (feature descriptions, use-case pages, `/features`, `/polls`, `/survey-convos`, relevant
  `use-cases/*`). Show the current string and the proposed string as a diff.
- **Pages that should link to the new post** so it isn't orphaned, plus any reciprocal link
  back from the post.

Present these as reviewable diffs and wait. Do not edit `en.json` or any page until the
user approves each. (Reminder: any diff that touches a pricing/plan/tier line hits the hard
rule.)

### 6. Confirm the changelog entry

The changelog lives at `src/pages/changelog.astro` and is **derived**, not hand-maintained:
it lists every published blog post tagged `"announcement"`, newest first, pulling the feature
name from the post `title`, the summary from the post `description`, and linking to the post.

So there is no separate list to edit. The entry appears automatically **as long as the post
from step 4 carries the `"announcement"` tag** (it should — that's the launch-post
convention) and is not `draft: true`. Confirm both, and confirm the post `description` reads
well as a one-line changelog summary (it's doing double duty). Its head copy lives under the
`changelog` key in `en.json`.

Note: because the entry is gated on `draft: false`, it will not show on the changelog until
the post is published — same gate as the blog index. That's intended.

**Do not touch `src/data/legacy-releases.ts`.** That file is a frozen, one-time archive of
pre-website releases (2022-2025, announced only in the Support server). The changelog merges
it in alongside the derived entries, but it never grows. New launches go through the tagged
post above, never into that file.

### 6b. Offer the Discord announcement

The launch is not distributed until it is posted in the Support Server. Offer to draft it
and follow the **`discord-announcement`** skill for length, the `@Updates` ping convention
and embed control. Don't restate those rules here, and don't paste the post's intro into
Discord: the channel wants a pointer, not a summary.

### 7. Localization flag pass

If the brief says the feature's strings were **localized in the app**, flag which site copy
needs localized versions too. The site ships EN/FR/ES/DE/IT/PT-BR (6). For any `en.json` key
you added or changed in step 5, list the sibling files (`fr/es/de/it/pt-br.json`, plus the
localized page routes like `src/pages/fr/…`) that need matching copy. Flag them for the
user's localization workflow — do not machine-translate inline here.

Also flag the **French changelog row**: `/fr/changelog` shows a translated title + summary
for each announcement post via `src/data/changelog-blog-fr.ts`, keyed by the post slug. Until
an entry is added there, that row falls back to the English post title/description, so the
French page silently mixes languages. Note that a `blogFr` entry for the new post's slug is
needed (it's optional, but the fallback is the only reason it won't break the build).

### 8. Build and report

Run `npm run build` and report the result. If it fails, surface the actual error output;
don't paper over it. Note anything skipped (e.g. localization deferred, changelog awaiting
approval) plainly.

## Stop points, in order

The skill pauses for the user at: step 3 (angle/title/keyword approval), step 5 (copy + link
diffs), and any point a pricing/plan/tier claim appears (hard rule). The changelog (step 6)
needs no separate approval — it derives from the tagged post. Everything else runs through to
the build report.
