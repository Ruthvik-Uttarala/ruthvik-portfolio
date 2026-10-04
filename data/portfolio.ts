export type Project = {
  id: "silvervisit" | "orbit" | "flowwick" | "novaarchitect";
  category: string;
  title: string;
  problem: string;
  buildResult: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  badge?: string;
  metrics?: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  context: string;
  outcomes: string[];
  technologies: string[];
};

export const profile = {
  name: "Ruthvik Uttarala",
  shortMark: "RU / SWE",
  availability: "SOFTWARE ENGINEER • FULL STACK • AI SYSTEMS • CLOUD PLATFORMS",
  headline: "Software Engineer building production-ready full-stack, AI, and cloud systems.",
  subheadline:
    "Penn State Computer Science graduate with hands-on experience shipping React, TypeScript, Python, REST APIs, AWS, Firebase, Supabase, CI/CD, and AI-powered systems for real users and measurable business outcomes.",
  identity:
    "B.S. Computer Science — Penn State • F-1 OPT • STEM OPT eligible through 2029 • AWS ML / AI certified",
  email: "mailto:uttaralaruthvik@gmail.com",
  github: "https://github.com/Ruthvik-Uttarala",
  linkedin: "https://www.linkedin.com/in/ruthvik-uttarala-09918a251/",
  location: "United States",
};

export const resumeHref = "/resume";

