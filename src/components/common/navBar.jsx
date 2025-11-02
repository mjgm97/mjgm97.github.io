import React from "react";
import { Link } from "react-router-dom";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../hooks/useTheme";

import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const { theme, toggleTheme } = useTheme();

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">Home</Link>
							</li>
							<li
								className={
									active === "research"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/research">Research</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">Projects</Link>
							</li>
							<li
								className={
									active === "teaching"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/teaching">Teaching</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="nav-right">
					<button className="theme-toggle" onClick={toggleTheme}>
						<FontAwesomeIcon
							icon={theme === "dark" ? faSun : faMoon}
							className="theme-icon"
						/>
					</button>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
