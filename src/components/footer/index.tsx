import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from "components/icons";
import { Link } from "react-router";
import styles from "./footer.module.scss";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "Professional Experiences", to: "/experiences" },
  { label: "Projects Overviews", to: "/projects" },
  { label: "Personal Goals", to: "/personal" },
];

const serviceLinks = [
  { label: "AWC ECS" },
  { label: "Google Cloud VM" },
  { label: "E-Commerce" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bruno--andrade",
    icon: <LinkedinIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/andrade-bruno",
    icon: <GithubIcon />,
  },
];

const contactRows = [
  {
    icon: <LocationIcon />,
    text: "Santos, São Paulo, Brazil",
  },
  {
    icon: <PhoneIcon />,
    text: "+55 (13) 9913-8854",
  },
  {
    icon: <MailIcon />,
    text: "contact@brunoandrade.dev.br",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.accent} aria-hidden="true" />

      <div className={styles.topGrid}>
        <section className={styles.column}>
          <h3 className={styles.heading}>About</h3>
          <p className={styles.copy}>
            Born december 2001, I am a passionate software engineer with a strong focus on backend development. I enjoy creating efficient and scalable solutions that make a difference in people's lives.
          </p>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>Explore</h3>
          <nav className={styles.linkList} aria-label="Footer explore links">
            {exploreLinks.map((item) => (
              <Link key={item.to} to={item.to} className={styles.footerLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>Services</h3>
          <div className={styles.linkList}>
            {serviceLinks.map((item) => (
              <span key={item.label} className={styles.staticLink}>
                {item.label}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>Contact</h3>
          <div className={styles.contactList}>
            {contactRows.map((row) => (
              <div key={row.text} className={styles.contactRow}>
                <span className={styles.contactIcon}>
                  {row.icon}
                </span>
                <span>{row.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.socialBar}>
        {socialLinks.map((item) => (
          <a
            key={item.label}
            className={styles.socialLink}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <div className={styles.bottomBar}>
        © {new Date().getFullYear()}, Bruno Andrade
      </div>
    </footer>
  );
};
