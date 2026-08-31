import { useState } from "react";
import styles from "./portfolio.module.scss";

const experienceEntries = [
  {
    company: "AI/R Company | Invillia",
    period: "April, 2025 - Present",
    role: "Mid Backend Software Engineer",
    summary: [
      "AI/R consultancy proportioned experiences within itens below",
      "- Key responsibilities included monitoring events, alerts, and logs between applications.",
      "- Development and integration between SaaS.",
      "- Integration and creation of functionalities in monolithic and microservices systems using Go and Node.js as primary technologies.",
      "- Customer: Wellhub (formerly Gympass), a SaaS platform for health and wellness benefits, providing a comprehensive solution for managing employee well-being and engagement.",
    ],
  },
];

const getIconPath = (name: string) => `${process.env.PUBLIC_URL}/experiences/${name}`;

export const Experiences = () => {
  const [expanded, setExpanded] = useState(true);

  const techStats = [
    { label: "JS", experience: "Experience", level: 75, accent: "#1a1a1a" },
    { label: "TS", experience: "Knowledge", level: 90, accent: "#1a1a1a" },
  ];

  return (
    <section className={styles.page}>
      <div className={styles.experienceSection}>
        <h1 className={styles.sectionTitle}>Experiences</h1>

        <div className={styles.timeline}>
          {experienceEntries.map((entry) => (
            <article className={styles.entry} key={entry.company}>
              <div className={styles.entryCard}>
                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}>
                    <img src={getIconPath('building.svg')} alt="" aria-hidden="true" />
                  </span>
                  <span className={styles.companyName}>{entry.company}</span>
                </div>

                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}>
                    <img src={getIconPath('calendar.svg')} alt="" aria-hidden="true" />
                  </span>
                  <span className={styles.period}>{entry.period}</span>
                </div>

                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}>
                    <img src={getIconPath('role.svg')} alt="" aria-hidden="true" />
                  </span>
                  <span className={styles.role}>{entry.role}</span>
                </div>

                <div className={styles.entryRow}>
                  <span
                    className={`${styles.entryIcon} ${expanded ? styles.entryIconVisible : styles.entryIconHidden}`}
                    aria-hidden={!expanded}
                  >
                    <img src={getIconPath('job-activities.svg')} alt="" />
                  </span>

                  <div
                    className={`${styles.summaryWrap} ${expanded ? styles.summaryWrapVisible : styles.summaryWrapHidden}`}
                    aria-live="polite"
                  >
                    {expanded && (
                      <div className={styles.summary}>
                        {entry.summary.map((line) => (
                          <span key={line} className={styles.summaryLine}>
                            {line}
                          </span>
                        ))}
                      </div>
                    )}
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
          ))}
        </div>
      </div>

      <div className={styles.topBar}>
        <div className={styles.graphHeader}>
          <span className={styles.graphLabel}>Technologies Graph</span>
        </div>

        <div className={styles.graphGrid}>
          {techStats.map((item) => (
            <div className={styles.skillRow} key={item.label}>
              <div className={styles.skillTitle}>{item.label}</div>
              <div className={styles.skillTrack}>
                <span className={styles.skillBar} style={{ width: `${item.level}%`, background: item.accent }} />
              </div>
              <div className={styles.skillMeta}>
                <span>{item.experience}</span>
                <span>{item.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
