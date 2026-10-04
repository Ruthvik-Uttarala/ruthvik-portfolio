import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Hero } from "@/components/hero";
import { InstagramRail } from "@/components/instagram-rail";
import { Nav } from "@/components/nav";
import { PennStateStory } from "@/components/penn-state-story";
import { ProjectGrid } from "@/components/project-grid";
import { StackMap } from "@/components/stack-map";
import { TopStoryStrip } from "@/components/top-story-strip";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <div className="pointer-events-none absolute inset-0 scan-grid opacity-25" />
        <div className="pointer-events-none absolute inset-0 grain opacity-[0.18]" />
        <Hero />
        <TopStoryStrip />
        <ProjectGrid />
        <InstagramRail />
        <ExperienceTimeline />
        <StackMap />
        <PennStateStory />
        <ContactSection />
      </main>
    </div>
  );
}
