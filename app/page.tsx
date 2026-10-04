import { ContactSection } from "@/components/contact-section";
import { CustomCursor } from "@/components/custom-cursor";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Principles } from "@/components/principles";
import { ProjectGrid } from "@/components/project-grid";
import { StackMap } from "@/components/stack-map";
import { credentials } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Nav />
      <main>
        <div className="pointer-events-none absolute inset-0 scan-grid opacity-25" />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.18]" />
        <Hero />
        <ProjectGrid />
        <ExperienceTimeline />
        <Principles />
        <StackMap />

        <section className="border-y border-[var(--line)] bg-[color:var(--surface)] py-5">
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap gap-x-8 gap-y-2 px-5 sm:px-8">
            {credentials.map((item) => (
              <p key={item} className="text-sm text-[var(--muted)]">
                {item}
              </p>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}
