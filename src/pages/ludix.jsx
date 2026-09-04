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
import SEO from "../data/seo";

import "./styles/ludix.css";

const PIPELINE = [
	{
		number: "01",
		title: "Instrument",
		description: "Games emit a small, shared event shape: who did what, when, and in which session.",
	},
	{
		number: "02",
		title: "Model",
		description: "The same event stream becomes traces, transition networks, behaviour features, and cohorts.",
	},
	{
		number: "03",
		title: "Test",
		description: "Bootstrap confidence, permutation tests, and corrected effect estimates separate signal from noise.",
	},
	{
		number: "04",
		title: "Communicate",
		description: "Interactive views export as SVG or PNG for papers, presentations, and reproducible reporting.",
	},
];

const METHODS = [
	{
		label: "Sequence discovery",
		title: "Process mining",
		description: "Reconstruct directly-follows graphs, activity statistics, and the raw trace variants learners take through a game.",
	},
	{
		label: "Dynamic structure",
		title: "Transition network analysis",
		description: "Model play as a first-order Markov network, inspect centralities and state cliques, and bootstrap edge stability.",
	},
	{
		label: "Behavioural profiles",
		title: "Sequence clustering",
		description: "Group sessions by how learners move through a game using validated dissimilarities and quantified cluster quality.",
	},
	{
		label: "Interpretable modelling",
		title: "Explainable prediction",
		description: "Estimate outcomes from run-level behaviour, validate against held-out data, and explain predictions with exact TreeSHAP.",
	},
];

