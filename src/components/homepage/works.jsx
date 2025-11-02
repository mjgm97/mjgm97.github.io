import React from "react";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import AnimatedCard from "../common/animatedCard";
import "./styles/works.css";

const Works = () => {
	return (
		<div className="works-grid">
			<AnimatedCard
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img src="./escudoUmu.jpg" alt="umu" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">FPI Predoctoral Researcher</div>
									<div className="work-duration">2023 - Present</div>
								</div>
								<div className="work-subtitle">
									Fundación Séneca. Department of Information and Communications Engineering, University of Murcia
								</div>
							</div>
						</div>

						<div className="work">
							<img src="./mit-circle.png" alt="mit" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">Visiting Scholar</div>
									<div className="work-duration">2024</div>
								</div>
								<div className="work-subtitle">
									Massachusetts Institute of Technology
								</div>
							</div>
						</div>
						<div className="work">
							<img src="./escudoUmu.jpg" alt="umu" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">Research Assisstant</div>
									<div className="work-duration">2021 - 2023</div>
								</div>
								<div className="work-subtitle">
									University of Murcia
								</div>
							</div>
						</div>
						<div className="work">
							<img src="./escudoUmu.jpg" alt="umu" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">Research Intern</div>
									<div className="work-duration">2020 - 2021</div>
								</div>
								<div className="work-subtitle">
									University of Murcia
								</div>
							</div>
						</div>
					</div>
				}
			/>

			<AnimatedCard
				icon={faGraduationCap}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							<img src="./escudoUmu.jpg" alt="umu" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">Ph.D. in Computer Science</div>
									<div className="work-duration">2025</div>
								</div>
								<div className="work-subtitle">
									University of Murcia, Spain
								</div>
							</div>
						</div>

						<div className="work">
							<img src="./escudoUmu.jpg" alt="upv" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">M.Sc. in Big Data Technologies</div>
									<div className="work-duration">2021</div>
								</div>
								<div className="work-subtitle">
									University of Murcia, Spain
								</div>
							</div>
						</div>

						<div className="work">
							<img src="./escudoUmu.jpg" alt="upv" className="work-image" />
							<div className="work-content">
								<div className="work-header">
									<div className="work-title">B.Sc. in Computer Science</div>
									<div className="work-duration">2020</div>
								</div>
								<div className="work-subtitle">
									University of Murcia, Spain
								</div>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
