import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AnimatedCard from "../components/common/animatedCard";

import INFO from "../data/user";
import PHD_PUBLICATIONS from "../data/phd_publications";
import SEO from "../data/seo";

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

	const currentSEO = SEO.find((item) => item.page === "phd");
	const [expanded, setExpanded] = useState({});

	const toggleAbstract = (index) => {
		setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
	};

	return (
		<>
			<Helmet>
				<title>{`PhD | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="" />
				<div className="content-wrapper">
					<div className="phd-logo-container">
						<div className="phd-logo">
							<Logo width={45} />
						</div>
					</div>
					{/* === HERO SECTION (two columns like homepage) === */}
					<div className="homepage-first-area">
						<div className="homepage-first-area-left-side">
							<div className="homepage-heading">
								<h1 className="homepage-title underline-animated">Ph.D. Thesis</h1>
								<h2 className="homepage-subtitle-accent" style= {{marginBottom: "0px;"}}>
									Towards Interoperability and Novel Methodological Approaches
									for Scalable Game-Based Assessment
								</h2>
								<p className="homepage-subtitle">
									Hacia la interoperabilidad y nuevos enfoques metodológicos
									para la evaluación escalable basada en juegos
								</p>
								<p className="homepage-subtitle"><strong>Supervisors:</strong> Dr. Félix Jesús García Clemente and Dr. José Antonio Ruipérez Valiente</p>
							</div>

							{/* Buttons under subtitle */}
							<div
								className="thesis-buttons"
								style={{
									marginTop: "60px",
									display: "flex",
									flexWrap: "wrap",
									gap: "15px",
								}}
							>
								<a
									href="https://mjgm97.github.io/docs/full_thesis.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="glass-btn"
								>
									<i className="fa fa-file-pdf-o"></i> Full Version
								</a>
								<a
									href="https://mjgm97.github.io/docs/short_thesis.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="glass-btn secondary"
								>
									<i className="fa fa-file-pdf-o"></i> Short Version
								</a>
								<a
									href="https://mjgm97.github.io/docs/slides.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="glass-btn"
									style={{ background: "rgba(132,103,215,0.25)" }}
								>
									<i className="fa fa-file-powerpoint-o"></i> Slides
								</a>
							</div>
						</div>

						<div className="homepage-first-area-right-side">
							<div className="homepage-image-container">
								<div className="homepage-image-wrapper">
									<img
										src="/phdDefense.JPG"
										alt="PhD Thesis"
										className="homepage-image"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* === Thesis Info Section === */}
					<div className="thesis-info glass-card" style={{marginTop: "40px", marginBottom: "0px"}}>
						<h2 className="thesis-info-title">🎓 Defense Details</h2>

						<div className="thesis-info-content">
							
							<p><strong>Thesis Defense Committee:</strong> Ms. Ruth Cobos Pérez (Chair), Mr. Óscar Cánovas Reverte (Secretary), and Ms. Sonsoles López Pernas (External Member)</p>
							<p><strong>Date of the Defense:</strong> 03/10/2025</p>
							<p><strong>Grade:</strong> Sobresaliente</p>
							<p><strong>Honors:</strong> “Cum Laude” and “International Doctorate”</p>
						</div>
					</div>
					{/* === Publications Section === */}
					<div className="research-container" style={{paddingTop: "25px"}}>
						<div className="research-year-section" style={{marginTop: "0px", marginBottom: "50px"}}>
							<div className="year-line"></div>
							<h2 className="research-year-title st">
								<span className="year-text">Publications included</span>
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
										<div className="research-left">
											<img
												src={pub.cover}
												alt={pub.title}
												className="research-cover"
											/>
										</div>

										<div className="research-right">
											<div className="research-meta">
												<span className="meta-badge type">{pub.type}</span>
												<span className="meta-badge journal">{pub.journal}</span>
											</div>

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
													className="glass-btn"
													onClick={(e) => e.stopPropagation()}
												>
													🌐 External Link
												</a>
												<a
													href={pub.download}
													target="_blank"
													rel="noopener noreferrer"
													className="glass-btn secondary"
													onClick={(e) => e.stopPropagation()}
												>
													⬇️ Download
												</a>
												<div className="collapse-right">
													<button
														className="glass-btn toggle-btn"
														onClick={(e) => {
															e.stopPropagation();
															toggleAbstract(index);
														}}
													>
														{expanded[index]
															? "Hide Abstract"
															: "Show Abstract"}
													</button>
												</div>
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