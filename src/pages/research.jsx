import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AnimatedCard from "../components/common/animatedCard";

import INFO from "../data/user";
import SEO from "../data/seo";
import PUBLICATIONS from "../data/publications";
import TYPE_STYLES from "../data/publicationTypeStyles";

import "./styles/research.css";

// Highlight "Manuel J. Gomez" in author lists
const highlightAuthor = (text) => {
	if (!text) return text;
	const regex = /(Manuel\s*J\.?\s*Gomez)/gi;
	return text.replace(
		regex,
		'<span class="highlight-author">$1</span>'
	);
};

const Research = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "research");

	// Group publications by year
	const groupedPublications = PUBLICATIONS.reduce((acc, pub) => {
		if (!acc[pub.year]) acc[pub.year] = [];
		acc[pub.year].push(pub);
		return acc;
	}, {});
	const sortedYears = Object.keys(groupedPublications).sort((a, b) => b - a);

	const [expanded, setExpanded] = useState({});

	const toggleAbstract = (index) => {
		setExpanded((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	// === Load More logic ===
	const [visibleYears, setVisibleYears] = useState(() =>
		Math.min(2, sortedYears.length)
	);

	const handleLoadMore = () => {
		if (visibleYears < sortedYears.length) {
			setVisibleYears((prev) => prev + 1);
			setTimeout(() => {
				const nextYear = sortedYears[visibleYears];
				const nextSection = document.getElementById(`year-${nextYear}`);
				if (nextSection) {
					nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
				}
			}, 400); // small delay to ensure animation/rendering
		}
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Research | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="research" />
				<div className="content-wrapper">
					<div className="research-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<div className="research-container">
						<div className="research-heading">
							<span className="page-eyebrow">
								<span className="page-eyebrow-dot" />
								{PUBLICATIONS.length}+ Publications since 2020
							</span>
							<h1 className="research-title">
								{INFO.about.title}
							</h1>
							<p className="research-subtitle">
								I explore how Artificial Intelligence, Learning
								Analytics, and Serious Games can improve the way we understand,
								assess, and design learning experiences. My work focuses on
								developing explainable and interoperable systems that connect
								gameplay data with educational insights, making learning
								processes more measurable, transparent, and scalable.
							</p>
						</div>

						{/* === Publications grouped by year === */}
						{sortedYears.slice(0, visibleYears).map((year) => (
							<div key={year} id={`year-${year}`} className="research-year-group">
								<div className="research-year-section">
									<div className="year-line"></div>
									<h2 className="research-year-title">
										<span className="year-text">{year}</span>
									</h2>
								</div>

								<div className="research-list">
									{groupedPublications[year].map((pub, index) => {
										const id = `${year}-${index}`;
										return (
											<AnimatedCard key={id} threshold={0.2}>
												<div
													className={`research-card glass-card ${expanded[id] ? "expanded" : ""
														}`}
													onClick={() => toggleAbstract(id)}
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
																{pub.type}
															</span>
														)}
													</div>

													<div className="research-right">
														{pub.journal && (
															<div className="research-journal">
																{pub.journal}
															</div>
														)}

														<h3 className="research-article-title">
															{pub.title}
														</h3>
														<p
															className="research-authors"
															dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
														></p>

														<div
															className={`abstract-wrapper ${expanded[id] ? "show" : "hide"
																}`}
														>
															{pub.abstract && (
																<p className="research-abstract">{pub.abstract}</p>
															)}
														</div>

														<div className="research-links">
															{pub.publisherLink && (
																<a
																	href={pub.publisherLink}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="link-btn primary"
																	onClick={(e) => e.stopPropagation()}
																>
																	External Link
																</a>
															)}
															{pub.download && (
																<a
																	href={pub.download}
																	target="_blank"
																	rel="noopener noreferrer"
																	className="link-btn secondary"
																	onClick={(e) => e.stopPropagation()}
																>
																	Download
																</a>
															)}
															<button
																className="abstract-toggle"
																onClick={(e) => {
																	e.stopPropagation();
																	toggleAbstract(id);
																}}
															>
																{expanded[id] ? "Hide Abstract" : "Show Abstract"}
															</button>
														</div>
													</div>
												</div>
											</AnimatedCard>
										);
									})}
								</div>
							</div>
						))}
						{visibleYears < sortedYears.length && (
							<div className={`load-more-container ${visibleYears === sortedYears.length ? "fade-out" : ""}`}>
								<button className="load-more-btn" onClick={handleLoadMore}>
									Load More
								</button>
							</div>
						)}
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Research;


