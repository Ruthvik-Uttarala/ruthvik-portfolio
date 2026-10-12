import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Proof of work"
        title="Built under real constraints."
        subtitle="Resume-aligned projects first, with implementation evidence and repositories for deeper inspection."
      />
      <div className="mb-12 grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-t border-[var(--line)] pt-8">
        <div>
          <p className="mono-label text-[var(--lime)]">Selected earlier work</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-[var(--text)]">Additional systems and product work.</h3>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">Supporting projects that extend the same focus on inspectable workflows, safe automation, and delivery.</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
        {projects.slice(2).map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  );
}
