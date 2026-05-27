"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { experiences } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceTimeline() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start 72%", "end 38%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.5 });
  const lineOpacity = useTransform(scrollYProgress, [0, 0.15], [0.35, 1]);

  return (
    <section id="experience" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8">
      <SectionHeading title="Experience measured in shipped outcomes" />
      <div ref={wrapperRef} className="relative mt-8">
        <div className="absolute top-2 bottom-2 left-3 w-px bg-[var(--line)]" />
        <motion.div
          className="absolute top-2 bottom-2 left-3 w-px origin-top bg-[color:var(--accent)]"
          style={{ scaleY: lineScale, opacity: lineOpacity }}
        />
        <div className="space-y-10">
          {experiences.map((item) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px -10% 0px" }}
              transition={{ duration: 0.45 }}
              className="group relative pl-10"
            >
              <span className="absolute top-2 left-0 inline-flex size-6 items-center justify-center rounded-full border border-[var(--line)] bg-[color:var(--surface)] font-mono text-[10px] text-[var(--muted)]">
                •
              </span>
              <div className="rounded-2xl border border-[var(--line)] bg-[color:var(--surface)] p-5">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)]">{item.company}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.role}</p>
                  </div>
                  <span className="font-mono text-xs tracking-[0.08em] text-[var(--muted)]">{item.dates}</span>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[var(--muted)]">{item.context}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.outcomes.map((outcome) => (
                    <MetricPill key={outcome} text={outcome} />
                  ))}
                </div>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 md:max-h-20 md:opacity-100">
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[var(--line)] px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--muted)] uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricPill({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const [display, setDisplay] = useState(text);

  const parsed = useMemo(() => {
    const match = text.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    return { value: Number(match[1]), suffix: match[2] };
  }, [text]);

  useEffect(() => {
    if (!inView || reduce || !parsed) return;
    const duration = 560;
    const start = performance.now();
    const decimals = parsed.value % 1 === 0 ? 0 : 2;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = parsed.value * eased;
      setDisplay(`${value.toFixed(decimals)}${parsed.suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(text);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed, reduce, text]);

  return (
    <span
      ref={ref}
      className="rounded-full border border-[var(--line)] bg-[color:var(--surface-elev)] px-3 py-1.5 font-mono text-[11px] tracking-[0.06em] text-[color:var(--text)]"
    >
      {display}
    </span>
  );
}
