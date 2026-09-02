import { SearchModal } from "components/search-modal";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import styles from "./navbar.module.scss";

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const ExperiencesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2" />
    <path d="M6 20v-1a3 3 0 0 1 6 0v1M14 10h4M14 14h4" />
  </svg>
);

const ProjectsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const PersonalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const navItems = [
  { to: "/", label: "Home", icon: <HomeIcon />, end: true, badge: false },
  { to: "/experiences", label: "Experiences", icon: <ExperiencesIcon />, end: false, badge: true },
  { to: "/projects", label: "Projects", icon: <ProjectsIcon />, end: false, badge: false },
  { to: "/personal", label: "Personal", icon: <PersonalIcon />, end: false, badge: false },
];

export const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <aside className={styles.container}>
        {/* Orange right stripe with notch */}
        <div className={styles.stripe} aria-hidden="true">
          <div className={styles.notch} />
        </div>

        {/* Top section: logo + nav + search */}
        <div className={styles.topSection}>
          <Link to="/" className={styles.logo} aria-label="Home" title="Home">
            <LogoIcon />
          </Link>

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
            <SearchIcon />
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
