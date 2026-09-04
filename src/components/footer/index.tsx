import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from "components/icons";
import { Link } from "react-router";
import { useTranslations } from "../../contexts";
import styles from "./footer.module.scss";

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
    text: "+55 (13) 99136-8854",
  },
  {
    icon: <MailIcon />,
    text: "contact@brunoandrade.dev.br",
  },
];

export const Footer = () => {
  const { currentTranslation } = useTranslations();

  const exploreLinks = [
    { label: currentTranslation.nav.home, to: "/" },
    { label: currentTranslation.nav.experiences, to: "/experiences" },
    { label: currentTranslation.nav.projects, to: "/projects" },
    { label: currentTranslation.nav.personal, to: "/personal" },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.accent} aria-hidden="true" />

      <div className={styles.topGrid}>
        <section className={styles.column}>
          <h3 className={styles.heading}>{currentTranslation.footer.about}</h3>
          <p className={styles.copy}>
            {currentTranslation.footer.aboutDescription}
          </p>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>{currentTranslation.footer.explore}</h3>
          <nav className={styles.linkList} aria-label="Footer explore links">
            {exploreLinks.map((item) => (
              <Link key={item.to} to={item.to} className={styles.footerLink}>
                {item.label}
              </Link>
            ))}
          </nav>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>{currentTranslation.footer.services}</h3>
          <div className={styles.linkList}>
            {serviceLinks.map((item) => (
              <span key={item.label} className={styles.staticLink}>
                {item.label}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.column}>
          <h3 className={styles.subheading}>{currentTranslation.footer.contact}</h3>
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
