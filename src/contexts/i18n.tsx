import React from "react";
import { ITranslation, ITranslationsContext, ITranslationsProviderProps, LANG_EN, LANG_PT, Language } from "./i18n.interface";
import { translations } from "./i18n.model";

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

  const getTranslation = React.useMemo(() =>
    (language: Language): ITranslation => {
    const target = translations.find((v) => v.key === language)
    if (!target) {
      throw new Error(`Translation for language ${language} not found`);
    }
    return target;
  }, []);

  const [ currentTranslation, setCurrentTranslation ] = React.useState<ITranslation>(
    getTranslation(currentLanguage)
  );

  React.useEffect(() => {
    const translation = getTranslation(currentLanguage);
    setCurrentTranslation(translation);
  }, [currentLanguage, getTranslation]);

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
