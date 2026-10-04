"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceTimeline() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 72%", "end 38%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.5 });
  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.35, 1]);

  return (
    <section id="experience" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Evidence log"
        title="Implementation records from shipped work."
        subtitle="Operator dashboards, AI pipelines, API systems, cloud delivery, and reliability improvements."
      />
      <div ref={wrapperRef} className="relative mt-8">
        <div className="absolute top-2 bottom-2 left-3 w-px bg-[var(--line)]" />
        <motion.div
          className="absolute top-2 bottom-2 left-3 w-px origin-top bg-[var(--lime)]"
          style={{ scaleY: lineScale, opacity: lineOpacity }}
        />
        <div className="space-y-5">
          {experiences.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px -10% 0px" }}
              transition={{ duration: 0.45 }}
              className="relative pl-10"
            >
              <span className="absolute top-4 left-0 grid size-6 place-items-center border border-[var(--line)] bg-[var(--panel)] font-mono text-[10px] text-[var(--lime)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="evidence-card dark-panel p-5">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-3 border-b border-[var(--line)] pb-4">
                  <div>
                    <p className="mono-label text-[var(--lime)]">{item.company}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--text)]">{item.role}</h3>
                  </div>
                  <span className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--muted)]">
                    {item.dates}
                  </span>
                </div>
                <p className="mb-4 max-w-4xl text-sm leading-relaxed text-[var(--muted)]">{item.context}</p>
                <div className="grid gap-2">
                  {item.outcomes.map((outcome) => (
                    <p
                      key={outcome}
                      className="border border-[var(--line)] bg-[rgba(239,241,229,0.05)] px-3 py-3 text-sm leading-relaxed text-[var(--text)]"
                    >
                      {outcome}
                    </p>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
