import { principles } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function Principles() {
  return (
    <section id="about" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Operating principles"
        title="What the system has to prove."
        subtitle="The work is strongest when the interface, model, infrastructure, and metrics explain each other."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.id} className="evidence-card cream-panel p-5">
            <p className="mb-8 font-mono text-xs font-black tracking-[0.12em] text-[var(--green)]">{principle.id}</p>
            <h3 className="mb-3 text-2xl font-black tracking-tight">{principle.title}</h3>
            <p className="text-sm leading-relaxed text-[#5f665d]">{principle.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
