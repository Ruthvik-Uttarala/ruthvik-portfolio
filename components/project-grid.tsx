import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Proof of work"
        title="Built under real constraints."
        subtitle="AI, cloud, deployment, and workflow systems with measurable outcomes."
      />
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
