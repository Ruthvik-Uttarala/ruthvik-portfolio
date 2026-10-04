import Link from "next/link";
import { credentials, experiences, projects, profile, stackGroups } from "@/data/portfolio";

export const metadata = {
  title: "Resume — Ruthvik Uttarala",
  description: "Resume for Ruthvik Uttarala, Software Engineer.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen max-w-[960px] px-5 py-10 text-[var(--text)] sm:px-8">
      <Link href="/" className="text-sm text-[var(--muted)] hover:text-[var(--text)]">
        ← Back to portfolio
      </Link>

      <header className="mt-8 border-b border-[var(--line)] pb-6">
        <p className="font-mono text-xs tracking-[0.18em] text-[var(--muted)] uppercase">Resume</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Ruthvik Uttarala</h1>
        <p className="mt-2 text-lg text-[var(--muted)]">Software Engineer, Java and Full Stack</p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[var(--muted)]">
          <a href={profile.email} className="hover:text-[var(--text)]">uttaralaruthvik@gmail.com</a>
          <a href={profile.linkedin} className="hover:text-[var(--text)]">LinkedIn</a>
          <a href={profile.github} className="hover:text-[var(--text)]">GitHub</a>
          <span>F-1 OPT, STEM OPT eligible through 2029</span>
        </div>
      </header>

      <section className="py-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Education and Certifications</h2>
        <div className="mt-3 grid gap-2 text-sm text-[var(--muted)]">
          {credentials.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Technical Skills</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.name} className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4">
              <h3 className="font-semibold">{group.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{group.tools.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Work Experience</h2>
        <div className="mt-5 space-y-6">
          {experiences.map((item) => (
            <article key={item.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-sm text-[var(--muted)]">{item.dates}</p>
              </div>
              <p className="text-sm font-medium">{item.company}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.context}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--muted)]">
                {item.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--line)] py-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] uppercase">Projects</h2>
        <div className="mt-5 space-y-5">
          {projects.map((project) => (
            <article key={project.id}>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{project.stack.join(", ")}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{project.buildResult}</p>
              {project.metrics ? (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                  {project.metrics.map((metric) => (
                    <li key={metric}>{metric}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
