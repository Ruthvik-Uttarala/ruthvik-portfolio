"use client";

import { motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { stackGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function StackMap() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  const lines = useMemo(() => {
    if (reduce) return [];
    return stackGroups.flatMap((group, groupIndex) =>
      group.tools.map((_, toolIndex) => ({
        id: `${group.name}-${toolIndex}`,
        x1: 8 + groupIndex * 30,
        y1: 16 + toolIndex * 9,
        x2: 72 - groupIndex * 7,
        y2: 20 + toolIndex * 6,
      })),
    );
  }, [reduce]);

  return (
    <section id="stack" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Stack map" title="Tools I build with" />
      <div className="relative overflow-hidden rounded-md border border-[var(--line)] bg-[color:var(--surface)] p-5 sm:p-7">
        <svg className="pointer-events-none absolute inset-0 size-full opacity-45">
          {lines.map((line) => (
            <line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke={active % 2 ? "rgba(157,168,185,0.45)" : "rgba(223,245,92,0.35)"}
              strokeWidth={1}
            />
          ))}
        </svg>
        <div className="relative grid gap-3 md:grid-cols-2">
          {stackGroups.map((group, index) => (
            <motion.article
              key={group.name}
              onMouseEnter={() => setActive(index)}
              className="rounded-md border border-[var(--line)] bg-[color:var(--surface-elev)] p-4"
              animate={{ borderColor: active === index ? "rgba(223,245,92,0.55)" : "rgba(255,255,255,0.12)" }}
            >
              <h3 className="mb-3 font-mono text-xs tracking-[0.12em] text-[var(--muted)] uppercase">{group.name}</h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--text)] uppercase"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
