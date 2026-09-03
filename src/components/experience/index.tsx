import { Experience } from "interfaces";
import { useState } from "react";
import styles from "./experience.module.scss";

export const ExperienceCard = ({ entry }: { entry: Experience }) => {
	const getIconPath = (path: string) => `${process.env.PUBLIC_URL}${path}`;

  const [expanded, setExpanded] = useState(false);

	return (
		<article className={styles.entry} key={entry.company}>
      <div className={styles.entryCard}>
        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <img src={getIconPath('/experiences/role.svg')} alt="" aria-hidden="true" />
          </span>
          <span className={styles.role}>{entry.role}</span>
        </div>

        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <img src={getIconPath('/experiences/calendar.svg')} alt="" aria-hidden="true" />
          </span>
          <span className={styles.period}>{entry.period}</span>
        </div>

        <div className={styles.entryRow}>
          <span className={styles.entryIcon}>
            <img src={getIconPath('/experiences/building.svg')} alt="" aria-hidden="true" />
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
            <img src={getIconPath('/experiences/job-activities.svg')} alt="" />
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
                <span className={styles.summaryLine}>
                  {entry.summary}
                </span>
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
          {expanded ? "View less" : "View more"} <span aria-hidden="true">{expanded ? "↑" : "↓"}</span>
        </button>
      </div>
    </article>
	)
}
