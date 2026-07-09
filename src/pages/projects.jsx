import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const STATS = [
	{ number: `${INFO.projects.length}`, label: "Funded Research Projects" },
	{
		number: `${new Set(INFO.projects.map((p) => p.tag)).size}`,
		label: "Funding Programs",
	},
];

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
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
								Research and Innovation Projects
							</h1>

							<p className="projects-subtitle">
								Projects exploring how Artificial Intelligence, Learning
								Analytics, and Serious Games can improve the way we
								understand, assess, and design learning experiences. By
								combining data science, interactive systems, and
								human-centered design, I seek to create technologies that
								not only evaluate learning but also inspire creativity,
								persistence, and curiosity.
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
												{stat.label}
											</span>
										</div>
									</React.Fragment>
								))}
							</div>
						</div>

						<div className="projects-list">
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
