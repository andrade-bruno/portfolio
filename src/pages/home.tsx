import { useTranslations } from "contexts/i18n";
import { Link } from "react-router";
import pageStyles from "./index.module.scss";

export const Home = () => {
  const { currentTranslation } = useTranslations();

  return (
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>{currentTranslation.nav.home}</p>
        <h1 className={pageStyles.title}>Bruno Andrade</h1>
        <p className={pageStyles.lead}>{currentTranslation.home.description}</p>
        <div className={pageStyles.actions}>
          <Link to="/experiences" className={pageStyles.secondaryAction}>
            {currentTranslation.home.experiencesBtn}
          </Link>
          {/* <Link to="/projects" className={pageStyles.primaryAction}>
            {currentTranslation.home.projectsBtn}
          </Link> */}
        </div>
      </div>
    </section>
  );
};
