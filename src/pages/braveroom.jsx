import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faArrowLeft,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/braveroom.css";

const CAPABILITIES = [
	{
		number: "01",
		title: "Author",
		description:
			"Build a sequence of realistic moments with narrative, media, callouts, and open, choice, scale, voice, or AI conversation prompts.",
	},
	{
		number: "02",
		title: "Practice",
		description:
			"Run simulations individually or bring a cohort into a synchronized live room where every participant responds from their own device.",
	},
	{
		number: "03",
		title: "Reflect",
		description:
			"Review decisions and reasoning, follow cohort progress, revisit personal histories, and export structured responses for analysis.",
	},
];

const FEATURES = [
	{
		title: "Multimodal responses",
		description: "Text, choice, scale, microphone, and optional AI persona interactions.",
	},
	{
		title: "Live facilitation",
		description: "Short room codes, participant presence, synchronized pacing, and reconnect recovery.",
	},
	{
		title: "Cohorts and assignments",
		description: "Organize groups, assign scenarios, and follow progress participant by participant.",
	},
	{
		title: "Research-ready records",
		description: "Durable response and event histories with run review and CSV export.",
	},
	{
		title: "Flexible deployment",
		description: "Start with embedded SQLite or move to PostgreSQL for production concurrency.",
	},
	{
		title: "Inclusive interface",
		description: "Responsive light and dark themes with an English and Spanish product interface.",
	},
];

const STACK = [
	"Next.js 16",
	"React 19",
	"TypeScript",
	"SQLite / PostgreSQL",
	"Socket.IO",
	"Tailwind CSS",
];

