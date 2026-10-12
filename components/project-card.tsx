"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import { type MouseEvent } from "react";
import { type Project } from "@/data/portfolio";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const reduce = useReducedMotion();
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${px}% ${py}%, rgba(223,245,92,0.2), transparent 68%)`;

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    px.set(x);
    py.set(y);
    ry.set((x - 50) / 10);
    rx.set((50 - y) / 11);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className={[
        "evidence-card group relative overflow-hidden bg-[var(--panel)] p-5 transition-[border-color] duration-300 hover:border-[var(--lime)]/70 sm:p-6",
        className ?? "",
      ].join(" ")}
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
      <div className="relative z-10 grid gap-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-4">
          <p className="mono-label text-[var(--muted)]">{project.category}</p>
          <span className="border border-[var(--lime)] bg-[var(--lime)] px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--panel)]">
            {project.badge}
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{project.problem}</p>
        </div>

        <ProjectVisual project={project} reduce={Boolean(reduce)} />

        <p className="text-sm leading-relaxed text-[var(--text)]">{project.buildResult}</p>

        <div className="border border-[var(--line)] bg-[rgba(223,245,92,0.08)] px-3 py-3">
          <p className="mono-label text-[var(--lime)]">Why it matters</p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">{project.proofNote}</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-[var(--lime)]"
            >
              {metric}
            </span>
          ))}
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li
              key={item}
              className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[var(--line)] px-3.5 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
          >
            Repository
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[var(--line)] px-3.5 py-2 text-xs font-semibold text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectVisual({ project, reduce }: { project: Project; reduce: boolean }) {
  if (project.id === "silvervisit") {
    return (
      <div className="soft-border bg-[rgba(239,241,229,0.06)] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="mono-label text-[var(--muted)]">Telehealth workflow</p>
          <span className="font-mono text-[11px] font-black text-[var(--lime)]">GROUNDED ACTIONS</span>
        </div>
        <div className="grid gap-2 text-xs">
          {["Intent: book follow-up", "Guarded action: open appointment tab", "Confirmation: wait for next turn"].map((step, index) => (
            <div key={step} className="grid grid-cols-[auto_1fr] gap-3 border border-[var(--line)] px-3 py-2 text-[var(--text)]">
              <span className="font-mono text-[var(--lime)]">0{index + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.id === "flowwick") {
    const stages = ["Merchant onboarding", "Product management", "AI-assisted content", "Shopify / Instagram", "Status + errors"];
    return (
      <div className="soft-border cream-panel p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="mono-label text-[var(--green)]">Launch pipeline</p>
          <span className="font-mono text-[11px] font-black text-[var(--green)]">2 CHANNELS</span>
        </div>
        <div className="grid gap-2 text-xs font-bold uppercase text-[var(--panel)] sm:grid-cols-2 xl:grid-cols-5 xl:items-stretch">
          {stages.map((stage, index) => (
            <div key={stage} className="relative border border-[#c9cfc4] px-3 py-3">
              <span className="font-mono text-[10px] text-[var(--green)]">0{index + 1}</span>
              <p className="mt-2 leading-tight">{stage}</p>
              {index < stages.length - 1 ? <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 bg-[var(--cream)] px-1 font-mono text-base xl:block">→</span> : null}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.id === "novaarchitect") {
    const stages = ["AWS discovery", "Validated resource data", "Bedrock analysis", "Structured results"];
    return (
      <div className="soft-border bg-[rgba(239,241,229,0.06)] p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="mono-label text-[var(--muted)]">Defensive analysis pipeline</p>
          <span className="font-mono text-[11px] font-black text-[var(--lime)]">VALIDATED</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <motion.div
              key={stage}
              initial={{ opacity: reduce ? 1 : 0.35 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative border border-[var(--line)] px-3 py-3"
            >
              <span className="font-mono text-[10px] font-black text-[var(--lime)]">0{index + 1}</span>
              <p className="mt-2 text-xs font-bold uppercase leading-tight text-[var(--text)]">{stage}</p>
              {index < stages.length - 1 ? <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 bg-[var(--panel)] px-1 font-mono text-base text-[var(--lime)] xl:block">→</span> : null}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  const stages = ["Validate", "Trigger", "Verify", "Report"];
  return (
    <div className="soft-border bg-[rgba(239,241,229,0.06)] p-4">
      <div className="mb-4 flex items-center justify-between">
        <p className="mono-label text-[var(--muted)]">Deployment timeline</p>
        <span className="font-mono text-[11px] font-black text-[var(--lime)]">VISIBLE STATE</span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {stages.map((stage, index) => (
          <motion.div
            key={stage}
            className="border border-[var(--line)] px-2 py-3 text-center font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)]"
            animate={reduce ? { opacity: 1 } : { opacity: [0.5, 1, 0.5] }}
            transition={reduce ? { duration: 0 } : { duration: 1.8, repeat: Infinity, delay: index * 0.22 }}
          >
            {stage}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
