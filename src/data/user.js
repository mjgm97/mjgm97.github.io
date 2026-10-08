const INFO = {
	main: {
		title: "Manuel J. Gomez",
		name: "Manuel J. Gomez",
		email: "manueljesus.gomezm@um.es",
		logo: "/logo.jpg",
	},

	socials: {
		researchgate: "https://www.researchgate.net/profile/Manuel-Gomez-58",
		github: "https://github.com/mjgm97",
		scholar: "https://scholar.google.es/citations?user=ny1Rf7wAAAAJ",
		linkedin: "https://www.linkedin.com/in/manuel-jesús-gómez-moratilla-4860211a3/",
	},

	homepage: {
		title: "Hi! I am Manuel Jesus Gómez",
		description:
		"Manuel J. Gomez is an Assistant Professor in the Department of Informatics and Systems at the University of Murcia, Spain, where he also received his Ph.D. in Computer Science. He obtained his B.Sc. in Applied Computing and Data Science and an M.Sc. in Big Data. He is a member of the CyberDataLab, and his research interests include serious games, educational technology, artificial intelligence and large language models.",
	},

	about: {
		title: "Research at the intersection of AI, Learning, and Games",
		description:
		"I study how intelligent and playful systems can reveal how people learn — and how we can design better tools for them."
		},

	teaching: {
		title: "Exploring the intersection of Serious Games, AI, and Learning Analytics.",
		description:
			"A collection of my published papers and reflections on educational data science, serious games, explainable AI, and interoperability frameworks for Game-Based Assessment.",
	},

	projects: [
	{
		logo: "../projects/hexaxii.jpg",
		title: "HEXA-X-II - European Flagship for 6G Networks",
		tag: "Horizon Europe",
		description:
		"A Horizon Europe initiative shaping the next generation of 6G networks. At UMU, contributions focus on AI-driven learning and cyber situational awareness within complex communication systems.",
		linkText: "Visit project page",
		link: "https://hexa-x-ii.eu/"
	},
	{
		logo: "../projects/ecysap.jpg",
		title: "ECYSAP EYE - European Cyber Situational Awareness Platform",
		tag: "European Defence Fund",
		description:
		"Part of the European Defence Fund, ECYSAP EYE aims to enhance cyber situational awareness and decision-making through AI and data fusion across multinational defense organizations.",
		linkText: "Visit project page",
		link: "https://www.ecysap.eu"
	},
		{
		logo: "../projects/semantic.png",
		title: "SEMANTIC - Distributed and Efficient Game-Based Assessments as a Service",
		tag: "Fundación Séneca",
		description:
		"A Proof of Concept project funded by Fundación Séneca to transfer academic innovations on GBA into applied tools for commercialization and educational technology ecosystems.",
		linkText: "Project details",
		link: "https://portalinvestigacion.um.es/proyectos/701885/detalle"
	},
	{
		logo: "../projects/logoGBAaaS.png",
		title: "REASSESS - Towards Interoperable Game-Based Assessments as a Service",
		tag: "Fundación Séneca",
		description:
		"Funded by Fundación Séneca, REASSESS develops scalable and interoperable architectures for Game-Based Assessment, enabling the integration of AI-driven analysis into serious games.",
		linkText: "Project details",
		link: "https://portalinvestigacion.um.es/proyectos/587648/detalle"
	},
	{
		logo: "../projects/sg-asia.jpeg",
		title: "GBA-ARCH - Architecture for Game-Based Assessment Analytics",
		tag: "Serious Games Asia",
		description:
		"A collaboration with Serious Games Asia (Singapore) to design a general architecture for data analytics and AI integration in game-based learning systems.",
		linkText: "About the project",
		link: "https://portalinvestigacion.um.es/proyectos/899200/detalle"
	},
	{
		logo: "../projects/MIT_logo.png",
		title: "LAGA - Learning Analytics and Game-Based Assessment",
		tag: "MIT Collaboration",
		description:
		"A collaboration with the Massachusetts Institute of Technology (MIT) focused on developing analytics indicators and dashboards for educational games, advancing multimodal learning analytics.",
		linkText: "About the project",
		link: "https://portalinvestigacion.um.es/proyectos/586175/detalle"
	}
	],
	contact: {
		title: "Let’s connect.",
		description:
			"If you’d like to collaborate or discuss research opportunities, feel free to reach out. I’m always open to exploring new ideas in AI, data science, and educational technology.",
		address: "Department of Informatics and Systems, Faculty of Computer Science, University of Murcia",
		email: "manueljesus.gomezm@um.es",
		phone: "868 88 1314",
	},
};

