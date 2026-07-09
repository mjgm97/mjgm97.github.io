import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { faMailBulk, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGoogle,
	faResearchgate,
	faGithub,
	faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/homepage/works";

import INFO from "../data/user";
import SEO from "../data/seo";
import PUBLICATIONS from "../data/publications";
import TEACHING from "../data/teaching";

import "./styles/homepage.css";

const STATS = [
	{ number: `${PUBLICATIONS.length}+`, label: "Publications" },
	{ number: `${INFO.projects.length}`, label: "Research Projects" },
	{
		number: `${TEACHING.masterTheses.length + TEACHING.degreeTheses.length}+`,
		label: "Students Supervised",
	},
];

const Homepage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div className="corner-logo">
							<Logo width={44} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="hero">
							<div className="hero-text">
								<span className="hero-eyebrow">
									<span className="hero-eyebrow-dot" />
									Ph.D. &middot; CyberDataLab, University of Murcia
								</span>

								<h1 className="hero-title">
									Hi, I&apos;m{" "}
									<span className="hero-title-accent">
										Manuel Jesús Gómez
									</span>
								</h1>

								<h2 className="hero-role">
									Researcher in Serious Games &amp; AI in Education
								</h2>

								<p className="hero-description">
									{INFO.homepage.description}
								</p>

								<div className="hero-actions">
									<Link to="/research" className="hero-btn primary">
										View my research
										<FontAwesomeIcon icon={faArrowRight} />
									</Link>
									<Link to="/contact" className="hero-btn secondary">
										Get in touch
									</Link>
								</div>

								<div className="hero-stats">
									{STATS.map((stat, index) => (
										<React.Fragment key={stat.label}>
											{index > 0 && <span className="hero-stat-divider" />}
											<div className="hero-stat">
												<span className="hero-stat-number">
													{stat.number}
												</span>
												<span className="hero-stat-label">
													{stat.label}
												</span>
											</div>
										</React.Fragment>
									))}
								</div>

								<div className="hero-socials">
									<a
										href={INFO.socials.scholar}
										target="_blank"
										rel="noreferrer"
										aria-label="scholar"
									>
										<FontAwesomeIcon
											icon={faGoogle}
											className="hero-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.researchgate}
										target="_blank"
										rel="noreferrer"
										aria-label="Researchgate"
									>
										<FontAwesomeIcon
											icon={faResearchgate}
											className="hero-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.github}
										target="_blank"
										rel="noreferrer"
										aria-label="GitHub"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="hero-social-icon"
										/>
									</a>
									<a
										href={INFO.socials.linkedin}
										target="_blank"
										rel="noreferrer"
										aria-label="LinkedIn"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="hero-social-icon"
										/>
									</a>
									<a
										href={`mailto:${INFO.main.email}`}
										target="_blank"
										rel="noreferrer"
										aria-label="Email"
									>
										<FontAwesomeIcon
											icon={faMailBulk}
											className="hero-social-icon"
										/>
									</a>
								</div>
							</div>

							<div className="hero-visual">
								<div className="hero-photo-glow" />
								<div className="hero-photo-frame">
									<img
										src="homepage.jpeg"
										alt="Manuel Jesús Gómez"
										className="hero-photo"
									/>
								</div>
							</div>
						</div>

						<div className="homepage-after-title">
							<div className="section-heading">
								<span className="section-heading-eyebrow">
									Background
								</span>
								<h2 className="section-heading-title">
									Experience &amp; Education
								</h2>
							</div>
							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
