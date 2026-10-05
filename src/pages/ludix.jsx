import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowDown,
	faArrowLeft,
	faArrowRight,
	faCheck,
	faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import { getSEO } from "../data/seo";
import { useLanguage } from "../i18n/LanguageContext";

import "./styles/ludix.css";

const STACK = [
	"Node.js",
	"Express",
	"SQLite",
	"ladyna / tna-js",
	"TreeSHAP",
];

const Ludix = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { lang, t } = useLanguage();
	const c = t.ludix;
	const currentSEO = getSEO(lang, "ludix");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Ludix | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content ludix-page">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="ludix-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<main className="ludix-container">
						<Link to="/projects" className="ludix-back-link">
							<FontAwesomeIcon icon={faArrowLeft} />
							{c.back}
						</Link>

						<section className="ludix-hero">
							<div className="ludix-hero-copy">
								<span className="ludix-kicker">{c.kicker}</span>
								<span className="ludix-wordmark" role="img" aria-label="Ludix">
									<img src="/projects/ludix/logo-light-tagline.svg" alt="" className="ludix-wordmark-light" />
									<img src="/projects/ludix/logo-dark-tagline.svg" alt="" className="ludix-wordmark-dark" />
								</span>
								<h1>{c.heroTitle}</h1>
								<p className="ludix-hero-lead">
									{c.heroLead}
								</p>
								<div className="ludix-actions">
									<a
										href="https://github.com/mjgm97/ludix-platform"
										target="_blank"
										rel="noopener noreferrer"
										className="ludix-button ludix-button-primary"
									>
										<FontAwesomeIcon icon={faGithub} />
										{c.viewSource}
									</a>
									<a href="#methods" className="ludix-button ludix-button-secondary">
										{c.exploreMethods}
										<FontAwesomeIcon icon={faArrowDown} />
									</a>
								</div>
								<div className="ludix-hero-tags" aria-label={c.heroTagsLabel}>
									{c.heroTags.map((tag) => (
									<span key={tag}>{tag}</span>
								))}
								</div>
							</div>

							<figure className="ludix-hero-visual">
								<div className="ludix-browser-chrome" aria-hidden="true">
									<span /><span /><span />
									<i>{c.browserLabel}</i>
								</div>
								<img
									src="/projects/ludix/overview.jpg"
									alt={c.heroImageAlt}
								/>
								<figcaption>{c.heroCaption}</figcaption>
							</figure>
						</section>

						<section className="ludix-problem">
							<div>
								<span className="ludix-section-label">{c.problemLabel}</span>
								<h2>{c.problemTitle}</h2>
							</div>
							<div className="ludix-problem-copy">
								<p>
									{c.problemP1}
								</p>
								<p>
									{c.problemP2}
								</p>
							</div>
						</section>

						<section className="ludix-thesis" aria-label={c.thesisAria}>
							<span className="ludix-thesis-index">L / 01</span>
							<div>
								<span className="ludix-section-label ludix-section-label-light">{c.thesisLabel}</span>
								<h2>{c.thesisTitle}</h2>
								<p>
									{c.thesisText}
								</p>
							</div>
						</section>

						<section className="ludix-pipeline">
							<div className="ludix-section-heading">
								<span className="ludix-section-label">{c.pipelineLabel}</span>
								<h2>{c.pipelineTitle}</h2>
								<p>
									{c.pipelineText}
								</p>
							</div>
							<div className="ludix-pipeline-grid">
								{c.pipeline.map((step) => (
									<article key={step.number}>
										<span>{step.number}</span>
										<h3>{step.title}</h3>
										<p>{step.description}</p>
									</article>
								))}
							</div>
						</section>

						<section id="methods" className="ludix-methods">
							<div className="ludix-section-heading">
								<span className="ludix-section-label">{c.methodsLabel}</span>
								<h2>{c.methodsTitle}</h2>
							</div>

							<div className="ludix-method-grid">
								{c.methods.map((method, index) => (
									<article key={method.title}>
										<div className="ludix-method-number">0{index + 1}</div>
										<span>{method.label}</span>
										<h3>{method.title}</h3>
										<p>{method.description}</p>
									</article>
								))}
							</div>

							{c.showcase.map((item, index) => (
								<div
									key={item.image}
									className={
										index % 2 === 1
											? "ludix-showcase-row ludix-showcase-row-reverse"
											: "ludix-showcase-row"
									}
								>
									<figure className="ludix-showcase-image">
										<img src={item.image} alt={item.alt} />
									</figure>
									<div className="ludix-showcase-copy">
										<span className="ludix-section-label">{item.label}</span>
										<h2>{item.title}</h2>
										<p>{item.text}</p>
									</div>
								</div>
							))}
						</section>

						<section className="ludix-rigor">
							<div className="ludix-rigor-copy">
								<span className="ludix-section-label ludix-section-label-light">{c.rigorLabel}</span>
								<h2>{c.rigorTitle}</h2>
								<p>
									{c.rigorText}
								</p>
								<ul>
									{c.rigorList.map((item) => (
										<li key={item}><FontAwesomeIcon icon={faCheck} /> {item}</li>
									))}
								</ul>
								<p className="ludix-method-reference">
									{c.referenceBefore}<a href="https://github.com/mohsaqr/tna-js" target="_blank" rel="noopener noreferrer">ladyna / tna-js</a>{c.referenceAfter}
								</p>
							</div>
							<figure className="ludix-rigor-visual">
								<img src="/projects/ludix/predict.jpg" alt={c.rigorImageAlt} />
								<figcaption>{c.rigorCaption}</figcaption>
							</figure>
						</section>

						<section className="ludix-principles">
							<div className="ludix-section-heading">
								<span className="ludix-section-label">{c.principlesLabel}</span>
								<h2>{c.principlesTitle}</h2>
							</div>
							<div className="ludix-principles-grid">
								{c.principles.map((principle) => (
									<article key={principle.title}>
										<div className="ludix-principle-mark" aria-hidden="true" />
										<h3>{principle.title}</h3>
										<p>{principle.description}</p>
									</article>
								))}
							</div>
						</section>

						<section className="ludix-open">
							<div className="ludix-open-copy">
								<span className="ludix-section-label">{c.openLabel}</span>
								<h2>{c.openTitle}</h2>
								<p>
									{c.openText}
								</p>
								<div className="ludix-export-note">
									<FontAwesomeIcon icon={faFileExport} />
									{c.exportNote}
								</div>
							</div>
							<div className="ludix-stack" aria-label={c.stackLabel}>
								{STACK.map((item) => <span key={item}>{item}</span>)}
							</div>
						</section>

						<section className="ludix-final-cta">
							<img src="/projects/ludix/mark.svg" alt="" aria-hidden="true" />
							<div>
								<span className="ludix-section-label ludix-section-label-light">{c.ctaLabel}</span>
								<h2>{c.ctaTitle}</h2>
								<p>
									{c.ctaText}
								</p>
							</div>
							<a
								href="https://github.com/mjgm97/ludix-platform"
								target="_blank"
								rel="noopener noreferrer"
								className="ludix-button ludix-button-light"
							>
								{c.ctaLink}
								<FontAwesomeIcon icon={faArrowRight} />
							</a>
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

export default Ludix;