const BraveRoom = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "braveroom");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`BraveRoom | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content braveroom-page">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="braveroom-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<main className="braveroom-container">
						<Link to="/projects" className="braveroom-back-link">
							<FontAwesomeIcon icon={faArrowLeft} />
							All projects
						</Link>

						<section className="braveroom-hero">
							<div className="braveroom-hero-copy">
								<span className="braveroom-kicker">Independent platform · 2026</span>
								<span className="braveroom-wordmark" role="img" aria-label="BraveRoom">
									<img
										src="/projects/braveroom/logo-wordmark.png"
										alt=""
										className="braveroom-wordmark-light"
									/>
									<img
										src="/projects/braveroom/logo-wordmark-dark.png"
										alt=""
										className="braveroom-wordmark-dark"
									/>
								</span>
								<h1>Practice the decisions that matter.</h1>
								<p className="braveroom-hero-lead">
									A safe place for teams to rehearse difficult conversations and
									high-stakes decisions before they happen in the real world.
								</p>
								<div className="braveroom-actions">
									<span className="braveroom-button braveroom-button-status">
										<FontAwesomeIcon icon={faGithub} />
										Coming soon on GitHub
									</span>
									<a href="#how-it-works" className="braveroom-button braveroom-button-secondary">
										Explore the platform
										<FontAwesomeIcon icon={faArrowDown} />
									</a>
								</div>
								<div className="braveroom-hero-tags" aria-label="Project characteristics">
									<span>Scenario-based learning</span>
									<span>Live &amp; self-paced</span>
									<span>Public release planned</span>
								</div>
							</div>

							<figure className="braveroom-hero-visual">
								<div className="braveroom-browser-chrome" aria-hidden="true">
									<span />
									<span />
									<span />
								</div>
								<img
									src="/projects/braveroom/dashboard-desktop.jpg"
									alt="BraveRoom dashboard showing example practice scenarios"
								/>
								<figcaption>Facilitator dashboard with ready-to-run examples</figcaption>
							</figure>
						</section>

						<section className="braveroom-origin">
							<div>
								<span className="braveroom-section-label">The idea</span>
								<h2>A room for consequential practice.</h2>
							</div>
							<div className="braveroom-origin-copy">
								<p>
									BraveRoom is a platform for designing, facilitating, and
									reviewing realistic scenario-based practice. Authors create a
									sequence of moments, participants respond in context, and
									facilitators examine both the decision and the reasoning behind it.
								</p>
								<p>
									The project began as a modern reimplementation of the digital
									clinical simulation concept pioneered by MIT Teaching Systems
									Lab&apos;s <em>Teacher Moments</em>, then grew into a flexible,
									general-purpose platform for education, management, health care,
									media literacy, and crisis response.
								</p>
							</div>
						</section>

						<section id="how-it-works" className="braveroom-workflow">
							<div className="braveroom-section-heading">
								<span className="braveroom-section-label">How it works</span>
								<h2>From authored moment to shared insight.</h2>
								<p>
									One continuous workflow connects scenario design, authentic
									practice, and thoughtful review.
								</p>
							</div>
							<div className="braveroom-workflow-grid">
								{CAPABILITIES.map((capability) => (
									<article key={capability.number} className="braveroom-workflow-card">
										<span>{capability.number}</span>
										<h3>{capability.title}</h3>
										<p>{capability.description}</p>
									</article>
								))}
							</div>
						</section>

						<section className="braveroom-showcase">
							<div className="braveroom-showcase-row">
								<div className="braveroom-showcase-image">
									<img
										src="/projects/braveroom/scenario-editor-desktop.jpg"
										alt="BraveRoom visual scenario editor"
									/>
								</div>
								<div className="braveroom-showcase-copy">
									<span className="braveroom-section-label">Rich authoring</span>
									<h2>Design the moment, not the machinery.</h2>
									<p>
										The visual editor lets authors combine narrative, guidance,
										media, and interaction without losing sight of the learning goal.
									</p>
									<ul>
										<li><FontAwesomeIcon icon={faCheck} /> Autosave, preview, publish, copy, and recovery workflows</li>
										<li><FontAwesomeIcon icon={faCheck} /> Text, choice, scale, audio, video, and voice components</li>
										<li><FontAwesomeIcon icon={faCheck} /> Optional conversations with an authored AI persona</li>
									</ul>
								</div>
							</div>

							<div className="braveroom-showcase-row braveroom-showcase-row-reverse">
								<div className="braveroom-showcase-image">
									<img
										src="/projects/braveroom/live-room-desktop.jpg"
										alt="BraveRoom live session waiting room"
									/>
								</div>
								<div className="braveroom-showcase-copy">
									<span className="braveroom-section-label">Live rooms</span>
									<h2>Practice together, respond individually.</h2>
									<p>
										A facilitator controls the shared pace while every participant
										responds privately on their own device—then the cohort can
										reflect on the experience together.
									</p>
									<ul>
										<li><FontAwesomeIcon icon={faCheck} /> Shareable links and memorable room codes</li>
										<li><FontAwesomeIcon icon={faCheck} /> Presence, synchronized controls, and reconnect recovery</li>
										<li><FontAwesomeIcon icon={faCheck} /> Responses preserved in each participant&apos;s history</li>
									</ul>
								</div>
							</div>
						</section>

						<section className="braveroom-features">
							<div className="braveroom-section-heading">
								<span className="braveroom-section-label">Designed as a system</span>
								<h2>Everything needed to close the learning loop.</h2>
							</div>
							<div className="braveroom-feature-grid">
								{FEATURES.map((feature) => (
									<article key={feature.title}>
										<div className="braveroom-feature-mark" aria-hidden="true" />
										<h3>{feature.title}</h3>
										<p>{feature.description}</p>
									</article>
								))}
							</div>
						</section>

						<section className="braveroom-technical">
							<div className="braveroom-technical-copy">
								<span className="braveroom-section-label">Technical foundation</span>
								<h2>Built to move from research prototype to real deployment.</h2>
								<p>
									The self-contained application works with zero-configuration
									SQLite for small cohorts, PostgreSQL for concurrent production
									use, and a focused Socket.IO service for live presence and control.
								</p>
								<div className="braveroom-release-note">
									<FontAwesomeIcon icon={faGithub} />
									Architecture notes will launch with the public repository.
								</div>
							</div>
							<div className="braveroom-stack" aria-label="Technology stack">
								{STACK.map((item) => <span key={item}>{item}</span>)}
							</div>
						</section>

						<figure className="braveroom-library">
							<img
								src="/projects/braveroom/scenario-library-desktop.jpg"
								alt="BraveRoom scenario library with examples from education, the workplace, health care, and media literacy"
							/>
							<figcaption>
								The included examples span education, workplace feedback,
								health care, and misinformation response.
							</figcaption>
						</figure>

						<section className="braveroom-final-cta">
							<img src="/projects/braveroom/logo-alone-dark.png" alt="" aria-hidden="true" />
							<div>
								<span className="braveroom-section-label">In development</span>
								<h2>Public release coming soon.</h2>
								<p>
									BraveRoom is being prepared for release. The code,
									architecture notes, and deployment guide will be published on
									GitHub when they are ready.
								</p>
							</div>
							<span className="braveroom-button braveroom-button-status braveroom-button-status-light">
								<FontAwesomeIcon icon={faGithub} />
								Soon on GitHub
							</span>
						</section>
					</main>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default BraveRoom;
