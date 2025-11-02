import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import AnimatedCard from "../common/animatedCard";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-grid">
			{INFO.projects.map((project, index) => (
				<AnimatedCard key={index} threshold={0.2}>
					<Project
						logo={project.logo}
						title={project.title}
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