const RESEARCH_PRINCIPLES = [
	{
		title: "Game-agnostic by construction",
		description: "Every analysis reads one generic event model, so methods transfer between games and imported event logs without per-game analytics code.",
	},
	{
		title: "Reproducible by default",
		description: "Seeded randomized procedures make bootstrap, clustering, and train/test results repeatable from the same data and settings.",
	},
	{
		title: "Method provenance, visible",
		description: "Parameters, diagnostics, and statistical checks remain visible, so researchers can examine how each result was produced.",
	},
];

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

	const currentSEO = SEO.find((item) => item.page === "ludix");

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
							All projects
						</Link>

						<section className="ludix-hero">
							<div className="ludix-hero-copy">
								<span className="ludix-kicker">Open research software · 2026</span>
								<span className="ludix-wordmark" role="img" aria-label="Ludix">
									<img src="/projects/ludix/logo-light-tagline.svg" alt="" className="ludix-wordmark-light" />
									<img src="/projects/ludix/logo-dark-tagline.svg" alt="" className="ludix-wordmark-dark" />
								</span>
								<h1>From game events to defensible evidence.</h1>
								<p className="ludix-hero-lead">
									A game-agnostic platform for building serious games and
									turning their interaction data into reproducible learning
									analytics, including process discovery and explainable prediction.
								</p>
								<div className="ludix-actions">
									<a
										href="https://github.com/mjgm97/ludix-platform"
										target="_blank"
										rel="noopener noreferrer"
										className="ludix-button ludix-button-primary"
									>
										<FontAwesomeIcon icon={faGithub} />
										View source on GitHub
									</a>
									<a href="#methods" className="ludix-button ludix-button-secondary">
										Explore the methods
										<FontAwesomeIcon icon={faArrowDown} />
									</a>
								</div>
								<div className="ludix-hero-tags" aria-label="Project characteristics">
									<span>Game-agnostic</span>
									<span>Research-grade methods</span>
									<span>MIT licensed</span>
								</div>
							</div>

							<figure className="ludix-hero-visual">
								<div className="ludix-browser-chrome" aria-hidden="true">
									<span /><span /><span />
									<i>research workbench / overview</i>
								</div>
								<img
									src="/projects/ludix/overview.jpg"
									alt="Ludix educator dashboard showing games, players, sessions, runs, and events"
								/>
								<figcaption>One dashboard, one event model, every game.</figcaption>
							</figure>
						</section>

						<section className="ludix-problem">
							<div>
								<span className="ludix-section-label">Research motivation</span>
								<h2>Rich play data should not end in a silo.</h2>
							</div>
							<div className="ludix-problem-copy">
								<p>
									Serious games record decisions, timing, retries, paths, and
									outcomes. Yet those traces are often analysed ad hoc inside
									one game, making methods difficult to transfer and studies
									harder to reproduce.
								</p>
								<p>
									Ludix treats play as a shared research object. Any game or an
									external CSV or JSON event log can enter the same analytical
									pipeline, so evidence is comparable, inspectable, and ready to report.
								</p>
							</div>
						</section>

						<section className="ludix-thesis" aria-label="Ludix research thesis">
							<span className="ludix-thesis-index">L / 01</span>
							<div>
								<span className="ludix-section-label ludix-section-label-light">The core idea</span>
								<h2>One event model, many research questions.</h2>
								<p>
									When every method begins from the same record of who did what
									and when, analytics move with the data instead of remaining tied to the game that
									produced it.
								</p>
							</div>
						</section>

						<section className="ludix-pipeline">
							<div className="ludix-section-heading">
								<span className="ludix-section-label">Research workflow</span>
								<h2>From interaction trace to publishable finding.</h2>
								<p>
									A continuous analytical chain keeps data capture, modelling,
									statistical testing, and communication connected. Sequence and
									network computations use ladyna, whose results are validated against
									the R tna package to machine precision. Model explanations use exact
									TreeSHAP, so critical calculations rely on tested methods.
								</p>
							</div>
							<div className="ludix-pipeline-grid">
								{PIPELINE.map((step) => (
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
								<span className="ludix-section-label">Analytical workbench</span>
								<h2>Four lenses on how learning unfolds through play.</h2>
							</div>

							<div className="ludix-method-grid">
								{METHODS.map((method, index) => (
									<article key={method.title}>
										<div className="ludix-method-number">0{index + 1}</div>
										<span>{method.label}</span>
										<h3>{method.title}</h3>
										<p>{method.description}</p>
									</article>
								))}
							</div>

							<div className="ludix-showcase-row">
								<figure className="ludix-showcase-image">
									<img src="/projects/ludix/process.jpg" alt="Ludix process-mining view with activity statistics and trace variants" />
								</figure>
								<div className="ludix-showcase-copy">
									<span className="ludix-section-label">Processes, not just scores</span>
									<h2>See the routes learners take.</h2>
									<p>
										Ludix preserves raw traces, including loops and repeated actions,
										then surfaces common variants and longer routines without
										collapsing away the behaviour under study.
									</p>
								</div>
							</div>

							<div className="ludix-showcase-row ludix-showcase-row-reverse">
								<figure className="ludix-showcase-image">
									<img src="/projects/ludix/tna-network.jpg" alt="Ludix transition network with activity nodes and probability-weighted edges" />
								</figure>
								<div className="ludix-showcase-copy">
									<span className="ludix-section-label">Transitions as evidence</span>
									<h2>Model behaviour as a dynamic system.</h2>
									<p>
										Interactive transition networks reveal how activity states connect.
										Bootstrap validation helps distinguish stable pathways from edges
										that may simply reflect sampling noise.
									</p>
								</div>
							</div>

							<div className="ludix-showcase-row">
								<figure className="ludix-showcase-image">
									<img src="/projects/ludix/clustering.jpg" alt="Three Ludix behaviour clusters with transition networks and sequence index plots" />
								</figure>
								<div className="ludix-showcase-copy">
									<span className="ludix-section-label">Behavioural profiles</span>
									<h2>Compare ways of playing, not only outcomes.</h2>
									<p>
										Sequence clustering groups sessions by how learners move through a
										game. Each group can then be compared through its transition network,
										sequence patterns, and silhouette score.
									</p>
								</div>
							</div>
						</section>

						<section className="ludix-rigor">
							<div className="ludix-rigor-copy">
								<span className="ludix-section-label ludix-section-label-light">Methods &amp; reproducibility</span>
								<h2>Designed for claims that can be examined.</h2>
								<p>
									Ludix does not reimplement critical statistical methods from scratch.
									Transition networks, centralities, edge validation, and sequence
									clustering use ladyna, a tested JavaScript implementation validated
									against R tna. Tree-model explanations use the exact TreeSHAP
									algorithm. Seeded procedures and held-out diagnostics make the
									resulting analyses repeatable and easier to scrutinize.
								</p>
								<ul>
									<li><FontAwesomeIcon icon={faCheck} /> Bootstrap confidence for transition edges</li>
									<li><FontAwesomeIcon icon={faCheck} /> Permutation tests for cohort network differences</li>
									<li><FontAwesomeIcon icon={faCheck} /> Benjamini-Hochberg correction for pattern screening</li>
									<li><FontAwesomeIcon icon={faCheck} /> Exact path-dependent TreeSHAP explanations</li>
								</ul>
								<p className="ludix-method-reference">
									Method reference: <a href="https://github.com/mohsaqr/tna-js" target="_blank" rel="noopener noreferrer">ladyna / tna-js</a>, developed by Mohammed Saqr and Sonsoles López-Pernas.
								</p>
							</div>
							<figure className="ludix-rigor-visual">
								<img src="/projects/ludix/predict.jpg" alt="Ludix prediction view with held-out diagnostics and SHAP feature importance" />
								<figcaption>Held-out diagnostics and interpretable feature attribution.</figcaption>
							</figure>
						</section>

						<section className="ludix-principles">
							<div className="ludix-section-heading">
								<span className="ludix-section-label">Research infrastructure</span>
								<h2>Built to make methods travel.</h2>
							</div>
							<div className="ludix-principles-grid">
								{RESEARCH_PRINCIPLES.map((principle) => (
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
								<span className="ludix-section-label">Open research software</span>
								<h2>Inspect the full analytical chain.</h2>
								<p>
									The games, event model, backend, analytics, figures, and setup
									guide are public under the MIT License. A reference game and seeded
									demo make every analysis explorable from the first run.
								</p>
								<div className="ludix-export-note">
									<FontAwesomeIcon icon={faFileExport} />
									Publication-ready SVG and PNG export is built in.
								</div>
							</div>
							<div className="ludix-stack" aria-label="Technology and methods stack">
								{STACK.map((item) => <span key={item}>{item}</span>)}
							</div>
						</section>

						<section className="ludix-final-cta">
							<img src="/projects/ludix/mark.svg" alt="" aria-hidden="true" />
							<div>
								<span className="ludix-section-label ludix-section-label-light">Explore Ludix</span>
								<h2>Use it, inspect it, extend it.</h2>
								<p>
									Ludix is available as open-source research software for serious-games
									analytics, teaching, experimentation, and collaboration.
								</p>
							</div>
							<a
								href="https://github.com/mjgm97/ludix-platform"
								target="_blank"
								rel="noopener noreferrer"
								className="ludix-button ludix-button-light"
							>
								Open the repository
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
