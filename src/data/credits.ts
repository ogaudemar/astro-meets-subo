// The numbers behind the Credits section on /pricing (src/components/Credits.astro).
//
// Copy lives under `pricingPage.credits` in each translations file; the NUMBERS live here,
// once, for every locale. The component formats them per locale and computes the worked
// examples from the rates, so an example can never disagree with the rate above it.
//
// Built to carry the pricing model in ~/.claude/plans/pricing-model.md (switch planned for
// 2026-12-01), where credits become the one currency for usage: answers, action blocks, AI
// and file storage, each a "usage kind" with its own rate. Moving to it should be a data
// change here plus copy, never a redesign:
//   - new usage kinds (`answers`, `actions`) are added to `usageKinds` with `live: false`,
//     reviewed on a preview, then flipped on the switch date;
//   - plan allowances change in `planAllowances` (and in the price table row, which is
//     still hand-written in the translations: see the note there).
//
// 🔴 Every number here is a pricing claim. Change one only with the operator's explicit
// confirmation in the session (feature-launch skill, hard rule), even when a release brief
// states it.

export type CreditPeriod = 'once' | 'monthly';

export interface PlanAllowance {
	/** Matches the price table's tier order: free, premium, vip, custom. */
	tier: 'free' | 'premium' | 'vip' | 'custom';
	credits: number;
	period: CreditPeriod;
}

/** Credits each plan includes. Same figures as the price table's credits row (2026-11-10). */
export const planAllowances: PlanAllowance[] = [
	{ tier: 'free', credits: 10_000, period: 'once' },
	{ tier: 'premium', credits: 500_000, period: 'monthly' },
	{ tier: 'vip', credits: 1_000_000, period: 'monthly' },
	{ tier: 'custom', credits: 1_000_000, period: 'monthly' },
];

/**
 * File storage, charged once at upload, same price on Discord and the web (operator decision
 * 2026-11-10; source: subo/docs/releases/2026-11-09-file-uploads.md).
 */
export const fileStorage = {
	creditsPerMB: 200,
	minCreditsPerFile: 10,
	/** How long the one-off charge keeps the file. Say nothing about what happens after. */
	months: 12,
	/** Worked examples, in MB. Copy supplies one label per entry, in the same order. */
	examples: [5, 1, 0.2],
};

/** Credits for one file of `mb` megabytes, the way the app charges it. */
export const fileCost = (mb: number) =>
	Math.max(fileStorage.minCreditsPerFile, Math.ceil(mb * fileStorage.creditsPerMB));

/**
 * Typical AI job costs, for illustration only: they vary with the job, the way any LLM's
 * cost varies with the size of the task, and the copy says so. Operator, 2026-11-11: a poll
 * draft can take as little as ~150 credits; a Convo varies a lot with complexity. The Convo
 * and summary figures are the measured averages in ~/.claude/plans/pricing-model.md (Quick
 * draft ~600-734 credits, open-text summary ~$0.0009 x 500,000 credits/USD ~450). Refine
 * from prod data (credit_ledger by job kind) if a sharper number is ever needed.
 */
export const typicalCosts = {
	pollDraft: 150,
	convoDraft: 700,
	summary: 450,
};

/**
 * Round DOWN to two significant figures, so "what your plan covers" never overpromises:
 * 714 -> 710, 12,500 -> 12,000, 14 -> 14.
 */
export const roughFloor = (n: number) => {
	if (n < 100) return Math.floor(n);
	const step = 10 ** (Math.floor(Math.log10(n)) - 1);
	return Math.floor(n / step) * step;
};

/**
 * What one plan's credits cover, as `{placeholder}` values for copy: {convoDrafts},
 * {pollDrafts}, {summaries}, {screenshots} (the smallest worked file example), {photos}
 * (the largest). Each is the whole allowance spent on that one thing; copy joins them
 * with "or", never "and".
 */
export const allowanceCoverage = (credits: number, lang = 'en') => {
	const nf = new Intl.NumberFormat(lang);
	const files = fileStorage.examples.map(fileCost);
	return {
		convoDrafts: nf.format(roughFloor(credits / typicalCosts.convoDraft)),
		pollDrafts: nf.format(roughFloor(credits / typicalCosts.pollDraft)),
		summaries: nf.format(roughFloor(credits / typicalCosts.summary)),
		screenshots: nf.format(roughFloor(credits / Math.min(...files))),
		photos: nf.format(roughFloor(credits / Math.max(...files))),
	};
};

const sizeLabel =(nf: Intl.NumberFormat, mb: number) =>
	mb >= 1 ? `${nf.format(mb)} MB` : `${nf.format(Math.round(mb * 1000))} KB`;

/**
 * The file-storage figures as `{placeholder}` values for copy, formatted for `lang`:
 * {perMB} {min} {months}, and per worked example {ex0} {ex0size}, {ex1} {ex1size}, ...
 * Used by the Credits section and by any copy that quotes the rate (the pricing FAQ),
 * so no translation file ever holds a number of its own.
 */
export const fileCreditVars = (lang = 'en') => {
	const nf = new Intl.NumberFormat(lang);
	const vars: Record<string, string> = {
		perMB: nf.format(fileStorage.creditsPerMB),
		min: nf.format(fileStorage.minCreditsPerFile),
		months: nf.format(fileStorage.months),
	};
	fileStorage.examples.forEach((mb, i) => {
		vars[`ex${i}`] = nf.format(fileCost(mb));
		vars[`ex${i}size`] = sizeLabel(nf, mb);
	});
	return vars;
};

/** {pollDraft} {convoDraft} {summary}: the typical AI job costs, formatted for `lang`. */
export const typicalCostVars = (lang = 'en') => {
	const nf = new Intl.NumberFormat(lang);
	return {
		pollDraft: nf.format(typicalCosts.pollDraft),
		convoDraft: nf.format(typicalCosts.convoDraft),
		summary: nf.format(typicalCosts.summary),
	};
};

/** Replace `{name}` placeholders; unknown names are left as they are. */
export const fillVars = (s: string, vars: Record<string, string | number>) =>
	s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

/**
 * What spends credits. `id` keys the copy in `pricingPage.credits.kinds`. A kind with
 * `live: false` is not rendered: stage future kinds here before they launch.
 */
export const usageKinds: { id: string; live: boolean }[] = [
	{ id: 'ai', live: true },
	{ id: 'files', live: true },
	// Pricing model, 2026-12-01 (not live): 1 answer = 50 credits, 1 action block that fires = 50.
	// { id: 'answers', live: false },
	// { id: 'actions', live: false },
];
