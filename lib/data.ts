export const profile = {
  name: "Nipun Theekshana Hemal",
  initials: "NH",
  title: "Associate Software Engineer",
  phone: "+94 774 036 202",
  email: "nipunthemal@gmail.com",
  github: "https://github.com/NipunHemal",
  linkedin: "https://www.linkedin.com/in/nipun-theekshana-hemal/",
  summary:
    "Software Engineer with hands-on freelance and internship experience building and deploying custom web solutions. Scalable backend focus with solid database design and management knowledge across SQL and NoSQL systems. Currently pursuing an HND in Software Engineering. Seeking to contribute as an Associate Software Engineer in a growth-focused engineering team.",
};

export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "Go"],
  Frontend: ["React.js", "Next.js"],
  Backend: [
    "Node.js",
    "Express.js",
    "Spring Boot",
    "Microservices Architecture",
    "PHP",
    "Laravel",
    "Kafka",
  ],
  Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  "DevOps & Tools": [
    "Docker",
    "Git",
    "GitHub",
    "GitLab",
    "Jenkins",
    "Linux",
    "Nginx",
    "Traefik",
  ],
  "Also Familiar With": [
    "REST API Design",
    "JWT Authentication",
    "Postman",
    "Agile/Scrum",
    "CI/CD (GitHub Actions)",
    "Unit Testing (Jest)",
    "gRPC",
  ],
  "AI & Agentic Tools": [
    "Agentic AI Development",
    "AI-Assisted Coding (Claude, Cursor, etc.)",
  ],
};

export const databaseExpertise = [
  {
    title: "Relational Design & Normalization",
    detail:
      "Database design and normalization (1NF–3NF, BCNF) to eliminate redundancy and maintain data integrity.",
  },
  {
    title: "Query Optimization & Indexing",
    detail:
      "Query optimization and indexing strategies for high-performance read/write operations.",
  },
  {
    title: "ACID Transactions",
    detail:
      "ACID-compliant transaction management and concurrency control for reliable multi-user systems.",
  },
  {
    title: "Multi-Tenant Schema Design",
    detail:
      "Schema design for scalable, multi-tenant applications across MySQL, PostgreSQL, and MongoDB.",
  },
  {
    title: "NoSQL Data Modeling",
    detail:
      "Document-based modeling (embedded vs. referenced schemas) for flexible, high-volume workloads.",
  },
  {
    title: "ORM & Raw SQL",
    detail:
      "ORM-driven development (Sequelize, Prisma) alongside hand-tuned raw SQL for performance-critical queries.",
  },
  {
    title: "Stored Procedures & Migrations",
    detail:
      "Stored procedures, triggers, views, and database migrations / version control.",
  },
];

export const experience = [
  {
    role: "Intern, Software Engineering",
    org: "Cenzios",
    period: "Nov 2025 – May 2026",
    current: false,
    points: [
      "Completed an internship focused on full-stack web development in a professional team environment",
      "Collaborated on real-world projects, improving codebase practices and development workflows",
      "Worked across the stack on dynamic project modules and scalable system components",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-Employed / Project-Based",
    period: "2023 – Present",
    current: true,
    points: [
      "Built and deployed custom websites and web applications for clients based on individual requirements",
      "Specialized in back-end functionality, API design, and database architecture and integration",
      "Delivered full-stack solutions using the MERN stack and related modern frameworks, from planning through deployment",
    ],
  },
];

export const education = [
  {
    title: "HND in Software Engineering",
    org: "IJSE",
    period: "2024 – Present",
    current: true,
  },
  {
    title: "Advanced Level – Mathematics Stream",
    org: "",
    period: "2022",
    current: false,
  },
  {
    title: "Self-Directed Learning – Full-Stack Development",
    org: "Online courses & resources",
    period: "2020 – 2024",
    current: false,
  },
];

export const currentlyExploring = [
  "Cloud Platforms (AWS, Azure) & Cloud Architecture Fundamentals",
  "Advanced Kubernetes Orchestration & Container Management",
];

// TODO: Replace these placeholder entries with real project data.
// Each project needs: title, tag, description, stack, github URL, and live URL.
export const projects = [
  {
    id: "project-1",
    number: "01",
    title: "TODO: Project Name",
    tag: "TODO: Project Category",
    description:
      "TODO: One or two sentence summary of what this project does and the problem it solves.",
    stack: ["TODO", "TODO", "TODO"],
    githubUrl: "#",
    liveUrl: "#",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    theme: "text-red-400",
    btnTheme: "bg-red-500 hover:bg-red-600 text-white",
  },
  {
    id: "project-2",
    number: "02",
    title: "TODO: Project Name",
    tag: "TODO: Project Category",
    description:
      "TODO: One or two sentence summary of what this project does and the problem it solves.",
    stack: ["TODO", "TODO", "TODO"],
    githubUrl: "#",
    liveUrl: "#",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1200&auto=format&fit=crop",
    theme: "text-indigo-400",
    btnTheme: "bg-indigo-500 hover:bg-indigo-600 text-white",
  },
  {
    id: "project-3",
    number: "03",
    title: "TODO: Project Name",
    tag: "TODO: Project Category",
    description:
      "TODO: One or two sentence summary of what this project does and the problem it solves.",
    stack: ["TODO", "TODO", "TODO"],
    githubUrl: "#",
    liveUrl: "#",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop",
    theme: "text-emerald-400",
    btnTheme: "bg-emerald-500 hover:bg-emerald-600 text-white",
  },
];
