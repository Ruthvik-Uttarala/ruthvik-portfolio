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
  const glow = useMotionTemplate`radial-gradient(260px circle at ${px}% ${py}%, rgba(223,245,92,0.2), transparent 68%)`;

  const onMove = (event: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    px.set(x);
    py.set(y);
    ry.set((x - 50) / 8);
    rx.set((50 - y) / 9);
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
        "group relative overflow-hidden rounded-md border border-[var(--line)] bg-[color:var(--surface)] p-5 sm:p-6",
        "transition-[border-color] duration-300 hover:border-[color:var(--accent)]/55",
        className ?? "",
      ].join(" ")}
      data-cursor-expand="true"
      data-cursor-label="OPEN CASE"
    >
      <motion.div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: glow }} />
      <div className="relative z-10 flex h-full flex-col gap-5">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">{project.category}</p>
          {project.badge ? (
            <span className="border border-[var(--accent)] bg-[var(--accent)] px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--ink)] uppercase">
              {project.badge}
            </span>
          ) : null}
        </div>

        <h3 className="text-3xl font-black tracking-tight text-[var(--text)] sm:text-4xl">{project.title}</h3>
        <p className="text-sm leading-relaxed text-[var(--muted)]">{project.problem}</p>
        <p className="text-sm leading-relaxed text-[var(--text)]">{project.buildResult}</p>

        <CardVisual project={project} reduce={Boolean(reduce)} />

        {project.metrics ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="border border-[var(--line)] bg-[color:var(--surface-elev)] px-3 py-2 font-mono text-[11px] tracking-[0.06em] text-[color:var(--accent)] uppercase"
              >
                {metric}
              </span>
            ))}
          </div>
        ) : null}

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

        <div className="mt-auto flex flex-wrap items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-[var(--line)] px-3.5 py-2 text-xs font-medium text-[var(--text)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--ink)]"
            data-cursor-label="VIEW REPO"
            data-cursor-expand="true"
          >
            Repository
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-[var(--line)] px-3.5 py-2 text-xs font-medium text-[var(--text)] transition hover:border-[color:var(--accent)] hover:bg-[color:var(--accent)] hover:text-[color:var(--ink)]"
              data-cursor-label="OPEN DEMO"
              data-cursor-expand="true"
            >
              Demo
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

function CardVisual({ project, reduce }: { project: Project; reduce: boolean }) {
  if (project.id === "silvervisit") {
    return (
      <div className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4">
        <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">Telehealth task flow</div>
        <div className="grid gap-2 text-xs">
          <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--muted)]">
            Intent: &quot;Book follow-up with cardiology&quot;
          </div>
          <div className="rounded-sm border border-[color:var(--accent)]/35 bg-[color:var(--surface)] px-3 py-2 text-[var(--text)]">Guarded next action: open appointments tab</div>
          <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--muted)]">State: action confirmed, waiting for next turn</div>
        </div>
      </div>
    );
  }

  if (project.id === "orbit") {
    const stages = ["Validate", "Trigger", "Verify", "Report"];
    return (
      <div className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4">
        <div className="mb-3 flex items-center justify-between font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">
          <span>Deployment timeline</span>
          <span className="text-[color:var(--accent)]">4-stage deploy workflow</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {stages.map((stage, i) => (
            <motion.div
              key={stage}
              className="rounded-sm border border-[var(--line)] px-2 py-2 text-center font-mono text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase"
              whileHover={{ borderColor: "rgba(223,245,92,0.55)", color: "rgb(241,244,232)" }}
              animate={reduce ? { opacity: 1 } : { opacity: [0.5, 1, 0.5] }}
              transition={reduce ? { duration: 0 } : { duration: 1.8, repeat: Infinity, delay: i * 0.22 }}
            >
              {stage}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (project.id === "flowcart") {
    return (
      <div className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4">
        <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">Channel orchestration</div>
        <div className="grid gap-2 text-xs">
          <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--muted)]">Draft product input</div>
          <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--text)]">Enhanced listing payload</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--muted)]">Shopify published</div>
            <div className="rounded-sm border border-[var(--line)] px-3 py-2 text-[var(--muted)]">Instagram post ready</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "novaarchitect") {
    return (
      <div className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4">
        <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">Risk simulation panel</div>
        <div className="mb-3 grid grid-cols-3 gap-2 text-[11px]">
          <div className="rounded-sm border border-[var(--line)] px-2 py-2">Risk score</div>
          <div className="rounded-sm border border-[var(--line)] px-2 py-2">Cost delta</div>
          <div className="rounded-sm border border-[var(--line)] px-2 py-2">Uptime target</div>
        </div>
        <div className="flex items-end gap-1.5">
          {[28, 36, 42, 30, 18, 12].map((h, idx) => (
            <motion.span
              key={`${h}-${idx}`}
              className="block w-full rounded-t-sm bg-[color:var(--steel)]/75"
              style={{ height: `${h}px` }}
              initial={{ height: reduce ? `${h}px` : 0 }}
              whileInView={{ height: `${h}px` }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4">
      <div className="mb-3 font-mono text-[11px] tracking-[0.1em] text-[var(--muted)] uppercase">Runbook response</div>
      <p className="mb-2 rounded-sm border border-[var(--line)] px-3 py-2 text-xs text-[var(--text)]">
        Why is p95 latency rising?
      </p>
      <p className="mb-2 rounded-sm border border-[var(--line)] px-3 py-2 text-xs text-[var(--muted)]">
        Elevated queue depth on API workers after deploy. Check rollback threshold and saturation.
      </p>
      <div className="flex gap-2">
        <span className="rounded-sm border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted)]">
          runbook / latency
        </span>
        <span className="rounded-sm border border-[var(--line)] px-2 py-1 font-mono text-[10px] text-[var(--muted)]">
          rollback / api
        </span>
      </div>
    </div>
  );
}
