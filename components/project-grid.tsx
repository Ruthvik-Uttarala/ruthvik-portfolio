import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectGrid() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8">
      <SectionHeading
        title="Featured projects"
        subtitle="Recruiter-friendly case studies across full-stack engineering, AI systems, cloud infrastructure, and release orchestration."
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <ProjectCard project={projects[0]} className="md:col-span-7 md:row-span-2" />
        <ProjectCard project={projects[1]} className="md:col-span-5" />
        <ProjectCard project={projects[2]} className="md:col-span-5" />
        <ProjectCard project={projects[3]} className="md:col-span-7" />
      </div>
    </section>
  );
}
