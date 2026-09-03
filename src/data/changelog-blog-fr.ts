// French changelog rows for announcement blog posts.
//
// The blog posts themselves stay English. This only translates the title +
// summary shown in the /fr/changelog row; the row still links to the English
// post. Keyed by post id (the slug, e.g. "public-api-launch").
//
// Fallback: if a published announcement post is missing here, /fr/changelog
// shows its English title/description instead of breaking. So this map is
// best-effort — add an entry when a new launch post ships (the feature-launch
// skill's localization step covers this), and the page degrades gracefully
// until you do.

export interface BlogFrRow {
	title: string;
	summary: string;
}

export const blogFr: Record<string, BlogFrRow> = {
	"new-blog": {
		title: "Bienvenue sur le nouveau site de Subo",
		summary:
			"Découvre notre nouveau site, construit avec Astro, et comment on te facilite la création d'enquêtes Discord engageantes.",
	},
	"subo-web-app-launch": {
		title: "Subo a désormais une web app : voici pourquoi ça a pris du temps",
		summary:
			"On a conçu Subo pour vivre dans Discord. C'était tout l'intérêt. Voici ce qu'on a construit quand Discord n'a plus suffi.",
	},
	"public-api-launch": {
		title: "Subo a maintenant une API publique",
		summary:
			"Crée des bots, automatise tes workflows et connecte Subo au reste de ta stack. L'API Subo est en ligne sur api.subo.ai.",
	},
	"action-blocks-release": {
		title: "Des enquêtes qui ressemblent à des conversations, maintenant avec les Action Blocks",
		summary:
			"Déclenche de vraies récompenses en plein milieu d'une enquête, salue les membres par leur nom et personnalise chaque intro et outro.",
	},
	"scoring-piping-quizzes": {
		title: "Scoring, quiz, calculs et piping sont désormais natifs dans Subo",
		summary:
			"Scoring natif, piping des réponses, feedback instantané et champs calculés : crée des quiz en temps réel, des tests de personnalité et des concours de pronostics sans tableur.",
	},
	"polls-grading-invite-customization": {
		title: "Les sondages passent au niveau supérieur : scoring, récompenses conditionnelles et une invitation qui donne envie de répondre",
		summary:
			"Les sondages notent, scorent et récompensent comme de vraies enquêtes, avec en plus des boutons de réponse personnalisés, des emoji, des vignettes et des couleurs de bordure ouvert/fermé sur chaque embed d'invitation.",
	},
	"clone-surveys-across-servers": {
		title: "Clone des enquêtes d'un serveur à l'autre",
		summary:
			"Tu vois une enquête qui te plaît sur un autre serveur ? Clic droit → Apps → Cloner, et Subo la copie directement dans ton serveur : page blanche, prête à personnaliser.",
	},
	"subo-template-library-launch": {
		title: "La bibliothèque de templates Subo est là : enquêtes, sondages et quiz prêts à l'emploi",
		summary:
			"Pas besoin d'être chercheur pro pour créer une super enquête. Clone un sondage, une enquête ou un quiz éprouvé en un clic et fais-le tien. Une bibliothèque grandissante de templates gratuits pour les communautés Discord.",
	},
	"personalize-discord-survey-messages": {
		title: "Trois touches qui écrivent tes messages Subo à ta place : @, [ et :",
		summary:
			"Les mentions de rôle fonctionnent maintenant dans tous les champs de message de Subo, des Paramètres au Script Editor, et une nouvelle barre d'insertion les réunit avec les sélecteurs de variables et d'emoji. Disponible sur tous les plans, même le gratuit.",
	},
	"xp-history": {
		title: "Historique XP : chaque point, avec sa raison",
		summary:
			"Tes membres voient enfin comment et pourquoi leurs XP ont changé : un historique complet et vérifiable, sur le web et dans Discord. Disponible sur tous les plans, même le gratuit.",
	},
	"discord-rating-scale-nps-ranking-questions": {
		title:
			"Évaluations, NPS et classement dans Discord : pose la question dans le chat, lis un score",
		summary:
			"Quatre nouveaux types de questions : évaluations en étoiles ou en emojis, échelles d'accord et de satisfaction (Likert inclus), la question NPS standard et le classement sans glisser-déposer. La réponse est stockée comme un nombre, donc elle revient en moyenne avec sa distribution derrière. Disponible sur tous les plans, même le gratuit.",
	},
	"convos-in-your-dms": {
		title: "Tes enquêtes Discord se déroulent maintenant dans les DM de tes membres",
		summary:
			"Une Convo se déroule désormais par défaut dans un message privé Discord, avec un fil privé puis un lien web en solutions de repli automatiques. Sur un projet anonyme, c'est le DM ou le web, jamais un fil privé : un fil est lisible par toute personne ayant la permission Gérer les fils. Disponible sur tous les plans, même le gratuit.",
	},
};
