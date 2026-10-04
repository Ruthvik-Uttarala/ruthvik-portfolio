"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile, resumeHref } from "@/data/portfolio";
import { MagneticButton } from "@/components/magnetic-button";
import { SystemsCanvas } from "@/components/systems-canvas";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-5 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="font-mono text-[11px] tracking-[0.18em] text-[var(--muted)] uppercase"
          >
            {profile.availability}
          </motion.p>

          <h1 className="max-w-3xl text-4xl leading-[1.02] font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {["Full Stack, AI,", "and Cloud Systems."].map((line, index) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 + index * 0.08, duration: 0.52 }}
                className="block"
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.52 }}
            className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg"
          >
            {profile.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.48 }}
            className="font-mono text-[12px] tracking-[0.08em] text-[var(--muted)]"
          >
            {profile.identity}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work" label="VIEW WORK">
              Featured projects
            </MagneticButton>
            <MagneticButton href={resumeHref} label="VIEW RESUME">
              View résumé
            </MagneticButton>
            <MagneticButton href={profile.github} external label="VIEW GITHUB">
              GitHub
            </MagneticButton>
            <MagneticButton href={profile.linkedin} external label="VIEW LINKEDIN">
              LinkedIn
            </MagneticButton>
            <MagneticButton href={profile.email} label="EMAIL">
              Email
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.22, duration: 0.55 }}
          className="relative"
        >
          <SystemsCanvas />
        </motion.div>
      </div>
    </section>
  );
}
