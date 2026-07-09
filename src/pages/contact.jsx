import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="corner-logo">
							<Logo width={45} />
						</div>
					</div>

					<div className="contact-container">
						<div className="contact-heading">

							<h1 className="contact-title">{INFO.contact.title}</h1>

							<p className="contact-subtitle">
								{INFO.contact.description}
							</p>

							<div className="contact-actions">
								<a
									href={`mailto:${INFO.contact.email}`}
									className="contact-btn primary"
								>
									Email me
									<FontAwesomeIcon icon={faArrowRight} />
								</a>
							</div>

							<Socials />
						</div>

						<div className="contact-grid">
							<div className="glass-card contact-info-card">
								<h2 className="section-title">Find me</h2>
								<p className="contact-info-text">
									{INFO.contact.address}
								</p>

								<dl className="contact-meta">
									<div className="contact-meta-row">
										<dt>Office</dt>
										<dd>Lab B1.1.050</dd>
									</div>
									<div className="contact-meta-row">
										<dt>Phone</dt>
										<dd>{INFO.contact.phone}</dd>
									</div>
									<div className="contact-meta-row">
										<dt>Availability</dt>
										<dd>Mon–Fri, 10:00–18:00 (by appointment)</dd>
									</div>
								</dl>
							</div>

							<div className="glass-card contact-map-card">
								<div className="map-wrapper">
									<iframe
										title="Facultad de Informática - Universidad de Murcia"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.298021440967!2d-1.173267924338795!3d38.01767427191389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381b0df8e3aa3%3A0x73a09bb2187cb7b7!2sFacultad%20de%20Inform%C3%A1tica%20-%20Universidad%20de%20Murcia!5e0!3m2!1ses!2ses!4v1730481072731!5m2!1ses!2ses"
										allowFullScreen=""
										loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"
									></iframe>
								</div>
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

export default Contact;
