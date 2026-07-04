import { Link } from "react-router";
import styles from "./portfolio.module.scss";

const structure = [
  {
    title: "Home",
    text: "Hero, direction, and the quickest path into the portfolio.",
  },
  {
    title: "Experiences",
    text: "Timeline, roles, and the stack behind each stage of work.",
  },
  {
    title: "Projects",
    text: "Selected case studies, product thinking, and visual experiments.",
  },
  {
    title: "Personal",
    text: "Short bio, working style, and the best way to get in touch.",
  },
];

export const Home = () => {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <p className={styles.eyebrow}>Portfolio blueprint</p>
        <h1 className={styles.title}>Building a clean portfolio system.</h1>
        <p className={styles.lead}>
          This first pass turns the README notes into a simple structure: a
          strong home page, a left-side navigation rail, and focused pages for
          experience, projects, and personal context.
        </p>
        <div className={styles.actions}>
          <Link to="/projects" className={styles.primaryAction}>
            View projects
          </Link>
          <Link to="/experiences" className={styles.secondaryAction}>
            Check experiences
          </Link>
        </div>
      </div>

      <div className={styles.sections}>
        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Current structure</h2>
          <div className={styles.list}>
            {structure.map((item) => (
              <div key={item.title} className={styles.listItem}>
                <strong className={styles.listItemTitle}>{item.title}</strong>
                <span className={styles.listItemText}>{item.text}</span>
              </div>
            ))}
          </div>
        </article>

        <article className={styles.card}>
          <h2 className={styles.cardTitle}>Visual direction</h2>
          <p className={styles.cardText}>
            The layout leans toward a crisp left rail, compact cards, and a
            restrained palette with orange accents. That keeps the page close
            to the README references while staying easy to extend.
          </p>
          <div className={styles.tagRow}>
            <span className={styles.tag}>Left rail</span>
            <span className={styles.tag}>Dark accent</span>
            <span className={styles.tag}>Case study cards</span>
            <span className={styles.tag}>Responsive layout</span>
          </div>
        </article>
      </div>
    </section>
  );
};
