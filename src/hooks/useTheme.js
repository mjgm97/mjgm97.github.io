import { useState, useEffect } from "react";

export function useTheme() {
	const getPreferredScheme = () =>
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

	const [theme, setTheme] = useState(() => {
		// try to load previous choice, fallback to system
		return localStorage.getItem("theme") || getPreferredScheme();
	});

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	// respond to system changes dynamically
	useEffect(() => {
		const listener = (e) => {
			if (!localStorage.getItem("theme")) {
				setTheme(e.matches ? "dark" : "light");
			}
		};
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, []);

	return { theme, toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark") };
}
