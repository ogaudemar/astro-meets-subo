---
name: blog-writing
description: House style rules for writing and editing Subo blog articles (posts in src/content/blog/). Use whenever drafting, rewriting, or editing any blog post so the copy follows Subo's editorial conventions. Enforces the no-em-dash rule and a set of anti-AI-tell rules (no "not just X but Y," no adjective triples, no AI-vocabulary words, no stock openers, etc.); more rules will be added over time.
---

# Subo Blog Writing

Editorial rules for every article in `src/content/blog/`. Apply these when
drafting a new post or editing an existing one. This list will grow, so re-read
it before each blog task.

## House rules

### 1. No em dashes

**Never use the em dash (`—`) in blog articles.** Not in the body, not in the
frontmatter `title`/`description`. Rewrite instead:

- Joining two independent clauses → use a **period** or a **semicolon**.
- A short pause or aside → use a **comma**.
- Introducing a list or explanation → use a **colon**.
- A parenthetical aside → use **parentheses** or a pair of **commas**.

Also avoid substituting an en dash (`–`) as a stand-in separator; use a real
hyphen only for genuine ranges (e.g. `1-7 days`) and compound words.

Before finishing, grep the file for `—` to confirm none remain.

### 2. US English spelling

**Every post is US English.** *Categorize*, *personalize*, *organize*, *customize*,
*summarize*, *behavior*, *color*, *favorite*, *analyze*, *center*, *labeled*, *program*.
Never the British `-ise` / `-our` / `-re` forms. This is the site-wide rule, not a blog
rule: it applies to the web app, marketing pages, recipes, templates and `llms.txt` too,
and it is stated in full (with the exceptions) in the **`subo-glossary`** skill.

The exceptions worth remembering while writing a post: **code identifiers and JSON stay
verbatim** (a field named `favourite_game` in the app is written `favourite_game` in every
sample), and **quoted UI strings are quoted as they appear**.

Before finishing, grep the file for the usual suspects:

```bash
grep -inE '\b(categoris|personalis|organis|customis|optimis|summaris|prioritis|analyse|behaviour|colour|favourite|centre|labelled|programme|whilst|amongst)' <file>
```

### 3. Don't sound like an AI wrote it

These are the tells that mark copy as machine-generated. Every one of them
should be caught and cut before a post goes out. Read the draft back and hunt for
each pattern by name.

- **No "it's not just X, it's Y."** AI reflexively double-downs on every claim
  ("this isn't just a poll, it's a conversation"). Say the thing once. Kill the
  whole family: "not only… but also," "more than just…," "it's not about X, it's
  about Y." State it plainly.
- **No rule-of-three adjective stacks.** "Fast, easy, and scalable." "Bold,
  smart, effective." Stacking three (or more) adjectives or clauses for rhythm is
  a fingerprint. Use one word that's actually true, or restructure the sentence.
- **Cut the AI-vocabulary words.** Never use words you wouldn't say to a customer
  in a support chat: *delve, underscore, boast, tapestry, seamless, robust,
  leverage, elevate, unlock, harness, realm, landscape, testament, foster,
  navigate (figurative), embark, ever-evolving, in the realm of.* Plain words
  instead ("boasts 10 questions" → "supports 10 questions").
- **Break the fragment-then-explanation rhythm.** A punchy fragment followed by a
  long explanatory sentence. Over and over. It reads as manipulation once you
  notice it. Vary sentence openings and lengths for real reasons, not for cadence.
- **Drop the relentless positivity.** Not everything is "exciting,"
  "game-changing," "powerful," or an "incredible opportunity." It's fine to
  describe a feature neutrally. Reserve enthusiasm for where it's genuinely
  warranted; state the boring parts as boring.
- **Stop hedging by default.** Delete reflexive throat-clearing: "it's important
  to note," "it's worth mentioning," "keep in mind that," "results may vary,"
  "that said." Hedge only when the topic is actually uncertain.
- **No fake-balanced both-sides.** Don't manufacture pros-and-cons for something
  with an obvious answer just to seem even-handed. If there's a clear recommendation,
  make it.
- **Let the structure be lumpy.** Don't give every section, point, or paragraph
  the same length and shape. Real writing is uneven: some points need a sentence,
  others need three. Symmetry across every heading is a tell.
- **Ban the stock openers.** Never open a post, section, or paragraph with "Have
  you ever wondered…," "In today's fast-paced world…," "What if I told you…,"
  "Picture this…," "Let's face it," or "We've all been there." Open with the
  actual point or a concrete specific.

The through-line: write like a person who knows the product talking to a customer,
not like copy optimized to sound impressive. Specific and plain beats polished and
generic.

## Post types with their own template

Most posts are standard. A few follow a shared template with extra conventions on
top of the house rules above.

### "[Competitor] alternative" posts (the alternative-series template)

Posts answering *"[competitor] alternative"* intent (e.g. `easypoll-alternative.md`,
`simple-poll-alternative.md`, slug `/blog/<competitor>-alternative`). They share one
hero and one set of conventions so the next one is turnkey.

**Frontmatter (do NOT make a bespoke hero):**
```yaml
heroImage: "/images/blog/alternative-series/alt-hero-base.webp"   # shared base, reused by every alt post
heroHeadline: "EasyPoll alternative"                              # rendered as LIVE TEXT over the hero's dark left third
```
`heroHeadline` is a real field on the blog collection; `BlogPost.astro` overlays it
on the reserved left zone of the shared illustration. The competitor name lives in
that text (and in the prose), never in the artwork. The base image itself is briefed
via the `mascot-illustration` skill's alternative-series mode. Marginal cost of a new
alt post = reuse the base image + write one `heroHeadline` line.

**Tone and content conventions:**
- **Be genuinely fair to the competitor first**, then give a clear recommendation.
  Credibility comes from the honest "here's what it does well / when to stay" part.
  No fake both-sides, but no sneering either.
- **Name the competitor in text only.** Never reproduce their logo/branding/UI.
- **Verify competitor facts.** Web search is fine, but discount AI-content-farm
  roundups, prefer first-party sources and the user's already-vetted pages (e.g.
  `best-discord-poll-bots.md`), and surface conflicting/questionable data rather than
  asserting it. Watch for same-name-different-bot collisions.
- **Interlink into the relevant cluster** (for poll competitors: the best-poll-bots
  roundup, the native-polls comparison, the poll how-to, `/polls`, the anonymous-
  surveys guide) and add a reciprocal link back from at least one cluster page so the
  new post isn't orphaned.

**The template also covers head-to-head comparison posts**, not only literal
"[competitor] alternative" intent (user call, 2026-08-05). A "Subo vs X" post is close
enough to the same job that it should reuse the same hero rather than commission a
bespoke one. First example: `subo-vs-google-forms-typeform-discord-communities.md`, with
`heroHeadline: "vs Google Forms & Typeform"`.

**Keep `heroHeadline` short.** It renders over the reserved dark left third, capped at
`max-width: 30%` with `font-size: clamp(1.05rem, 4.2vw, 2.4rem)` (`BlogPost.astro`).
Roughly **25 characters or fewer**, matching "EasyPoll alternative" (19) and "Simple Poll
alternative" (23). A full sentence wraps into five cramped lines and stops reading as a
label. Compress rather than spelling it out: "vs Google Forms & Typeform" over
"Comparison with Google Forms and Typeform".

All the house rules above (no em dashes, anti-AI-tells) still apply.

<!--
Add future rules below as they come up (voice/tone, heading style, interlinking,
CTA conventions, etc.).
-->
