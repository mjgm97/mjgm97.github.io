import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AnimatedCard from "../components/common/animatedCard";

import INFO from "../data/user";
import { getSEO } from "../data/seo";
import { useLanguage } from "../i18n/LanguageContext";
import PHD_PUBLICATIONS from "../data/phd_publications";
import TYPE_STYLES from "../data/publicationTypeStyles";

import "./styles/homepage.css"; // reuse layout classes
import "./styles/research.css";
import "./styles/phd.css";

// Highlight "Manuel J. Gomez" in author lists
const highlightAuthor = (text) => {
	if (!text) return text;
	const regex = /(Manuel\s*J\.?\s*Gomez)/gi;
	return text.replace(regex, '<span class="highlight-author">$1</span>');
};

const PhD = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { lang, t } = useLanguage();
	const currentSEO = getSEO(lang, "phd");
	const [expanded, setExpanded] = useState({});

	const toggleAbstract = (index) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	return (
		<>
			<Helmet>
				<title>{`${t.phd.pageTitle} | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="" />
				<div className="content-wrapper">
					<div className="phd-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>
					{/* === HERO SECTION (same layout language as the homepage) === */}
					<div className="hero thesis-hero">
						<div className="hero-text">
							<h1 className="hero-title">{t.phd.title}</h1>

							<h2 className="hero-role">
								{t.phd.thesisTitle}
							</h2>

							<p className="hero-description">
								{t.phd.thesisTitleAlt}
							</p>

							<p className="hero-description">
								<strong>{t.phd.supervisorsLabel}</strong> {t.phd.supervisors}
							</p>

							<div className="hero-actions">
								<a
									href="https://mjgm97.github.io/docs/full_thesis.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="link-btn primary"
								>
									{t.phd.fullVersion}
								</a>
								<a
									href="https://mjgm97.github.io/docs/short_thesis.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="link-btn secondary"
								>
									{t.phd.shortVersion}
								</a>
								<a
									href="https://mjgm97.github.io/docs/slides.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="link-btn secondary"
								>
									{t.phd.slides}
								</a>
							</div>
						</div>

						<div className="hero-visual">
							<div className="hero-photo-glow" />
							<div className="hero-photo-frame">
								<img
									src="/phdDefense.JPG"
									alt={t.phd.photoAlt}
									className="hero-photo"
								/>
							</div>
						</div>
					</div>
					{/* === Thesis Info Section === */}
					<div className="thesis-info glass-card" style={{marginTop: "40px", marginBottom: "0px"}}>
						<h2 className="thesis-info-title">{t.phd.defenseDetails}</h2>

						<div className="thesis-info-content">
							
							<p><strong>{t.phd.committeeLabel}</strong> {t.phd.committee}</p>
							<p><strong>{t.phd.dateLabel}</strong> {t.phd.date}</p>
							<p><strong>{t.phd.gradeLabel}</strong> {t.phd.grade}</p>
							<p><strong>{t.phd.honorsLabel}</strong> {t.phd.honors}</p>
						</div>
					</div>
					{/* === Publications Section === */}
					<div className="research-container" style={{paddingTop: "25px"}}>
						<div className="research-year-section" style={{marginTop: "0px", marginBottom: "50px"}}>
							<div className="year-line"></div>
							<h2 className="research-year-title st">
								<span className="year-text">{t.phd.publicationsIncluded}</span>
							</h2>
						</div>
						<div className="research-list">
							{PHD_PUBLICATIONS.map((pub, index) => (
								<AnimatedCard key={index} threshold={0.2}>
									<div
										className={`research-card glass-card ${expanded[index] ? "expanded" : ""
											}`}
										onClick={() => toggleAbstract(index)}
									>
										<div className="research-cover-wrap">
											<img
												src={pub.cover}
												alt={pub.title}
												className="research-cover"
												loading="lazy"
											/>
											{pub.type && (
												<span
													className={`cover-badge ${TYPE_STYLES[pub.type] || "journal"
														}`}
												>
													{t.publications.types[pub.type] || pub.type}
												</span>
											)}
										</div>

										<div className="research-right">
											{pub.journal && (
												<div className="research-journal">{pub.journal}</div>
											)}

											<h3 className="research-article-title">{pub.title}</h3>
											<p
												className="research-authors"
												dangerouslySetInnerHTML={{
													__html: highlightAuthor(pub.authors),
												}}
											></p>

											<div
												className={`abstract-wrapper ${expanded[index] ? "show" : "hide"
													}`}
											>
												<p className="research-abstract">{pub.abstract}</p>
											</div>

											<div className="research-links">
												<a
													href={pub.publisherLink}
													target="_blank"
													rel="noopener noreferrer"
													className="link-btn primary"
													onClick={(e) => e.stopPropagation()}
												>
													{t.publications.externalLink}
												</a>
												<a
													href={pub.download}
													target="_blank"
													rel="noopener noreferrer"
													className="link-btn secondary"
													onClick={(e) => e.stopPropagation()}
												>
													{t.publications.download}
												</a>
												<button
													className="abstract-toggle"
													onClick={(e) => {
														e.stopPropagation();
														toggleAbstract(index);
													}}
												>
													{expanded[index]
														? t.publications.hideAbstract : t.publications.showAbstract}
												</button>
											</div>
										</div>
									</div>
								</AnimatedCard>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default PhD;