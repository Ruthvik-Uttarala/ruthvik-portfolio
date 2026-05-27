export type Project = {
  id: "silvervisit" | "orbit" | "flowcart" | "novaarchitect" | "edgerag";
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
  shortMark: "RU / 26",
  availability: "AVAILABLE FOR SOFTWARE ENGINEERING ROLES / 2026",
  headline: "I build AI products that survive real users.",
  subheadline:
    "Software engineer building applied AI, cloud infrastructure, and full-stack systems — from telehealth navigation and deployment orchestration to RAG support tools and computer vision workflows.",
  identity:
    "Penn State CS ’25  •  AWS ML Engineer – Associate  •  Based in the U.S.",
  email: "mailto:ruthvikuttarala@gmail.com",
  github: "https://github.com/Ruthvik-Uttarala",
  linkedin: "https://www.linkedin.com/in/ruthvik-uttarala-09918a251/",
  location: "United States",
};

// TODO: Add final resume PDF at /public/resume.pdf
export const resumeHref = "/resume.pdf";

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
      "Older adults can struggle to navigate complex telehealth portals without losing context or confidence.",
    buildResult:
      "Built a multimodal Chrome extension that converts typed or spoken goals into grounded on-screen actions, enforcing telehealth-only guardrails and limiting execution to one safe action per turn.",
    stack: ["Vertex AI", "Cloud Run", "Firestore", "Chrome Extension", "Multimodal AI"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/silvervisit-ai",
    badge: "1 safe action / turn",
  },
  {
    id: "orbit",
    category: "Developer Infrastructure / Agents",
    title: "Orbit",
    problem:
      "Deployments become confusing when non-technical builders and AI agents cannot see what is actually happening in the release pipeline.",
    buildResult:
      "Designed a GitLab Duo-powered deployment orchestration platform with a four-stage workflow: validate, trigger, verify, report — surfaced through status APIs and real-time UI tracking.",
    stack: ["GitLab Duo", "CI/CD", "Vercel", "Supabase", "REST APIs"],
    repoUrl: "https://gitlab.com/gitlab-ai-hackathon-group1/gitlab-ai-hackathon-project.git",
    badge: "4-stage deploy workflow",
  },
  {
    id: "flowcart",
    category: "Agentic Commerce / Full Stack",
    title: "FlowCart",
    problem:
      "Publishing one product across commerce and social channels is still unnecessarily manual.",
    buildResult:
      "Built a multi-agent product launch engine that transforms raw product inputs into Shopify listings and Instagram-ready posts through structured API orchestration and real-time status tracking.",
    stack: ["Next.js", "TypeScript", "Shopify API", "Instagram Graph API", "Supabase", "AI Agents"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/FlowCart",
  },
  {
    id: "novaarchitect",
    category: "Cloud Infrastructure / AI Agent",
    title: "NovaArchitect",
    problem:
      "Cloud architecture changes are risky when teams cannot simulate cost, uptime, and security tradeoffs before implementation.",
    buildResult:
      "Engineered an autonomous infrastructure strategy agent using Python, FastAPI, and Amazon Nova, reducing modeled error rates by over 80% in 3× traffic-spike scenarios through simulation-driven remediation plans.",
    stack: ["Amazon Nova", "Python", "FastAPI", "AWS", "Next.js", "Simulation"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/nova-architect",
    metrics: ["80%+ lower modeled error rate", "3× traffic simulation"],
  },
  {
    id: "edgerag",
    category: "Edge AI / RAG",
    title: "EdgeRAG Helpdesk",
    problem:
      "Operational teams need reliable answers from runbooks without digging through scattered documentation during incidents.",
    buildResult:
      "Built an edge-deployed RAG helpdesk for SRE runbooks, returning cited answers from tenant-filtered Vectorize retrieval and supporting faster triage for latency and 5xx incidents.",
    stack: ["Cloudflare Workers", "Vectorize", "RAG", "SRE Runbooks", "Edge Deployment"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/edge-rag-helpdesk",
    demoUrl: "https://lnkd.in/eNvyfE6D",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "OptimalHub LLC",
    role: "Software Engineer, AI & Cloud Architecture",
    dates: "Feb 2026 — Present",
    context: "Building AI and cloud workflows for parking-enforcement review systems.",
    outcomes: [
      "500 modeled events / day",
      "750 monthly violations supported",
      "8 CloudWatch alarms + 200 acceptance test scenarios",
    ],
    technologies: ["Firebase Cloud Functions", "AWS S3", "CloudWatch", "Computer Vision Workflows"],
  },
  {
    company: "PlantVillage",
    role: "Researcher",
    dates: "Jun 2025 — Aug 2025",
    context: "Developed computer vision pipelines for plant disease detection under real network constraints.",
    outcomes: ["83% model accuracy", "0.68 → 0.85 minority-class F1", "50% → 20% upload failures"],
    technologies: ["TensorFlow", "MobileNetV2", "AWS S3", "React Native", "SQLite"],
  },
  {
    company: "Happy Valley LaunchBox",
    role: "Full Stack Developer / Software Engineer",
    dates: "Sep 2023 — Mar 2024",
    context: "Shipped full-stack systems across edtech and commerce workflows.",
    outcomes: ["500+ daily active users", "32% faster API responses", "25% lower compute cost", "55% lower LCP"],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Redis", "AWS Lambda", "Azure Functions"],
  },
];

export const principles = [
  {
    id: "01",
    title: "Make the system visible",
    copy: "Users trust products when they can understand status, progress, and failure.",
  },
  {
    id: "02",
    title: "Measure what improves",
    copy: "Latency, reliability, accuracy, and cost are product decisions — not just backend metrics.",
  },
  {
    id: "03",
    title: "Ship with guardrails",
    copy: "AI becomes useful when actions are constrained, observable, and tied to real workflows.",
  },
];

export const stackGroups = [
  {
    name: "Interfaces",
    tools: ["React", "Next.js", "TypeScript", "React Native", "Tailwind CSS"],
  },
  {
    name: "Systems",
    tools: ["Node.js", "FastAPI", "REST APIs", "Redis", "MongoDB", "Firebase"],
  },
  {
    name: "AI / ML",
    tools: ["Python", "TensorFlow", "PyTorch", "Vertex AI", "Amazon Nova", "RAG"],
  },
  {
    name: "Cloud / Reliability",
    tools: ["AWS", "Azure", "Cloud Run", "Lambda", "S3", "CloudWatch", "Docker", "CI/CD"],
  },
];

export const credentials = [
  "B.S. Computer Science — Penn State, Dec 2025",
  "Minor — Product Innovation Entrepreneurship",
  "AWS Certified Machine Learning Engineer – Associate",
  "AWS Certified AI Practitioner",
  "President Walker Award",
];
