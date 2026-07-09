import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGoogle,
	faResearchgate,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const socials = [
	{ name: "Google Scholar", icon: faGoogle, url: INFO.socials.scholar },
	{ name: "ResearchGate", icon: faResearchgate, url: INFO.socials.researchgate },
	{ name: "GitHub", icon: faGithub, url: INFO.socials.github },
	{ name: "LinkedIn", icon: faLinkedin, url: INFO.socials.linkedin },
];

const Socials = () => {
	return (
		<div className="socials-row">
			{socials.map((social) => (
				<a
					key={social.name}
					href={social.url}
					target="_blank"
					rel="noreferrer"
					className="social-link"
				>
					<FontAwesomeIcon icon={social.icon} />
					{social.name}
				</a>
			))}
		</div>
	);
};

export default Socials;
