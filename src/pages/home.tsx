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
        <p className={styles.eyebrow}>Home</p>
        <h1 className={styles.title}>Bruno Andrade</h1>
        <p className={styles.lead}>
          Backend Engineer with professional experience since 2019 and a BSc in Computer Science (UNIP, 2022). Specializes in designing and delivering secure, highly available, and scalable backend systems and microservices using Node.js and Go.

          With strong experience in event-driven architectures, observability, and cloud-native patterns on AWS, proven track record owning end-to-end backend features, improving performance and reliability, leading cross-functional deliveries, and mentoring engineers to raise code quality and operational practices.

          I stand out for being organized, committed to my goals, and for taking leadership in the deliverables I oversee.
        </p>
        <div className={styles.actions}>
          <Link to="/experiences" className={styles.secondaryAction}>
            Check experiences
          </Link>
          <Link to="/projects" className={styles.primaryAction}>
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
};
