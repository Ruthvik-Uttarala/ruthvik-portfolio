"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  return (
    <section id="top" className="relative px-4 pt-24 pb-10 sm:px-6 sm:pt-28">
      <div className="mx-auto grid w-full max-w-[1430px] auto-rows-[minmax(150px,auto)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Tile
          delay={0.04}
          className="min-h-[420px] bg-[var(--accent)] p-5 text-[var(--accent-ink)] md:col-span-4 md:row-span-2 lg:min-h-[452px]"
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="pixel-word text-[clamp(4.6rem,11vw,8.5rem)]">RUTH</p>
              <p className="pixel-word mt-2 text-[clamp(4.1rem,10vw,7.6rem)]">VIK</p>
            </div>
            <div className="grid grid-cols-[1fr_0.8fr] items-end gap-5 font-mono text-sm font-bold uppercase leading-none">
              <p>AI systems<br />that hold up</p>
              <p className="text-xs normal-case leading-tight">Applied AI, cloud infrastructure, and full-stack products with visible evidence.</p>
            </div>
          </div>
        </Tile>

        <Tile delay={0.1} className="bg-[var(--ink)] p-5 md:col-span-5">
          <div className="mb-9 flex items-start justify-between">
            <h1 className="text-3xl font-black uppercase leading-none tracking-normal sm:text-4xl">Evidence</h1>
            <span className="grid size-10 place-items-center border border-[var(--paper)] font-mono text-xl leading-none">▣</span>
          </div>
          <EvidenceDots />
          <div className="mt-3 flex items-center justify-between font-mono text-xs text-[var(--muted)]">
            <span>Built: 42</span>
            <span>Requested: 60</span>
          </div>
          <div className="mt-12 flex flex-wrap items-end justify-between gap-5">
            <MagneticButton
              href="#work"
              label="OPEN CASE"
              className="inline-flex items-center justify-center border border-[var(--paper)] bg-[var(--paper)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--accent)]"
            >
              View requests
            </MagneticButton>
            <p className="max-w-[220px] font-mono text-sm font-bold uppercase leading-none">
              <span className="text-[var(--accent)]">18</span> shipped systems before review
            </p>
          </div>
        </Tile>

        <Tile delay={0.16} className="min-h-[360px] overflow-hidden bg-[var(--paper)] md:col-span-3 md:row-span-2">
          <Image src="/ruthvik-headshot.jpg" alt="Ruthvik Uttarala" fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover" priority />
        </Tile>

        <Tile delay={0.2} className="bg-[#817c75] p-8 md:col-span-5">
          <p className="text-[clamp(2.8rem,7vw,5.25rem)] font-black leading-none tracking-tight text-[var(--paper)]">
            .FieldGuide
          </p>
        </Tile>

        <Tile delay={0.24} className="min-h-[420px] overflow-hidden bg-[var(--paper)] p-5 md:col-span-4 md:row-span-2">
          <Image src="/ruthvik-headshot.jpg" alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="scale-125 object-cover opacity-25 blur-[1px]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <h2 className="max-w-[330px] text-5xl font-light uppercase leading-none text-white sm:text-6xl">Every file has a place</h2>
            <p className="max-w-[280px] text-base font-medium leading-tight text-white">Less time searching for proof. More time understanding what changed.</p>
          </div>
        </Tile>

        <Tile delay={0.28} className="min-h-[420px] overflow-hidden bg-[linear-gradient(135deg,#eef68f_0%,#d6e65f_24%,#1e9b84_70%,#126f66_100%)] p-10 md:col-span-4 md:row-span-2">
          <div className="absolute inset-0 opacity-30 [image-rendering:pixelated] dot-grid text-white" />
          <div className="relative z-10 mt-24 border border-[var(--line)] bg-[var(--paper)] p-5 text-[var(--ink)] shadow-[10px_10px_0_rgba(0,0,0,0.45)]">
            <div className="mb-10 flex items-start justify-between">
              <p className="text-5xl font-black uppercase leading-none text-[var(--steel)]">In focus</p>
              <span className="border border-[var(--ink)] px-2 font-mono text-xl leading-none">×</span>
            </div>
            <div className="grid grid-cols-2 gap-5 font-mono text-xs font-bold uppercase leading-tight">
              <p>Scope:<br />AI products</p>
              <p>Method:<br />human review</p>
            </div>
          </div>
          <a href="#about" className="relative z-10 mt-2 flex h-12 items-center justify-center bg-[var(--ink)] text-lg text-white transition hover:bg-[var(--accent-ink)]">
            Explore
          </a>
        </Tile>

        <Tile delay={0.32} className="bg-[var(--paper)] p-6 text-[var(--ink)] md:col-span-5">
          <div className="mb-10 h-24 dot-grid text-[#c9cfc4]" />
          <div className="grid grid-cols-[auto_1fr_1fr] items-end gap-5 font-mono text-sm font-black uppercase leading-none">
            <span className="grid size-10 place-items-center bg-[var(--ink)] text-2xl text-white">→</span>
            <p>Time saved on<br />testing</p>
            <p>More time for<br />human judgment</p>
          </div>
        </Tile>

        <Tile delay={0.36} className="bg-[var(--lavender)] p-7 text-[#8f82ad] md:col-span-5">
          <div className="grid grid-cols-4 place-items-center gap-4 font-mono text-5xl leading-none">
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
      className={`relative overflow-hidden rounded-md border border-[var(--line)] shadow-[0_18px_50px_rgba(0,0,0,0.22)] ${className}`}
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
          className={`aspect-square w-full ${index < 68 ? "bg-[var(--paper)]" : "bg-[rgba(241,244,232,0.22)]"}`}
        />
      ))}
    </div>
  );
}
