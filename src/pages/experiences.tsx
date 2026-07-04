import styles from "./portfolio.module.scss";

const sections = [
  {
    title: "Job experiences",
    text: "Add your role, company, dates, and a short outcome for each stage.",
  },
  {
    title: "Tech experiences",
    text: "List the technologies you use most, with a clear knowledge level.",
  },
  {
    title: "Highlights",
    text: "Capture the few bullets that explain your strongest impact.",
  },
];

export const Experiences = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Experience model</p>
        <h1 className={styles.title}>Shape the timeline before polishing it.</h1>
        <p className={styles.lead}>
          This page follows the README tables: job history, role dates, and a
          separate section for technical experience that can evolve over time.
        </p>
      </div>

      <div className={styles.sections}>
        {sections.map((item) => (
          <article key={item.title} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
