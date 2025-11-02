import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import TEACHING from "../data/teaching";
import SEO from "../data/seo";

import "./styles/teaching.css";

const Teaching = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "teaching");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Teaching | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta name="keywords" content={currentSEO.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar active="teaching" />

				<div className="content-wrapper">
					<div className="teaching-logo-container">
						<div className="teaching-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="teaching-container">
						<h1 className="underline-animated teaching-title">
							Teaching & Supervision
						</h1>

						<p className="teaching-subtitle fade-slide">
							I teach undergraduate and graduate courses in computer science,
							artificial intelligence, and educational technologies, and I supervise
							different master and degree theses exploring AI and learning analytics.
						</p>

						{/* === Undergraduate & Graduate Studies === */}
						<div className="teaching-row">
							<div className="supervision-section glass-card fade-slide">
								<h2 className="section-title underline-animated">Undergraduate Studies</h2>
								<div className="subcard-grid">
									{TEACHING.undergraduateCourses.map((course, i) => (
										<div className="subcard glass-subcard" key={i}>
											<div className="subcard-header">
												<img
													src={course.logo}
													alt={`${course.university} logo`}
													className="university-logo"
												/>
												<div className="subcard-text">
													<div className="subcard-top">
														<h3 className="subcard-title">{course.title}</h3>
														<span className="subcard-year">{course.years}</span>
													</div>
													<p className="subcard-detail">
														{course.degree}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="supervision-section glass-card fade-slide">
								<h2 className="section-title underline-animated">Graduate Studies</h2>
								<div className="subcard-grid">
									{TEACHING.graduateCourses.map((course, i) => (
										<div className="subcard glass-subcard" key={i}>
											<div className="subcard-header">
												<img
													src={course.logo}
													alt={`${course.university} logo`}
													className="university-logo"
												/>
												<div className="subcard-text">
													<div className="subcard-top">
														<h3 className="subcard-title">{course.title}</h3>
														<span className="subcard-year">{course.years}</span>
													</div>
													<p className="subcard-detail">
														{course.degree}
													</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* === Master’s Thesis Supervision === */}
						<div className="supervision-section glass-card fade-slide">
							<h2 className="section-title underline-animated">Master’s Thesis Supervision</h2>
							<div className="subcard-grid">
								{TEACHING.masterTheses.map((thesis, i) => (
									<div className="subcard glass-subcard thesis-card" key={i}>
										<p className="subcard-year thesis-year">{thesis.year}</p>
										<h3 className="subcard-title">{thesis.title}</h3>
										<p className="subcard-student">{thesis.student}</p>
										<p className="subcard-detail">
											{thesis.university} — {thesis.degree}
										</p>
									</div>
								))}
							</div>
						</div>

						{/* === Degree Thesis Supervision === */}
						<div className="supervision-section glass-card fade-slide">
							<h2 className="section-title">Degree Thesis Supervision</h2>
							<div className="subcard-grid">
								{TEACHING.degreeTheses.map((thesis, i) => (
									<div className="subcard glass-subcard thesis-card" key={i}>
										<p className="subcard-year thesis-year">{thesis.year}</p>
										<h3 className="subcard-title">{thesis.title}</h3>
										<p className="subcard-student">{thesis.student}</p>
										<p className="subcard-detail">
											{thesis.university} — {thesis.degree}
										</p>
									</div>
								))}
							</div>
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

export default Teaching;


