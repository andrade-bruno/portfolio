import { ExperienceCard } from "components/experience";
import { Experience } from "interfaces";
import styles from "./experiences.module.scss";
import pageStyles from "./index.module.scss";

const experienceEntries: Experience[] = [
  {
    company: "AI/R Company | Invillia",
    period: "April, 2025 - Present",
    role: "Mid Backend Software Engineer",
    summary: [
      "AI/R consultancy proportioned experiences within itens below",
      "• Key responsibilities included monitoring events, alerts, and logs between applications.",
      "• Development and integration between SaaS.",
      "• Integration and creation of functionalities in monolithic and microservices systems using Go and Node.js as primary technologies.",
      "• Customer: Wellhub (formerly Gympass), a SaaS platform for health and wellness benefits, providing a comprehensive solution for managing employee well-being and engagement.",
    ],
  },
  {
    company: "Fitcomm Group",
    period: "October 2024 - January 2025",
    role: "Senior Fullstack Software Engineer",
    summary: [
      "At Fitcomm I've reinforced my knowledge with:",
      "• Mobile and web CRUD development for Gym call centers",
      "• Mobile development at Safe Team project, for roster, schedule and teams managements",
      "• Enviroment maintenance, test and release"
    ]
  },
  {
    company: "Mosten",
    period: "October 2022 - September 2024",
    role: "Mid Backend Software Engineer",
    summary: [
      "With customer Nutrien contract squad as a service, I've done:",
      "• Development of groups and user permissions features",
      "• CRM national pre registration",
      "• Federal services",
      "• ESG compliances and ERP integrations in agronomy e-commerce"
    ]
  },
  {
    company: "GoCare Group",
    period: "October 2021 - October 2022",
    role: "Mid Fullstack Software Engineer",
    summary: [
      "• Homecare CRM environment maintenance",
      "• Admin & analysis for patients, customers and bills",
      "• Creation and maintenance for domiciliar services, medicines, materials, invoices and access profiles"
    ]
  },
  {
    company: "Promo Santos",
    period: "June 2020 - February 2021",
    role: "Hardware Maintenance Technician",
    summary: [
      "• Maintenance and installation of third-party software",
      "• Maintenance of I/O devices",
      "• Management of SOs and firmware"
    ]
  },
  {
    company: "GBS Softwares",
    period: "May 2019 - November 2019",
    role: "Jr Software Engineer",
    summary: [
      "• Web landing pages",
      "• Mobile development",
      "• Sales and project management for the healthcare, dentistry and marketing sectors"
    ]
  },
  {
    company: "Hapag Lloyd",
    period: "December 2017 - March 2019",
    role: "Customer Service Booking Analyst",
    summary: [
      "• Booking for container loading and unloading scheduling",
      "• Attendance for carriers, cargo owners and forwarders"
    ]
  }
];

const techStats = [
  { label: "JS", experience: "Experience", level: 75 },
  { label: "TS", experience: "Knowledge", level: 90 },
];

export const Experiences = () => {
  return (
    <section className={pageStyles.page}>
      <div className={pageStyles.hero}>
        <p className={pageStyles.eyebrow}>Professional Experiences</p>
        <h1 className={pageStyles.title}>What I've Done</h1>

        <div className={styles.timeline}>
          {experienceEntries.map((entry) => (
            <ExperienceCard key={entry.company} entry={entry} />
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
                <span className={styles.skillBar} style={{ width: `${item.level}%` }} />
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
