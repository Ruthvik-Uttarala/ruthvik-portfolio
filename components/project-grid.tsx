import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

const layoutClasses = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-12",
];

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Selected evidence"
        title="Product systems, shown as review panels."
        subtitle="Each build is framed around the constraint it had to prove: safe action, visible deployment, launch automation, risk simulation, or cited retrieval."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
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
