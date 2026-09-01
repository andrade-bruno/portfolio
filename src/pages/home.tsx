import { Link } from "react-router";
import pageStyles from "./portfolio.module.scss";

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
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>Home</p>
        <h1 className={pageStyles.title}>Bruno Andrade</h1>
        <p className={pageStyles.lead}>
          Backend Engineer with professional experience since 2019 and a BSc in Computer Science (UNIP, 2022). Specializes in designing and delivering secure, highly available, and scalable backend systems and microservices using Node.js and Go.

          With strong experience in event-driven architectures, observability, and cloud-native patterns on AWS, proven track record owning end-to-end backend features, improving performance and reliability, leading cross-functional deliveries, and mentoring engineers to raise code quality and operational practices.

          I stand out for being organized, committed to my goals, and for taking leadership in the deliverables I oversee.
        </p>
        <div className={pageStyles.actions}>
          <Link to="/experiences" className={pageStyles.secondaryAction}>
            Check experiences
          </Link>
          <Link to="/projects" className={pageStyles.primaryAction}>
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
};
