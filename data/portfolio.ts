export type Project = {
  id: "silvervisit" | "flowwick" | "novaarchitect" | "orbit";
  category: string;
  title: string;
  problem: string;
  buildResult: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
  badge: string;
  metrics: string[];
  proofNote: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  context: string;
  outcomes: string[];
  technologies: string[];
};

export type StackGroup = {
  name: string;
  description: string;
  tools: string[];
};

export const profile = {
  name: "Ruthvik Uttarala",
  shortMark: "RU",
  availability: "SOFTWARE ENGINEER / FULL STACK / AI / CLOUD",
  headline:
    "I build production-ready full-stack, AI, and cloud systems that turn messy workflows into reliable software.",
  subheadline:
    "Software engineer focused on React, TypeScript, Python, REST APIs, AWS, AI systems, and operator-grade product workflows.",
  identity:
    "B.S. Computer Science - Penn State / F-1 OPT / STEM OPT eligible through 2029 / AWS ML + AI certified",
  email: "mailto:uttaralaruthvik@gmail.com",
  github: "https://github.com/Ruthvik-Uttarala",
  linkedin: "https://www.linkedin.com/in/ruthvik-uttarala-09918a251/",
  instagram: "https://www.instagram.com/ruuttarala/",
  location: "United States",
};

export const resumeHref = "/resume.pdf";

export const navItems = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "motion", label: "Motion" },
  { id: "contact", label: "Contact" },
];

export const heroMetrics = [
  "500 flagged events/day",
  "4,500 monthly image loads",
  "<3s response SLA",
  "90% task completion",
  "30% modeled AWS savings",
];

