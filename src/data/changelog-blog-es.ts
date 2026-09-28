// Spanish changelog rows for announcement blog posts.
//
// The blog posts themselves stay English. This only translates the title +
// summary shown in the /es/changelog row; the row still links to the English
// post. Keyed by post id (the slug, e.g. "public-api-launch").
//
// Fallback: if a published announcement post is missing here, /es/changelog
// shows its English title/description instead of breaking. Same contract as
// changelog-blog-fr.ts: add an entry when a new launch post ships.

export interface BlogEsRow {
	title: string;
	summary: string;
}

export const blogEs: Record<string, BlogEsRow> = {
	"new-blog": {
		title: "Bienvenido al nuevo sitio de Subo",
		summary:
			"Descubre nuestro nuevo sitio, construido con Astro, y cómo te ponemos más fácil crear encuestas de Discord que enganchan.",
	},
	"subo-web-app-launch": {
		title: "Subo ya tiene app web: por qué nos llevó tanto tiempo",
		summary:
			"Construimos Subo para vivir en Discord. Esa era la idea. Esto es lo que construimos cuando Discord ya no bastaba.",
	},
	"public-api-launch": {
		title: "Subo ya tiene una API pública",
		summary:
			"Crea bots, automatiza tus flujos de trabajo y conecta Subo con el resto de tu stack. La API de Subo ya está disponible en api.subo.ai.",
	},
	"action-blocks-release": {
		title: "Encuestas que se sienten como conversaciones, ahora con bloques de acción",
		summary:
			"Activa recompensas reales a mitad de una Convo, saluda a los miembros por su nombre y personaliza cada intro y cada cierre.",
	},
	"content-blocks-new-way-to-design-survey-flows": {
		title: "Bloques de contenido: una nueva forma de diseñar el flujo de una encuesta",
		summary:
			"Los bloques de contenido te permiten decir algo en una Convo sin hacer una pregunta: pantallas de bienvenida, consentimientos, cambios de sección, GIFs y revelaciones de puntuación que llaman por su nombre a quien responde.",
	},
	"scoring-piping-quizzes": {
		title: "Puntuación, cuestionarios, cálculos y piping, ahora integrados en Subo",
		summary:
			"Puntuación nativa, piping de respuestas, feedback al instante y campos calculados: crea cuestionarios en directo, tests de personalidad y concursos de predicción sin hojas de cálculo.",
	},
	"polls-grading-invite-customization": {
		title: "Las votaciones suben de nivel: puntuación, recompensas condicionales y una invitación que da ganas de responder",
		summary:
			"Las votaciones ahora corrigen, puntúan y recompensan como las Convos, con botones de respuesta propios, emojis, miniaturas y colores de borde para abierta y cerrada en cada embed de invitación.",
	},
	"clone-surveys-across-servers": {
		title: "Clona Convos de un servidor a otro",
		summary:
			"¿Ves en otro servidor una Convo que te gusta? Clic derecho → Apps → Clonar, y Subo la copia directamente en tu servidor: en blanco y lista para personalizar.",
	},
	"subo-template-library-launch": {
		title: "Llega la biblioteca de plantillas de Subo: encuestas, votaciones y cuestionarios listos para usar",
		summary:
			"No hace falta ser investigador profesional para crear una buena encuesta. Clona en un clic una votación, una encuesta o un cuestionario probados y hazlos tuyos. Una biblioteca creciente de plantillas gratuitas para comunidades de Discord.",
	},
	"personalize-discord-survey-messages": {
		title: "Tres teclas que escriben tus mensajes de Subo por ti: @, [ y :",
		summary:
			"Las menciones de rol ya funcionan en todos los campos de mensaje de Subo, de los Ajustes al Script Editor, y una nueva barra de inserción las reúne con los selectores de variables y emojis. Disponible en todos los planes, incluido el gratuito.",
	},
	"xp-history": {
		title: "Historial de XP: cada punto, con su motivo",
		summary:
			"Tus miembros por fin ven cómo y por qué cambió su XP: un historial completo y verificable, en la web y en Discord. Disponible en todos los planes, incluido el gratuito.",
	},
	"discord-rating-scale-nps-ranking-questions": {
		title: "Valoraciones, NPS y clasificación en Discord: pregunta en el chat, lee una puntuación",
		summary:
			"Cuatro nuevos tipos de preguntas: valoraciones con estrellas o emojis, escalas de acuerdo y satisfacción (Likert incluida), la pregunta NPS estándar y clasificación sin arrastrar y soltar. La respuesta se guarda como un número, así que vuelve como una media con su distribución detrás. Disponible en todos los planes, incluido el gratuito.",
	},
	"convos-in-your-dms": {
		title: "Tus encuestas de Discord ahora se responden en los DM de tus miembros",
		summary:
			"Una Convo ahora se responde por defecto en un mensaje directo de Discord, con un hilo privado y un enlace web como alternativas automáticas. En un proyecto anónimo es el DM o la web, nunca un hilo privado: un hilo puede leerlo cualquiera con el permiso Gestionar hilos. Disponible en todos los planes, incluido el gratuito.",
	},
	"subo-mcp-server": {
		title: "Gestiona tu comunidad de Discord pidiéndoselo a tu asistente de IA",
		summary:
			"El servidor MCP de Subo conecta Subo con Claude Code y otras apps de IA. Describe el proyecto que quieres: tu asistente lo construye, lo revisa, lo lanza y te pregunta antes de cualquier acción que llegue a tus miembros. De momento, la configuración está en inglés.",
	},
};