export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const projects: Project[] = [
  {
    id: "silvervisit",
    category: "Assistive AI / Telehealth",
    title: "SilverVisit AI",
    problem:
      "Telehealth portals can create navigation friction for older adults when tasks require many steps, context switches, and unsupported page states.",
    buildResult:
      "Built a React and TypeScript Chrome MV3 assistant that converts typed or spoken telehealth goals into safe UI actions through Node.js REST APIs, Cloud Run, Vertex AI, Firestore traces, and guardrails.",
    stack: ["React", "TypeScript", "Node.js", "Chrome MV3", "Cloud Run", "Vertex AI", "Firestore"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/silvervisit-ai",
    badge: "90% task completion",
    metrics: ["40+ workflows automated", "35% lower navigation-failure risk", "auditable UI actions"],
  },
  {
    id: "flowwick",
    category: "Agentic Commerce / Full Stack",
    title: "Flowwick",
    problem:
      "Launching a product across Shopify and Instagram is still too manual when product copy, media, status tracking, and API publishing live in separate workflows.",
    buildResult:
      "Shipped a Next.js and Supabase product-launch workflow that turns structured product inputs into Shopify listings and Instagram publishing flows with typed AI outputs and real-time monitoring.",
    stack: ["Next.js", "TypeScript", "Supabase", "Shopify Admin API", "Instagram Graph API", "OpenAI", "Gemini"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/FlowCart",
    demoUrl: "#",
    badge: "<90s per item",
    metrics: ["10 min → under 90s upload time", "95% structured API success", "25 product batches"],
  },
  {
    id: "novaarchitect",
    category: "Cloud Infrastructure / AI Agent",
    title: "NovaArchitect",
    problem:
      "Cloud architecture changes are risky when teams cannot quickly compare cost, uptime, and security tradeoffs before implementation.",
    buildResult:
      "Built a FastAPI and Next.js infrastructure simulation agent using Amazon Bedrock, Nova, Recharts, REST APIs, and KPI cards to convert simulation outputs into actionable reports.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "AWS", "Amazon Bedrock", "Nova", "Recharts"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/nova-architect",
    demoUrl: "#",
    badge: "30% modeled savings",
    metrics: ["30% modeled monthly AWS savings", "5 simulations", "70% faster infrastructure decisions"],
  },
  {
    id: "orbit",
    category: "Developer Infrastructure / Release Orchestration",
    title: "Orbit",
    problem:
      "Deployment decisions slow down when pipeline state, authentication context, Vercel outcomes, and GitLab release history are scattered.",
    buildResult:
      "Built a GitLab Duo-powered release orchestration dashboard with React, TypeScript, Node.js REST APIs, Supabase persistence, GitLab CI/CD integration, and 1s status polling.",
    stack: ["React", "TypeScript", "Node.js", "REST APIs", "GitLab CI/CD", "Vercel", "Supabase"],
    repoUrl: "https://gitlab.com/gitlab-ai-hackathon-group1/gitlab-ai-hackathon-project.git",
    demoUrl: "#",
    badge: "4-stage pipeline",
    metrics: ["50 deployment runs tracked", "60% faster release decisions", "1s status polling"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "OptimalHub LLC",
    role: "Software Engineer — AI & Cloud Architecture",
    dates: "Feb 2026 — Present",
    context:
      "Building production AI, cloud, and operator-review systems for parking enforcement workflows.",
    outcomes: [
      "Built an AWS-backed REST API and React dashboard supporting 500 flagged vehicle events per day.",
      "Reduced manual intervention time by 40% with real-time camera event streams, TypeScript services, and PostgreSQL data flows.",
      "Cut modeled storage needs by 95% and evidence retrieval API errors by 30% using Python REST APIs and AWS S3 signed URLs.",
      "Improved operator response SLA from 5s to under 3s with Docker, Kubernetes, RabbitMQ, gRPC worker calls, and CloudWatch alarms.",
    ],
    technologies: ["Python", "TypeScript", "React", "REST APIs", "PostgreSQL", "AWS S3", "CloudWatch", "RabbitMQ", "Docker", "Kubernetes"],
  },
  {
    company: "PlantVillage",
    role: "Researcher — Full Stack AI Systems",
    dates: "Jun 2025 — Aug 2025",
    context:
      "Built computer vision and mobile data pipelines for field-collected plant disease submissions under constrained network conditions.",
    outcomes: [
      "Processed 8,000 image submissions through a Python and Flask REST API with PostgreSQL, AWS S3, and CI/CD validation.",
      "Delivered 83% end-to-end classification accuracy to a React Native mobile client.",
      "Improved minority-class API response accuracy by 25%, raising F1 from 0.68 to 0.85.",
      "Reduced AWS S3 upload failure rates by 60% with retry logic, exponential backoff, and multipart upload support.",
      "Cut API-to-UI data latency by 87%, from 15s to 2s, with Firebase sync and SQLite offline caching.",
    ],
    technologies: ["Python", "Flask", "React Native", "TypeScript", "Firebase", "SQLite", "AWS S3", "PostgreSQL", "CI/CD"],
  },
  {
    company: "Happy Valley LaunchBox",
    role: "Full Stack Developer",
    dates: "Sep 2023 — Mar 2024",
    context:
      "Shipped customer-facing accelerator products across web, backend, payments, infrastructure, and reliability workflows.",
    outcomes: [
      "Built two customer-facing apps with React, TypeScript, and Python Flask REST APIs serving 100+ daily active users.",
      "Raised Lighthouse mobile performance from 50 to 70 while meeting WCAG AA checks.",
      "Cut REST API latency 32%, from 1.9s to 1.3s, across Java Spring Boot, Python service paths, and PostgreSQL indexes.",
      "Scaled throughput to 100+ concurrent users with RabbitMQ queues, Redis caching, and AWS ECS containers.",
      "Reduced inventory mismatches 70% and cut release time from 3 hours to under 20 minutes with Stripe webhooks, GraphQL inventory queries, Terraform, and GitHub Actions.",
    ],
    technologies: ["React", "TypeScript", "Python", "Flask", "Java Spring Boot", "PostgreSQL", "RabbitMQ", "Redis", "AWS ECS", "Terraform", "GitHub Actions"],
  },
];

export const principles = [
  {
    id: "01",
    title: "Build recruiter-readable systems",
    copy: "Every project should quickly explain the user problem, the architecture, the measurable impact, and the production constraints.",
  },
  {
    id: "02",
    title: "Ship measurable outcomes",
    copy: "Latency, accuracy, reliability, cost, and operator time are treated as product metrics, not just engineering details.",
  },
  {
    id: "03",
    title: "Keep AI constrained and observable",
    copy: "AI systems become useful when actions are guarded, logged, auditable, and integrated into real workflows.",
  },
];

export const stackGroups = [
  {
    name: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "React Native", "Angular", "Vue.js", "Tailwind CSS", "HTML5"],
  },
  {
    name: "Backend",
    tools: ["Python", "Node.js", "Flask", "FastAPI", "Java", "Spring", "REST APIs", "GraphQL", "gRPC", "Microservices"],
  },
  {
    name: "Cloud",
    tools: ["AWS", "Azure", "Google Cloud", "S3", "Lambda", "ECS", "CloudWatch", "Cloud Run", "Firebase"],
  },
  {
    name: "Databases",
    tools: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "DynamoDB", "Supabase", "Redis", "SQLite", "NoSQL"],
  },
  {
    name: "AI and ML",
    tools: ["LLMs", "OpenAI", "Claude", "ChatGPT", "Gemini", "Vertex AI", "Amazon Bedrock", "Nova", "Computer Vision", "RAG"],
  },
  {
    name: "DevOps",
    tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "GitLab CI/CD", "Jenkins", "Kafka", "RabbitMQ", "Datadog", "Splunk", "Linux"],
  },
];

export const credentials = [
  "B.S. Computer Science — Penn State, Dec 2025",
  "F-1 OPT • STEM OPT eligible through 2029",
  "AWS Certified Machine Learning Engineer",
  "AWS Certified AI Practitioner",
  "Product Innovation Entrepreneurship Certificate",
  "President Walker Award • Penn State academic distinction",
];
