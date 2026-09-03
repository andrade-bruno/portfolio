import React from "react";
import { ITranslation, ITranslationsContext, ITranslationsProviderProps, LANG_EN, LANG_PT, Language } from "./i18n.interface";

export const TranslationsContext = React.createContext<ITranslationsContext | null>(null);
TranslationsContext.displayName = "TranslationsContext";

export const TranslationsProvider: React.FC<ITranslationsProviderProps> = ({ children }: ITranslationsProviderProps) => {
  const LANG_KEY = "site:lang";
  const DEFAULT_LOCALE: Language = LANG_EN;

  const [ currentLanguage, setCurrentLanguage ] = React.useState<Language>(() => {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === LANG_PT ? LANG_PT : LANG_EN;
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem(LANG_KEY, language);
    document.documentElement.setAttribute("lang", language);
  };

  const translations: ITranslation[] = React.useMemo(() => [
    {
      key: LANG_EN,
      label: "English",
      iconPath: `flags/${LANG_EN}.svg`,
      common: {
        close: "Close",
        search: "Search",
      },
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
        toggleTheme: "Toggle theme",
      },
      home: {
        description: "Backend Engineer with professional experience since 2019 and a BSc in Computer Science (UNIP, 2022). Specializes in designing and delivering secure, highly available, and scalable backend systems and microservices - mainly using Node.js and Go. With strong experience in event-driven architectures, observability, and cloud-native patterns on AWS, proven track record owning end-to-end backend features, improving performance and reliability, leading cross-functional deliveries, and mentoring engineers to raise code quality and operational practices. I stand out for being organized, committed to my goals, and for taking leadership in the deliverables I oversee.",
        projectsBtn: "Look up Projects",
        experiencesBtn: "Check Professional Experiences",
      },
    },
    {
      key: LANG_PT,
      label: "Português",
      iconPath: `flags/${LANG_PT}.svg`,
      common: {
        close: "Fechar",
        search: "Buscar",
      },
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
        toggleTheme: "Alternar tema",
      },
      home: {
        description: "Engenheiro de Software Backend com experiência profissional desde 2019 e Bacharel em Ciência da Computação (UNIP, 2022). Especializa-se em projetar e entregar sistemas backend seguros, altamente disponíveis e escaláveis e microserviços - especialmente usando Node.js e Go. Com forte experiência em arquiteturas orientadas a eventos, observabilidade e padrões cloud-native na AWS, histórico comprovado de propriedade de recursos end-to-end, melhoria de desempenho e confiabilidade, liderança em entregas cross-funcionais e mentoria de engenheiros para elevar a qualidade do código e práticas operacionais. Destaco-me por ser organizado, comprometido com meus objetivos e por assumir liderança nos entregáveis que supervisiono.",
        projectsBtn: "Ver Projetos",
        experiencesBtn: "Experiências Profissionais",
      }
    },
  ], []);

  const getTranslation = React.useMemo(() =>
    (language: Language): ITranslation => {
    const target = translations.find((v) => v.key === language)
    if (!target) {
      throw new Error(`Translation for language ${language} not found`);
    }
    return target;
  }, [translations]);

  const [ currentTranslation, setCurrentTranslation ] = React.useState<ITranslation>(
    getTranslation(currentLanguage)
  );

  React.useEffect(() => {
    const translation = getTranslation(currentLanguage);
    setCurrentTranslation(translation);
  }, [currentLanguage, translations, getTranslation]);

  return (
    <TranslationsContext.Provider
      value={{
        defaultLanguage: DEFAULT_LOCALE,
        currentLanguage,
        setLanguage,
        translations,
        currentTranslation,
      }}
    >
    { children }
    </TranslationsContext.Provider>
  )
}

export const useTranslations = () => {
  const methods = React.useContext(TranslationsContext);
  if (!methods) {
    throw new Error("useTranslations must be used within a TranslationsProvider");
  }
  return methods;
}
