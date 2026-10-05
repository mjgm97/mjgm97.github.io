const en = {
	nav: {
		home: "Home",
		research: "Research",
		projects: "Projects",
		teaching: "Teaching",
		contact: "Contact",
		toggleTheme: "Toggle color theme",
		language: "Language",
		menu: "Main menu",
		openMenu: "Open menu",
		closeMenu: "Close menu",
	},

	footer: {
		rights: "All Rights Reserved.",
	},

	publications: {
		types: {
			"Journal Paper": "Journal Paper",
			"Conference Paper": "Conference Paper",
			"Book Chapter": "Book Chapter",
		},
		externalLink: "External Link",
		download: "Download",
		showAbstract: "Show Abstract",
		hideAbstract: "Hide Abstract",
		loadMore: "Load More",
	},

	home: {
		eyebrow: "Assistant Professor · CyberDataLab, University of Murcia",
		greeting: "Hi, I'm",
		role: "Researcher in Serious Games & AI in Education",
		viewResearch: "View my research",
		getInTouch: "Get in touch",
		stats: {
			publications: "Publications",
			projects: "Research Projects",
			students: "Students Supervised",
		},
		backgroundEyebrow: "Background",
		backgroundTitle: "Experience & Education",
	},

	timeline: {
		filterLabel: "Filter timeline",
		all: "All",
		experience: "Experience",
		education: "Education",
		ongoing: "Ongoing",
	},

	research: {
		pageTitle: "Research",
		eyebrow: (count) => `${count}+ Publications since 2020`,
		subtitle:
			"I explore how Artificial Intelligence, Learning Analytics, and Serious Games can improve the way we understand, assess, and design learning experiences. My work focuses on developing explainable and interoperable systems that connect gameplay data with educational insights, making learning processes more measurable, transparent, and scalable.",
	},

	projects: {
		pageTitle: "Projects",
		title: "Research and Innovation Projects",
		subtitle:
			"Projects exploring how Artificial Intelligence, Learning Analytics, and Serious Games can improve the way we understand, assess, and design learning experiences. By combining data science, interactive systems, and human-centered design, I seek to create technologies that not only evaluate learning but also inspire creativity, persistence, and curiosity.",
		stats: {
			funded: "Funded Research Projects",
			programs: "Funding Programs",
		},
		braveroom: {
			kicker: "Featured build",
			title: "Practice the decisions that matter.",
			description:
				"An independent platform for designing, facilitating, and reviewing realistic scenario-based practice, from difficult conversations to high-stakes team decisions.",
			tagsLabel: "BraveRoom focus areas",
			tags: ["Simulation", "Learning design", "AI & analytics"],
			link: "Explore the project",
		},
		ludix: {
			kicker: "Open research software",
			title: "From game events to defensible evidence.",
			description:
				"A game-agnostic workbench for serious-games research, uniting reproducible learning analytics, sequence methods, and explainable prediction.",
			tagsLabel: "Ludix focus areas",
			tags: ["Learning analytics", "Process mining", "Explainable AI"],
			link: "Explore the research",
		},
		listTitle: "Funded research projects",
		logoAlt: (title) => `${title} logo`,
	},

	teaching: {
		pageTitle: "Teaching",
		university: "University of Murcia",
		title: "Teaching & Supervision",
		subtitle:
			"I teach undergraduate and graduate courses in computer science, artificial intelligence, and educational technologies, and I supervise different master and degree theses exploring AI and learning analytics.",
		stats: {
			courses: "Courses Taught",
			theses: "Theses Supervised",
			since: "Teaching Since",
		},
		undergraduate: "Undergraduate Studies",
		graduate: "Graduate Studies",
		masterTheses: "Master’s Thesis Supervision",
		degreeTheses: "Degree Thesis Supervision",
		faculties: {
			informatica: "Faculty of Computer Science, University of Murcia",
			comunicacion:
				"Faculty of Communication and Documentation, University of Murcia",
		},
	},

	contact: {
		pageTitle: "Contact",
		emailMe: "Email me",
		findMe: "Find me",
		office: "Office",
		officeValue: "Lab 2.39",
		phone: "Phone",
		availability: "Availability",
		availabilityValue: "Mon–Fri, 10:00–18:00 (by appointment)",
		mapTitle: "Faculty of Computer Science - University of Murcia",
	},

	phd: {
		pageTitle: "PhD",
		title: "Ph.D. Thesis",
		thesisTitle:
			"Towards Interoperability and Novel Methodological Approaches for Scalable Game-Based Assessment",
		thesisTitleAlt:
			"Hacia la interoperabilidad y nuevos enfoques metodológicos para la evaluación escalable basada en juegos",
		supervisorsLabel: "Supervisors:",
		supervisors:
			"Dr. Félix Jesús García Clemente and Dr. José Antonio Ruipérez Valiente",
		fullVersion: "Full Version",
		shortVersion: "Short Version",
		slides: "Slides",
		photoAlt: "Manuel defending his Ph.D. thesis",
		defenseDetails: "🎓 Defense Details",
		committeeLabel: "Thesis Defense Committee:",
		committee:
			"Ms. Ruth Cobos Pérez (Chair), Mr. Óscar Cánovas Reverte (Secretary), and Ms. Sonsoles López Pernas (External Member)",
		dateLabel: "Date of the Defense:",
		date: "03/10/2025",
		gradeLabel: "Grade:",
		grade: "Sobresaliente",
		honorsLabel: "Honors:",
		honors: "“Cum Laude” and “International Doctorate”",
		publicationsIncluded: "Publications included",
	},

	notFound: {
		title: "Oops!",
		message: "We can't seem to find the page you're looking for.",
		urlMessage: (url) =>
			`The requested URL "${url}" was not found on this server.`,
		back: "Go back to the home page",
	},

	braveroom: {
		back: "All projects",
		kicker: "Independent platform · 2026",
		heroTitle: "Practice the decisions that matter.",
		heroLead:
			"A safe place for teams to rehearse difficult conversations and high-stakes decisions before they happen in the real world.",
		comingSoon: "Coming soon on GitHub",
		explore: "Explore the platform",
		heroTagsLabel: "Project characteristics",
		heroTags: ["Scenario-based learning", "Live & self-paced"],
		heroTagAi: "AI personas",
		heroImageAlt: "BraveRoom dashboard showing example practice scenarios",
		heroCaption: "Facilitator dashboard with ready-to-run examples",

		originLabel: "The idea",
		originTitle: "A room for consequential practice.",
		originP1:
			"BraveRoom is a platform for designing, facilitating, and reviewing realistic scenario-based practice. Authors create a sequence of moments, participants respond in context, and facilitators examine both the decision and the reasoning behind it.",
		originP2Before:
			"The project began as a modern reimplementation of the digital clinical simulation concept pioneered by MIT Teaching Systems Lab's ",
		originP2After:
			", then grew into a flexible, general-purpose platform for education, management, health care, media literacy, and crisis response.",

		workflowLabel: "How it works",
		workflowTitle: "From authored moment to shared insight.",
		workflowLead:
			"One continuous workflow connects scenario design, authentic practice, and thoughtful review.",
		capabilities: [
			{
				number: "01",
				title: "Author",
				description:
					"Build a sequence of realistic moments with narrative, media, callouts, and open, choice, scale, voice, or AI conversation prompts.",
			},
			{
				number: "02",
				title: "Practice",
				description:
					"Run simulations individually or bring a cohort into a synchronized live room where every participant responds from their own device.",
			},
			{
				number: "03",
				title: "Reflect",
				description:
					"Review decisions and reasoning, follow cohort progress, revisit personal histories, and export structured responses for analysis.",
			},
		],

		editorImageAlt: "BraveRoom visual scenario editor",
		authoringLabel: "Rich authoring",
		authoringTitle: "Design the moment, not the machinery.",
		authoringText:
			"The visual editor lets authors combine narrative, guidance, media, and interaction without losing sight of the learning goal.",
		authoringList: [
			"Autosave, preview, publish, copy, and recovery workflows",
			"Text, choice, scale, audio, video, and voice components",
			"Optional conversations with an authored AI persona",
		],

		liveImageAlt: "BraveRoom live session waiting room",
		liveLabel: "Live rooms",
		liveTitle: "Practice together, respond individually.",
		liveText:
			"A facilitator controls the shared pace while every participant responds privately on their own device—then the cohort can reflect on the experience together.",
		liveList: [
			"Shareable links and memorable room codes",
			"Presence, synchronized controls, and reconnect recovery",
			"Responses preserved in each participant's history",
		],

		aiLabel: "AI integration",
		aiTitle: "A persona inside the scenario—not a chatbot beside it.",
		aiText:
			"Authors define a character, an opening line, and behavioral instructions. Participants then respond in the moment while BraveRoom preserves the exchange for later reflection.",
		aiList: [
			"Claude or a local Ollama model",
			"Conversation transcripts saved with the run",
			"Entirely optional—the platform works without an AI backend",
		],
		aiDemoLabel: "Illustration of the AI persona workflow",
		aiDemoHeading: "Illustrative interaction",
		aiStatus: "AI persona",
		aiAuthorTitle: "Author the persona",
		aiCharacterLabel: "Character",
		aiCharacter: "Ms. Rivera",
		aiOpeningLabel: "Opening line",
		aiOpening: "I want to understand what happened with Jordan's grade.",
		aiInstruction: "Stay in character · respond briefly · do not evaluate",
		aiRespondTitle: "Respond in context",
		aiYou: "You",
		aiReply: "Thank you for coming in. Let's walk through it together.",
		aiFlow: ["Authored context", "Live exchange", "Saved transcript"],

		featuresLabel: "Designed as a system",
		featuresTitle: "Everything needed to close the learning loop.",
		features: [
			{
				title: "Flexible responses",
				description:
					"Text, choice, scale, and microphone prompts for different kinds of practice.",
			},
			{
				title: "Live facilitation",
				description:
					"Short room codes, participant presence, synchronized pacing, and reconnect recovery.",
			},
			{
				title: "Cohorts and assignments",
				description:
					"Organize groups, assign scenarios, and follow progress participant by participant.",
			},
			{
				title: "Research-ready records",
				description:
					"Durable response and event histories with run review and CSV export.",
			},
			{
				title: "Flexible deployment",
				description:
					"Start with embedded SQLite or move to PostgreSQL for production concurrency.",
			},
			{
				title: "Inclusive interface",
				description:
					"Responsive light and dark themes with an English and Spanish product interface.",
			},
		],

		technicalLabel: "Technical foundation",
		technicalTitle:
			"Built to move from research prototype to real deployment.",
		technicalText:
			"The self-contained application works with zero-configuration SQLite for small cohorts, PostgreSQL for concurrent production use, and a focused Socket.IO service for live presence and control.",
		releaseNote: "Architecture notes will launch with the public repository.",
		stackLabel: "Technology stack",

		libraryImageAlt:
			"BraveRoom scenario library with examples from education, the workplace, health care, and media literacy",
		libraryCaption:
			"The included examples span education, workplace feedback, health care, and misinformation response.",

		ctaLabel: "In development",
		ctaTitle: "Public release coming soon.",
		ctaText:
			"BraveRoom is being prepared for release. The code, architecture notes, and deployment guide will be published on GitHub when they are ready.",
		ctaStatus: "Soon on GitHub",
	},

	ludix: {
		back: "All projects",
		kicker: "Open research software · 2026",
		heroTitle: "From game events to defensible evidence.",
		heroLead:
			"A game-agnostic platform for building serious games and turning their interaction data into reproducible learning analytics, including process discovery and explainable prediction.",
		viewSource: "View source on GitHub",
		exploreMethods: "Explore the methods",
		heroTagsLabel: "Project characteristics",
		heroTags: ["Game-agnostic", "Research-grade methods", "MIT licensed"],
		browserLabel: "research workbench / overview",
		heroImageAlt:
			"Ludix educator dashboard showing games, players, sessions, runs, and events",
		heroCaption: "One dashboard, one event model, every game.",

		problemLabel: "Research motivation",
		problemTitle: "Rich play data should not end in a silo.",
		problemP1:
			"Serious games record decisions, timing, retries, paths, and outcomes. Yet those traces are often analysed ad hoc inside one game, making methods difficult to transfer and studies harder to reproduce.",
		problemP2:
			"Ludix treats play as a shared research object. Any game or an external CSV or JSON event log can enter the same analytical pipeline, so evidence is comparable, inspectable, and ready to report.",

		thesisAria: "Ludix research thesis",
		thesisLabel: "The core idea",
		thesisTitle: "One event model, many research questions.",
		thesisText:
			"When every method begins from the same record of who did what and when, analytics move with the data instead of remaining tied to the game that produced it.",

		pipelineLabel: "Research workflow",
		pipelineTitle: "From interaction trace to publishable finding.",
		pipelineText:
			"A continuous analytical chain keeps data capture, modelling, statistical testing, and communication connected. Sequence and network computations use ladyna, whose results are validated against the R tna package to machine precision. Model explanations use exact TreeSHAP, so critical calculations rely on tested methods.",
		pipeline: [
			{
				number: "01",
				title: "Instrument",
				description:
					"Games emit a small, shared event shape: who did what, when, and in which session.",
			},
			{
				number: "02",
				title: "Model",
				description:
					"The same event stream becomes traces, transition networks, behaviour features, and cohorts.",
			},
			{
				number: "03",
				title: "Test",
				description:
					"Bootstrap confidence, permutation tests, and corrected effect estimates separate signal from noise.",
			},
			{
				number: "04",
				title: "Communicate",
				description:
					"Interactive views export as SVG or PNG for papers, presentations, and reproducible reporting.",
			},
		],

		methodsLabel: "Analytical workbench",
		methodsTitle: "Four lenses on how learning unfolds through play.",
		methods: [
			{
				label: "Sequence discovery",
				title: "Process mining",
				description:
					"Reconstruct directly-follows graphs, activity statistics, and the raw trace variants learners take through a game.",
			},
			{
				label: "Dynamic structure",
				title: "Transition network analysis",
				description:
					"Model play as a first-order Markov network, inspect centralities and state cliques, and bootstrap edge stability.",
			},
			{
				label: "Behavioural profiles",
				title: "Sequence clustering",
				description:
					"Group sessions by how learners move through a game using validated dissimilarities and quantified cluster quality.",
			},
			{
				label: "Interpretable modelling",
				title: "Explainable prediction",
				description:
					"Estimate outcomes from run-level behaviour, validate against held-out data, and explain predictions with exact TreeSHAP.",
			},
		],

		showcase: [
			{
				image: "/projects/ludix/process.jpg",
				alt: "Ludix process-mining view with activity statistics and trace variants",
				label: "Processes, not just scores",
				title: "See the routes learners take.",
				text: "Ludix preserves raw traces, including loops and repeated actions, then surfaces common variants and longer routines without collapsing away the behaviour under study.",
			},
			{
				image: "/projects/ludix/tna-network.jpg",
				alt: "Ludix transition network with activity nodes and probability-weighted edges",
				label: "Transitions as evidence",
				title: "Model behaviour as a dynamic system.",
				text: "Interactive transition networks reveal how activity states connect. Bootstrap validation helps distinguish stable pathways from edges that may simply reflect sampling noise.",
			},
			{
				image: "/projects/ludix/clustering.jpg",
				alt: "Three Ludix behaviour clusters with transition networks and sequence index plots",
				label: "Behavioural profiles",
				title: "Compare ways of playing, not only outcomes.",
				text: "Sequence clustering groups sessions by how learners move through a game. Each group can then be compared through its transition network, sequence patterns, and silhouette score.",
			},
		],

		rigorLabel: "Methods & reproducibility",
		rigorTitle: "Designed for claims that can be examined.",
		rigorText:
			"Ludix does not reimplement critical statistical methods from scratch. Transition networks, centralities, edge validation, and sequence clustering use ladyna, a tested JavaScript implementation validated against R tna. Tree-model explanations use the exact TreeSHAP algorithm. Seeded procedures and held-out diagnostics make the resulting analyses repeatable and easier to scrutinize.",
		rigorList: [
			"Bootstrap confidence for transition edges",
			"Permutation tests for cohort network differences",
			"Benjamini-Hochberg correction for pattern screening",
			"Exact path-dependent TreeSHAP explanations",
		],
		referenceBefore: "Method reference: ",
		referenceAfter:
			", developed by Mohammed Saqr and Sonsoles López-Pernas.",
		rigorImageAlt:
			"Ludix prediction view with held-out diagnostics and SHAP feature importance",
		rigorCaption:
			"Held-out diagnostics and interpretable feature attribution.",

		principlesLabel: "Research infrastructure",
		principlesTitle: "Built to make methods travel.",
		principles: [
			{
				title: "Game-agnostic by construction",
				description:
					"Every analysis reads one generic event model, so methods transfer between games and imported event logs without per-game analytics code.",
			},
			{
				title: "Reproducible by default",
				description:
					"Seeded randomized procedures make bootstrap, clustering, and train/test results repeatable from the same data and settings.",
			},
			{
				title: "Method provenance, visible",
				description:
					"Parameters, diagnostics, and statistical checks remain visible, so researchers can examine how each result was produced.",
			},
		],

		openLabel: "Open research software",
		openTitle: "Inspect the full analytical chain.",
		openText:
			"The games, event model, backend, analytics, figures, and setup guide are public under the MIT License. A reference game and seeded demo make every analysis explorable from the first run.",
		exportNote: "Publication-ready SVG and PNG export is built in.",
		stackLabel: "Technology and methods stack",

		ctaLabel: "Explore Ludix",
		ctaTitle: "Use it, inspect it, extend it.",
		ctaText:
			"Ludix is available as open-source research software for serious-games analytics, teaching, experimentation, and collaboration.",
		ctaLink: "Open the repository",
	},
};

export default en;
