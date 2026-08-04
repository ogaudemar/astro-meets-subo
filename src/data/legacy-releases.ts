// Frozen pre-website changelog archive.
//
// From 2022 to 2025, Subo shipped continuously but announced releases only in the
// Subo Support Discord server, not on this site. These curated milestones backfill
// that history so the /changelog page reflects the real, multi-year track record.
//
// This list is FROZEN. It does not grow. Everything from the website era forward
// (Sep 2025 onward) is derived automatically from `announcement`-tagged blog posts
// in `src/pages/changelog.astro` — do not add new releases here. The feature-launch
// skill must never edit this file.
//
// Bilingual (en + fr). The `*Fr` fields feed `/fr/changelog`; French uses the same
// informal register as the rest of fr.json and is a first pass worth a native review.
//
// Curation rules (if you ever extend the archive): milestones only, and describe
// WHAT shipped, never which plan/tier it was on or what it cost.

export interface LegacyRelease {
	/** ISO date (YYYY-MM-DD) of the Support-server announcement. */
	date: string;
	/** Feature-centric headline. No product name needed. */
	title: string;
	/** One line on what shipped. No plan/tier or pricing claims. */
	summary: string;
	/** French headline (informal register). */
	titleFr: string;
	/** French one-liner (informal register). */
	summaryFr: string;
}

