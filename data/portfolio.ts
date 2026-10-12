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

export type InstagramReel = {
  id: string;
  title: string;
  caption: string;
  url: string;
  embedUrl: string;
};

export const profile = {
  name: "Ruthvik Uttarala",
  shortMark: "RU",
  availability: "SOFTWARE ENGINEER / BACKEND / FULL STACK / CLOUD / APPLIED AI",
  headline:
    "I build production software: reliable APIs, cloud infrastructure, and applied AI workflows.",
  subheadline:
    "Software engineer working across Python, TypeScript, AWS, asynchronous systems, authentication, and automated testing.",
  identity:
    "B.S. Computer Science — Penn State, Dec 2025 / F-1 OPT / STEM OPT eligible through 2029",
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

export const projects: Project[] = [
  {
    id: "flowwick",
    category: "AI-Powered E-commerce Product Launch Platform",
    title: "Flowwick",
    problem:
      "Boutique sellers need one reliable workflow for product setup, AI-assisted copy, and publishing across commerce and social channels.",
    buildResult:
      "Built a Next.js, React, TypeScript, and Supabase commerce application with 33 API route files for authenticated product management, merchant onboarding, image uploads, and merchant-editable AI content. Integrated Shopify Admin GraphQL and Instagram Graph APIs with OAuth and channel-specific failure reporting.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Shopify GraphQL", "Instagram Graph API", "OpenAI"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/Flowwick",
    badge: "33 API routes",
    metrics: ["33 API route files", "2 publishing channels", "OAuth integrations"],
    proofNote:
      "Shows end-to-end product engineering: authenticated workflows, third-party APIs, recoverable publishing errors, and AI output that merchants can review and edit.",
  },
  {
    id: "novaarchitect",
    category: "AWS Infrastructure Cost Optimization and Simulation Agent",
    title: "NovaArchitect",
    problem:
      "Cloud analysis needs trustworthy resource evidence and defensive handling of AI output before teams can use it to evaluate infrastructure decisions.",
    buildResult:
      "Developed a Python and FastAPI discovery service spanning four AWS service families through boto3, with STS verification, pagination, and partial-failure reporting. Added a Bedrock Converse pipeline with Pydantic validation, JSON recovery, retries, and deterministic fallbacks.",
    stack: ["Python", "FastAPI", "AWS", "boto3", "Amazon Bedrock", "Pydantic", "pytest"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/nova-architect",
    badge: "41 test functions",
    metrics: ["4 AWS service families", "7 REST endpoints", "41 tests / 13 modules"],
    proofNote:
      "Shows evidence-based cloud analysis, fault-tolerant API design, and a clear boundary between implemented discovery, validated analysis, and simulated action plans.",
  },
  {
    id: "silvervisit",
    category: "Assistive AI / Telehealth",
    title: "SilverVisit AI",
    problem:
      "Telehealth portals can create navigation friction for older adults when tasks require many steps and unsupported page states are not explained.",
    buildResult:
      "Built a React and TypeScript Chrome MV3 assistant that turns typed or spoken goals into one grounded UI action at a time, backed by Node.js services, Cloud Run, Vertex AI, and Firestore traces.",
    stack: ["React", "TypeScript", "Node.js", "Chrome MV3", "Cloud Run", "Vertex AI", "Firestore"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/silvervisit-ai",
    badge: "Guarded actions",
    metrics: ["Chrome MV3 extension", "One action per turn", "Cloud Run verification"],
    proofNote:
      "Shows safety-minded AI product judgment through grounded actions, telehealth-only guardrails, and explicit unsupported-state handling.",
  },
  {
    id: "orbit",
    category: "Developer Infrastructure / Release Orchestration",
    title: "Orbit",
    problem:
      "Release decisions become harder when pipeline state, authentication context, deployment outcomes, and history are scattered.",
    buildResult:
      "Built a release orchestration dashboard that brings validation, deployment, verification, and reporting into one inspectable workflow.",
    stack: ["React", "TypeScript", "Node.js", "REST APIs", "GitLab CI/CD", "Vercel", "Supabase"],
    repoUrl: "https://github.com/Ruthvik-Uttarala/Orbit",
    badge: "4-stage workflow",
    metrics: ["Validate", "Trigger", "Verify + report"],
    proofNote:
      "Shows release ownership by making deployment state and verification steps visible in one workflow.",
  },
];

export const instagramReels: InstagramReel[] = [];

export const experiences: ExperienceItem[] = [
  {
    company: "OptimalHub LLC",
    role: "Software Engineer",
    dates: "Feb 2026 — Present",
    context: "Two production systems: PDFextract for asynchronous document processing and PARKSOL for parking operations.",
    outcomes: [
      "PDFextract — Rearchitected PDF processing into asynchronous Python and Flask services on AWS Lambda, using Amazon S3 and Aiven Kafka to decouple extraction workloads from API requests and support retryable jobs.",
      "PARKSOL — Prevented duplicate parking violations by implementing idempotent TypeScript processing, time-window deduplication, and Firestore transaction locks in Firebase Cloud Functions.",
      "PDFextract — Automated extraction and export to Excel, Word, JSON, and text using Gemini, PyMuPDF, pdfplumber, and structured-output validation.",
      "Security — Added server-side role-based access controls with Firebase Authentication and Firestore for PARKSOL, and DynamoDB-backed authentication and authorization for PDFextract.",
      "PARKSOL — Delivered a React operations dashboard through five successful Vercel production deployments for authenticated vehicle events, violations, and operator notifications.",
      "PDFextract — Resolved Kafka ACL and SCRAM failures, Lambda packaging issues, and retry-state conflicts; validated the release against 123 passing backend tests.",
    ],
    technologies: ["Python", "Flask", "TypeScript", "Node.js", "React", "REST APIs", "AWS Lambda", "Amazon S3", "DynamoDB", "Kafka", "Firebase", "Firestore", "Docker", "CloudWatch"],
  },
  {
    company: "PlantVillage",
    role: "Researcher",
    dates: "Jun 2025 — Aug 2025",
    context: "Applied AI research paired with backend development, observability, and regression testing for agricultural advisory workflows.",
    outcomes: [
      "Developed eight versioned FastAPI endpoints with PostgreSQL conversation persistence, S3 image storage, and a Vue 3 frontend for agricultural advisory and image analysis workflows.",
      "Evaluated a LangChain, LangGraph, and ChromaDB RAG pipeline using 24 agricultural prompts and 179 LangSmith-traced executions to investigate latency and retrieval behavior.",
      "Expanded regression coverage to more than 150 Python and TypeScript tests across APIs, PostgreSQL sessions, authentication, image uploads, and conversational workflows.",
    ],
    technologies: ["Python", "FastAPI", "REST APIs", "TypeScript", "Vue 3", "PostgreSQL", "Amazon S3", "LangChain", "LangGraph", "ChromaDB", "LangSmith", "Promptfoo", "Docker"],
  },
  {
    company: "Happy Valley LaunchBox",
    role: "Startup Founder and Accelerator Participant",
    dates: "May 2023 — Jun 2025",
    context: "Startup leadership spanning entrepreneurship, customer discovery, product strategy, creator partnerships, and team execution.",
    outcomes: [
      "Selected for Penn State's FastTrack Accelerator, with a 25% acceptance rate, and used accelerator mentorship to advance Ramaniyam's business strategy.",
      "Directed seven creator partnerships producing more than 25 promotional posts, contributing to a reported 40% engagement increase and 15% weekly sales growth for Ramaniyam.",
      "Led a three-member founding team developing and pitching MentorYou.ai through Idea TestLab, translating student feedback into product strategy.",
    ],
    technologies: ["Entrepreneurship", "Product strategy", "Customer discovery", "Creator partnerships", "Team leadership"],
  },
];

export const stackGroups: StackGroup[] = [
  {
    name: "Frontend",
    description: "Accessible product interfaces, operational dashboards, and full-stack application surfaces.",
    tools: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "Vue 3"],
  },
  {
    name: "Backend / APIs",
    description: "Services, integrations, and dependable API contracts behind production workflows.",
    tools: ["Python", "Flask", "FastAPI", "Node.js", "REST APIs", "GraphQL", "Django", "Java"],
  },
  {
    name: "Data",
    description: "Relational, document, cache, authentication, and application data paths.",
    tools: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Firebase", "Firestore", "Redis", "Supabase"],
  },
  {
    name: "Cloud / DevOps",
    description: "Cloud compute, storage, messaging, containers, monitoring, and release operations.",
    tools: ["AWS", "Google Cloud", "Lambda", "S3", "ECS", "CloudWatch", "Docker", "Linux", "Git", "Kafka", "RabbitMQ"],
  },
  {
    name: "Applied AI",
    description: "LLM and RAG workflows with validation, tracing, retrieval evaluation, and fallbacks.",
    tools: ["LLMs", "PyTorch", "LangChain", "LangGraph", "ChromaDB", "LangSmith", "Gemini", "OpenAI", "Amazon Bedrock"],
  },
  {
    name: "Testing / Reliability",
    description: "Practices that make systems secure, observable, repeatable, and resilient to retries.",
    tools: ["pytest", "Automated regression testing", "Authentication", "Authorization", "Asynchronous processing", "Observability"],
  },
];

export const credentials = [
  "B.S. Computer Science — Penn State, Dec 2025",
  "F-1 OPT / STEM OPT eligible through 2029",
  "AWS Certified Machine Learning Engineer",
  "AWS Certified AI Practitioner",
  "Product Innovation Entrepreneurship Certificate",
  "President Walker Award — Penn State academic distinction",
];
