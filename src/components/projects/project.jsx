import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = ({ logo, title, description, linkText, link }) => {
	return (
		<div className="project glass-card">
			<div className="project-container">
				{logo && (
					<div className="project-logo">
						<img src={logo} alt={`${title} logo`} />
					</div>
				)}

				<div className="project-title">{title}</div>

				{description && (
					<div className="project-description">{description}</div>
				)}

				{link && linkText && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="project-link"
					>
						<div className="project-link-icon">
							<FontAwesomeIcon icon={faLink} />
						</div>
						<div className="project-link-text">{linkText}</div>
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;


