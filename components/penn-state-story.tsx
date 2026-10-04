import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export function PennStateStory() {
  return (
    <section className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Penn State to production"
        title="Where the systems mindset started."
        subtitle="Penn State CS, product innovation, and hands-on build work shaped how I approach reliable software."
      />

      <div className="grid gap-4 md:grid-cols-12">
        <article className="evidence-card relative min-h-[420px] overflow-hidden md:col-span-7">
          <Image
            src="/media/penn-state/beaver-stadium.webp"
            alt="Beaver Stadium at Penn State"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(17,19,18,0.9)] via-[rgba(17,19,18,0.22)] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="mono-label text-[var(--lime)]">High pressure / clear execution</p>
            <h3 className="mt-3 max-w-2xl text-4xl font-black leading-none tracking-tight text-white">
              Penn State CS shaped how I approach systems: high pressure, high reliability, and clear execution.
            </h3>
          </div>
        </article>

        <article className="evidence-card cream-panel overflow-hidden md:col-span-5">
          <div className="relative h-64">
            <Image
              src="/media/penn-state/westgate-building.jpg"
              alt="Penn State Westgate Building"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <p className="mono-label text-[var(--green)]">Engineering campus</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">Computer Science into shipped systems.</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f665d]">
              Computer Science, product innovation, and hands-on build work turned into full-stack, AI, and cloud systems.
            </p>
          </div>
        </article>

        <article className="evidence-card dark-panel grid gap-5 p-5 md:col-span-12 md:grid-cols-[220px_1fr] md:items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0">
              <Image
                src="/media/penn-state/nittany-lion-logo.png"
                alt="Penn State logo"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="relative h-16 w-28">
              <Image
                src="/media/penn-state/penn-state-wordmark.png"
                alt="Penn State wordmark"
                fill
                sizes="112px"
                className="object-contain"
              />
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {["B.S. Computer Science, Dec 2025", "AWS ML Engineer + AWS AI Practitioner", "President Walker Award"].map((item) => (
              <p
                key={item}
                className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-3 py-3 font-mono text-xs font-bold uppercase leading-tight text-[var(--text)]"
              >
                {item}
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
