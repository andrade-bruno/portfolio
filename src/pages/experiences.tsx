import styles from "./portfolio.module.scss";

const experienceEntries = [
  {
    company: "Mark IT Consultancy",
    period: "January, 2008 - January, 2010",
    role: "Senior Software Developer",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 20V8.5a1.5 1.5 0 0 1 1.5-1.5H9V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h3.5A1.5 1.5 0 0 1 20 8.5V20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 20v-5h8v5M10 8h1M13 8h1M10 11h1M13 11h1M10 14h1M13 14h1" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3.5" y="5.5" width="17" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M8 13h2M12 13h2M16 13h0M8 17h2M12 17h2" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
  </svg>
);

const RoleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 8.5a3 3 0 1 1 6 0v1.5a3 3 0 0 1-6 0V8.5Z" fill="none" stroke="currentColor" strokeWidth="1.7"/>
    <path d="M5 17.5a7 7 0 0 1 14 0" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M15.5 12.5 19 16l-2 2-3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 18.5V9.5M9.5 18.5V6.5M14.5 18.5V12.5M19.5 18.5V4.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M4.5 6.5 9 11l4-4 6 6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Experiences = () => {
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
                  <span className={styles.entryIcon}><BuildingIcon /></span>
                  <span className={styles.companyName}>{entry.company}</span>
                </div>

                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}><CalendarIcon /></span>
                  <span className={styles.period}>{entry.period}</span>
                </div>

                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}><RoleIcon /></span>
                  <span className={styles.role}>{entry.role}</span>
                </div>

                <div className={styles.entryRow}>
                  <span className={styles.entryIcon}><GrowthIcon /></span>
                  <p className={styles.summary}>{entry.summary}</p>
                </div>

                <button className={styles.viewLink} type="button">
                  View less <span aria-hidden="true">↑</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.topBar}>
        <div className={styles.graphHeader}>
          <span className={styles.graphLabel}>Technologies Graph</span>
          <button className={styles.graphAction}>Hover to inspect</button>
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
