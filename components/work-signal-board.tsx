"use client";

import { useState } from "react";

const signalGroups = [
  {
    id: "full-stack",
    label: "Full Stack",
    visualLabel: "Interface + workflow coverage",
    litSquares: 38,
    accent: "bg-[var(--lime)]",
    offset: 2,
    rows: [
      {
        label: "Flowwick API surface",
        metric: "33 API route files",
        why: "Authenticated product management, onboarding, and uploads.",
      },
      {
        label: "Publishing workflow",
        metric: "2 channels",
        why: "Shopify and Instagram integrations with channel-level errors.",
      },
      {
        label: "PARKSOL delivery",
        metric: "5 production deploys",
        why: "A React operations dashboard delivered through Vercel.",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend / APIs",
    visualLabel: "Service + API evidence",
    litSquares: 34,
    accent: "bg-[var(--cream)]",
    offset: 7,
    rows: [
      {
        label: "PlantVillage",
        metric: "8 versioned endpoints",
        why: "FastAPI services with PostgreSQL sessions and S3 images.",
      },
      {
        label: "NovaArchitect",
        metric: "7 REST endpoints",
        why: "Contracts cover discovery, analysis, reporting, and policies.",
      },
      {
        label: "PARKSOL events",
        metric: "Idempotent processing",
        why: "Time-window deduplication and Firestore transaction locks.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Systems",
    visualLabel: "Evaluation + structured output",
    litSquares: 42,
    accent: "bg-[var(--lime)]",
    offset: 13,
    rows: [
      {
        label: "RAG evaluation",
        metric: "24 test prompts",
        why: "Agricultural prompts exercised retrieval and response behavior.",
      },
      {
        label: "LangSmith tracing",
        metric: "179 executions",
        why: "Traces exposed latency and retrieval behavior for investigation.",
      },
      {
        label: "PDFextract outputs",
        metric: "4 export formats",
        why: "Validated AI output becomes Excel, Word, JSON, or text.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud / Platform",
    visualLabel: "Reliability + infra signal",
    litSquares: 28,
    accent: "bg-[var(--cream)]",
    offset: 19,
    rows: [
      {
        label: "AWS discovery",
        metric: "4 service families",
        why: "STS verification, paginated retrieval, and partial failures.",
      },
      {
        label: "PDFextract regression",
        metric: "123 backend tests",
        why: "Release fixes verified across auth, packaging, Kafka, and retries.",
      },
      {
        label: "NovaArchitect regression",
        metric: "41 test functions",
        why: "Thirteen pytest modules cover failure and recovery paths.",
      },
    ],
  },
];

export function WorkSignalBoard() {
  const [activeId, setActiveId] = useState(signalGroups[0].id);
  const active = signalGroups.find((group) => group.id === activeId) ?? signalGroups[0];

  return (
    <div className="h-full">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mono-label text-[var(--muted)]">Full stack / AI / cloud</p>
          <h1 className="mt-3 text-3xl font-black uppercase leading-none tracking-normal sm:text-4xl">
            What I&apos;ve shipped
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
            Resume-backed signals tied to the system where each was delivered.
          </p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center border border-[var(--cream)] font-mono text-xl leading-none">▣</span>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4" role="tablist" aria-label="Work categories">
        {signalGroups.map((group) => {
          const activeTab = group.id === activeId;
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`signal-tab-${group.id}`}
              aria-controls={`signal-panel-${group.id}`}
              aria-selected={activeTab}
              onClick={() => setActiveId(group.id)}
              className={[
                "border px-3 py-2 text-left font-mono text-[10px] font-black uppercase tracking-[0.08em] transition",
                activeTab
                  ? "border-[var(--lime)] bg-[var(--lime)] text-[var(--panel)]"
                  : "border-[var(--line)] bg-[rgba(239,241,229,0.05)] text-[var(--muted)] hover:border-[var(--lime)] hover:text-[var(--text)]",
              ].join(" ")}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="mono-label text-[var(--muted)]">{active.visualLabel}</p>
        <p className="font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--lime)]">
          Visual activity map
        </p>
      </div>
      <div key={active.id} className="mb-5 grid [grid-template-columns:repeat(28,minmax(0,1fr))] gap-1" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, index) => (
          <span
            key={index}
            className={[
              "aspect-square transition-colors duration-300",
              index < active.litSquares && (index + active.offset) % 5 !== 0
                ? active.accent
                : "bg-[rgba(243,244,234,0.18)]",
            ].join(" ")}
          />
        ))}
      </div>

      <div
        id={`signal-panel-${active.id}`}
        className="grid gap-2"
        role="tabpanel"
        aria-labelledby={`signal-tab-${active.id}`}
      >
        {active.rows.map((row) => (
          <article key={row.label} className="grid gap-2 border border-[var(--line)] bg-[rgba(239,241,229,0.06)] p-3 sm:grid-cols-[0.8fr_0.8fr_1.2fr] sm:items-center">
            <p className="mono-label text-[var(--muted)]">{row.label}</p>
            <p className="font-mono text-xs font-black uppercase text-[var(--lime)]">{row.metric}</p>
            <p className="text-sm leading-snug text-[var(--text)]">{row.why}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
