const TEACHING = {
	undergraduateCourses: [
		{
			title: "Algoritmos y Estructuras de Datos I",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			years: "2026-2027",
			faculty: "informatica",
		},
		{
			title: "Programación Concurrente y Distribuida",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			years: "2025-2026",
			faculty: "informatica",
		},
		{
			title: "Analítica de Aprendizaje y Minería de Datos Educacionales",
			university: "University of Murcia",
			degree: "Data Science and Data Engineering Degree",
			years: "2025-2026",
			faculty: "informatica",
		},
		{
			title: "Business Intelligence",
			university: "University of Murcia",
			degree: "Information and Digital Content Management Degree",
			years: "2022–2025",
			faculty: "comunicacion",
		},
	],
	graduateCourses: [
		{
			title: "Inteligencia de Negocio",
			university: "University of Murcia",
			degree: "MSc on Big Data Analytics Technologies",
			years: "2022–2025",
			faculty: "informatica",
		},
		{
			title: "Inteligencia de Negocio",
			university: "University of Murcia",
			degree: "MSc on New Technologies in Computer Science",
			years: "2022–2024",
			faculty: "informatica",
		},
	],

	masterTheses: [
		{
			title: "Evaluación de diferentes medidas del rendimiento de anotadores en Active Learning",
			student: "Salvador Rubio López",
			university: "University of Murcia",
			degree: "MSc on Big Data Analytics Technologies",
			year: "2025/26",
			faculty: "informatica",
		},
		{
			title: "Semi-supervised Learning for GBA",
			student: "Ana María Aguilar Igualada",
			university: "University of Murcia",
			degree: "MSc on Big Data Analytics Technologies",
			year: "2024/25",
			faculty: "informatica",
		},
	],
	degreeTheses: [
		{
			title: "Estrategias de aprendizaje activo para regresión",
			student: "Rubén Moyano Palazón",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2025/26",
			faculty: "informatica",
		},
		{
			title: "Detección de emociones multimodal con el apoyo de Multimodal Large Language Models",
			student: "Raúl Sánchez Ibáñez",
			university: "University of Murcia",
			degree: "Data Science and Engineering Degree",
			year: "2025/26",
			faculty: "informatica",
		},
		{
			title: "Academic Dishonesty in Serious Games",
			student: "Frank Antonio Oldfield Montilla",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2025/26",
			faculty: "informatica",
		},
		{
			title: "A Video-Based Multimodal Framework for Nonverbal Communication Assessment in Oral Presentations",
			student: "Álvaro González Moya",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2024/25",
			faculty: "informatica",
		},
		{
			title: "Introducción al reconocimiento multimodal de emociones",
			student: "Pablo Tadeo Romero Orlowska",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2024/25",
			faculty: "informatica",
		},
		{
			title: "Integración de un Asistente Inteligente en Sistema ERP para la Mejora de la Inteligencia de Negocios",
			student: "Raúl Alberto Fernández González",
			university: "University of Murcia",
			degree: "Information and Digital Content Management Degree",
			year: "2023/24",
			faculty: "comunicacion",
		},
		{
			title: "Data Science and AI Techniques for Competency Assessment through Serious Games",
			student: "Ana María Aguilar Igualada",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2023/24",
			faculty: "informatica",
		},
		{
			title: "Técnicas de Inteligencia Artificial sobre audio para la implementación de un tutor inteligente",
			student: "Joaquin Ayala Filardi",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2023/24",
			faculty: "informatica",
		},
		{
			title: "Estudio de técnicas de inteligencia artificial explicable y su aplicación en un juego serio",
			student: "Álvaro Armada Sánchez",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2022/23",
			faculty: "informatica",
		},
		{
			title: "Estudio e implementación de la adaptatividad en cuadros de mando",
			student: "Javier Guil Molina",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2022/23",
			faculty: "informatica",
		},
		{
			title: "Modelos para la predicción de resultados en juegos serios",
			student: "José Ramón Guillén López",
			university: "University of Murcia",
			degree: "Computer Science Degree",
			year: "2022/23",
			faculty: "informatica",
		},
	],
};

// Course and thesis titles keep their official wording; only degree names
// and the "Present" marker are translated.
const DEGREES_ES = {
	"Computer Science Degree": "Grado en Ingeniería Informática",
	"Data Science and Data Engineering Degree": "Grado en Ciencia e Ingeniería de Datos",
	"Data Science and Engineering Degree": "Grado en Ciencia e Ingeniería de Datos",
	"Information and Digital Content Management Degree":
		"Grado en Gestión de Información y Contenidos Digitales",
	"MSc on Big Data Analytics Technologies":
		"Máster en Tecnologías de Análisis de Datos Masivos: Big Data",
	"MSc on New Technologies in Computer Science":
		"Máster en Nuevas Tecnologías en Informática",
};

const translateItem = (item) => ({
	...item,
	university: "Universidad de Murcia",
	degree: DEGREES_ES[item.degree] || item.degree,
	...(item.years ? { years: item.years.replace("Present", "Actualidad") } : {}),
});

export const getTeaching = (lang) => {
	if (lang !== "es") return TEACHING;
	return Object.fromEntries(
		Object.entries(TEACHING).map(([key, items]) => [key, items.map(translateItem)])
	);
};

export default TEACHING;
