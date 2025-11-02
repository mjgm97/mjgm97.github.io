import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import "./theme.css";

import Homepage from "./pages/homepage";
import Research from "./pages/research";
import Projects from "./pages/projects";
import Teaching from "./pages/teaching";
import PhD from "./pages/phd";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

function App() {

	const navigate = useNavigate();

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}

		const redirect = sessionStorage.getItem("redirect");
		if (redirect && redirect !== "/") {
			sessionStorage.removeItem("redirect");
			navigate(redirect);
		}
	}, [navigate]);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/research" element={<Research />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/phd" element={<PhD />} />
				<Route path="/teaching" element={<Teaching />} />
				<Route path="/article/:slug" element={<ReadArticle />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
