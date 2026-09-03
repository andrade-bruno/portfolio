export type Language = "en-gb" | "pt-br";

export const DEFAULT_LOCALE: Language = "en-gb";
export const LANG_KEY = "site:lang";

export const supportedLanguages: Array<{ key: Language; label: string; nativeLabel: string }> = [
  { key: "en-gb", label: "English", nativeLabel: "English" },
  { key: "pt-br", label: "Português", nativeLabel: "Português" },
];

export const translations = {
  "en-gb": {
    nav: {
      home: "Home",
      experiences: "Experiences",
      projects: "Projects",
      personal: "Personal",
      search: "Search (Ctrl+K)",
      profile: "Profile",
    },
    settings: {
      aria: "Settings",
      darkTheme: "Dark Theme",
      language: "Language",
      toggleTheme: "Toggle dark theme",
      close: "Close",
      search: "Search",
    },
    common: {
    },
  },
  "pt-br": {
    nav: {
      home: "Início",
      experiences: "Experiências",
      projects: "Projetos",
      personal: "Pessoal",
      search: "Buscar (Ctrl+K)",
      profile: "Perfil",
    },
    settings: {
      aria: "Configurações",
      darkTheme: "Tema escuro",
      language: "Idioma",
      toggleTheme: "Alternar tema escuro",
      close: "Fechar",
      search: "Buscar",
    },
    common: {
    },
  },
} as const;

export const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem(LANG_KEY);
  return stored === "pt-br" ? "pt-br" : "en-gb";
};

export const setStoredLanguage = (language: Language) => {
  localStorage.setItem(LANG_KEY, language);
  document.documentElement.setAttribute("lang", language);
};

export const getText = (language: Language, group: string, key: string): string => {
  const section = (translations[language] as Record<string, Record<string, string>>)[group];
  if (section?.[key]) return section[key];

  const fallbackSection = (translations[DEFAULT_LOCALE] as Record<string, Record<string, string>>)[group];
  return fallbackSection?.[key] ?? key;
};
