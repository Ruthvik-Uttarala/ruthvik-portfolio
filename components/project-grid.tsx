import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Selected evidence"
        title="Product systems, shown as review panels."
        subtitle="Each build is framed around the constraint it had to prove: safe action, visible deployment, launch automation, risk simulation, or cited retrieval."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <ProjectCard project={projects[0]} className="md:col-span-7 md:row-span-2" />
        <ProjectCard project={projects[1]} className="md:col-span-5" />
        <ProjectCard project={projects[2]} className="md:col-span-5" />
        <ProjectCard project={projects[3]} className="md:col-span-7" />
        <ProjectCard project={projects[4]} className="md:col-span-12" />
      </div>
    </section>
  );
}
