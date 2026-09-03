import Switch from "components/switch";
import { setStoredLanguage, supportedLanguages, translations as T, type Language } from "i18n";
import { useEffect, useState } from "react";
import { ImgIcon } from "utils";
import styles from "./navbar.module.scss";

const languages = supportedLanguages.map((language) => ({
  ...language,
  flag: `flags/${language.key}.svg`,
}));

export const SettingsDropdown = ({
  language,
  onLocaleChange,
  onClose,
}: {
  language: Language;
  onLocaleChange: (nextLocale: Language) => void;
  onClose?: () => void;
}) => {
  const [dark, setDark] = useState<boolean>(false);

  const THEME_KEY = "site:dark";

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = storedTheme !== null ? storedTheme === "true" : prefersDark;

    setDark(initialDark);
    document.body.classList.toggle("dark", initialDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem(THEME_KEY, String(next));
    document.body.classList.toggle("dark", next);
  };

  const translations = T[language];

  return (
    <div className={styles.settingsDropdown} role="menu" aria-label={translations.settings.aria}>
      <div className={styles.settingsRow}>
        <span>{translations.settings.darkTheme}</span>
        <Switch checked={dark} onChange={() => toggleDark()} ariaLabel={translations.settings.toggleTheme} />
      </div>

      <div className={styles.settingsRow}>
        <span>{translations.settings.language}</span>
        <div className={styles.flagRow} role="group" aria-label="Language selector">
          {languages.map((l) => (
            <button
              key={l.key}
              type="button"
              className={`${styles.flagBtn} ${language === l.key ? styles.activeFlag : ""}`}
              onClick={() => {
                onLocaleChange(l.key as Language);
                setStoredLanguage(l.key as Language);
              }}
              aria-pressed={language === l.key}
              aria-label={l.label}
            >
              <ImgIcon path={l.flag} label={l.label} className={styles.flagImg} />
            </button>
          ))}
        </div>
      </div>

      <button
        className={styles.settingsClose}
        type="button"
        onClick={() => onClose?.()}
        aria-label={translations.settings.close}
      >
        {translations.settings.close}
      </button>
    </div>
  );
};
