import styles from "./portfolio.module.scss";

const projects = [
  {
    title: "Featured case study",
    text: "Describe the problem, the solution, and the outcome in three short beats.",
  },
  {
    title: "Landing page system",
    text: "Show the reusable pieces that help you ship faster across multiple pages.",
  },
  {
    title: "Experiments",
    text: "Keep smaller visual or interaction tests here so the portfolio stays alive.",
  },
];

export const Projects = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Project shelf</p>
        <h1 className={styles.title}>Curate fewer projects, but explain them better.</h1>
        <p className={styles.lead}>
          Use this space for selected work, not a long list. Each card should
          make the reader understand your role, the stack, and why it matters.
        </p>
      </div>

      <div className={styles.sections}>
        {projects.map((item) => (
          <article key={item.title} className={styles.card}>
            <h2 className={styles.cardTitle}>{item.title}</h2>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