// Spanish text, merged over INFO by getInfo(). Projects follow INFO.projects order.
const INFO_ES = {
	homepage: {
		title: "¡Hola! Soy Manuel Jesús Gómez",
		description:
			"Manuel J. Gomez es Profesor Ayudante Doctor en el Departamento de Informática y Sistemas de la Universidad de Murcia (España), donde también obtuvo su doctorado en Informática. Obtuvo su grado en Ingeniería Informática con mención en Computación y un máster en Big Data. Es miembro del CyberDataLab, y sus intereses de investigación incluyen los juegos serios, la tecnología educativa, la inteligencia artificial y los LLMs.",
	},

	about: {
		title: "Investigación en la intersección de la IA, el aprendizaje y los juegos",
		description:
			"Estudio cómo los sistemas inteligentes y lúdicos pueden revelar cómo aprenden las personas, y cómo podemos diseñar mejores herramientas para ellas.",
	},

	teaching: {
		title: "Explorando la intersección entre los juegos serios, la IA y la analítica del aprendizaje.",
		description:
			"Una recopilación de mis artículos publicados y reflexiones sobre ciencia de datos educativa, juegos serios, IA explicable y marcos de interoperabilidad para la evaluación basada en juegos.",
	},

	projects: [
		{
			title: "HEXA-X-II - Iniciativa insignia europea para las redes 6G",
			tag: "Horizon Europe",
			description:
				"Una iniciativa de Horizon Europe que da forma a la próxima generación de redes 6G. En la UMU, las contribuciones se centran en el aprendizaje basado en IA y la conciencia situacional en ciberseguridad dentro de sistemas de comunicación complejos.",
			linkText: "Visitar la web del proyecto",
		},
		{
			title: "ECYSAP EYE - Plataforma europea de conciencia situacional en el ciberespacio",
			tag: "European Defence Fund",
			description:
				"Enmarcado en el Fondo Europeo de Defensa, ECYSAP EYE busca mejorar la conciencia situacional en el ciberespacio y la toma de decisiones mediante IA y fusión de datos entre organizaciones de defensa multinacionales.",
			linkText: "Visitar la web del proyecto",
		},
		{
			title: "SEMANTIC - Evaluaciones basadas en juegos distribuidas y eficientes como servicio",
			tag: "Fundación Séneca",
			description:
				"Un proyecto de prueba de concepto financiado por la Fundación Séneca para transferir las innovaciones académicas en evaluación basada en juegos (GBA) a herramientas aplicadas para su comercialización y para los ecosistemas de tecnología educativa.",
			linkText: "Detalles del proyecto",
		},
		{
			title: "REASSESS - Hacia evaluaciones basadas en juegos interoperables como servicio",
			tag: "Fundación Séneca",
			description:
				"Financiado por la Fundación Séneca, REASSESS desarrolla arquitecturas escalables e interoperables para la evaluación basada en juegos, que permiten integrar análisis basados en IA en los juegos serios.",
			linkText: "Detalles del proyecto",
		},
		{
			title: "GBA-ARCH - Arquitectura para la analítica de evaluaciones basadas en juegos",
			tag: "Serious Games Asia",
			description:
				"Una colaboración con Serious Games Asia (Singapur) para diseñar una arquitectura general de analítica de datos e integración de IA en sistemas de aprendizaje basado en juegos.",
			linkText: "Sobre el proyecto",
		},
		{
			title: "LAGA - Analítica del aprendizaje y evaluación basada en juegos",
			tag: "Colaboración con el MIT",
			description:
				"Una colaboración con el Massachusetts Institute of Technology (MIT) centrada en desarrollar indicadores analíticos y paneles para juegos educativos, avanzando en la analítica del aprendizaje multimodal.",
			linkText: "Sobre el proyecto",
		},
	],

	contact: {
		title: "Hablemos.",
		description:
			"Si te gustaría colaborar o hablar sobre oportunidades de investigación, no dudes en escribirme. Siempre estoy abierto a explorar nuevas ideas en IA, ciencia de datos y tecnología educativa.",
		address: "Departamento de Informática y Sistemas, Facultad de Informática, Universidad de Murcia",
	},
};

export const getInfo = (lang) => {
	if (lang !== "es") return INFO;
	return {
		...INFO,
		homepage: { ...INFO.homepage, ...INFO_ES.homepage },
		about: { ...INFO.about, ...INFO_ES.about },
		teaching: { ...INFO.teaching, ...INFO_ES.teaching },
		projects: INFO.projects.map((project, index) => ({
			...project,
			...INFO_ES.projects[index],
		})),
		contact: { ...INFO.contact, ...INFO_ES.contact },
	};
};

export default INFO;
