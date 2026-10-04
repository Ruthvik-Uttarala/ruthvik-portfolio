import { MagneticButton } from "@/components/magnetic-button";
import { profile, resumeHref } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1430px] px-4 pt-20 pb-14 sm:px-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
        <div className="evidence-card dark-panel p-6 sm:p-8">
          <p className="mono-label text-[var(--lime)]">Contact / availability</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
            Have a role where production software, AI workflows, and cloud systems matter?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--muted)]">
            I&apos;m open to software engineering roles across full-stack, backend/API, AI systems, cloud, and platform engineering. I also share short videos and updates on Instagram.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <MagneticButton href={profile.email}>Email Ruthvik</MagneticButton>
            <MagneticButton href={resumeHref} label="OPEN RESUME">
              View Resume
            </MagneticButton>
            <MagneticButton href={profile.github} external label="VIEW GITHUB">
              GitHub
            </MagneticButton>
            <MagneticButton href={profile.linkedin} external label="VIEW LINKEDIN">
              LinkedIn
            </MagneticButton>
            <MagneticButton href={profile.instagram} external label="OPEN INSTAGRAM">
              Instagram
            </MagneticButton>
          </div>
        </div>
        <aside className="evidence-card lime-panel flex flex-col justify-between gap-10 p-6">
          <div>
            <p className="mono-label">Work authorization</p>
            <p className="mt-5 text-3xl font-black leading-none tracking-tight">
              F-1 OPT active.
              <br />
              STEM OPT eligible through 2029.
            </p>
          </div>
          <p className="font-mono text-sm font-bold uppercase leading-tight">
            Full-stack / AI / backend / cloud / platform engineering
          </p>
        </aside>
      </div>
      <p className="mt-8 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
        Designed and built by Ruthvik Uttarala / 2026
      </p>
    </section>
  );
}
