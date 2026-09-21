// Era definitions for /whats-new — the guided catch-up page.
//
// This page is the opposite of /changelog: chronological, OLDEST FIRST, split
// into eras. A recontact message drops a reader at the anchor for the moment
// their community stopped hearing from us, and everything below that anchor is
// what shipped since, in the order it happened. Reading forward through your own
// gap is a natural motion; scrolling up through a reverse-chron feed is not.
//
// 🔴 The anchor ids below are a CONTRACT. `since-march` and `since-june` are
// written into campaign message bodies and the send runbook on the app side, and
// those messages live in people's inboxes indefinitely. Renaming an anchor
// breaks links we cannot edit. Tell the app side before touching them.
//
// Eras are DERIVED BY DATE, not curated by hand: an era owns every published
// `announcement`-tagged blog post from its `from` date up to the next era's
// `from` date, and the last era is open-ended. So a release announced next year
// lands in the newest era on its own, and this page keeps being true without
// anybody remembering to come back to it. The one thing to keep in mind: a post
// with no `blurb` in the translations file falls back to its own description,
// which is usually two or three lines rather than one.

export interface WhatsNewEra {
	/** URL anchor. Contract for `since-march` and `since-june`; see above. */
	id: string;
	/** Inclusive ISO start date. The era ends where the next one begins. */
	from: string;
	/**
	 * Post id to mark "start here" inside the era. Chronology still sets the
	 * order, so this is a badge rather than a reordering: the June era's most
	 * broadly useful release is its fifth item, and the reader should know.
	 */
	lead?: string;
}

/**
 * Oldest first. The boundaries are ship dates, not round numbers: they are what
 * makes each band exactly "the set of people for whom this list is the true
 * list". Jun 9 (polls that score) belongs to the March era and Jun 25 (cloning)
 * to the June era. Keep them on opposite sides.
 */
export const whatsNewEras: WhatsNewEra[] = [
	{ id: "since-march", from: "2026-03-18", lead: "subo-web-app-launch" },
	{
		id: "since-june",
		from: "2026-06-18",
		lead: "discord-rating-scale-nps-ranking-questions",
	},
];

/**
 * The anchor above the eras, for an audience that predates all of them. It has
 * no post list: almost nothing from before March 2026 was announced on this
 * site, so it is a short pointer at the changelog archive instead of a thin
 * list of two entries.
 */
export const WHATS_NEW_PROLOGUE_ID = "everything";
