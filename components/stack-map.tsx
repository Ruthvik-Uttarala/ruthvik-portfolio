"use client";

import { motion } from "motion/react";
import { stackGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

const panelClasses = [
  "dark-panel",
  "cream-panel",
  "dark-panel",
  "dark-panel",
  "lime-panel",
  "cream-panel",
];

export function StackMap() {
  return (
    <section id="stack" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Systems matrix"
        title="Tools mapped to role fit."
        subtitle="Grouped by the kind of production work they support: interfaces, services, infrastructure, data, AI workflows, and observability."
      />
      <div className="grid items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stackGroups.map((group, index) => (
          <motion.article
            key={group.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px -10% 0px" }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className={[
              "evidence-card relative h-fit overflow-hidden p-5",
              panelClasses[index % panelClasses.length],
            ].join(" ")}
          >
            <div className="absolute inset-x-0 top-0 h-12 scan-row opacity-20" />
            <div className="relative">
              <p className="mono-label opacity-75">Group {String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-3xl font-black tracking-tight">{group.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed opacity-80">{group.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="border border-current/20 bg-black/[0.04] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
