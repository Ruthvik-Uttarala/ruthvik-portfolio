import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const layoutClasses = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Proof of work"
        title="Built under real constraints."
        subtitle="AI, cloud, deployment, and workflow systems with measurable outcomes."
      />
      <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            className={layoutClasses[index] ?? "md:col-span-6"}
          />
        ))}
      </div>
    </section>
  );
}
