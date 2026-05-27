import Image from "next/image";
import { principles } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Principles() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
        <SectionHeading
          title="I care about what happens after the demo."
          subtitle="I build systems where the interface, the model, and the infrastructure all have to work together. A useful AI product is not just a model call - it needs guardrails, observability, clear user states, secure data flows, and a path to production."
        />
        <div className="justify-self-start lg:justify-self-end">
          <div className="relative h-28 w-28 overflow-hidden rounded-2xl border border-[var(--line)]">
            <Image
              src="/ruthvik-headshot.jpg"
              alt="Ruthvik Uttarala"
              fill
              sizes="112px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.id} className="rounded-2xl border border-[var(--line)] bg-[color:var(--surface)] p-5">
            <p className="mb-3 font-mono text-xs tracking-[0.12em] text-[color:var(--accent)]">{principle.id}</p>
            <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--text)]">{principle.title}</h3>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{principle.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
