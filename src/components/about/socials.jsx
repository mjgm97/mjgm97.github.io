import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const socials = [
	{
		name: "Twitter",
		icon: faTwitter,
		url: INFO.socials.twitter,
		text: "Follow on Twitter",
		color: "#1DA1F2",
	},
	{
		name: "GitHub",
		icon: faGithub,
		url: INFO.socials.github,
		text: "View Projects",
		color: "#000000ff",
	},
	{
		name: "LinkedIn",
		icon: faLinkedin,
		url: INFO.socials.linkedin,
		text: "Connect on LinkedIn",
		color: "#0A66C2",
	},
];

const Socials = () => {
	return (
		<div className="socials-grid">
			{socials.map((social, index) => (
				<a
					key={index}
					href={social.url}
					target="_blank"
					rel="noreferrer"
					className="social-card glass-card"
					style={{ "--accent": social.color }}
				>
					<div className="icon-wrapper">
						<FontAwesomeIcon icon={social.icon} className="social-icon" />
					</div>
					<div className="social-info">
						<span className="social-name">{social.name}</span>
						<span className="social-text">{social.text}</span>
					</div>
				</a>
			))}

			{/* Email card */}
			<a
				href={`mailto:${INFO.main.email}`}
				target="_blank"
				rel="noreferrer"
				className="social-card glass-card"
				style={{ "--accent": "#aca0ccff" }}
			>
				<div className="icon-wrapper">
					<FontAwesomeIcon icon={faPaperPlane} className="social-icon" />
				</div>
				<div className="social-info">
					<span className="social-name">Email</span>
					<span className="social-text">Write an email</span>
				</div>
			</a>
		</div>
	);
};

export default Socials;

