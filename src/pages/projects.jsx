import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import { getSEO } from "../data/seo";
import { useLanguage } from "../i18n/LanguageContext";

import "./styles/projects.css";

const STATS = [
	{ number: `${INFO.projects.length}`, label: "funded" },
	{
		number: `${new Set(INFO.projects.map((p) => p.tag)).size}`,
		label: "programs",
	},
];

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { lang, t } = useLanguage();
	const currentSEO = getSEO(lang, "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${t.projects.pageTitle} | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<div className="projects-container">
						<div className="projects-heading">

							<h1 className="projects-title">
								{t.projects.title}
							</h1>

							<p className="projects-subtitle">
								{t.projects.subtitle}
							</p>

							<div className="projects-stats">
								{STATS.map((stat, index) => (
									<React.Fragment key={stat.label}>
										{index > 0 && <span className="projects-stat-divider" />}
										<div className="projects-stat">
											<span className="projects-stat-number">
												{stat.number}
											</span>
											<span className="projects-stat-label">
												{t.projects.stats[stat.label]}
											</span>
										</div>
									</React.Fragment>
								))}
							</div>
						</div>

						<section className="featured-project" aria-labelledby="braveroom-feature-title">
							<div className="featured-project-content">
								<span className="featured-project-kicker">{t.projects.braveroom.kicker}</span>
								<img
									src="/projects/braveroom/logo-wordmark-dark.png"
									alt="BraveRoom"
									className="featured-project-wordmark"
								/>
								<h2 id="braveroom-feature-title" className="featured-project-title">
									{t.projects.braveroom.title}
								</h2>
								<p>
									{t.projects.braveroom.description}
								</p>
								<div className="featured-project-tags" aria-label={t.projects.braveroom.tagsLabel}>
									{t.projects.braveroom.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
								<Link to="/projects/braveroom" className="featured-project-link">
									{t.projects.braveroom.link}
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>

							<div className="featured-project-visual" aria-hidden="true">
								<img
									src="/projects/braveroom/dashboard-desktop.jpg"
									alt=""
								/>
							</div>
						</section>

						<section className="featured-project featured-project-ludix" aria-labelledby="ludix-feature-title">
							<div className="featured-project-content">
								<span className="featured-project-kicker">{t.projects.ludix.kicker}</span>
								<img
									src="/projects/ludix/logo-dark-tagline.svg"
									alt="Ludix"
									className="featured-project-wordmark featured-project-wordmark-ludix"
								/>
								<h2 id="ludix-feature-title" className="featured-project-title">
									{t.projects.ludix.title}
								</h2>
								<p>
									{t.projects.ludix.description}
								</p>
								<div className="featured-project-tags" aria-label={t.projects.ludix.tagsLabel}>
									{t.projects.ludix.tags.map((tag) => (
										<span key={tag}>{tag}</span>
									))}
								</div>
								<Link to="/projects/ludix" className="featured-project-link featured-project-link-ludix">
									{t.projects.ludix.link}
									<FontAwesomeIcon icon={faArrowRight} />
								</Link>
							</div>

							<div className="featured-project-visual" aria-hidden="true">
								<img
									src="/projects/ludix/process.jpg"
									alt=""
									className="featured-project-ludix-portrait"
								/>
							</div>
						</section>

						<div className="projects-list">
							<h2 className="projects-list-title">{t.projects.listTitle}</h2>
							<AllProjects />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
