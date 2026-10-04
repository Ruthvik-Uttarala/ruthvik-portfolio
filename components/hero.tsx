"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { RecruiterSignalBoard } from "@/components/recruiter-signal-board";
import { profile, resumeHref } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-24 pb-8 sm:px-6 sm:pt-28">
      <div className="mx-auto grid w-full max-w-[1430px] auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Tile delay={0.04} className="lime-panel min-h-[390px] p-5 md:col-span-4 md:row-span-2 lg:min-h-[430px]">
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="pixel-title text-[clamp(3.1rem,7.2vw,6.3rem)]">RUTHVIK</p>
              <p className="mt-4 font-mono text-[clamp(1.1rem,2vw,1.7rem)] font-black uppercase leading-none tracking-normal">
                Uttarala
              </p>
            </div>
            <div className="grid gap-4 border-t border-[rgba(15,90,76,0.28)] pt-4 font-mono text-sm font-bold uppercase leading-none sm:grid-cols-[0.8fr_1fr]">
              <p>Software<br />Engineer</p>
              <p className="text-xs normal-case leading-tight">{profile.headline}</p>
            </div>
          </div>
        </Tile>

        <Tile delay={0.1} className="dark-panel p-5 md:col-span-5 md:row-span-2">
          <RecruiterSignalBoard />
        </Tile>

        <Tile delay={0.16} className="cream-panel min-h-[390px] overflow-hidden md:col-span-3 md:row-span-2">
          <div className="relative h-[310px] border-b border-[#c9cfc4] md:h-[360px]">
            <Image
              src="/ruthvik-headshot.jpg"
              alt="Ruthvik Uttarala"
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
              className="object-cover object-[50%_32%]"
              priority
            />
          </div>
          <div className="p-4">
            <p className="mono-label text-[var(--green)]">Candidate profile</p>
            <p className="mt-3 text-sm leading-relaxed text-[#5f665d]">
              Full-stack, backend/API, AI systems, and cloud/platform engineering.
            </p>
          </div>
        </Tile>

        <Tile delay={0.22} className="cream-panel min-h-[315px] p-5 md:col-span-4">
          <div className="flex h-full flex-col justify-between gap-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="mono-label text-[var(--green)]">Role fit</p>
                <h2 className="mt-4 text-5xl font-black uppercase leading-none text-[var(--slate)]">Now in focus</h2>
              </div>
              <span className="border border-[var(--panel)] px-2 font-mono text-xl leading-none text-[var(--panel)]">×</span>
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono text-xs font-bold uppercase leading-tight text-[var(--panel)]">
              <p>Scope:<br />Software engineering</p>
              <p>Method:<br />Full stack + AI + cloud</p>
            </div>
            <div className="grid gap-2 text-xs font-bold uppercase text-[var(--panel)] sm:grid-cols-2">
              {["Production APIs", "Cloud reliability", "AI workflow systems", "Measurable outcomes"].map((signal) => (
                <span key={signal} className="border border-[#c9cfc4] px-3 py-2">{signal}</span>
              ))}
            </div>
          </div>
        </Tile>

        <Tile delay={0.28} className="dark-panel min-h-[315px] p-5 md:col-span-4">
          <p className="mono-label text-[var(--lime)]">Strongest stacks</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["TypeScript", "React", "Next.js", "Python", "Java", "REST APIs", "PostgreSQL", "AWS", "Docker", "Kubernetes"].map((tool) => (
              <span key={tool} className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--text)]">
                {tool}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[var(--muted)]">
            Preferred work: production systems, APIs, AI workflows, and cloud infrastructure with clear metrics.
          </p>
        </Tile>

        <Tile delay={0.34} className="bg-[var(--lavender)] p-5 text-[#6f6389] md:col-span-4">
          <p className="mono-label">Recruiter quick scan</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              ["OPT", "STEM OPT through 2029"],
              ["CS", "Penn State CS"],
              ["AWS", "ML Engineer + AI Practitioner"],
              ["Links", "Email / GitHub / LinkedIn"],
            ].map(([label, value]) => (
              <div key={label} className="border border-current/20 bg-white/20 px-3 py-3">
                <p className="font-mono text-xs font-black uppercase">{label}</p>
                <p className="mt-1 text-sm font-semibold leading-tight">{value}</p>
              </div>
            ))}
          </div>
        </Tile>

        <Tile delay={0.4} className="dark-panel p-5 md:col-span-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono-label text-[var(--muted)]">Next step</p>
              <p className="mt-2 text-xl font-black tracking-tight text-[var(--text)]">Review proof, resume, or reach out.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href={resumeHref} label="OPEN RESUME">View Resume</MagneticButton>
              <MagneticButton href={profile.github} external label="VIEW GITHUB">GitHub</MagneticButton>
              <MagneticButton href={profile.linkedin} external label="VIEW LINKEDIN">LinkedIn</MagneticButton>
              <MagneticButton href={profile.email} label="EMAIL">Email</MagneticButton>
            </div>
          </div>
        </Tile>
      </div>
    </section>
  );
}

function Tile({ children, className, delay }: { children: ReactNode; className: string; delay: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 18, scale: reduce ? 1 : 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
      className={`evidence-card relative overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
