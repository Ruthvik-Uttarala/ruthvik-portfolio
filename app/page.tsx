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
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(200,120,66,0.07),transparent_34%),radial-gradient(circle_at_84%_4%,rgba(113,138,163,0.09),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.28]" />
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
