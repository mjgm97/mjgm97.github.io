import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import { useLanguage } from "../i18n/LanguageContext";

import "./styles/404.css";

const Notfound = () => {
	const { t } = useLanguage();

	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								{t.notFound.title} <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
								{t.notFound.message}
								<br />
								{t.notFound.urlMessage(window.location.href)}
							</div>
							<a href="/" className="not-found-link">
								{t.notFound.back}
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
