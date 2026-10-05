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
import { getSEO } from "../data/seo";
import { useLanguage } from "../i18n/LanguageContext";

import "./styles/braveroom.css";

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

	const { lang, t } = useLanguage();
	const c = t.braveroom;
	const currentSEO = getSEO(lang, "braveroom");

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
							{c.back}
						</Link>

						<section className="braveroom-hero">
							<div className="braveroom-hero-copy">
								<span className="braveroom-kicker">{c.kicker}</span>
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
								<h1>{c.heroTitle}</h1>
								<p className="braveroom-hero-lead">
									{c.heroLead}
								</p>
								<div className="braveroom-actions">
									<span className="braveroom-button braveroom-button-status">
										<FontAwesomeIcon icon={faGithub} />
										{c.comingSoon}
									</span>
									<a href="#how-it-works" className="braveroom-button braveroom-button-secondary">
										{c.explore}
										<FontAwesomeIcon icon={faArrowDown} />
									</a>
								</div>
								<div className="braveroom-hero-tags" aria-label={c.heroTagsLabel}>
									{c.heroTags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
									<a href="#ai-integration">{c.heroTagAi}</a>
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
									alt={c.heroImageAlt}
								/>
								<figcaption>{c.heroCaption}</figcaption>
							</figure>
						</section>

						<section className="braveroom-origin">
							<div>
								<span className="braveroom-section-label">{c.originLabel}</span>
								<h2>{c.originTitle}</h2>
							</div>
							<div className="braveroom-origin-copy">
								<p>
									{c.originP1}
								</p>
								<p>
									{c.originP2Before}
									<em>Teacher Moments</em>
									{c.originP2After}
								</p>
							</div>
						</section>

						<section id="how-it-works" className="braveroom-workflow">
							<div className="braveroom-section-heading">
								<span className="braveroom-section-label">{c.workflowLabel}</span>
								<h2>{c.workflowTitle}</h2>
								<p>
									{c.workflowLead}
								</p>
							</div>
							<div className="braveroom-workflow-grid">
								{c.capabilities.map((capability) => (
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
										alt={c.editorImageAlt}
									/>
								</div>
								<div className="braveroom-showcase-copy">
									<span className="braveroom-section-label">{c.authoringLabel}</span>
									<h2>{c.authoringTitle}</h2>
									<p>
										{c.authoringText}
									</p>
									<ul>
										{c.authoringList.map((item) => (
											<li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>
										))}
									</ul>
								</div>
							</div>

							<div className="braveroom-showcase-row braveroom-showcase-row-reverse">
								<div className="braveroom-showcase-image">
									<img
										src="/projects/braveroom/live-room-desktop.jpg"
										alt={c.liveImageAlt}
									/>
								</div>
								<div className="braveroom-showcase-copy">
									<span className="braveroom-section-label">{c.liveLabel}</span>
									<h2>{c.liveTitle}</h2>
									<p>
										{c.liveText}
									</p>
									<ul>
										{c.liveList.map((item) => (
											<li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>
										))}
									</ul>
								</div>
							</div>
						</section>

						<section id="ai-integration" className="braveroom-ai" aria-labelledby="braveroom-ai-title">
							<div className="braveroom-ai-copy">
								<span className="braveroom-section-label">{c.aiLabel}</span>
								<h2 id="braveroom-ai-title">{c.aiTitle}</h2>
								<p>
									{c.aiText}
								</p>
								<ul>
									{c.aiList.map((item) => (
										<li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>
									))}
								</ul>
							</div>

							<div className="braveroom-ai-demo" aria-label={c.aiDemoLabel}>
								<div className="braveroom-ai-demo-heading">
									<span>{c.aiDemoHeading}</span>
									<span className="braveroom-ai-status"><i /> {c.aiStatus}</span>
								</div>

								<div className="braveroom-ai-panels">
									<div className="braveroom-ai-panel braveroom-ai-authoring">
										<div className="braveroom-ai-panel-title">
											<span>01</span>
											<strong>{c.aiAuthorTitle}</strong>
										</div>
										<div className="braveroom-ai-field">
											<span>{c.aiCharacterLabel}</span>
											<strong>{c.aiCharacter}</strong>
										</div>
										<div className="braveroom-ai-field">
											<span>{c.aiOpeningLabel}</span>
											<p>“{c.aiOpening}”</p>
										</div>
										<div className="braveroom-ai-instruction">
											{c.aiInstruction}
										</div>
									</div>

									<div className="braveroom-ai-panel braveroom-ai-conversation">
										<div className="braveroom-ai-panel-title">
											<span>02</span>
											<strong>{c.aiRespondTitle}</strong>
										</div>
										<div className="braveroom-ai-message braveroom-ai-message-persona">
											<span>{c.aiCharacter}</span>
											<p>{c.aiOpening}</p>
										</div>
										<div className="braveroom-ai-message braveroom-ai-message-user">
											<span>{c.aiYou}</span>
											<p>{c.aiReply}</p>
										</div>
									</div>
								</div>

								<div className="braveroom-ai-flow" aria-hidden="true">
									<span>{c.aiFlow[0]}</span><i />
									<span>{c.aiFlow[1]}</span><i />
									<span>{c.aiFlow[2]}</span>
								</div>
							</div>
						</section>

						<section className="braveroom-features">
							<div className="braveroom-section-heading">
								<span className="braveroom-section-label">{c.featuresLabel}</span>
								<h2>{c.featuresTitle}</h2>
							</div>
							<div className="braveroom-feature-grid">
								{c.features.map((feature) => (
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
								<span className="braveroom-section-label">{c.technicalLabel}</span>
								<h2>{c.technicalTitle}</h2>
								<p>
									{c.technicalText}
								</p>
								<div className="braveroom-release-note">
									<FontAwesomeIcon icon={faGithub} />
									{c.releaseNote}
								</div>
							</div>
							<div className="braveroom-stack" aria-label={c.stackLabel}>
								{STACK.map((item) => <span key={item}>{item}</span>)}
							</div>
						</section>

						<figure className="braveroom-library">
							<img
								src="/projects/braveroom/scenario-library-desktop.jpg"
								alt={c.libraryImageAlt}
							/>
							<figcaption>
								{c.libraryCaption}
							</figcaption>
						</figure>

						<section className="braveroom-final-cta">
							<img src="/projects/braveroom/logo-alone-dark.png" alt="" aria-hidden="true" />
							<div>
								<span className="braveroom-section-label">{c.ctaLabel}</span>
								<h2>{c.ctaTitle}</h2>
								<p>
									{c.ctaText}
								</p>
							</div>
							<span className="braveroom-button braveroom-button-status braveroom-button-status-light">
								<FontAwesomeIcon icon={faGithub} />
								{c.ctaStatus}
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
