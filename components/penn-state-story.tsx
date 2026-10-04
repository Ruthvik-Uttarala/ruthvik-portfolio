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

      <div className="grid items-start gap-4 md:grid-cols-12">
        <article className="evidence-card relative min-h-[520px] overflow-hidden md:col-span-7">
          <Image
            src="/media/personal/flying-beaver-stadium.jpg"
            alt="Ruthvik graduating at Beaver Stadium"
            fill
            sizes="(min-width: 768px) 58vw, 100vw"
            className="object-cover object-[50%_50%]"
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
              src="/media/personal/lion-shrine-riding.jpg"
              alt="Ruthvik at the Penn State Lion Shrine"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
          <div className="p-5">
            <p className="mono-label text-[var(--green)]">Campus identity</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">Computer Science into shipped systems.</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5f665d]">
              Computer Science, product innovation, and hands-on build work turned into full-stack, AI, and cloud systems.
            </p>
          </div>
        </article>

        <article className="evidence-card dark-panel grid gap-5 overflow-hidden md:col-span-5">
          <div className="relative h-56">
            <Image
              src="/media/personal/president-walker-award.jpg"
              alt="President Walker Award medals"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5 pt-0">
            <p className="mono-label text-[var(--lime)]">Credential signal</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">Recognition backed by execution.</h3>
          </div>
        </article>

        <article className="evidence-card dark-panel grid gap-5 p-5 md:col-span-7 md:grid-cols-[140px_1fr] md:items-center">
          <div className="relative h-16 w-32">
            <Image
              src="/media/penn-state/penn-state-wordmark.png"
              alt="Penn State wordmark"
              fill
              sizes="128px"
              className="object-contain object-left"
            />
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
