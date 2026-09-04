import Switch from "components/switch";
import { useTheme } from "contexts/theme";
import { useTranslations } from "contexts/i18n";
import { Language } from "contexts/i18n.interface";
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
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.settingsDropdown} role="menu" aria-label={currentTranslation.settings.aria}>
      <div className={styles.settingsRow}>
        <span>{currentTranslation.settings.darkTheme}</span>
        <Switch checked={isDark} onChange={() => toggleTheme()} ariaLabel={currentTranslation.settings.toggleTheme} />
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
