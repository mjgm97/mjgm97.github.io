const es = {
	nav: {
		home: "Inicio",
		research: "Investigación",
		projects: "Proyectos",
		teaching: "Docencia",
		contact: "Contacto",
		toggleTheme: "Cambiar tema de color",
		language: "Idioma",
		menu: "Menú principal",
		openMenu: "Abrir menú",
		closeMenu: "Cerrar menú",
	},

	footer: {
		rights: "Todos los derechos reservados.",
	},

	publications: {
		types: {
			"Journal Paper": "Artículo de revista",
			"Conference Paper": "Artículo de congreso",
			"Book Chapter": "Capítulo de libro",
		},
		externalLink: "Enlace externo",
		download: "Descargar",
		showAbstract: "Ver resumen",
		hideAbstract: "Ocultar resumen",
		loadMore: "Cargar más",
	},

	home: {
		eyebrow: "Profesor Ayudante Doctor · CyberDataLab, Universidad de Murcia",
		greeting: "Hola, soy",
		role: "Investigador en juegos serios e IA en educación",
		viewResearch: "Ver mi investigación",
		getInTouch: "Contactar",
		stats: {
			publications: "Publicaciones",
			projects: "Proyectos de investigación",
			students: "Estudiantes dirigidos",
		},
		backgroundEyebrow: "Trayectoria",
		backgroundTitle: "Experiencia y formación",
	},

	timeline: {
		filterLabel: "Filtrar la trayectoria",
		all: "Todo",
		experience: "Experiencia",
		education: "Formación",
		ongoing: "En curso",
	},

	research: {
		pageTitle: "Investigación",
		eyebrow: (count) => `${count}+ publicaciones desde 2020`,
		subtitle:
			"Exploro cómo la inteligencia artificial, la analítica del aprendizaje y los juegos serios pueden mejorar la forma en que entendemos, evaluamos y diseñamos experiencias de aprendizaje. Mi trabajo se centra en desarrollar sistemas explicables e interoperables que conectan los datos de juego con conocimiento educativo, para que los procesos de aprendizaje sean más medibles, transparentes y escalables.",
	},

	projects: {
		pageTitle: "Proyectos",
		title: "Proyectos de investigación e innovación",
		subtitle:
			"Proyectos que exploran cómo la inteligencia artificial, la analítica del aprendizaje y los juegos serios pueden mejorar la forma en que entendemos, evaluamos y diseñamos experiencias de aprendizaje. Combinando ciencia de datos, sistemas interactivos y diseño centrado en las personas, busco crear tecnologías que no solo evalúen el aprendizaje, sino que también inspiren creatividad, perseverancia y curiosidad.",
		stats: {
			funded: "Proyectos de investigación financiados",
			programs: "Programas de financiación",
		},
		braveroom: {
			kicker: "Desarrollo destacado",
			title: "Practica las decisiones que importan.",
			description:
				"Una plataforma independiente para diseñar, facilitar y revisar prácticas realistas basadas en escenarios, desde conversaciones difíciles hasta decisiones de equipo de alto riesgo.",
			tagsLabel: "Áreas de BraveRoom",
			tags: ["Simulación", "Diseño de aprendizaje", "IA y analítica"],
			link: "Explorar el proyecto",
		},
		ludix: {
			kicker: "Software de investigación abierto",
			title: "De los eventos de juego a evidencias defendibles.",
			description:
				"Un banco de trabajo independiente del juego para la investigación en juegos serios, que reúne analítica del aprendizaje reproducible, métodos de secuencias y predicción explicable.",
			tagsLabel: "Áreas de Ludix",
			tags: [
				"Analítica del aprendizaje",
				"Minería de procesos",
				"IA explicable",
			],
			link: "Explorar la investigación",
		},
		listTitle: "Proyectos de investigación financiados",
		logoAlt: (title) => `Logotipo de ${title}`,
	},

	teaching: {
		pageTitle: "Docencia",
		university: "Universidad de Murcia",
		title: "Docencia y dirección de trabajos",
		subtitle:
			"Imparto asignaturas de grado y de máster sobre informática, inteligencia artificial y tecnologías educativas, y dirijo trabajos fin de máster y fin de grado que exploran la IA y la analítica del aprendizaje.",
		stats: {
			courses: "Asignaturas impartidas",
			theses: "TFs dirigidos",
			since: "Docente desde",
		},
		undergraduate: "Estudios de grado",
		graduate: "Estudios de máster",
		masterTheses: "Dirección de trabajos fin de máster",
		degreeTheses: "Dirección de trabajos fin de grado",
		faculties: {
			informatica: "Facultad de Informática, Universidad de Murcia",
			comunicacion:
				"Facultad de Comunicación y Documentación, Universidad de Murcia",
		},
	},

	contact: {
		pageTitle: "Contacto",
		emailMe: "Escríbeme",
		findMe: "Dónde encontrarme",
		office: "Despacho",
		officeValue: "Despacho 2.39",
		phone: "Teléfono",
		availability: "Disponibilidad",
		availabilityValue: "Lun–Vie, 10:00–18:00 (mandar mensaje para cita previa)",
		mapTitle: "Facultad de Informática - Universidad de Murcia",
	},

	phd: {
		pageTitle: "Doctorado",
		title: "Tesis doctoral",
		thesisTitle:
			"Hacia la interoperabilidad y nuevos enfoques metodológicos para la evaluación escalable basada en juegos",
		thesisTitleAlt:
			"Towards Interoperability and Novel Methodological Approaches for Scalable Game-Based Assessment",
		supervisorsLabel: "Directores:",
		supervisors:
			"Dr. Félix Jesús García Clemente y Dr. José Antonio Ruipérez Valiente",
		fullVersion: "Versión completa",
		shortVersion: "Versión resumida",
		slides: "Diapositivas",
		photoAlt: "Manuel defendiendo su tesis doctoral",
		defenseDetails: "🎓 Detalles de la defensa",
		committeeLabel: "Tribunal de la tesis:",
		committee:
			"D.ª Ruth Cobos Pérez (presidenta), D. Óscar Cánovas Reverte (secretario) y D.ª Sonsoles López Pernas (vocal externa)",
		dateLabel: "Fecha de la defensa:",
		date: "03/10/2025",
		gradeLabel: "Calificación:",
		grade: "Sobresaliente",
		honorsLabel: "Menciones:",
		honors: "«Cum Laude» y «Doctorado Internacional»",
		publicationsIncluded: "Publicaciones incluidas",
	},

	notFound: {
		title: "¡Vaya!",
		message: "No encontramos la página que buscas.",
		urlMessage: (url) =>
			`La URL solicitada «${url}» no existe en este servidor.`,
		back: "Volver a la página de inicio",
	},

	braveroom: {
		back: "Todos los proyectos",
		kicker: "Plataforma independiente · 2026",
		heroTitle: "Practica las decisiones que importan.",
		heroLead:
			"Un espacio seguro para que los equipos ensayen conversaciones difíciles y decisiones de alto riesgo antes de que ocurran en el mundo real.",
		comingSoon: "Próximamente en GitHub",
		explore: "Explorar la plataforma",
		heroTagsLabel: "Características del proyecto",
		heroTags: ["Aprendizaje basado en escenarios", "En directo y a tu ritmo"],
		heroTagAi: "Personajes con IA",
		heroImageAlt:
			"Panel de BraveRoom con escenarios de práctica de ejemplo",
		heroCaption: "Panel del facilitador con ejemplos listos para usar",

		originLabel: "La idea",
		originTitle: "Una sala para practicar lo que tiene consecuencias.",
		originP1:
			"BraveRoom es una plataforma para diseñar, facilitar y revisar prácticas realistas basadas en escenarios. Los autores crean una secuencia de momentos, los participantes responden en contexto y los facilitadores analizan tanto la decisión como el razonamiento que hay detrás.",
		originP2Before:
			"El proyecto nació como una reimplementación moderna del concepto de simulación clínica digital que introdujo ",
		originP2After:
			", del MIT Teaching Systems Lab, y después creció hasta convertirse en una plataforma flexible y de propósito general para la educación, la gestión, la sanidad, la alfabetización mediática y la respuesta ante crisis.",

		workflowLabel: "Cómo funciona",
		workflowTitle: "Del momento diseñado al aprendizaje compartido.",
		workflowLead:
			"Un único flujo de trabajo continuo conecta el diseño de escenarios, la práctica auténtica y la revisión reflexiva.",
		capabilities: [
			{
				number: "01",
				title: "Diseñar",
				description:
					"Construye una secuencia de momentos realistas con narrativa, multimedia, notas destacadas y preguntas abiertas, de elección, de escala, de voz o de conversación con IA.",
			},
			{
				number: "02",
				title: "Practicar",
				description:
					"Ejecuta las simulaciones de forma individual o reúne a un grupo en una sala en directo sincronizada donde cada participante responde desde su propio dispositivo.",
			},
			{
				number: "03",
				title: "Reflexionar",
				description:
					"Revisa decisiones y razonamientos, sigue el progreso del grupo, consulta los historiales personales y exporta respuestas estructuradas para su análisis.",
			},
		],

		editorImageAlt: "Editor visual de escenarios de BraveRoom",
		authoringLabel: "Edición avanzada",
		authoringTitle: "Diseña el momento, no la maquinaria.",
		authoringText:
			"El editor visual permite combinar narrativa, orientación, multimedia e interacción sin perder de vista el objetivo de aprendizaje.",
		authoringList: [
			"Guardado automático, vista previa, publicación, copia y recuperación",
			"Componentes de texto, elección, escala, audio, vídeo y voz",
			"Conversaciones opcionales con un personaje de IA creado por el autor",
		],

		liveImageAlt: "Sala de espera de una sesión en directo de BraveRoom",
		liveLabel: "Salas en directo",
		liveTitle: "Practicad juntos, responded individualmente.",
		liveText:
			"Un facilitador controla el ritmo común mientras cada participante responde en privado desde su propio dispositivo; después, el grupo puede reflexionar conjuntamente sobre la experiencia.",
		liveList: [
			"Enlaces para compartir y códigos de sala fáciles de recordar",
			"Presencia, controles sincronizados y recuperación tras reconexión",
			"Respuestas conservadas en el historial de cada participante",
		],

		aiLabel: "Integración de IA",
		aiTitle: "Un personaje dentro del escenario, no un chatbot al lado.",
		aiText:
			"Los autores definen un personaje, una frase inicial e instrucciones de comportamiento. Los participantes responden en el momento mientras BraveRoom conserva el intercambio para la reflexión posterior.",
		aiList: [
			"Claude o un modelo local de Ollama",
			"Transcripciones de la conversación guardadas con la ejecución",
			"Totalmente opcional: la plataforma funciona sin un servicio de IA",
		],
		aiDemoLabel: "Ilustración del flujo de trabajo del personaje con IA",
		aiDemoHeading: "Interacción ilustrativa",
		aiStatus: "Personaje con IA",
		aiAuthorTitle: "Crea el personaje",
		aiCharacterLabel: "Personaje",
		aiCharacter: "Sra. Rivera",
		aiOpeningLabel: "Frase inicial",
		aiOpening: "Quiero entender qué ha pasado con la nota de Jordan.",
		aiInstruction:
			"Mantén el personaje · responde con brevedad · no evalúes",
		aiRespondTitle: "Responde en contexto",
		aiYou: "Tú",
		aiReply: "Gracias por venir. Vamos a repasarlo juntos.",
		aiFlow: [
			"Contexto diseñado",
			"Intercambio en directo",
			"Transcripción guardada",
		],

		featuresLabel: "Diseñado como un sistema",
		featuresTitle: "Todo lo necesario para cerrar el ciclo de aprendizaje.",
		features: [
			{
				title: "Respuestas flexibles",
				description:
					"Preguntas de texto, elección, escala y micrófono para distintos tipos de práctica.",
			},
			{
				title: "Facilitación en directo",
				description:
					"Códigos de sala cortos, presencia de participantes, ritmo sincronizado y recuperación tras reconexión.",
			},
			{
				title: "Grupos y asignaciones",
				description:
					"Organiza grupos, asigna escenarios y sigue el progreso participante a participante.",
			},
			{
				title: "Registros listos para investigar",
				description:
					"Historiales persistentes de respuestas y eventos, con revisión de ejecuciones y exportación a CSV.",
			},
			{
				title: "Despliegue flexible",
				description:
					"Empieza con SQLite integrado o pasa a PostgreSQL para la concurrencia en producción.",
			},
			{
				title: "Interfaz inclusiva",
				description:
					"Temas claro y oscuro adaptables, con la interfaz del producto en inglés y español.",
			},
		],

		technicalLabel: "Base técnica",
		technicalTitle:
			"Creado para pasar del prototipo de investigación al despliegue real.",
		technicalText:
			"La aplicación autocontenida funciona con SQLite sin configuración para grupos pequeños, con PostgreSQL para uso concurrente en producción y con un servicio específico de Socket.IO para la presencia y el control en directo.",
		releaseNote:
			"Las notas de arquitectura se publicarán junto con el repositorio público.",
		stackLabel: "Tecnologías utilizadas",

		libraryImageAlt:
			"Biblioteca de escenarios de BraveRoom con ejemplos de educación, entorno laboral, sanidad y alfabetización mediática",
		libraryCaption:
			"Los ejemplos incluidos abarcan la educación, el feedback en el trabajo, la sanidad y la respuesta a la desinformación.",

		ctaLabel: "En desarrollo",
		ctaTitle: "Lanzamiento público próximamente.",
		ctaText:
			"BraveRoom se está preparando para su publicación. El código, las notas de arquitectura y la guía de despliegue se publicarán en GitHub cuando estén listos.",
		ctaStatus: "Pronto en GitHub",
	},

	ludix: {
		back: "Todos los proyectos",
		kicker: "Software de investigación abierto · 2026",
		heroTitle: "De los eventos de juego a evidencias defendibles.",
		heroLead:
			"Una plataforma independiente del juego para crear juegos serios y convertir sus datos de interacción en analítica del aprendizaje reproducible, incluyendo descubrimiento de procesos y predicción explicable.",
		viewSource: "Ver el código en GitHub",
		exploreMethods: "Explorar los métodos",
		heroTagsLabel: "Características del proyecto",
		heroTags: [
			"Independiente del juego",
			"Métodos con rigor científico",
			"Licencia MIT",
		],
		browserLabel: "banco de investigación / resumen",
		heroImageAlt:
			"Panel docente de Ludix con juegos, jugadores, sesiones, partidas y eventos",
		heroCaption:
			"Un panel, un modelo de eventos, todos los juegos.",

		problemLabel: "Motivación de la investigación",
		problemTitle:
			"Los datos de juego no deberían quedarse en un silo.",
		problemP1:
			"Los juegos serios registran decisiones, tiempos, reintentos, recorridos y resultados. Sin embargo, esas trazas suelen analizarse ad hoc dentro de un único juego, lo que dificulta transferir los métodos y reproducir los estudios.",
		problemP2:
			"Ludix trata el juego como un objeto de investigación compartido. Cualquier juego, o un registro de eventos externo en CSV o JSON, puede entrar en el mismo flujo analítico, de modo que las evidencias son comparables, inspeccionables y están listas para publicarse.",

		thesisAria: "Tesis de investigación de Ludix",
		thesisLabel: "La idea central",
		thesisTitle:
			"Un modelo de eventos, muchas preguntas de investigación.",
		thesisText:
			"Cuando todos los métodos parten del mismo registro de quién hizo qué y cuándo, la analítica viaja con los datos en lugar de quedar ligada al juego que los produjo.",

		pipelineLabel: "Flujo de investigación",
		pipelineTitle: "De la traza de interacción al hallazgo publicable.",
		pipelineText:
			"Una cadena analítica continua mantiene conectados la captura de datos, el modelado, los contrastes estadísticos y la comunicación. Los cálculos de secuencias y redes usan ladyna, cuyos resultados están validados frente al paquete tna de R con precisión de máquina. Las explicaciones de los modelos usan TreeSHAP exacto, de modo que los cálculos críticos se apoyan en métodos probados.",
		pipeline: [
			{
				number: "01",
				title: "Instrumentar",
				description:
					"Los juegos emiten un formato de evento pequeño y común: quién hizo qué, cuándo y en qué sesión.",
			},
			{
				number: "02",
				title: "Modelar",
				description:
					"El mismo flujo de eventos se convierte en trazas, redes de transición, características de comportamiento y cohortes.",
			},
			{
				number: "03",
				title: "Contrastar",
				description:
					"Intervalos de confianza bootstrap, pruebas de permutación y estimaciones de efecto corregidas separan la señal del ruido.",
			},
			{
				number: "04",
				title: "Comunicar",
				description:
					"Las vistas interactivas se exportan en SVG o PNG para artículos, presentaciones e informes reproducibles.",
			},
		],

		methodsLabel: "Banco de trabajo analítico",
		methodsTitle:
			"Cuatro miradas sobre cómo se desarrolla el aprendizaje al jugar.",
		methods: [
			{
				label: "Descubrimiento de secuencias",
				title: "Minería de procesos",
				description:
					"Reconstruye grafos directly-follows, estadísticas de actividad y las variantes de traza sin procesar que siguen los estudiantes a lo largo de un juego.",
			},
			{
				label: "Estructura dinámica",
				title: "Análisis de redes de transición",
				description:
					"Modela el juego como una red de Markov de primer orden, inspecciona centralidades y cliques de estados, y evalúa por bootstrap la estabilidad de las aristas.",
			},
			{
				label: "Perfiles de comportamiento",
				title: "Clustering de secuencias",
				description:
					"Agrupa las sesiones según cómo avanzan los estudiantes por un juego, con disimilitudes validadas y una calidad de clúster cuantificada.",
			},
			{
				label: "Modelado interpretable",
				title: "Predicción explicable",
				description:
					"Estima resultados a partir del comportamiento en cada partida, valida con datos reservados y explica las predicciones con TreeSHAP exacto.",
			},
		],

		showcase: [
			{
				image: "/projects/ludix/process.jpg",
				alt: "Vista de minería de procesos de Ludix con estadísticas de actividad y variantes de traza",
				label: "Procesos, no solo puntuaciones",
				title: "Observa los caminos que siguen los estudiantes.",
				text: "Ludix conserva las trazas sin procesar, incluidos los bucles y las acciones repetidas, y después muestra las variantes más comunes y las rutinas más largas sin eliminar el comportamiento que se quiere estudiar.",
			},
			{
				image: "/projects/ludix/tna-network.jpg",
				alt: "Red de transición de Ludix con nodos de actividad y aristas ponderadas por probabilidad",
				label: "Las transiciones como evidencia",
				title: "Modela el comportamiento como un sistema dinámico.",
				text: "Las redes de transición interactivas revelan cómo se conectan los estados de actividad. La validación por bootstrap ayuda a distinguir los caminos estables de las aristas que pueden deberse simplemente al ruido muestral.",
			},
			{
				image: "/projects/ludix/clustering.jpg",
				alt: "Tres clústeres de comportamiento de Ludix con redes de transición y gráficos de índice de secuencias",
				label: "Perfiles de comportamiento",
				title: "Compara formas de jugar, no solo resultados.",
				text: "El clustering de secuencias agrupa las sesiones según cómo avanzan los estudiantes por un juego. Cada grupo puede compararse después a través de su red de transición, sus patrones de secuencia y su coeficiente de silueta.",
			},
		],

		rigorLabel: "Métodos y reproducibilidad",
		rigorTitle: "Diseñado para afirmaciones que se pueden examinar.",
		rigorText:
			"Ludix no reimplementa desde cero los métodos estadísticos críticos. Las redes de transición, las centralidades, la validación de aristas y el clustering de secuencias usan ladyna, una implementación en JavaScript probada y validada frente a tna de R. Las explicaciones de los modelos de árboles usan el algoritmo TreeSHAP exacto. Los procedimientos con semilla y los diagnósticos con datos reservados hacen que los análisis resultantes sean repetibles y más fáciles de examinar.",
		rigorList: [
			"Confianza bootstrap para las aristas de transición",
			"Pruebas de permutación para las diferencias entre redes de cohortes",
			"Corrección de Benjamini-Hochberg para el cribado de patrones",
			"Explicaciones TreeSHAP exactas dependientes del camino",
		],
		referenceBefore: "Referencia metodológica: ",
		referenceAfter:
			", desarrollado por Mohammed Saqr y Sonsoles López-Pernas.",
		rigorImageAlt:
			"Vista de predicción de Ludix con diagnósticos sobre datos reservados e importancia de características SHAP",
		rigorCaption:
			"Diagnósticos con datos reservados y atribución de características interpretable.",

		principlesLabel: "Infraestructura de investigación",
		principlesTitle: "Creado para que los métodos viajen.",
		principles: [
			{
				title: "Independiente del juego por diseño",
				description:
					"Todos los análisis leen un único modelo de eventos genérico, por lo que los métodos se transfieren entre juegos y registros de eventos importados sin código de analítica específico para cada juego.",
			},
			{
				title: "Reproducible por defecto",
				description:
					"Los procedimientos aleatorios con semilla hacen que los resultados de bootstrap, clustering y entrenamiento/prueba sean repetibles con los mismos datos y parámetros.",
			},
			{
				title: "Procedencia del método, a la vista",
				description:
					"Los parámetros, los diagnósticos y las comprobaciones estadísticas permanecen visibles, para que los investigadores puedan examinar cómo se obtuvo cada resultado.",
			},
		],

		openLabel: "Software de investigación abierto",
		openTitle: "Inspecciona toda la cadena analítica.",
		openText:
			"Los juegos, el modelo de eventos, el backend, la analítica, las figuras y la guía de instalación son públicos bajo la licencia MIT. Un juego de referencia y una demo con semilla permiten explorar todos los análisis desde la primera ejecución.",
		exportNote:
			"Incluye exportación a SVG y PNG lista para publicación.",
		stackLabel: "Tecnologías y métodos utilizados",

		ctaLabel: "Explora Ludix",
		ctaTitle: "Úsalo, inspecciónalo, amplíalo.",
		ctaText:
			"Ludix está disponible como software de investigación de código abierto para la analítica de juegos serios, la docencia, la experimentación y la colaboración.",
		ctaLink: "Abrir el repositorio",
	},
};

export default es;