export const legacyReleases: LegacyRelease[] = [
	{
		date: "2022-02-25",
		title: "The first release",
		summary:
			"The survey bot goes live on Discord, letting communities run private surveys with their members.",
		titleFr: "La première version",
		summaryFr:
			"Le bot de sondage arrive sur Discord et permet aux communautés de lancer des enquêtes privées avec leurs membres.",
	},
	{
		date: "2022-03-28",
		title: "The Support server opens",
		summary:
			"A dedicated Discord server launches for help, feedback, and release announcements.",
		titleFr: "Le serveur de support ouvre",
		summaryFr:
			"Un serveur Discord dédié ouvre pour l'aide, les retours et les annonces de versions.",
	},
	{
		date: "2022-05-28",
		title: "Editing, scheduling, and multiple surveys",
		summary:
			"Fix typos after launch, run several surveys at once, schedule when each opens and closes, auto-post invitations, and build surveys up to ten questions.",
		titleFr: "Édition, planification et enquêtes multiples",
		summaryFr:
			"Corrige tes fautes après le lancement, lance plusieurs enquêtes à la fois, planifie leur ouverture et leur fermeture, publie les invitations automatiquement et crée des enquêtes jusqu'à dix questions.",
	},
	{
		date: "2022-06-13",
		title: "Verified by Discord",
		summary: "Subo earns Discord's official verified badge.",
		titleFr: "Vérifié par Discord",
		summaryFr: "Subo obtient le badge vérifié officiel de Discord.",
	},
	{
		date: "2022-06-22",
		title: "Surveys move out of DMs",
		summary:
			"Direct messages are replaced by private, self-destructing channels, so members answer without opening their DMs.",
		titleFr: "Les enquêtes quittent les DM",
		summaryFr:
			"Les messages privés laissent place à des salons privés qui s'autodétruisent, pour que les membres répondent sans ouvrir leurs DM.",
	},
	{
		date: "2022-09-10",
		title: "Polls arrive",
		summary:
			"Ask a single question and share it as a quick poll instead of a full survey, with support for servers that have hundreds of roles and channels.",
		titleFr: "Les sondages débarquent",
		summaryFr:
			"Pose une seule question et partage-la sous forme de sondage rapide plutôt qu'une enquête complète, avec la prise en charge des serveurs qui ont des centaines de rôles et de salons.",
	},
	{
		date: "2022-10-16",
		title: "Precise scheduling and private test runs",
		summary:
			"Schedule launches and auto-close down to the minute, and test a survey privately before it goes live.",
		titleFr: "Planification précise et tests privés",
		summaryFr:
			"Planifie les lancements et la fermeture automatique à la minute près, et teste une enquête en privé avant de la publier.",
	},
	{
		date: "2022-10-24",
		title: "Voters-only and hidden poll results",
		summary:
			"New result modes let members vote without being swayed by the running tally, then reveal results afterward.",
		titleFr: "Résultats masqués et réservés aux votants",
		summaryFr:
			"De nouveaux modes de résultats laissent les membres voter sans être influencés par le décompte en cours, puis révèlent les résultats ensuite.",
	},
	{
		date: "2022-10-25",
		title: "The /poll command",
		summary: "A dedicated command to spin up a single-question poll in seconds.",
		titleFr: "La commande /poll",
		summaryFr:
			"Une commande dédiée pour créer un sondage à une question en quelques secondes.",
	},
	{
		date: "2022-11-04",
		title: "Images in polls and questions",
		summary: "Attach an image or GIF to any poll or survey question.",
		titleFr: "Images dans les sondages et les questions",
		summaryFr:
			"Ajoute une image ou un GIF à n'importe quelle question de sondage ou d'enquête.",
	},
	{
		date: "2022-11-10",
		title: "French, the first translation",
		summary:
			"Subo goes multilingual, starting with a full French version and the framework to add more languages.",
		titleFr: "Le français, première traduction",
		summaryFr:
			"Subo devient multilingue, à commencer par une version française complète et tout ce qu'il faut pour en ajouter d'autres.",
	},
	{
		date: "2023-02-04",
		title: "Premium and VIP plans",
		summary:
			"Introduced paid plans to support ongoing development, alongside a free tier that stays.",
		titleFr: "Les plans Premium et VIP",
		summaryFr:
			"Arrivée de plans payants pour soutenir le développement continu, aux côtés d'une offre gratuite qui reste.",
	},
	{
		date: "2023-02-16",
		title: "Response notifications",
		summary:
			"Get notified with each new submission as it arrives, turning surveys into applications, contact forms, and intake forms.",
		titleFr: "Notifications de réponses",
		summaryFr:
			"Reçois une notification à chaque nouvelle réponse, pour transformer tes enquêtes en candidatures, formulaires de contact et formulaires d'inscription.",
	},
	{
		date: "2023-03-04",
		title: "Select limits and project cloning",
		summary:
			"Set exactly how many options members can pick per question, and clone a poll or survey to reuse it.",
		titleFr: "Limites de sélection et clonage de projets",
		summaryFr:
			"Définis exactement combien d'options les membres peuvent choisir par question, et clone un sondage ou une enquête pour le réutiliser.",
	},
	{
		date: "2023-04-03",
		title: "The /home dashboard",
		summary:
			"Manage every project from one place inside your server, with no commands to memorize.",
		titleFr: "Le tableau de bord /home",
		summaryFr:
			"Gère tous tes projets depuis un seul endroit dans ton serveur, sans commande à retenir.",
	},
	{
		date: "2023-04-10",
		title: "SurveyBot becomes Subo, and meets AI",
		summary:
			"The bot is renamed after its mascot, Subo, and ships its first AI feature: /draft writes a survey from a plain-language objective.",
		titleFr: "SurveyBot devient Subo et rencontre l'IA",
		summaryFr:
			"Le bot est renommé d'après sa mascotte, Subo, et lance sa première fonctionnalité d'IA : /draft rédige une enquête à partir d'un simple objectif.",
	},
	{
		date: "2023-04-25",
		title: "Reward completion with roles",
		summary:
			"Automatically grant a Discord role the moment a member finishes a survey.",
		titleFr: "Récompense la participation avec des rôles",
		summaryFr:
			"Attribue automatiquement un rôle Discord dès qu'un membre termine une enquête.",
	},
	{
		date: "2023-05-02",
		title: "Private threads",
		summary:
			"Temporary channels give way to private threads for a cleaner, more private answering experience.",
		titleFr: "Les threads privés",
		summaryFr:
			"Les salons temporaires laissent place à des threads privés, pour une expérience de réponse plus propre et plus privée.",
	},
	{
		date: "2023-05-25",
		title: "Anonymous, semi-private, and transparent modes",
		summary:
			"Three privacy modes control who can see individual answers, including a fully anonymous mode where even the creator cannot.",
		titleFr: "Modes anonyme, semi-privé et transparent",
		summaryFr:
			"Trois modes de confidentialité contrôlent qui peut voir les réponses individuelles, dont un mode totalement anonyme où même le créateur ne le peut pas.",
	},
	{
		date: "2023-06-20",
		title: "AI summaries of open answers",
		summary:
			"Text Analysis reads open-ended responses and returns a clear summary in seconds.",
		titleFr: "Résumés des réponses ouvertes par IA",
		summaryFr:
			"L'Analyse de texte lit les réponses ouvertes et renvoie un résumé clair en quelques secondes.",
	},
	{
		date: "2023-10-13",
		title: "New commands and a performance rewrite",
		summary:
			"Adds /edit, /start-stop, /delete, and /results plus right-click message actions, on top of a major rewrite that speeds up large servers.",
		titleFr: "Nouvelles commandes et réécriture des performances",
		summaryFr:
			"Ajout de /edit, /start-stop, /delete et /results, plus des actions par clic droit sur les messages, en plus d'une réécriture majeure qui accélère les gros serveurs.",
	},
	{
		date: "2023-11-06",
		title: "Forms: multiple responses per member",
		summary:
			"Let members submit as many times as they want, for bug reports, applications, and ongoing intake.",
		titleFr: "Formulaires : plusieurs réponses par membre",
		summaryFr:
			"Laisse les membres répondre autant de fois qu'ils veulent, pour les rapports de bug, les candidatures et la collecte continue.",
	},
	{
		date: "2023-11-23",
		title: "Repost and answer validation",
		summary:
			"Repost an invitation to remind members, and set minimum or maximum length and value rules on open questions.",
		titleFr: "Republication et validation des réponses",
		summaryFr:
			"Republie une invitation pour relancer les membres, et définis des règles de longueur ou de valeur minimale et maximale sur les questions ouvertes.",
	},
	{
		date: "2023-12-10",
		title: "Admin and Creator roles",
		summary:
			"Two permission tiers let admins keep control of settings while more members can build their own projects.",
		titleFr: "Rôles Admin et Créateur",
		summaryFr:
			"Deux niveaux de permissions permettent aux admins de garder le contrôle des réglages, tout en laissant plus de membres créer leurs propres projets.",
	},
	{
		date: "2024-01-15",
		title: "Reveal-on-close and emoji voting",
		summary:
			"Hidden poll results can auto-reveal when a poll closes, and members can vote with emoji-only buttons.",
		titleFr: "Révélation à la fermeture et vote par emoji",
		summaryFr:
			"Les résultats masqués peuvent se révéler automatiquement à la fermeture d'un sondage, et les membres peuvent voter avec des boutons emoji uniquement.",
	},
	{
		date: "2024-03-06",
		title: "Ten languages",
		summary:
			"With Turkish, Subo now speaks ten languages, including French, Spanish, German, Portuguese, Italian, Russian, Polish, and Dutch.",
		titleFr: "Dix langues",
		summaryFr:
			"Avec le turc, Subo parle désormais dix langues, dont le français, l'espagnol, l'allemand, le portugais, l'italien, le russe, le polonais et le néerlandais.",
	},
	{
		date: "2024-04-17",
		title: "XP, levels, and leaderboards",
		summary:
			"Reward members with XP for answering, set role rewards by score, and rank participants on a server leaderboard.",
		titleFr: "XP, niveaux et leaderboards",
		summaryFr:
			"Récompense les membres avec de l'XP quand ils répondent, définis des récompenses de rôle selon le score, et classe les participants sur un leaderboard de serveur.",
	},
	{
		date: "2024-05-08",
		title: "Individual responses in results",
		summary:
			"See how each member answered directly from the results view, without exporting a report.",
		titleFr: "Réponses individuelles dans les résultats",
		summaryFr:
			"Vois comment chaque membre a répondu directement depuis les résultats, sans exporter de rapport.",
	},
	{
		date: "2025-02-17",
		title: "Reorder questions",
		summary: "Rearrange survey questions into any order from Edit mode.",
		titleFr: "Réorganise les questions",
		summaryFr:
			"Change l'ordre des questions de ton enquête depuis le mode Édition.",
	},
	{
		date: "2025-03-10",
		title: "Skip logic",
		summary:
			"Skip questions based on earlier answers, using a simple builder or advanced code-like expressions.",
		titleFr: "Logique de saut",
		summaryFr:
			"Saute des questions selon les réponses précédentes, avec un éditeur simple ou des expressions avancées façon code.",
	},
	{
		date: "2025-10-01",
		title: "Web Convos (beta)",
		summary:
			"Members can answer on the web instead of in Discord, with the same conversational flow, XP, and rewards.",
		titleFr: "Web Convos (bêta)",
		summaryFr:
			"Les membres peuvent répondre sur le web plutôt que dans Discord, avec le même déroulé conversationnel, l'XP et les récompenses.",
	},
	{
		date: "2025-12-03",
		title: "Share surveys anywhere",
		summary:
			"Open Web surveys work outside Discord entirely: share a link on social, email, or a website, with no Discord account required to answer.",
		titleFr: "Partage tes enquêtes partout",
		summaryFr:
			"Les enquêtes Open Web fonctionnent totalement en dehors de Discord : partage un lien sur les réseaux, par email ou sur un site, sans compte Discord pour répondre.",
	},
];
