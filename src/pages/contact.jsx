import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

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
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="contact-title underline-animated">
							Let's Get in Touch!
						</div>

						<div className="contact-subtitle fade-slide">
							I would be happy to talk to you if you need my assistance or whether you have any doubts regarding my research. If you want to connect and exchange some fresh ideas, don't hesitate to contact me.
						</div>
					</div>

					{/* === Info Section (Before Map) === */}
					<div className="contact-info glass-info fade-slide">
						<p className="info-text">
							You can find me at my lab in the
							<strong> Department of Information and Communications Engineering</strong>,
							located within the
							<strong> Faculty of Computer Science, University of Murcia</strong>.
						</p>
						<p className="info-text">
							My lab is <strong>B1.1.050</strong> — a collaborative space where we explore
							topics in Artificial Intelligence, Learning Analytics, and Serious Games.
						</p>

						<div className="info-details">
							<div className="info-item">
								<span className="info-icon">📍</span>
								<span>Facultad de Informática, Campus de Espinardo, Murcia, Spain</span>
							</div>
							<div className="info-item">
								<span className="info-icon">⏰</span>
								<span>Available Monday to Friday, 10:00–18:00 (by appointment)</span>
							</div>
						</div>
					</div>

					{/* === Map Section === */}
					<div className="contact-map-container">
						<div className="map-wrapper glass-map">
							<iframe
								title="Facultad de Informática - Universidad de Murcia"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.298021440967!2d-1.173267924338795!3d38.01767427191389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381b0df8e3aa3%3A0x73a09bb2187cb7b7!2sFacultad%20de%20Inform%C3%A1tica%20-%20Universidad%20de%20Murcia!5e0!3m2!1ses!2ses!4v1730481072731!5m2!1ses!2ses"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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
