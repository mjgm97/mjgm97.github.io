import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useLanguage } from "../../i18n/LanguageContext";

import "./styles/project.css";

const Project = ({ logo, title, tag, description, linkText, link }) => {
	const { t } = useLanguage();

	return (
		<div className="project glass-card">
			<div className="project-cover">
				{logo && (
					<img src={logo} alt={t.projects.logoAlt(title)} className="project-logo-img" />
				)}
				{tag && <span className="project-tag">{tag}</span>}
			</div>

			<div className="project-content">
				<h3 className="project-title">{title}</h3>

				{description && (
					<p className="project-description">{description}</p>
				)}

				{link && linkText && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="project-link"
					>
						{linkText}
						<FontAwesomeIcon icon={faArrowRight} />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
