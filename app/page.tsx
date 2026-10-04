import { ContactSection } from "@/components/contact-section";
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
      <Nav />
      <main>
        <div className="pointer-events-none absolute inset-0 scan-grid opacity-25" />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.18]" />
        <Hero />

        <section className="mx-auto w-full max-w-[1430px] px-4 py-8 sm:px-6">
          <div className="evidence-card cream-panel grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-6">
            {credentials.map((item) => (
              <p key={item} className="mono-label leading-tight text-[var(--green)]">
                {item}
              </p>
            ))}
          </div>
        </section>

        <Principles />
        <ProjectGrid />
        <ExperienceTimeline />
        <StackMap />
        <ContactSection />
      </main>
    </div>
  );
}
