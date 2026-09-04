import {
  BuildingIcon,
  CalendarIcon,
  ExperiencePlaceholderIcon,
  JobActivitiesIcon,
  RoleIcon,
} from "components/icons";
import { useTranslations } from "contexts";
import { Experience } from "interfaces";
import { useState } from "react";
import { ImgIcon } from "utils";
import styles from "./experience.module.scss";

export const ExperienceCard = ({ entry }: { entry: Experience }) => {
  const [expanded, setExpanded] = useState(true);
  const { currentTranslation } = useTranslations();

  return (
    <article className={styles.entryCard} key={entry.company}>
      <div className={styles.entryContent}>
        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <RoleIcon />
          </span>
          <span className={styles.role}>{entry.role}</span>
        </div>

        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <CalendarIcon />
          </span>
          <span className={styles.period}>{entry.period}</span>
        </div>

        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <BuildingIcon />
          </span>
          <span className={styles.companyName}>{entry.company}</span>
        </div>

        <div
          className={`${styles.entryRow} ${expanded ? styles.entryRowVisible : styles.entryRowHidden}`}
          aria-hidden={!expanded}
        >
          <span
            className={`${styles.entryIcon} ${expanded ? styles.entryIconVisible : styles.entryIconHidden}`}
            aria-hidden={!expanded}
          >
            <JobActivitiesIcon />
          </span>

          <div
            className={`${styles.summaryWrap} ${expanded ? styles.summaryWrapVisible : styles.summaryWrapHidden}`}
            aria-live="polite"
            aria-hidden={!expanded}
          >
            <div className={styles.summary}>
              {Array.isArray(entry.summary) ? (
                entry.summary.map((line, idx) => (
                  <span key={`${entry.company}-line-${idx}`} className={styles.summaryLine}>
                    {line}
                  </span>
                ))
              ) : (
                <span className={styles.summaryLine}>{entry.summary}</span>
              )}
            </div>
          </div>
        </div>

        <button
          className={styles.viewLink}
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
        >
          {expanded ? currentTranslation.experiences.viewLess : currentTranslation.experiences.viewMore}
          <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>
      </div>

      <div className={styles.entryImages} aria-hidden="true">
        {entry.images.length === 0 ?
          <ExperiencePlaceholderIcon className={styles.visualSvg} />
        : entry.images.map(props => (
          <>
            <ImgIcon path={props.path} label="" className={styles.visualImage} />
          </>
        ))}
      </div>
    </article>
  );
};
