import { ReactNode } from "react";

export interface ITranslationsProviderProps {
	children: ReactNode;
}

export const LANG_EN = "en-gb";
export const LANG_PT = "pt-br";

export type Language = typeof LANG_EN | typeof LANG_PT;

export interface ITranslationsContext {
	defaultLanguage: Language;
	currentLanguage: Language;
	setLanguage: (language: Language) => void;
	translations: ITranslation[];
	currentTranslation: ITranslation;
}

export interface ITranslation {
	key: Language;
	label: string;
	iconPath: string;
	common: {
		close: string;
		search: string;
	};
	nav: {
		home: string;
		experiences: string;
		projects: string;
		personal: string;
		search: string;
		profile: string;
	};
	settings: {
		aria: string;
		darkTheme: string;
		language: string;
		toggleTheme: string;
	}
	home: {
		description: string;
		projectsBtn: string;
		experiencesBtn: string;
	}
}
