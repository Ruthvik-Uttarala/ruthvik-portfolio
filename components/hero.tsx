"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { MagneticButton } from "@/components/magnetic-button";
import { heroMetrics, profile, resumeHref } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-24 pb-8 sm:px-6 sm:pt-28">
      <div className="mx-auto grid w-full max-w-[1430px] auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Tile
          delay={0.04}
          className="lime-panel min-h-[430px] p-5 md:col-span-4 md:row-span-2 lg:min-h-[470px]"
        >
          <div className="flex h-full flex-col justify-between gap-10">
            <div>
              <p className="pixel-title text-[clamp(4.4rem,10vw,8rem)]">RUTH</p>
              <p className="pixel-title mt-2 text-[clamp(4.1rem,9.5vw,7.4rem)]">VIK</p>
            </div>
            <div className="grid grid-cols-[1fr_0.9fr] items-end gap-5 font-mono text-sm font-bold uppercase leading-none">
              <p>Software<br />Engineer</p>
              <p className="text-xs normal-case leading-tight">{profile.headline}</p>
            </div>
          </div>
        </Tile>

        <Tile delay={0.1} className="dark-panel p-5 md:col-span-5">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="mono-label text-[var(--muted)]">{profile.availability}</p>
              <h1 className="mt-3 text-3xl font-black uppercase leading-none tracking-normal sm:text-4xl">Evidence queue</h1>
            </div>
            <span className="grid size-10 place-items-center border border-[var(--cream)] font-mono text-xl leading-none">▣</span>
          </div>
          <EvidenceDots />
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-[var(--muted)]">
            <span>Received: 42</span>
            <span>Requested: 60</span>
          </div>
          <div className="mt-9 grid gap-2 sm:grid-cols-2">
            {heroMetrics.map((metric) => (
              <span key={metric} className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-3 py-2 font-mono text-[11px] font-bold uppercase text-[var(--lime)]">
                {metric}
              </span>
            ))}
          </div>
        </Tile>

        <Tile delay={0.16} className="relative min-h-[360px] overflow-hidden bg-[var(--cream)] md:col-span-3 md:row-span-2">
          <Image src="/ruthvik-headshot.jpg" alt="Ruthvik Uttarala" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" priority />
        </Tile>

        <Tile delay={0.2} className="bg-[#817c75] p-7 md:col-span-5">
          <p className="text-[clamp(2.9rem,7vw,5.25rem)] font-black leading-none tracking-tight text-[var(--cream)]">
            .Ruthvik Uttarala
          </p>
        </Tile>

        <Tile delay={0.24} className="cream-panel min-h-[330px] p-5 md:col-span-4">
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="mono-label text-[var(--green)]">Profile status</p>
              <p className="mt-5 max-w-[440px] text-4xl font-light uppercase leading-none text-[var(--panel)] sm:text-5xl">
                Full stack / AI / cloud
              </p>
            </div>
            <p className="max-w-[410px] text-sm leading-relaxed text-[#5f665d]">{profile.subheadline}</p>
          </div>
        </Tile>

        <Tile delay={0.28} className="min-h-[360px] overflow-hidden bg-[linear-gradient(135deg,#eef68f_0%,#d6e65f_25%,#1e9b84_70%,#126f66_100%)] p-8 md:col-span-4">
          <div className="absolute inset-0 opacity-30 [image-rendering:pixelated] dot-grid text-white" />
          <div className="relative z-10 mt-16 border border-[var(--line)] bg-[var(--cream)] p-5 text-[var(--panel)] shadow-[10px_10px_0_rgba(0,0,0,0.45)]">
            <div className="mb-8 flex items-start justify-between">
              <p className="text-5xl font-black uppercase leading-none text-[var(--slate)]">In focus</p>
              <span className="border border-[var(--panel)] px-2 font-mono text-xl leading-none">×</span>
            </div>
            <div className="grid grid-cols-2 gap-5 font-mono text-xs font-bold uppercase leading-tight">
              <p>Scope:<br />production systems</p>
              <p>Method:<br />AI + cloud + APIs</p>
            </div>
          </div>
        </Tile>

        <Tile delay={0.32} className="dark-panel p-5 md:col-span-5">
          <p className="mono-label text-[var(--muted)]">Open channels</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <MagneticButton href={resumeHref} label="OPEN PDF">
              View Resume
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
          </div>
        </Tile>

        <Tile delay={0.36} className="bg-[var(--lavender)] p-7 text-[#8f82ad] md:col-span-3">
          <div className="grid h-full grid-cols-4 place-items-center gap-4 font-mono text-4xl leading-none">
            <span>✧</span><span>◌</span><span>▣</span><span>▱</span>
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

function EvidenceDots() {
  return (
    <div className="grid [grid-template-columns:repeat(30,minmax(0,1fr))] gap-1">
      {Array.from({ length: 90 }).map((_, index) => (
        <span
          key={index}
          className={`aspect-square w-full ${index < 68 ? "bg-[var(--cream)]" : "bg-[rgba(243,244,234,0.22)]"}`}
        />
      ))}
    </div>
  );
}