export const projects: Project[] = [
  {
    id: "silvervisit",
    category: "Assistive AI / Telehealth",
    title: "SilverVisit AI",
    problem:
      "Telehealth portals can create navigation friction for older adults when tasks require many steps, context switches, and unsupported page states.",
    buildResult:
      "Built a React and TypeScript Chrome MV3 assistant that converts typed or spoken telehealth goals into safe UI actions through Node.js REST APIs, Cloud Run, Vertex AI, Firestore traces, and guardrails across 40+ workflows.",
    stack: ["React", "TypeScript", "Node.js", "Chrome MV3", "Cloud Run", "Vertex AI", "Firestore"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/silvervisit-ai",
    badge: "90% task completion",
    metrics: ["40+ workflows", "35% lower navigation failure risk", "guarded UI actions"],
    proofNote:
      "Shows AI product judgment: guarded automation, accessibility-minded workflows, and measurable task completion.",
  },
  {
    id: "flowwick",
    category: "Agentic Commerce / Full Stack",
    title: "Flowwick",
    problem:
      "Launching a product across Shopify and Instagram is still too manual when product copy, media, status tracking, and API publishing live in separate workflows.",
    buildResult:
      "Shipped a Next.js and Supabase product-launch workflow that turns structured product inputs into Shopify listings and Instagram publishing flows with typed AI outputs and real-time monitoring.",
    stack: ["Next.js", "TypeScript", "Supabase", "Shopify API", "Instagram Graph API", "OpenAI", "Gemini"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/FlowCart",
    badge: "<90s/item",
    metrics: ["10m to <90s/item", "95% success across 25 batches", "input to publish pipeline"],
    proofNote:
      "Shows full-stack delivery: typed API orchestration, publishing workflows, and practical automation speedups.",
  },
  {
    id: "novaarchitect",
    category: "Cloud Infrastructure / AI Agent",
    title: "NovaArchitect",
    problem:
      "Cloud architecture changes are risky when teams cannot quickly compare cost, uptime, and security tradeoffs before implementation.",
    buildResult:
      "Built a FastAPI and Next.js infrastructure simulation agent using Amazon Bedrock, Nova, REST APIs, and KPI cards to convert simulation outputs into actionable reports.",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "AWS", "Amazon Bedrock", "Nova"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/nova-architect",
    badge: "30% savings",
    metrics: ["5 simulations", "70% faster infrastructure decisions", "risk + cost reports"],
    proofNote:
      "Shows cloud/platform thinking: infrastructure tradeoffs made visible through cost, risk, and decision metrics.",
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
    badge: "50 deployment runs",
    metrics: ["4-stage workflow", "60% faster release decisions", "1s status polling"],
    proofNote:
      "Shows release ownership: deployment status, verification, and reporting brought into one reliable workflow.",
  },
];

export const instagramReels = [
  {
    id: "reel-1",
    title: "Recent motion",
    caption: "Short updates and clips from what I am building.",
    url: "https://www.instagram.com/ruuttarala/",
    embedUrl: "PASTE_REEL_URL_HEREembed",
  },
  {
    id: "reel-2",
    title: "Build notes",
    caption: "Projects, learning, launches, and behind-the-scenes work.",
    url: "https://www.instagram.com/ruuttarala/",
    embedUrl: "PASTE_REEL_URL_HEREembed",
  },
  {
    id: "reel-3",
    title: "Outside the repo",
    caption: "Personal updates and short-form clips beyond the case studies.",
    url: "https://www.instagram.com/ruuttarala/",
    embedUrl: "PASTE_REEL_URL_HEREembed",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "OptimalHub LLC",
    role: "Software Engineer, AI & Cloud Architecture",
    dates: "Feb 2026 - Present",
    context: "Implementation record for operator review systems, evidence delivery, and cloud reliability.",
    outcomes: [
      "Built an end-to-end RESTful API and React operator dashboard on AWS integrating real-time camera event streams with a TypeScript backend and PostgreSQL data layer to support 500 flagged vehicle events per day, reducing manual intervention time by 40%.",
      "Shipped secure evidence delivery using React, Python REST APIs, and AWS S3 signed URLs, serving 4,500 monthly image loads, reducing modeled storage needs by 95%, and cutting evidence retrieval API errors by 30%.",
      "Improved operator response SLA from 5s to under 3s by containerizing Docker and Kubernetes services, adding RabbitMQ job queues, gRPC worker calls, and 8 CloudWatch alarms that cut alert noise by 25%.",
    ],
    technologies: ["React", "TypeScript", "Python", "REST APIs", "PostgreSQL", "AWS S3", "Docker", "Kubernetes", "RabbitMQ", "gRPC", "CloudWatch"],
  },
  {
    company: "PlantVillage",
    role: "Researcher, Full Stack AI Systems",
    dates: "Jun 2025 - Aug 2025",
    context: "Implementation record for mobile computer vision, image submission pipelines, and field sync.",
    outcomes: [
      "Built and shipped a Python Flask REST API processing 8,000 image submissions with PostgreSQL, AWS S3, CI/CD, and a React Native mobile client with 83% end-to-end classification accuracy.",
      "Improved minority class API response accuracy by 25%, F1 from 0.68 to 0.85.",
      "Reduced AWS S3 upload failure rates by 60% with retry logic, exponential backoff, and multipart upload support.",
      "Cut API-to-UI data latency by 87%, from 15s to 2s, using Firebase Realtime Database sync and SQLite offline caching.",
    ],
    technologies: ["Python", "Flask", "React Native", "PostgreSQL", "AWS S3", "CI/CD", "Firebase", "SQLite"],
  },
  {
    company: "Happy Valley LaunchBox",
    role: "Full Stack Developer",
    dates: "Sep 2023 - Mar 2024",
    context: "Implementation record for customer-facing web apps, API performance, payments, and release automation.",
    outcomes: [
      "Built two customer-facing web apps with React, TypeScript, and Python Flask REST APIs, serving 100+ daily active users while raising Lighthouse mobile performance from 50 to 70 and meeting WCAG AA checks.",
      "Cut REST API latency 32%, from 1.9s to 1.3s, by optimizing Java Spring Boot and Python service paths, PostgreSQL composite indexes, and backend middleware.",
      "Scaled throughput to 100+ concurrent users during 15-minute bursts using RabbitMQ, Redis caching, and AWS ECS containers.",
      "Reduced inventory mismatches 70% and cut release time from 3 hours to under 20 minutes using Stripe webhooks, GraphQL inventory queries, Terraform, and GitHub Actions CI/CD.",
    ],
    technologies: ["React", "TypeScript", "Python", "Flask", "Java", "Spring Boot", "PostgreSQL", "RabbitMQ", "Redis", "AWS ECS", "Terraform", "GitHub Actions"],
  },
];

export const principles = [
  {
    id: "01",
    title: "Make systems visible",
    copy: "Interfaces should expose state, failure, progress, and ownership without asking users to guess.",
  },
  {
    id: "02",
    title: "Measure what improves",
    copy: "Latency, reliability, accuracy, cost, and operator time are treated as product evidence.",
  },
  {
    id: "03",
    title: "Ship with guardrails",
    copy: "AI actions need constraints, logs, recovery paths, and human-readable review trails.",
  },
];

export const stackGroups: StackGroup[] = [
  {
    name: "Frontend",
    description: "Interfaces and dashboards for operators, customers, and mobile users.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Angular", "Vue.js"],
  },
  {
    name: "Backend/API",
    description: "Services, workers, integrations, and typed APIs behind production workflows.",
    tools: ["Python", "Java", "Node.js", "Flask", "FastAPI", "Spring", "REST APIs", "GraphQL", "gRPC", "microservices"],
  },
  {
    name: "Cloud/Platform",
    description: "Deployments, reliability, storage, compute, and cloud operating constraints.",
    tools: ["AWS", "Azure", "Google Cloud", "S3", "Lambda", "ECS", "CloudWatch", "Cloud Run"],
  },
  {
    name: "Databases",
    description: "Relational, document, realtime, cache, and offline data paths.",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase", "Redis", "DynamoDB", "SQLite"],
  },
  {
    name: "AI/ML",
    description: "LLM, agentic, RAG, and computer vision workflows with measurable outputs.",
    tools: ["LLMs", "OpenAI", "Gemini", "Vertex AI", "Amazon Bedrock", "Nova", "Computer Vision", "RAG"],
  },
  {
    name: "DevOps/Observability",
    description: "CI/CD, containers, queues, monitoring, and production feedback loops.",
    tools: ["Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "CI/CD", "Linux", "Kafka", "RabbitMQ", "Datadog", "Splunk"],
  },
];

export const credentials = [
  "B.S. Computer Science - Penn State, Dec 2025",
  "F-1 OPT / STEM OPT eligible through 2029",
  "AWS Certified Machine Learning Engineer - Associate",
  "AWS Certified AI Practitioner",
  "Product Innovation Entrepreneurship",
  "President Walker Award",
];
