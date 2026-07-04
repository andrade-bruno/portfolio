import styles from "./portfolio.module.scss";

const personal = [
  {
    title: "About",
    text: "A short paragraph that explains who you are and what you care about.",
  },
  {
    title: "Working style",
    text: "Share the habits that make you effective: focus, speed, or visual polish.",
  },
  {
    title: "Contact",
    text: "Add the fastest way to reach you, plus any social or GitHub links.",
  },
];

export const Personal = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Personal context</p>
        <h1 className={styles.title}>Keep the bio short and useful.</h1>
        <p className={styles.lead}>
          This page is where the portfolio becomes human: a quick introduction,
          your work style, and a clear path for people to contact you.
        </p>
      </div>

      <div className={styles.sections}>
        {personal.map((item) => (
          <article key={item.title} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
