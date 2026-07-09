import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import TEACHING from "../data/teaching";
import SEO from "../data/seo";

import "./styles/teaching.css";

const FACULTIES = {
	informatica: {
		logo: "/informatica-2.svg",
		name: "Faculty of Computer Science, University of Murcia",
	},
	comunicacion: {
		logo: "/comunicacion-2.svg",
		name: "Faculty of Communication and Documentation, University of Murcia",
	},
};

const FacultyBadge = ({ faculty }) => {
	const info = FACULTIES[faculty];
	if (!info) return null;
	return (
		<span className="faculty-badge" title={info.name}>
			<img src={info.logo} alt={info.name} className="faculty-logo" />
		</span>
	);
};

const STATS = [
	{
		number: `${TEACHING.undergraduateCourses.length + TEACHING.graduateCourses.length}`,
		label: "Courses Taught",
	},
	{
		number: `${TEACHING.masterTheses.length + TEACHING.degreeTheses.length}+`,
		label: "Theses Supervised",
	},
	{ number: "2022", label: "Teaching Since" },
];

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
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<div className="teaching-container">
						<div className="teaching-heading">
							<span className="page-eyebrow">
								<img
									src="/escudoUmu.jpg"
									alt="University of Murcia"
									className="eyebrow-crest"
								/>
								University of Murcia
							</span>

							<h1 className="teaching-title">Teaching &amp; Supervision</h1>

							<p className="teaching-subtitle">
								I teach undergraduate and graduate courses in computer
								science, artificial intelligence, and educational
								technologies, and I supervise different master and degree
								theses exploring AI and learning analytics.
							</p>

							<div className="teaching-stats">
								{STATS.map((stat, index) => (
									<React.Fragment key={stat.label}>
										{index > 0 && <span className="teaching-stat-divider" />}
										<div className="teaching-stat">
											<span className="teaching-stat-number">
												{stat.number}
											</span>
											<span className="teaching-stat-label">
												{stat.label}
											</span>
										</div>
									</React.Fragment>
								))}
							</div>
						</div>

						{/* === Undergraduate & Graduate Studies === */}
						<div className="teaching-row">
							<div className="glass-card teaching-section">
								<h2 className="section-title">Undergraduate Studies</h2>
								<div className="teaching-list">
									{TEACHING.undergraduateCourses.map((course, i) => (
										<div className="teaching-item" key={i}>
											<FacultyBadge faculty={course.faculty} />
											<div className="teaching-item-content">
												<div className="teaching-item-top">
													<h3 className="teaching-item-title">
														{course.title}
													</h3>
													<span className="teaching-item-year">
														{course.years}
													</span>
												</div>
												<p className="teaching-item-detail">
													{course.degree}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>

							<div className="glass-card teaching-section">
								<h2 className="section-title">Graduate Studies</h2>
								<div className="teaching-list">
									{TEACHING.graduateCourses.map((course, i) => (
										<div className="teaching-item" key={i}>
											<FacultyBadge faculty={course.faculty} />
											<div className="teaching-item-content">
												<div className="teaching-item-top">
													<h3 className="teaching-item-title">
														{course.title}
													</h3>
													<span className="teaching-item-year">
														{course.years}
													</span>
												</div>
												<p className="teaching-item-detail">
													{course.degree}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						{/* === Master's Thesis Supervision === */}
						<div className="glass-card teaching-section">
							<h2 className="section-title">Master&rsquo;s Thesis Supervision</h2>
							<div className="thesis-grid">
								{TEACHING.masterTheses.map((thesis, i) => (
									<div className="thesis-card" key={i}>
										<div className="thesis-card-top">
											<span className="thesis-year">{thesis.year}</span>
											<FacultyBadge faculty={thesis.faculty} />
										</div>
										<h3 className="thesis-title">{thesis.title}</h3>
										<p className="thesis-student">{thesis.student}</p>
										<p className="thesis-detail">{thesis.degree}</p>
									</div>
								))}
							</div>
						</div>

						{/* === Degree Thesis Supervision === */}
						<div className="glass-card teaching-section">
							<h2 className="section-title">Degree Thesis Supervision</h2>
							<div className="thesis-grid">
								{TEACHING.degreeTheses.map((thesis, i) => (
									<div className="thesis-card" key={i}>
										<div className="thesis-card-top">
											<span className="thesis-year">{thesis.year}</span>
											<FacultyBadge faculty={thesis.faculty} />
										</div>
										<h3 className="thesis-title">{thesis.title}</h3>
										<p className="thesis-student">{thesis.student}</p>
										<p className="thesis-detail">{thesis.degree}</p>
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
