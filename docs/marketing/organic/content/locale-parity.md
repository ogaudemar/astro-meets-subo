# Locale-parity playbook

> Moved verbatim from the 2026 roadmap on 2026-11-13. Read before starting IT, PT-BR or any new locale.

Distilled from the German pass (2026-08-12) and the Spanish one (2026-08-24). German took two
tiers across two sessions; Spanish took one pass, because the shape was already known. **The
point of this section is that the next locale should not re-derive any of it.** Everything
below is a thing that was discovered the hard way at least once.

**⭐ Step 0, added 2026-08-26: write the locale's lexicon table before writing any copy.**
Six words, one job each, one canonical URL each, per **[TERMINOLOGY
ARCHITECTURE](#-terminology-architecture--disambiguation-as-an-authority-lever-opened-2026-08-26)**
(action A7). French needed three naming rounds and a partly-migrated skill table because this
step did not exist. It costs an hour and it is the difference between "translated flat" and
"written" that the German and Spanish passes both had to discover on their own.

**The work is mechanically small and editorially large.** Eight route files are a
transformation of eight existing files; the ~28KB of JSON copy is the whole job. Budget
accordingly, and do not let the cheap half create the illusion the locale is done.

**Order of operations that worked:**
1. **Diff the locale's key set against `en.json` first**, deep, not top-level. It tells you
   exactly what is missing and it catches strays — ES was missing `developerApi.ctaGuide`
   alone, which no page-level audit would have surfaced.
2. **Write the missing blocks into the locale file**, in `en.json`'s key order, before
   touching any route. A merge script that reorders to EN's key order at the end keeps the
   six locale files diffable against each other forever; do that rather than appending.
3. **Generate the routes by transforming the DE or FR ones** (swap the JSON import and the
   `<html lang>`), then **diff each generated file against its source modulo the locale
   swap** to prove you changed nothing else. The route files are long, mostly `<style>`, and
   a hand-copy will silently drift.
4. **hreflang last, and reciprocally.** Insert the new locale into *every* existing copy of
   each page, in the site's established `x-default, en, fr, es, de, it` order. A
   one-directional declaration from the new pages is the failure mode.
5. **Audit in `dist/`, never in source.** Build, then assert programmatically: every page
   carries the new alternate, every new URL is in the sitemap, and no internal link on the
   new pages 404s. Each of those three checks caught nothing on the ES pass *because* the
   earlier steps were done carefully — which is the point; they are cheap insurance.

**Five traps, all of which have actually bitten:**
- **The locale file's `surveyConvos` is pre-retune.** Every locale was translated from the
  *old* EN page and none of them says *formulario / modulo / formulário / Formular*. FR, DE
  and ES each had to be retuned for form intent as part of their parity work. **Assume IT and
  PT-BR need it too**, including the Google Forms line and the
  `/blog/how-to-make-a-discord-form` link.
- **Internal links in `header`, `footer`, the homepage `features` tiles and
  `usecasesCategories` point at the English pages.** They are invisible while the locale has
  no routes, and become wrong the moment it does. Repoint them in the same change; that is
  four separate objects, not just the nav.
- **Product nouns must come from the catalog, not from translation.** Four of five guessed
  question-type names were wrong in the S1.5 pass, and the two that failed hardest were where
  the product made the *less* obvious call (German keeps *Ranking*, Spanish refuses it for
  *Clasificación*). Look them up in
  `Subo shared/Messages Translations/new-path/user_messages_all_2026-08-12.xlsx`
  (sheet `User Messages`, keys `Web_BlockType_*` / `QuestionType_enum_label_*`), or reuse the
  names already sitting in that locale's `questionTypesList`. Never infer.
- **When EN and a locale disagree, check the data *shape*, not only the strings.** The
  2026-08-24 FR/DE fix found example chips stored as plain strings where EN had
  `{text, template}` objects, so six high-intent pages rendered inert chips and sent nothing
  into the template library. The renderer tolerated both forms, which is why it went unseen.
  **Build any new locale against the object shape** and verify the template-link count in
  `dist/` matches FR/DE (11/9/7 on the three use-case pages).
- **Em dashes accumulate in the locale files.** House style bans them and the locales were
  never swept: FR 0, DE 3, EN 3, **ES was 17 before this pass, IT is 18, PT-BR is 20.**
  *(DE and ES both at 0 since 2026-09-28; IT and PT-BR unchanged.)*
  Clear them by rewriting the sentence, not by substituting a comma everywhere — several ES
  cases wanted a colon or a full stop instead.

**The parity set, as of 2026-09-28:** FR's 13 pages minus the blog, which is a separate
content decision per locale. That is 12 pages: home, pricing, about, features, polls,
survey-convos, forms, custom-survey-bot, changelog and the three use cases. **Pricing is
the one page that is never at parity:** outside EN and FR the B2B shelf renders as a
pointer to the English section, because we can't sell to businesses in other languages
(user ruling). **Adding `/forms/` to a locale moves two other pages** (its survey page and
its GTD page both lead on the form word until it exists), so settle the locale's survey word
before writing the forms copy. That word is the decision the German and Spanish passes had to
put to the user.

**Two standing constraints on the copy itself:**
- **Write in-language, don't translate flat.** This is the roadmap's oldest localization
  lesson (`translate ≠ optimize`): FR `/polls` was a good translation that could not compete
  for the term it existed to win. Each locale's H1s and titles must carry that language's
  target terms.
- **The LLM pass is the only pass.** There are no volunteer reviewers now and the user has
  accepted that. So the copy gets written deliberately rather than rendered mechanically, and
  a native read stays the highest-value cheap audit if one ever becomes available.

~~**Known gap, unrelated to any single locale: `pt-br` has no hreflang entry anywhere on the
site.**~~ **✅ Checked 2026-09-28: not a gap any more.** `/pt-br/` and `/pt-br/pricing/` are the
only PT-BR pages, and all 12 language versions of home and pricing already declare `pt-BR`
reciprocally (`check:hreflang` enforces it). Pages with no PT-BR twin correctly omit it. Whoever
fixed it did not update this note, and a later session nearly re-fixed it from a file count
instead of reading the clusters.

**French twin of `/whats-new/` — ✅ shipped 2026-09-28 (user: for future French campaigns).**
`/fr/whats-new/` keeps the same era anchors (`#since-march`, `#since-june`, a contract with the
app-side campaign runbook), so a French recontact message only swaps the path. Rows take a
French post's title and link when one exists (`translationOf`), otherwise the `blogFr` title with
the `whatsNew.entries` blurb, and English links are labelled *Lire l'annonce (en anglais)*. EN
and FR are a reciprocal hreflang pair. `blogFr` also gained the missing *content blocks* row,
which `/fr/changelog/` had been showing in English. FR's only remaining key gap against
`en.json` is `developerApi.ctaGuide`.
