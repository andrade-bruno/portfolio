import pageStyles from "./index.module.scss";

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
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>Project shelf</p>
        <h1 className={pageStyles.title}>Curate fewer projects, but explain them better.</h1>
        <p className={pageStyles.lead}>
          Use this space for selected work, not a long list. Each card should
          make the reader understand your role, the stack, and why it matters.
        </p>
      </div>

      <div className={pageStyles.sections}>
        {projects.map((item) => (
          <article key={item.title} className={pageStyles.card}>
            <h2 className={pageStyles.cardTitle}>{item.title}</h2>
            <p className={pageStyles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
