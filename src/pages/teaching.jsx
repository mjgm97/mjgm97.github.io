import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import TEACHING, { getTeaching } from "../data/teaching";
import { getSEO } from "../data/seo";
import { useLanguage } from "../i18n/LanguageContext";

import "./styles/teaching.css";

const FACULTIES = {
	informatica: {
		logo: "/informatica-2.svg",
	},
	comunicacion: {
		logo: "/comunicacion-2.svg",
	},
};

const FacultyBadge = ({ faculty }) => {
	const { t } = useLanguage();
	const info = FACULTIES[faculty];
	if (!info) return null;
	const name = t.teaching.faculties[faculty];
	return (
		<span className="faculty-badge" title={name}>
			<img src={info.logo} alt={name} className="faculty-logo" />
		</span>
	);
};

const STATS = [
	{
		number: `${TEACHING.undergraduateCourses.length + TEACHING.graduateCourses.length}`,
		label: "courses",
	},
	{
		number: `${TEACHING.masterTheses.length + TEACHING.degreeTheses.length}+`,
		label: "theses",
	},
	{ number: "2022", label: "since" },
];

const Teaching = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { lang, t } = useLanguage();
	const currentSEO = getSEO(lang, "teaching");
	const teaching = getTeaching(lang);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${t.teaching.pageTitle} | ${INFO.main.title}`}</title>
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
									alt={t.teaching.university}
									className="eyebrow-crest"
								/>
								{t.teaching.university}
							</span>

							<h1 className="teaching-title">{t.teaching.title}</h1>

							<p className="teaching-subtitle">
								{t.teaching.subtitle}
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
												{t.teaching.stats[stat.label]}
											</span>
										</div>
									</React.Fragment>
								))}
							</div>
						</div>

						{/* === Undergraduate & Graduate Studies === */}
						<div className="teaching-row">
							<div className="glass-card teaching-section">
								<h2 className="section-title">{t.teaching.undergraduate}</h2>
								<div className="teaching-list">
									{teaching.undergraduateCourses.map((course, i) => (
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
								<h2 className="section-title">{t.teaching.graduate}</h2>
								<div className="teaching-list">
									{teaching.graduateCourses.map((course, i) => (
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
							<h2 className="section-title">{t.teaching.masterTheses}</h2>
							<div className="thesis-grid">
								{teaching.masterTheses.map((thesis, i) => (
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
							<h2 className="section-title">{t.teaching.degreeTheses}</h2>
							<div className="thesis-grid">
								{teaching.degreeTheses.map((thesis, i) => (
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
