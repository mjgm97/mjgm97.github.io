import React, { useRef, useEffect, useState } from "react";
import {
	faBriefcase,
	faGraduationCap,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/works.css";

/*
 * Unified, chronologically-ordered timeline.
 * Experience and education entries live in a single list and alternate
 * sides of a central spine, so the layout stays balanced no matter how
 * many items are added to either category — just append to TIMELINE.
 * `sort` is a numeric key (higher = more recent) used for ordering.
 */
const TIMELINE = [
	{
		type: "experience",
		title: "FPI Predoctoral Researcher",
		org: "Fundación Séneca · Department of Information and Communications Engineering, University of Murcia",
		date: "2023 — Present",
		img: "./escudoUmu.jpg",
		sort: 2027,
		current: true,
	},
	{
		type: "experience",
		title: "Visiting Researcher",
		org: "University of Eastern Finland",
		date: "2026",
		img: "./uefLogo.jpeg",
		sort: 2026,
	},
	{
		type: "education",
		title: "Ph.D. in Computer Science",
		org: "University of Murcia, Spain",
		date: "2025",
		img: "./escudoUmu.jpg",
		sort: 2025,
		link: "/phd",
	},
	{
		type: "experience",
		title: "Visiting Scholar",
		org: "Massachusetts Institute of Technology",
		date: "2024",
		img: "./mit-circle.png",
		sort: 2024,
	},
	{
		type: "experience",
		title: "Research Assistant",
		org: "University of Murcia",
		date: "2021 — 2023",
		img: "./escudoUmu.jpg",
		sort: 2023,
	},
	{
		type: "education",
		title: "M.Sc. in Big Data Technologies",
		org: "University of Murcia, Spain",
		date: "2021",
		img: "./escudoUmu.jpg",
		sort: 2021.5,
	},
	{
		type: "experience",
		title: "Research Intern",
		org: "University of Murcia",
		date: "2020 — 2021",
		img: "./escudoUmu.jpg",
		sort: 2021,
	},
	{
		type: "education",
		title: "B.Sc. in Computer Science",
		org: "University of Murcia, Spain",
		date: "2020",
		img: "./escudoUmu.jpg",
		sort: 2020,
	},
];

const FILTERS = [
	{ key: "all", label: "All", icon: null },
	{ key: "experience", label: "Experience", icon: faBriefcase },
	{ key: "education", label: "Education", icon: faGraduationCap },
];

const Works = () => {
	const [filter, setFilter] = useState("all");
	const timelineRef = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const node = timelineRef.current;
		if (!node) return;
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setInView(true);
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	const counts = {
		experience: TIMELINE.filter((i) => i.type === "experience").length,
		education: TIMELINE.filter((i) => i.type === "education").length,
	};

	const items = [...TIMELINE]
		.sort((a, b) => b.sort - a.sort)
		.filter((i) => filter === "all" || i.type === filter);

	return (
		<div className="timeline-section">
			<div className="tl-legend" role="tablist" aria-label="Filter timeline">
				{FILTERS.map((f) => (
					<button
						key={f.key}
						type="button"
						role="tab"
						aria-selected={filter === f.key}
						className={`tl-chip ${f.key} ${
							filter === f.key ? "active" : ""
						}`}
						onClick={() => setFilter(f.key)}
					>
						{f.icon && <FontAwesomeIcon icon={f.icon} />}
						<span>{f.label}</span>
						{f.key !== "all" && (
							<span className="tl-chip-count">{counts[f.key]}</span>
						)}
					</button>
				))}
			</div>

			<div
				ref={timelineRef}
				className={`timeline ${inView ? "in-view" : ""}`}
			>
				{items.map((item, idx) => {
					const CardTag = item.link ? "a" : "div";
					const cardProps = item.link ? { href: item.link } : {};
					return (
						<div
							key={`${item.title}-${item.date}`}
							className={`tl-item ${item.type} ${
								idx % 2 === 0 ? "left" : "right"
							}`}
							style={{ transitionDelay: `${idx * 70}ms` }}
						>
							<span className="tl-node" aria-hidden="true">
								<FontAwesomeIcon
									icon={
										item.type === "experience"
											? faBriefcase
											: faGraduationCap
									}
								/>
							</span>

							<CardTag
								className={`tl-card ${item.link ? "linked" : ""}`}
								{...cardProps}
							>
								<div className="tl-card-top">
									<img
										src={item.img}
										alt=""
										className="tl-logo"
									/>
									<span className="tl-tag">
										{item.type === "experience"
											? "Experience"
											: "Education"}
									</span>
									{item.current && (
										<span className="tl-live">
											<span className="tl-live-dot" />
											Ongoing
										</span>
									)}
									<span className="tl-date">{item.date}</span>
								</div>

								<h4 className="tl-title">
									{item.title}
									{item.link && (
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="tl-title-icon"
										/>
									)}
								</h4>
								<p className="tl-org">{item.org}</p>
							</CardTag>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Works;
