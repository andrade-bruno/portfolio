import { ExperienceCard } from "components/experience";
import { useTranslations } from "contexts";
import styles from "./experiences.module.scss";
import pageStyles from "./index.module.scss";


const techStats = [
  { label: "JS", experience: "Experience", level: 75 },
  { label: "TS", experience: "Knowledge", level: 90 },
];

export const Experiences = () => {
  const { currentTranslation } = useTranslations();

  return (
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>{currentTranslation.nav.experiences}</p>
        <h1 className={pageStyles.title}>{currentTranslation.experiences.title}</h1>

        <div className={styles.timeline}>
          {currentTranslation.experiences.jobs.map((entry) => (
            <ExperienceCard key={`${entry.company}-${currentTranslation.key}-${Math.random()}`} entry={entry}/>
          ))}
        </div>

        <div className={styles.topBar}>
          <div className={styles.graphHeader}>
            <span className={styles.graphLabel}>{currentTranslation.experiences.techGraph}</span>
          </div>

          <div className={styles.graphGrid}>
            {techStats.map((item) => (
              <div className={styles.skillRow} key={item.label}>
                <div className={styles.skillTitle}>{item.label}</div>
                <div className={styles.skillTrack}>
                  <span className={styles.skillBar} style={{ width: `${item.level}%` }} />
                </div>
                <div className={styles.skillMeta}>
                  <span>{item.experience}</span>
                  <span>{item.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
