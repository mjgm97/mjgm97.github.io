import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import en from "./en";
import es from "./es";

export const LANGUAGES = ["es", "en"];
export const LANGUAGE_NAMES = { es: "Español", en: "English" };

const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "lang";
const STRINGS = { en, es };

const getStoredLanguage = () => {
	try {
		const stored = localStorage.getItem(STORAGE_KEY);
		return LANGUAGES.includes(stored) ? stored : null;
	} catch (error) {
		return null;
	}
};

// First supported language in the browser's preference list, else Spanish
const getBrowserLanguage = () => {
	const preferred =
		navigator.languages && navigator.languages.length
			? navigator.languages
			: [navigator.language];

	for (const locale of preferred) {
		const code = (locale || "").toLowerCase().split("-")[0];
		if (LANGUAGES.includes(code)) return code;
	}
	return DEFAULT_LANGUAGE;
};

const LanguageContext = createContext({
	lang: DEFAULT_LANGUAGE,
	setLang: () => {},
	t: STRINGS[DEFAULT_LANGUAGE],
});

export const LanguageProvider = ({ children }) => {
	const [lang, setLangState] = useState(
		() => getStoredLanguage() || getBrowserLanguage()
	);

	useEffect(() => {
		document.documentElement.setAttribute("lang", lang);
	}, [lang]);

	// Only an explicit choice is persisted, so the browser language keeps
	// deciding until the visitor picks one.
	const setLang = useCallback((next) => {
		if (!LANGUAGES.includes(next)) return;
		setLangState(next);
		try {
			localStorage.setItem(STORAGE_KEY, next);
		} catch (error) {
			// storage unavailable: the choice lasts for this visit only
		}
	}, []);

	const value = useMemo(
		() => ({ lang, setLang, t: STRINGS[lang] }),
		[lang, setLang]
	);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);
