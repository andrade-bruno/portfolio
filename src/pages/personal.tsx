import pageStyles from "./portfolio.module.scss";

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
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>Personal context</p>
        <h1 className={pageStyles.title}>Keep the bio short and useful.</h1>
        <p className={pageStyles.lead}>
          This page is where the portfolio becomes human: a quick introduction,
          your work style, and a clear path for people to contact you.
        </p>
      </div>

      <div className={pageStyles.sections}>
        {personal.map((item) => (
          <article key={item.title} className={pageStyles.card}>
            <h2 className={pageStyles.cardTitle}>{item.title}</h2>
            <p className={pageStyles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
