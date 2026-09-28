// German changelog rows for announcement blog posts.
//
// The blog posts themselves stay English. This only translates the title +
// summary shown in the /de/changelog row; the row still links to the English
// post. Keyed by post id (the slug, e.g. "public-api-launch").
//
// Fallback: if a published announcement post is missing here, /de/changelog
// shows its English title/description instead of breaking. Same contract as
// changelog-blog-fr.ts: add an entry when a new launch post ships.

export interface BlogDeRow {
	title: string;
	summary: string;
}

export const blogDe: Record<string, BlogDeRow> = {
	"new-blog": {
		title: "Willkommen auf der neuen Subo-Website",
		summary:
			"Entdecke unsere neue Website, gebaut mit Astro, und wie wir dir das Erstellen mitreißender Fragebögen in Discord leichter machen.",
	},
	"subo-web-app-launch": {
		title: "Subo hat jetzt eine Web-App: Darum hat es so lange gedauert",
		summary:
			"Wir haben Subo gebaut, um in Discord zu leben. Das war der ganze Sinn. Das haben wir gebaut, als Discord nicht mehr reichte.",
	},
	"public-api-launch": {
		title: "Subo hat jetzt eine öffentliche API",
		summary:
			"Baue Bots, automatisiere Workflows und verbinde Subo mit dem Rest deines Stacks. Die Subo-API ist live auf api.subo.ai.",
	},
	"action-blocks-release": {
		title: "Fragebögen, die sich wie Gespräche anfühlen, jetzt mit Aktionsblöcken",
		summary:
			"Löse echte Belohnungen mitten in der Convo aus, begrüße Mitglieder mit Namen und gestalte jedes Intro und Outro selbst.",
	},
	"content-blocks-new-way-to-design-survey-flows": {
		title: "Inhaltsblöcke: eine neue Art, Fragebogen-Abläufe zu gestalten",
		summary:
			"Mit Inhaltsblöcken sagst du in einer Convo etwas, ohne eine Frage zu stellen: Begrüßungen, Einwilligungen, Abschnittswechsel, GIFs und Punkteanzeigen, die die antwortende Person beim Namen nennen.",
	},
	"scoring-piping-quizzes": {
		title: "Punkte, Quiz, Berechnungen und Piping sind jetzt in Subo eingebaut",
		summary:
			"Natives Scoring, Antwort-Piping, sofortiges Feedback und berechnete Felder: Baue Live-Quiz, Persönlichkeitstests und Tippspiele ganz ohne Tabelle.",
	},
	"polls-grading-invite-customization": {
		title: "Umfragen legen zu: Punktevergabe, bedingte Belohnungen und eine Einladung, die zum Antworten einlädt",
		summary:
			"Umfragen bewerten, punkten und belohnen jetzt wie Convos, dazu kommen eigene Antwort-Buttons, Emojis, Vorschaubilder und Rahmenfarben für offen und geschlossen in jedem Einladungs-Embed.",
	},
	"clone-surveys-across-servers": {
		title: "Klone Convos von einem Server zum anderen",
		summary:
			"Du siehst auf einem anderen Server eine Convo, die dir gefällt? Rechtsklick → Apps → Klonen, und Subo kopiert sie direkt in deinen Server: leer und bereit zum Anpassen.",
	},
	"subo-template-library-launch": {
		title: "Die Subo-Vorlagenbibliothek ist da: Fragebögen, Umfragen und Quiz zum Sofort-Loslegen",
		summary:
			"Du musst kein Profi-Forscher sein, um einen guten Fragebogen zu bauen. Klone eine bewährte Umfrage, einen Fragebogen oder ein Quiz mit einem Klick und mach sie zu deinen. Eine wachsende Bibliothek kostenloser Vorlagen für Discord-Communities.",
	},
	"personalize-discord-survey-messages": {
		title: "Drei Tasten, die deine Subo-Nachrichten für dich schreiben: @, [ und :",
		summary:
			"Rollen-Erwähnungen funktionieren jetzt in jedem Nachrichtenfeld von Subo, von den Einstellungen bis zum Script Editor, und eine neue Einfügeleiste bündelt sie mit den Variablen- und Emoji-Auswahlen. Auf allen Plänen verfügbar, auch im kostenlosen.",
	},
	"xp-history": {
		title: "XP-Verlauf: jeder Punkt, mit Begründung",
		summary:
			"Deine Mitglieder sehen endlich, wie und warum sich ihre XP verändert haben: ein vollständiger, nachprüfbarer Verlauf, im Web und in Discord. Auf allen Plänen verfügbar, auch im kostenlosen.",
	},
	"discord-rating-scale-nps-ranking-questions": {
		title: "Bewertungen, NPS und Ranking in Discord: Frag im Chat, lies eine Zahl",
		summary:
			"Vier neue Fragetypen: Bewertungen mit Sternen oder Emojis, Zustimmungs- und Zufriedenheitsskalen (inklusive Likert), die klassische NPS-Frage und Ranking ohne Drag-and-drop. Die Antwort wird als Zahl gespeichert und kommt als Durchschnitt mit Verteilung zurück. Auf allen Plänen verfügbar, auch im kostenlosen.",
	},
	"convos-in-your-dms": {
		title: "Deine Discord-Fragebögen laufen jetzt in den DMs deiner Mitglieder",
		summary:
			"Eine Convo läuft jetzt standardmäßig in einer Discord-Direktnachricht, mit privatem Thread und Weblink als automatischen Ausweichlösungen. Bei einem anonymen Projekt ist es die DM oder das Web, nie ein privater Thread: Einen Thread kann jeder mit der Berechtigung Threads verwalten lesen. Auf allen Plänen verfügbar, auch im kostenlosen.",
	},
	"subo-mcp-server": {
		title: "Verwalte deine Discord-Community, indem du deinen KI-Assistenten fragst",
		summary:
			"Der MCP-Server von Subo verbindet Subo mit Claude Code und anderen KI-Apps. Beschreib das Projekt, das du willst: Dein Assistent baut es, prüft es, startet es und fragt dich vor jeder Aktion, die deine Mitglieder erreicht. Die Einrichtung ist vorerst auf Englisch.",
	},
};
