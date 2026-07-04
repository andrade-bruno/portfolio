import { Link, NavLink } from "react-router";
import styles from "./navbar.module.scss";

export const NavBar = () => {
  const navigation = [
    { to: "/", label: "Home", detail: "Overview and direction" },
    {
      to: "/experiences",
      label: "Experiences",
      detail: "Roles and technical stack",
    },
    { to: "/projects", label: "Projects", detail: "Case studies and builds" },
    { to: "/personal", label: "Personal", detail: "Bio and contact notes" },
  ];

  return (
    <aside className={styles.container}>
      <Link to="/" className={styles.brand}>
        <span className={styles.kicker}>Bruno Andrade</span>
        <strong className={styles.title}>Web portfolio</strong>
        <span className={styles.subtitle}>
          Clean landing pages, case studies, and personal experiments.
        </span>
      </Link>

      <nav className={styles.nav}>
        {navigation.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.active : ""}`
            }
            end={item.to === "/"}
          >
            <span>{item.label}</span>
            <small>{item.detail}</small>
          </NavLink>
        ))}
      </nav>

      <p className={styles.footer}>
        Based on the README template and the current Figma direction.
      </p>
    </aside>
  );
};
