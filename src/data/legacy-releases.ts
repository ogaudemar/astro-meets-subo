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
// Four languages (en, fr, de, es). The `*Fr`, `*De` and `*Es` fields feed `/fr/changelog`,
// `/de/changelog` and `/es/changelog`, in the same informal register as each locale's JSON
// (tu / du / tú). All three are LLM-written and worth a native review. DE and ES were added
// 2026-09-28 with the lexicon's nouns: the pre-Convo "survey" is Fragebogen / encuesta,
// the poll is Umfrage / votación (Spanish is the one T2b exception; see lexicon.json es).
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
	/** German headline (informal register, du). */
	titleDe: string;
	/** German one-liner (informal register, du). */
	summaryDe: string;
	/** Spanish headline (informal register, tú). */
	titleEs: string;
	/** Spanish one-liner (informal register, tú). */
	summaryEs: string;
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
		titleDe: "Die erste Version",
		summaryDe:
			"Der Bot geht auf Discord live, und Communities können private Fragebögen mit ihren Mitgliedern durchführen.",
		titleEs: "La primera versión",
		summaryEs:
			"El bot llega a Discord y permite a las comunidades lanzar encuestas privadas con sus miembros.",
	},
	{
		date: "2022-03-28",
		title: "The Support server opens",
		summary:
			"A dedicated Discord server launches for help, feedback, and release announcements.",
		titleFr: "Le serveur de support ouvre",
		summaryFr:
			"Un serveur Discord dédié ouvre pour l'aide, les retours et les annonces de versions.",
		titleDe: "Der Support-Server öffnet",
		summaryDe:
			"Ein eigener Discord-Server startet für Hilfe, Feedback und Release-Ankündigungen.",
		titleEs: "Abre el servidor de soporte",
		summaryEs:
			"Se lanza un servidor de Discord dedicado a la ayuda, el feedback y los anuncios de nuevas versiones.",
	},
	{
		date: "2022-05-28",
		title: "Editing, scheduling, and multiple surveys",
		summary:
			"Fix typos after launch, run several surveys at once, schedule when each opens and closes, auto-post invitations, and build surveys up to ten questions.",
		titleFr: "Édition, planification et enquêtes multiples",
		summaryFr:
			"Corrige tes fautes après le lancement, lance plusieurs enquêtes à la fois, planifie leur ouverture et leur fermeture, publie les invitations automatiquement et crée des enquêtes jusqu'à dix questions.",
		titleDe: "Bearbeiten, Planen und mehrere Fragebögen",
		summaryDe:
			"Tippfehler nach dem Start korrigieren, mehrere Fragebögen gleichzeitig laufen lassen, Öffnen und Schließen planen, Einladungen automatisch posten und Fragebögen mit bis zu zehn Fragen bauen.",
		titleEs: "Edición, programación y varias encuestas",
		summaryEs:
			"Corrige erratas después del lanzamiento, lanza varias encuestas a la vez, programa cuándo se abre y se cierra cada una, publica las invitaciones automáticamente y crea encuestas de hasta diez preguntas.",
	},
	{
		date: "2022-06-13",
		title: "Verified by Discord",
		summary: "Subo earns Discord's official verified badge.",
		titleFr: "Vérifié par Discord",
		summaryFr: "Subo obtient le badge vérifié officiel de Discord.",
		titleDe: "Von Discord verifiziert",
		summaryDe:
			"Subo erhält Discords offizielles Verifizierungsabzeichen.",
		titleEs: "Verificado por Discord",
		summaryEs:
			"Subo obtiene la insignia oficial de verificación de Discord.",
	},
	{
		date: "2022-06-22",
		title: "Surveys move out of DMs",
		summary:
			"Direct messages are replaced by private, self-destructing channels, so members answer without opening their DMs.",
		titleFr: "Les enquêtes quittent les DM",
		summaryFr:
			"Les messages privés laissent place à des salons privés qui s'autodétruisent, pour que les membres répondent sans ouvrir leurs DM.",
		titleDe: "Fragebögen verlassen die DMs",
		summaryDe:
			"Direktnachrichten werden durch private, sich selbst löschende Kanäle ersetzt, sodass Mitglieder antworten, ohne ihre DMs zu öffnen.",
		titleEs: "Las encuestas salen de los DM",
		summaryEs:
			"Los mensajes directos se sustituyen por canales privados que se autodestruyen, así que los miembros responden sin abrir sus DM.",
	},
	{
		date: "2022-09-10",
		title: "Polls arrive",
		summary:
			"Ask a single question and share it as a quick poll instead of a full survey, with support for servers that have hundreds of roles and channels.",
		titleFr: "Les sondages débarquent",
		summaryFr:
			"Pose une seule question et partage-la sous forme de sondage rapide plutôt qu'une enquête complète, avec la prise en charge des serveurs qui ont des centaines de rôles et de salons.",
		titleDe: "Umfragen sind da",
		summaryDe:
			"Stell eine einzelne Frage und teile sie als schnelle Umfrage statt als ganzen Fragebogen, auch auf Servern mit Hunderten von Rollen und Kanälen.",
		titleEs: "Llegan las votaciones",
		summaryEs:
			"Haz una sola pregunta y compártela como una votación rápida en lugar de una encuesta completa, incluso en servidores con cientos de roles y canales.",
	},
	{
		date: "2022-10-16",
		title: "Precise scheduling and private test runs",
		summary:
			"Schedule launches and auto-close down to the minute, and test a survey privately before it goes live.",
		titleFr: "Planification précise et tests privés",
		summaryFr:
			"Planifie les lancements et la fermeture automatique à la minute près, et teste une enquête en privé avant de la publier.",
		titleDe: "Minutengenaue Planung und private Testläufe",
		summaryDe:
			"Starts und automatisches Schließen minutengenau planen und einen Fragebogen privat testen, bevor er live geht.",
		titleEs: "Programación precisa y pruebas privadas",
		summaryEs:
			"Programa lanzamientos y cierres automáticos al minuto, y prueba una encuesta en privado antes de publicarla.",
	},
	{
		date: "2022-10-24",
		title: "Voters-only and hidden poll results",
		summary:
			"New result modes let members vote without being swayed by the running tally, then reveal results afterward.",
		titleFr: "Résultats masqués et réservés aux votants",
		summaryFr:
			"De nouveaux modes de résultats laissent les membres voter sans être influencés par le décompte en cours, puis révèlent les résultats ensuite.",
		titleDe: "Ergebnisse nur für Abstimmende oder verborgen",
		summaryDe:
			"Neue Ergebnismodi lassen Mitglieder abstimmen, ohne vom laufenden Zwischenstand beeinflusst zu werden, und zeigen die Ergebnisse erst danach.",
		titleEs: "Resultados solo para votantes u ocultos",
		summaryEs:
			"Nuevos modos de resultados permiten votar sin dejarse influir por el recuento en curso, y muestran los resultados después.",
	},
	{
		date: "2022-10-25",
		title: "The /poll command",
		summary: "A dedicated command to spin up a single-question poll in seconds.",
		titleFr: "La commande /poll",
		summaryFr:
			"Une commande dédiée pour créer un sondage à une question en quelques secondes.",
		titleDe: "Der Befehl /umfrage (oder /poll)",
		summaryDe:
			"Ein eigener Befehl, um in Sekunden eine Umfrage mit einer Frage zu starten.",
		titleEs: "El comando /votación (o /poll)",
		summaryEs:
			"Un comando propio para crear una votación de una sola pregunta en segundos.",
	},
	{
		date: "2022-11-04",
		title: "Images in polls and questions",
		summary: "Attach an image or GIF to any poll or survey question.",
		titleFr: "Images dans les sondages et les questions",
		summaryFr:
			"Ajoute une image ou un GIF à n'importe quelle question de sondage ou d'enquête.",
		titleDe: "Bilder in Umfragen und Fragen",
		summaryDe:
			"Hänge an jede Umfrage oder Fragebogen-Frage ein Bild oder GIF an.",
		titleEs: "Imágenes en votaciones y preguntas",
		summaryEs:
			"Añade una imagen o un GIF a cualquier votación o pregunta de una encuesta.",
	},
	{
		date: "2022-11-10",
		title: "French, the first translation",
		summary:
			"Subo goes multilingual, starting with a full French version and the framework to add more languages.",
		titleFr: "Le français, première traduction",
		summaryFr:
			"Subo devient multilingue, à commencer par une version française complète et tout ce qu'il faut pour en ajouter d'autres.",
		titleDe: "Französisch, die erste Übersetzung",
		summaryDe:
			"Subo wird mehrsprachig, beginnend mit einer vollständigen französischen Version und dem Gerüst für weitere Sprachen.",
		titleEs: "El francés, la primera traducción",
		summaryEs:
			"Subo se vuelve multilingüe, empezando por una versión completa en francés y la base para añadir más idiomas.",
	},
	{
		date: "2023-02-04",
		title: "Premium and VIP plans",
		summary:
			"Introduced paid plans to support ongoing development, alongside a free tier that stays.",
		titleFr: "Les plans Premium et VIP",
		summaryFr:
			"Arrivée de plans payants pour soutenir le développement continu, aux côtés d'une offre gratuite qui reste.",
		titleDe: "Premium- und VIP-Pläne",
		summaryDe:
			"Bezahlte Pläne finanzieren die Weiterentwicklung, und ein kostenloser Plan bleibt bestehen.",
		titleEs: "Planes Premium y VIP",
		summaryEs:
			"Llegan los planes de pago para financiar el desarrollo, junto a un plan gratuito que se mantiene.",
	},
	{
		date: "2023-02-16",
		title: "Response notifications",
		summary:
			"Get notified with each new submission as it arrives, turning surveys into applications, contact forms, and intake forms.",
		titleFr: "Notifications de réponses",
		summaryFr:
			"Reçois une notification à chaque nouvelle réponse, pour transformer tes enquêtes en candidatures, formulaires de contact et formulaires d'inscription.",
		titleDe: "Benachrichtigungen bei Antworten",
		summaryDe:
			"Werde bei jeder neuen Einsendung benachrichtigt, sobald sie eintrifft, und nutze Fragebögen als Bewerbungen, Kontakt- und Aufnahmeformulare.",
		titleEs: "Avisos de respuestas",
		summaryEs:
			"Recibe un aviso con cada nueva respuesta en cuanto llega, y convierte tus encuestas en candidaturas, formularios de contacto y de admisión.",
	},
	{
		date: "2023-03-04",
		title: "Select limits and project cloning",
		summary:
			"Set exactly how many options members can pick per question, and clone a poll or survey to reuse it.",
		titleFr: "Limites de sélection et clonage de projets",
		summaryFr:
			"Définis exactement combien d'options les membres peuvent choisir par question, et clone un sondage ou une enquête pour le réutiliser.",
		titleDe: "Auswahllimits und Projekte klonen",
		summaryDe:
			"Leg genau fest, wie viele Optionen Mitglieder pro Frage wählen können, und klone eine Umfrage oder einen Fragebogen, um ihn wiederzuverwenden.",
		titleEs: "Límites de selección y clonación de proyectos",
		summaryEs:
			"Define exactamente cuántas opciones puede elegir cada miembro por pregunta, y clona una votación o una encuesta para reutilizarla.",
	},
	{
		date: "2023-04-03",
		title: "The /home dashboard",
		summary:
			"Manage every project from one place inside your server, with no commands to memorize.",
		titleFr: "Le tableau de bord /home",
		summaryFr:
			"Gère tous tes projets depuis un seul endroit dans ton serveur, sans commande à retenir.",
		titleDe: "Das /home-Dashboard",
		summaryDe:
			"Verwalte jedes Projekt an einem Ort in deinem Server, ohne Befehle auswendig zu lernen.",
		titleEs: "El panel /home",
		summaryEs:
			"Gestiona todos tus proyectos desde un solo lugar dentro de tu servidor, sin memorizar comandos.",
	},
	{
		date: "2023-04-10",
		title: "SurveyBot becomes Subo, and meets AI",
		summary:
			"The bot is renamed after its mascot, Subo, and ships its first AI feature: /draft writes a survey from a plain-language objective.",
		titleFr: "SurveyBot devient Subo et rencontre l'IA",
		summaryFr:
			"Le bot est renommé d'après sa mascotte, Subo, et lance sa première fonctionnalité d'IA : /draft rédige une enquête à partir d'un simple objectif.",
		titleDe: "Aus SurveyBot wird Subo, und KI kommt dazu",
		summaryDe:
			"Der Bot wird nach seinem Maskottchen Subo benannt und bekommt seine erste KI-Funktion: /draft schreibt einen Fragebogen aus einem Ziel in normaler Sprache.",
		titleEs: "SurveyBot pasa a ser Subo, y llega la IA",
		summaryEs:
			"El bot toma el nombre de su mascota, Subo, y estrena su primera función de IA: /draft redacta una encuesta a partir de un objetivo en lenguaje natural.",
	},
	{
		date: "2023-04-25",
		title: "Reward completion with roles",
		summary:
			"Automatically grant a Discord role the moment a member finishes a survey.",
		titleFr: "Récompense la participation avec des rôles",
		summaryFr:
			"Attribue automatiquement un rôle Discord dès qu'un membre termine une enquête.",
		titleDe: "Rollen als Belohnung für den Abschluss",
		summaryDe:
			"Vergib automatisch eine Discord-Rolle, sobald ein Mitglied einen Fragebogen abschließt.",
		titleEs: "Roles como recompensa por terminar",
		summaryEs:
			"Asigna automáticamente un rol de Discord en cuanto un miembro termina una encuesta.",
	},
	{
		date: "2023-05-02",
		title: "Private threads",
		summary:
			"Temporary channels give way to private threads for a cleaner, more private answering experience.",
		titleFr: "Les threads privés",
		summaryFr:
			"Les salons temporaires laissent place à des threads privés, pour une expérience de réponse plus propre et plus privée.",
		titleDe: "Private Threads",
		summaryDe:
			"Temporäre Kanäle weichen privaten Threads, für ein aufgeräumteres und privateres Antworterlebnis.",
		titleEs: "Hilos privados",
		summaryEs:
			"Los canales temporales dan paso a hilos privados, para responder de forma más limpia y más privada.",
	},
	{
		date: "2023-05-25",
		title: "Anonymous, semi-private, and transparent modes",
		summary:
			"Three privacy modes control who can see individual answers, including a fully anonymous mode where even the creator cannot.",
		titleFr: "Modes anonyme, semi-privé et transparent",
		summaryFr:
			"Trois modes de confidentialité contrôlent qui peut voir les réponses individuelles, dont un mode totalement anonyme où même le créateur ne le peut pas.",
		titleDe: "Anonymer, halb-privater und transparenter Modus",
		summaryDe:
			"Drei Vertraulichkeitsmodi legen fest, wer einzelne Antworten sieht, einschließlich eines vollständig anonymen Modus, in dem nicht einmal die Erstellerin oder der Ersteller sie sieht.",
		titleEs: "Modos Anónimo, Semiprivado y Transparente",
		summaryEs:
			"Tres modos de privacidad controlan quién puede ver las respuestas individuales, incluido un modo totalmente anónimo en el que ni siquiera quien crea el proyecto puede verlas.",
	},
	{
		date: "2023-06-20",
		title: "AI summaries of open answers",
		summary:
			"Text Analysis reads open-ended responses and returns a clear summary in seconds.",
		titleFr: "Résumés des réponses ouvertes par IA",
		summaryFr:
			"L'Analyse de texte lit les réponses ouvertes et renvoie un résumé clair en quelques secondes.",
		titleDe: "KI-Zusammenfassungen offener Antworten",
		summaryDe:
			"Die Textanalyse liest offene Antworten und liefert in Sekunden eine klare Zusammenfassung.",
		titleEs: "Resúmenes de IA de las respuestas abiertas",
		summaryEs:
			"El análisis de texto lee las respuestas abiertas y devuelve un resumen claro en segundos.",
	},
	{
		date: "2023-10-13",
		title: "New commands and a performance rewrite",
		summary:
			"Adds /edit, /start-stop, /delete, and /results plus right-click message actions, on top of a major rewrite that speeds up large servers.",
		titleFr: "Nouvelles commandes et réécriture des performances",
		summaryFr:
			"Ajout de /edit, /start-stop, /delete et /results, plus des actions par clic droit sur les messages, en plus d'une réécriture majeure qui accélère les gros serveurs.",
		titleDe: "Neue Befehle und ein Performance-Rewrite",
		summaryDe:
			"Dazu kommen /edit, /start-stop, /delete und /results sowie Aktionen per Rechtsklick auf Nachrichten, zusätzlich zu einer großen Überarbeitung, die große Server beschleunigt.",
		titleEs: "Nuevos comandos y una reescritura para el rendimiento",
		summaryEs:
			"Llegan /edit, /start-stop, /delete y /results, además de acciones con clic derecho en los mensajes, junto a una gran reescritura que acelera los servidores grandes.",
	},
	{
		date: "2023-11-06",
		title: "Forms: multiple responses per member",
		summary:
			"Let members submit as many times as they want, for bug reports, applications, and ongoing intake.",
		titleFr: "Formulaires : plusieurs réponses par membre",
		summaryFr:
			"Laisse les membres répondre autant de fois qu'ils veulent, pour les rapports de bug, les candidatures et la collecte continue.",
		titleDe: "Formulare: mehrere Antworten pro Mitglied",
		summaryDe:
			"Mitglieder können so oft einsenden, wie sie wollen, für Bug-Reports, Bewerbungen und laufende Anfragen.",
		titleEs: "Formularios: varias respuestas por miembro",
		summaryEs:
			"Deja que los miembros envíen tantas respuestas como quieran, para reportes de bugs, candidaturas y solicitudes continuas.",
	},
	{
		date: "2023-11-23",
		title: "Repost and answer validation",
		summary:
			"Repost an invitation to remind members, and set minimum or maximum length and value rules on open questions.",
		titleFr: "Republication et validation des réponses",
		summaryFr:
			"Republie une invitation pour relancer les membres, et définis des règles de longueur ou de valeur minimale et maximale sur les questions ouvertes.",
		titleDe: "Erneut posten und Antworten validieren",
		summaryDe:
			"Poste eine Einladung erneut, um Mitglieder zu erinnern, und leg Mindest- oder Höchstwerte für Länge und Wert offener Fragen fest.",
		titleEs: "Volver a publicar y validar respuestas",
		summaryEs:
			"Vuelve a publicar una invitación para recordárselo a los miembros, y fija reglas de longitud o valor mínimo y máximo en las preguntas abiertas.",
	},
	{
		date: "2023-12-10",
		title: "Admin and Creator roles",
		summary:
			"Two permission tiers let admins keep control of settings while more members can build their own projects.",
		titleFr: "Rôles Admin et Créateur",
		summaryFr:
			"Deux niveaux de permissions permettent aux admins de garder le contrôle des réglages, tout en laissant plus de membres créer leurs propres projets.",
		titleDe: "Admin- und Creator-Rollen",
		summaryDe:
			"Zwei Berechtigungsstufen: Admins behalten die Kontrolle über die Einstellungen, während mehr Mitglieder ihre eigenen Projekte bauen können.",
		titleEs: "Roles de Admin y Creator",
		summaryEs:
			"Dos niveles de permisos: los admins conservan el control de los ajustes mientras más miembros pueden crear sus propios proyectos.",
	},
	{
		date: "2024-01-15",
		title: "Reveal-on-close and emoji voting",
		summary:
			"Hidden poll results can auto-reveal when a poll closes, and members can vote with emoji-only buttons.",
		titleFr: "Révélation à la fermeture et vote par emoji",
		summaryFr:
			"Les résultats masqués peuvent se révéler automatiquement à la fermeture d'un sondage, et les membres peuvent voter avec des boutons emoji uniquement.",
		titleDe: "Aufdecken beim Schließen und Abstimmen per Emoji",
		summaryDe:
			"Verborgene Umfrageergebnisse können beim Schließen einer Umfrage automatisch angezeigt werden, und Mitglieder können mit reinen Emoji-Buttons abstimmen.",
		titleEs: "Revelar al cerrar y votar con emojis",
		summaryEs:
			"Los resultados ocultos de una votación pueden revelarse automáticamente al cerrarla, y los miembros pueden votar con botones solo de emojis.",
	},
	{
		date: "2024-03-06",
		title: "Ten languages",
		summary:
			"With Turkish, Subo now speaks ten languages, including French, Spanish, German, Portuguese, Italian, Russian, Polish, and Dutch.",
		titleFr: "Dix langues",
		summaryFr:
			"Avec le turc, Subo parle désormais dix langues, dont le français, l'espagnol, l'allemand, le portugais, l'italien, le russe, le polonais et le néerlandais.",
		titleDe: "Zehn Sprachen",
		summaryDe:
			"Mit Türkisch spricht Subo jetzt zehn Sprachen, darunter Französisch, Spanisch, Deutsch, Portugiesisch, Italienisch, Russisch, Polnisch und Niederländisch.",
		titleEs: "Diez idiomas",
		summaryEs:
			"Con el turco, Subo ya habla diez idiomas, entre ellos francés, español, alemán, portugués, italiano, ruso, polaco y neerlandés.",
	},
	{
		date: "2024-04-17",
		title: "XP, levels, and leaderboards",
		summary:
			"Reward members with XP for answering, set role rewards by score, and rank participants on a server leaderboard.",
		titleFr: "XP, niveaux et leaderboards",
		summaryFr:
			"Récompense les membres avec de l'XP quand ils répondent, définis des récompenses de rôle selon le score, et classe les participants sur un leaderboard de serveur.",
		titleDe: "XP, Level und Bestenlisten",
		summaryDe:
			"Belohne Mitglieder mit XP fürs Antworten, leg Rollenbelohnungen nach Punktzahl fest und ranke Teilnehmer auf einer Server-Bestenliste.",
		titleEs: "XP, niveles y clasificaciones",
		summaryEs:
			"Recompensa a los miembros con XP por responder, define recompensas de rol según la puntuación y ordena a los participantes en una clasificación del servidor.",
	},
	{
		date: "2024-05-08",
		title: "Individual responses in results",
		summary:
			"See how each member answered directly from the results view, without exporting a report.",
		titleFr: "Réponses individuelles dans les résultats",
		summaryFr:
			"Vois comment chaque membre a répondu directement depuis les résultats, sans exporter de rapport.",
		titleDe: "Einzelantworten in den Ergebnissen",
		summaryDe:
			"Sieh direkt in der Ergebnisansicht, wie jedes Mitglied geantwortet hat, ohne einen Bericht zu exportieren.",
		titleEs: "Respuestas individuales en los resultados",
		summaryEs:
			"Mira cómo respondió cada miembro directamente desde la vista de resultados, sin exportar un informe.",
	},
	{
		date: "2025-02-17",
		title: "Reorder questions",
		summary: "Rearrange survey questions into any order from Edit mode.",
		titleFr: "Réorganise les questions",
		summaryFr:
			"Change l'ordre des questions de ton enquête depuis le mode Édition.",
		titleDe: "Fragen neu anordnen",
		summaryDe:
			"Bring die Fragen eines Fragebogens im Bearbeitungsmodus in jede beliebige Reihenfolge.",
		titleEs: "Reordenar preguntas",
		summaryEs:
			"Cambia el orden de las preguntas de una encuesta desde el modo de edición.",
	},
	{
		date: "2025-03-10",
		title: "Skip logic",
		summary:
			"Skip questions based on earlier answers, using a simple builder or advanced code-like expressions.",
		titleFr: "Logique de saut",
		summaryFr:
			"Saute des questions selon les réponses précédentes, avec un éditeur simple ou des expressions avancées façon code.",
		titleDe: "Skip-Logik",
		summaryDe:
			"Überspringe Fragen je nach früheren Antworten, mit einem einfachen Builder oder mit fortgeschrittenen, codeähnlichen Ausdrücken.",
		titleEs: "Lógica de salto",
		summaryEs:
			"Salta preguntas según las respuestas anteriores, con un constructor sencillo o con expresiones avanzadas tipo código.",
	},
	{
		date: "2025-10-01",
		title: "Web Convos (beta)",
		summary:
			"Members can answer on the web instead of in Discord, with the same conversational flow, XP, and rewards.",
		titleFr: "Web Convos (bêta)",
		summaryFr:
			"Les membres peuvent répondre sur le web plutôt que dans Discord, avec le même déroulé conversationnel, l'XP et les récompenses.",
		titleDe: "Convos im Web (Beta)",
		summaryDe:
			"Mitglieder können im Web statt in Discord antworten, mit demselben Gesprächsablauf, denselben XP und denselben Belohnungen.",
		titleEs: "Convos en la web (beta)",
		summaryEs:
			"Los miembros pueden responder en la web en lugar de en Discord, con el mismo flujo de conversación, la misma XP y las mismas recompensas.",
	},
	{
		date: "2025-12-03",
		title: "Share surveys anywhere",
		summary:
			"Open Web surveys work outside Discord entirely: share a link on social, email, or a website, with no Discord account required to answer.",
		titleFr: "Partage tes enquêtes partout",
		summaryFr:
			"Les enquêtes Open Web fonctionnent totalement en dehors de Discord : partage un lien sur les réseaux, par email ou sur un site, sans compte Discord pour répondre.",
		titleDe: "Fragebögen überall teilen",
		summaryDe:
			"Offene Web-Fragebögen funktionieren ganz ohne Discord: Teile einen Link in sozialen Netzwerken, per E-Mail oder auf einer Website, ohne dass zum Antworten ein Discord-Konto nötig ist.",
		titleEs: "Comparte encuestas en cualquier parte",
		summaryEs:
			"Las encuestas web abiertas funcionan completamente fuera de Discord: comparte un enlace en redes sociales, por correo o en una web, sin necesidad de cuenta de Discord para responder.",
	},
];
