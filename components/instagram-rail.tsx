import { instagramItems, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function InstagramRail() {
  if (!instagramItems.length) return null;

  return (
    <section className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <SectionHeading
          eyebrow="Work in motion"
          title="Short updates beyond the repo."
          subtitle="Short videos, updates, and behind-the-scenes clips from what I am building and where I am headed."
        />
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
        >
          Follow @ruuttarala
        </a>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:thin]">
        {instagramItems.map((item, index) => (
          <a
            key={`${item.title}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "evidence-card group relative flex min-h-[300px] w-[78vw] shrink-0 snap-start flex-col justify-between overflow-hidden p-5 transition hover:border-[var(--lime)] sm:w-[360px]",
              index % 2 === 0 ? "dark-panel" : "cream-panel",
            ].join(" ")}
          >
            <div className="absolute inset-x-0 top-0 h-20 scan-row opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <p className="mono-label opacity-75">{item.type}</p>
                <span className="border border-current/20 px-2 py-1 font-mono text-[10px] font-black uppercase">Reel</span>
              </div>
              <div className="mt-8 grid h-24 grid-cols-12 gap-1 text-[var(--lime)]" aria-hidden="true">
                {Array.from({ length: 48 }).map((_, dot) => (
                  <span
                    key={dot}
                    className={`aspect-square ${dot < 30 + index * 4 ? "bg-current" : "bg-current/20"}`}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <h3 className="text-3xl font-black tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-80">{item.caption}</p>
              <p className="mt-5 font-mono text-xs font-black uppercase tracking-[0.08em] text-[var(--lime)] group-hover:underline">
                Watch on Instagram
              </p>
            </div>
          </a>
        ))}

        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="evidence-card lime-panel flex min-h-[300px] w-[78vw] shrink-0 snap-start flex-col justify-between p-5 sm:w-[360px]"
        >
          <div>
            <p className="mono-label">Profile</p>
            <h3 className="mt-6 text-4xl font-black leading-none tracking-tight">More videos on @ruuttarala</h3>
          </div>
          <span className="inline-flex w-fit border border-[rgba(15,90,76,0.35)] px-4 py-2.5 font-mono text-xs font-black uppercase tracking-[0.08em]">
            Open Instagram
          </span>
        </a>
      </div>
    </section>
  );
}
