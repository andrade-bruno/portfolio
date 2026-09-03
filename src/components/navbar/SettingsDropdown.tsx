import Switch from "components/switch";
import { useTranslations } from "contexts/i18n";
import { Language } from "contexts/i18n.interface";
import { useEffect, useState } from "react";
import { ImgIcon } from "utils";
import styles from "./navbar.module.scss";

export const SettingsDropdown = ({
  language,
  onLocaleChange,
  onClose,
}: {
  language: Language;
  onLocaleChange: (nextLocale: Language) => void;
  onClose?: () => void;
}) => {
  const { translations, currentTranslation } = useTranslations();
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

  return (
    <div className={styles.settingsDropdown} role="menu" aria-label={currentTranslation.settings.aria}>
      <div className={styles.settingsRow}>
        <span>{currentTranslation.settings.darkTheme}</span>
        <Switch checked={dark} onChange={() => toggleDark()} ariaLabel={currentTranslation.settings.toggleTheme} />
      </div>

      <div className={styles.settingsRow}>
        <span>{currentTranslation.settings.language}</span>
        <div className={styles.flagRow} role="group" aria-label="Language selector">
          {translations.map((lang) => (
            <button
              key={lang.key}
              type="button"
              className={`${styles.flagBtn} ${language === lang.key ? styles.activeFlag : ""}`}
              onClick={() => {
                onLocaleChange(lang.key as Language);
              }}
              aria-pressed={language === lang.key}
              aria-label={lang.label}
            >
              <ImgIcon path={lang.iconPath} label={lang.label} className={styles.flagImg} />
            </button>
          ))}
        </div>
      </div>

      <button
        className={styles.settingsClose}
        type="button"
        onClick={() => onClose?.()}
        aria-label={currentTranslation.common.close}
      >
        {currentTranslation.common.close}
      </button>
    </div>
  );
};
