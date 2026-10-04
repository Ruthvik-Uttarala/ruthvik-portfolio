import { MagneticButton } from "@/components/magnetic-button";
import { profile, resumeHref } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1430px] px-4 pt-20 pb-14 sm:px-6">
      <div className="rounded-md border border-[var(--line)] bg-[var(--accent)] p-6 text-[var(--ink)] sm:p-8">
        <h2 className="max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
          Building something that needs an engineer who can ship?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--accent-ink)]">
          I&apos;m open to software engineering roles across applied AI, full-stack product development, and
          cloud-backed systems.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <MagneticButton href={profile.email}>Email Ruthvik</MagneticButton>
          <MagneticButton href={profile.github} external label="VIEW REPO">
            GitHub
          </MagneticButton>
          <MagneticButton href={profile.linkedin} external>
            LinkedIn
          </MagneticButton>
          <MagneticButton href={resumeHref} label="OPEN PDF">
            Download résumé
          </MagneticButton>
        </div>
      </div>
      <p className="mt-8 border-t border-[var(--line)] pt-5 text-sm text-[var(--muted)]">
        Designed and built by Ruthvik Uttarala / 2026
      </p>
    </section>
  );
}
