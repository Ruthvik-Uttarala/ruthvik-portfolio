"use client";

import { useState } from "react";

const signalGroups = [
  {
    id: "full-stack",
    label: "Full Stack",
    rows: [
      {
        label: "Product workflows",
        metric: "100+ daily active users",
        why: "React + TypeScript apps serving real customer workflows.",
      },
      {
        label: "API performance",
        metric: "32% latency reduction",
        why: "Backend tuning translated directly into faster product UX.",
      },
      {
        label: "Release execution",
        metric: "3h -> <20m",
        why: "CI/CD and infrastructure work cut shipping time dramatically.",
      },
    ],
  },
  {
    id: "backend",
    label: "APIs",
    rows: [
      {
        label: "Event scale",
        metric: "500 flagged events/day",
        why: "REST APIs and PostgreSQL-backed services for operator review.",
      },
      {
        label: "Evidence delivery",
        metric: "4,500 image loads/month",
        why: "S3 signed URL flow for secure production evidence retrieval.",
      },
      {
        label: "API reliability",
        metric: "30% fewer retrieval errors",
        why: "Cleaner review path for operators and downstream workflows.",
      },
    ],
  },
  {
    id: "ai",
    label: "AI Workflows",
    rows: [
      {
        label: "Guided task completion",
        metric: "90% SilverVisit completion",
        why: "Guarded AI actions make user workflows safer and measurable.",
      },
      {
        label: "Vision pipeline",
        metric: "8,000 image submissions",
        why: "Computer vision API shipped into a mobile field workflow.",
      },
      {
        label: "Model quality",
        metric: "F1 0.68 -> 0.85",
        why: "Minority-class performance improved where accuracy mattered.",
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Systems",
    rows: [
      {
        label: "Response speed",
        metric: "5s -> <3s SLA",
        why: "Faster operator decisions through queues, workers, and alerts.",
      },
      {
        label: "Observability",
        metric: "8 CloudWatch alarms",
        why: "25% less alert noise while preserving production signal.",
      },
      {
        label: "Platform savings",
        metric: "30% modeled AWS savings",
        why: "Infrastructure decisions tied to cost and reliability outcomes.",
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
            Real systems, real metrics, production constraints.
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

      <div className="mb-5 grid [grid-template-columns:repeat(28,minmax(0,1fr))] gap-1" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, index) => (
          <span
            key={index}
            className={`aspect-square ${index < 40 ? "bg-[var(--cream)]" : "bg-[rgba(243,244,234,0.22)]"}`}
          />
        ))}
      </div>

      <div className="grid gap-2" role="tabpanel">
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
