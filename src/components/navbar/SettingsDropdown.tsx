import Switch from "components/switch";
import { useEffect, useState } from "react";
import { ImgIcon } from "utils";
import styles from "./navbar.module.scss";

const EN_KEY = "en-gb";
const PT_KEY = "pt-br";

const languages = [
  { key: EN_KEY, label: "English", flag: `flags/${EN_KEY}.svg` },
  { key: PT_KEY, label: "Português", flag: `flags/${PT_KEY}.svg` },
];

export const SettingsDropdown = ({ onClose }: { onClose?: () => void }) => {
  const [dark, setDark] = useState<boolean>(false);
  const [lang, setLang] = useState<string>(EN_KEY);

  const THEME_KEY = "site:dark";
  const LANG_KEY = "site:lang";

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    const storedLang = localStorage.getItem(LANG_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = storedTheme !== null ? storedTheme === "true" : prefersDark;

    setDark(initialDark);
    document.body.classList.toggle("dark", initialDark);

    const nextLang = storedLang ?? EN_KEY;
    setLang(nextLang);
    document.documentElement.setAttribute("lang", nextLang);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    localStorage.setItem(THEME_KEY, String(next));
    document.body.classList.toggle("dark", next);
  };

  return (
    <div className={styles.settingsDropdown} role="menu" aria-label="Settings">
      <div className={styles.settingsRow}>
        <span>Dark Theme</span>
        <Switch checked={dark} onChange={() => toggleDark()} ariaLabel="Toggle dark theme" />
      </div>

      <div className={styles.settingsRow}>
        <span>Language</span>
        <div className={styles.flagRow} role="group" aria-label="Language selector">
          {languages.map((l) => (
            <button
              key={l.key}
              type="button"
              className={`${styles.flagBtn} ${lang === l.key ? styles.activeFlag : ''}`}
              onClick={() => { setLang(l.key); localStorage.setItem(LANG_KEY, l.key); document.documentElement.setAttribute('lang', l.key); }}
              aria-pressed={lang === l.key}
              aria-label={l.label}
            >
              <ImgIcon path={l.flag} label={l.label} className={styles.flagImg} />
            </button>
          ))}
        </div>
      </div>

      <button className={styles.settingsClose} type="button" onClick={() => onClose?.()} aria-label="Close settings">
        Close
      </button>
    </div>
  );
};
