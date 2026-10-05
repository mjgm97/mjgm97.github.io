import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	faBars,
	faMoon,
	faSun,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../hooks/useTheme";
import {
	useLanguage,
	LANGUAGES,
	LANGUAGE_NAMES,
} from "../../i18n/LanguageContext";

import "./styles/navBar.css";

const NAV_ITEMS = [
	{ key: "home", to: "/" },
	{ key: "research", to: "/research" },
	{ key: "projects", to: "/projects" },
	{ key: "teaching", to: "/teaching" },
	{ key: "contact", to: "/contact" },
];

const LanguageSwitch = () => {
	const { lang, setLang, t } = useLanguage();

	return (
		<div className="lang-switch" role="group" aria-label={t.nav.language}>
			{LANGUAGES.map((code) => (
				<button
					key={code}
					type="button"
					lang={code}
					className={
						lang === code ? "lang-option active" : "lang-option"
					}
					aria-pressed={lang === code}
					aria-label={LANGUAGE_NAMES[code]}
					title={LANGUAGE_NAMES[code]}
					onClick={() => setLang(code)}
				>
					{code.toUpperCase()}
				</button>
			))}
		</div>
	);
};

// Language and color theme share one control group. It is rendered as a
// floating pill on wide screens and inside the burger menu on narrow ones.
const Controls = ({ className, theme, toggleTheme }) => {
	const { t } = useLanguage();

	return (
		<div className={`nav-controls ${className}`}>
			<LanguageSwitch />
			<span className="nav-controls-divider" aria-hidden="true" />
			<button
				type="button"
				className="theme-toggle"
				onClick={toggleTheme}
				aria-label={t.nav.toggleTheme}
				title={t.nav.toggleTheme}
			>
				<FontAwesomeIcon
					icon={theme === "dark" ? faSun : faMoon}
					className="theme-icon"
				/>
			</button>
		</div>
	);
};

const NavBar = (props) => {
	const { active } = props;
	const { t } = useLanguage();
	const { theme, toggleTheme } = useTheme();
	const { pathname } = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!menuOpen) return undefined;

		const handleKeyDown = (event) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		const handlePointerDown = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setMenuOpen(false);
			}
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("pointerdown", handlePointerDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("pointerdown", handlePointerDown);
		};
	}, [menuOpen]);

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							{NAV_ITEMS.map((item) => (
								<li
									key={item.key}
									className={
										active === item.key
											? "nav-item active"
											: "nav-item"
									}
								>
									<Link to={item.to}>{t.nav[item.key]}</Link>
								</li>
							))}
						</ul>
					</div>
				</nav>

				<Controls
					className="nav-controls-floating"
					theme={theme}
					toggleTheme={toggleTheme}
				/>

				<div className="mobile-nav" ref={menuRef}>
					<button
						type="button"
						className="nav-burger"
						aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
						aria-expanded={menuOpen}
						aria-controls="mobile-menu"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
					</button>

					<div
						id="mobile-menu"
						className={menuOpen ? "mobile-menu open" : "mobile-menu"}
					>
						<nav aria-label={t.nav.menu}>
							<ul className="mobile-menu-list">
								{NAV_ITEMS.map((item) => (
									<li
										key={item.key}
										className={
											active === item.key
												? "mobile-menu-item active"
												: "mobile-menu-item"
										}
									>
										<Link
											to={item.to}
											onClick={() => setMenuOpen(false)}
										>
											{t.nav[item.key]}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<Controls
							className="nav-controls-menu"
							theme={theme}
							toggleTheme={toggleTheme}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
