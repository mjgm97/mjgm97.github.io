import React from "react";

import Project from "./project";

import { getInfo } from "../../data/user";
import { useLanguage } from "../../i18n/LanguageContext";

import AnimatedCard from "../common/animatedCard";

import "./styles/allProjects.css";

const AllProjects = () => {
	const { lang } = useLanguage();
	const INFO = getInfo(lang);

	return (
		<div className="all-projects-grid">
			{INFO.projects.map((project, index) => (
				<AnimatedCard key={index} threshold={0.2}>
					<Project
						logo={project.logo}
						title={project.title}
						tag={project.tag}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</AnimatedCard>
			))}
		</div>
	);
};


export default AllProjects;
