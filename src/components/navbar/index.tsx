import { CogIcon, ExperiencesIcon, HomeIcon, PersonalIcon, ProjectsIcon, SearchIcon } from "components/icons";
import { SearchModal } from "components/search-modal";
import { useTranslations } from "contexts/i18n";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import styles from "./navbar.module.scss";
import { SettingsDropdown } from "./SettingsDropdown";

export const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const { currentTranslation, currentLanguage, setLanguage } = useTranslations();

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { to: "/", label: currentTranslation.nav.home, icon: <HomeIcon />, end: true },
    { to: "/experiences", label: currentTranslation.nav.experiences, icon: <ExperiencesIcon />, end: false },
    { to: "/projects", label: currentTranslation.nav.projects, icon: <ProjectsIcon />, end: false },
    { to: "/personal", label: currentTranslation.nav.personal, icon: <PersonalIcon />, end: false },
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (settingsOpen && e.target && !wrapperRef.current.contains(e.target as Node)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [settingsOpen]);

  return (
    <>
      <aside className={styles.container} ref={wrapperRef}>
        <div className={styles.stripe} aria-hidden="true">
          <div className={styles.notch} />
        </div>

        <div className={styles.topSection}>
          <div className={styles.logoWrapper}>
            <button
              className={styles.logo}
              aria-label={currentTranslation.settings.aria}
              title={currentTranslation.settings.aria}
              type="button"
              onClick={() => setSettingsOpen((s) => !s)}
            >
              <CogIcon />
            </button>

            {settingsOpen && (
              <div className={styles.settingsContainer}>
                <SettingsDropdown
                  language={currentLanguage}
                  onLocaleChange={setLanguage}
                  onClose={() => setSettingsOpen(false)}
                />
              </div>
            )}
          </div>

          <nav className={styles.nav} aria-label="Main Navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `${styles.navItem}${isActive ? ` ${styles.active}` : ""}`
                }
                title={item.label}
                aria-label={item.label}
              >
                {item.icon}
                <span className={styles.badge} aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          <button
            className={styles.searchBtn}
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label={currentTranslation.common.search}
            title={currentTranslation.common.search}
          >
            <SearchIcon />
          </button>
        </div>

        <div
          className={styles.avatar}
          aria-label={currentTranslation.nav.profile}
          title={currentTranslation.nav.profile}
        >
          <span>BA</span>
        </div>
      </aside>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
};
