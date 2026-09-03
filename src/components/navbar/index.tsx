import { SearchModal } from "components/search-modal";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { ImgIcon } from "utils";
import styles from "./navbar.module.scss";
import { SettingsDropdown } from "./SettingsDropdown";

const navItems = [
  { to: "/", label: "Home", icon: <ImgIcon path="icons/home.svg" label="Home" />, end: true, badge: false },
  { to: "/experiences", label: "Experiences", icon: <ImgIcon path="icons/experiences.svg" label="Experiences" />, end: false, badge: true },
  { to: "/projects", label: "Projects", icon: <ImgIcon path="icons/projects.svg" label="Projects" />, end: false, badge: false },
  { to: "/personal", label: "Personal", icon: <ImgIcon path="icons/personal.svg" label="Personal" />, end: false, badge: false },
];

export const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Global Ctrl+K / Cmd+K shortcut
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
        {/* Orange right stripe with notch */}
        <div className={styles.stripe} aria-hidden="true">
          <div className={styles.notch} />
        </div>

        {/* Top section: logo + nav + search */}
        <div className={styles.topSection}>
          <div className={styles.logoWrapper}>
            <button
              className={styles.logo}
              aria-label="Settings"
              title="Settings"
              type="button"
              onClick={() => setSettingsOpen((s) => !s)}
            >
              <ImgIcon path="icons/cog.svg" />
            </button>

            {settingsOpen && (
              <div className={styles.settingsContainer}>
                <SettingsDropdown onClose={() => setSettingsOpen(false)} />
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
                {item.badge && <span className={styles.badge} aria-hidden="true" />}
              </NavLink>
            ))}
          </nav>

          <button
            className={styles.searchBtn}
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search (Ctrl+K)"
            title="Search (Ctrl+K)"
          >
            <ImgIcon path="icons/search.svg" label="Search" />
          </button>
        </div>

        {/* Bottom: avatar */}
        <div className={styles.avatar} aria-label="Profile" title="Profile">
          <span>BA</span>
        </div>
      </aside>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
    </>
  );
};
