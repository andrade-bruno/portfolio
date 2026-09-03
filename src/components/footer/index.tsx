import { Link } from "react-router";
import { ImgIcon } from "../../utils";
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
    iconPath: `logos/linkedin.png`,
  },
  {
    label: "GitHub",
    href: "https://github.com/andrade-bruno",
    iconPath: `logos/github.png`,
  },
];

const contactRows = [
  {
    iconPath: `icons/location.svg`,
    text: "Santos, São Paulo, Brazil",
  },
  {
    iconPath: `icons/phone.svg`,
    text: "+55 (13) 9913-8854",
  },
  {
    iconPath: `icons/mail.svg`,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
                  <ImgIcon path={row.iconPath} />
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
            <ImgIcon path={item.iconPath} />
          </a>
        ))}
      </div>

      <div className={styles.bottomBar}>
        © {new Date().getFullYear()}, Bruno Andrade
      </div>
    </footer>
  );
};
