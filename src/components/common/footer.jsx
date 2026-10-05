import React from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n/LanguageContext";

import "./styles/footer.css";

const Footer = () => {
	const { t } = useLanguage();

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{t.nav.home}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/research">{t.nav.research}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{t.nav.projects}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/teaching">{t.nav.teaching}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{t.nav.contact}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2026 Manuel Jesús Gómez. {t.footer.rights}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

