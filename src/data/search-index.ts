export interface SearchEntry {
  id: string;
  page: string;
  path: string;
  title: string;
  text: string;
}

export const searchIndex: SearchEntry[] = [
  // ── Home ──────────────────────────────────────────────────────────────────
  {
    id: "home-hero",
    page: "Home",
    path: "/",
    title: "Building a clean portfolio system.",
    text: "This first pass turns the README notes into a simple structure: a strong home page, a left-side navigation rail, and focused pages for experience, projects, and personal context.",
  },
  {
    id: "home-structure-home",
    page: "Home",
    path: "/",
    title: "Home — structure",
    text: "Hero, direction, and the quickest path into the portfolio.",
  },
  {
    id: "home-structure-experiences",
    page: "Home",
    path: "/",
    title: "Experiences — structure",
    text: "Timeline, roles, and the stack behind each stage of work.",
  },
  {
    id: "home-structure-projects",
    page: "Home",
    path: "/",
    title: "Projects — structure",
    text: "Selected case studies, product thinking, and visual experiments.",
  },
  {
    id: "home-structure-personal",
    page: "Home",
    path: "/",
    title: "Personal — structure",
    text: "Short bio, working style, and the best way to get in touch.",
  },
  {
    id: "home-direction",
    page: "Home",
    path: "/",
    title: "Visual direction",
    text: "The layout leans toward a crisp left rail, compact cards, and a restrained palette with orange accents.",
  },

  // ── Experiences ───────────────────────────────────────────────────────────
  {
    id: "exp-hero",
    page: "Experiences",
    path: "/experiences",
    title: "Shape the timeline before polishing it.",
    text: "This page follows the README tables: job history, role dates, and a separate section for technical experience that can evolve over time.",
  },
  {
    id: "exp-job",
    page: "Experiences",
    path: "/experiences",
    title: "Job experiences",
    text: "Add your role, company, dates, and a short outcome for each stage.",
  },
  {
    id: "exp-tech",
    page: "Experiences",
    path: "/experiences",
    title: "Tech experiences",
    text: "List the technologies you use most, with a clear knowledge level.",
  },
  {
    id: "exp-highlights",
    page: "Experiences",
    path: "/experiences",
    title: "Highlights",
    text: "Capture the few bullets that explain your strongest impact.",
  },

  // ── Projects ──────────────────────────────────────────────────────────────
  {
    id: "proj-hero",
    page: "Projects",
    path: "/projects",
    title: "Curate fewer projects, but explain them better.",
    text: "Use this space for selected work, not a long list. Each card should make the reader understand your role, the stack, and why it matters.",
  },
  {
    id: "proj-case-study",
    page: "Projects",
    path: "/projects",
    title: "Featured case study",
    text: "Describe the problem, the solution, and the outcome in three short beats.",
  },
  {
    id: "proj-landing",
    page: "Projects",
    path: "/projects",
    title: "Landing page system",
    text: "Show the reusable pieces that help you ship faster across multiple pages.",
  },
  {
    id: "proj-experiments",
    page: "Projects",
    path: "/projects",
    title: "Experiments",
    text: "Keep smaller visual or interaction tests here so the portfolio stays alive.",
  },

  // ── Personal ──────────────────────────────────────────────────────────────
  {
    id: "personal-hero",
    page: "Personal",
    path: "/personal",
    title: "Keep the bio short and useful.",
    text: "This page is where the portfolio becomes human: a quick introduction, your work style, and a clear path for people to contact you.",
  },
  {
    id: "personal-about",
    page: "Personal",
    path: "/personal",
    title: "About",
    text: "A short paragraph that explains who you are and what you care about.",
  },
  {
    id: "personal-style",
    page: "Personal",
    path: "/personal",
    title: "Working style",
    text: "Share the habits that make you effective: focus, speed, or visual polish.",
  },
  {
    id: "personal-contact",
    page: "Personal",
    path: "/personal",
    title: "Contact",
    text: "Add the fastest way to reach you, plus any social or GitHub links.",
  },
];
