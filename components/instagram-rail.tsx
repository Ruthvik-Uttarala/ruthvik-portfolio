import { instagramReels, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

function hasRealEmbed(embedUrl: string) {
  return Boolean(embedUrl) && !embedUrl.includes("PASTE_REEL_URL_HERE");
}

export function InstagramRail() {
  if (!instagramReels.length) return null;

  return (
    <section id="motion" className="mx-auto w-full max-w-[1430px] px-4 py-20 sm:px-6">
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
          Open Instagram
        </a>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:thin]">
        {instagramReels.map((item, index) => {
          const realEmbed = hasRealEmbed(item.embedUrl);
          return (
            <article
              key={item.id}
              className="evidence-card dark-panel flex aspect-[9/16] w-[78vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden p-3 sm:w-[310px]"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] px-2 py-2">
                <p className="font-mono text-xs font-black text-[var(--text)]">@ruuttarala</p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">Instagram</p>
              </div>

              <div className="relative my-3 flex-1 overflow-hidden border border-[var(--line)] bg-[rgba(239,241,229,0.05)]">
                {realEmbed ? (
                  <iframe
                    title={`${item.title} Instagram reel`}
                    src={item.embedUrl}
                    className="h-full w-full"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-between p-4">
                    <div className="grid grid-cols-8 gap-1 text-[var(--lime)]" aria-hidden="true">
                      {Array.from({ length: 88 }).map((_, dot) => (
                        <span
                          key={dot}
                          className={`aspect-square ${dot < 42 + index * 10 ? "bg-current" : "bg-current/20"}`}
                        />
                      ))}
                    </div>
                    <div>
                      <p className="mono-label text-[var(--lime)]">Preview</p>
                      <h3 className="mt-3 text-3xl font-black leading-none tracking-tight">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="px-2 pb-2">
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
                <a
                  href={item.url.includes("PASTE_REEL_URL_HERE") ? profile.instagram : item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex border border-[var(--line)] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
                >
                  Watch reel
                </a>
              </div>
            </article>
          );
        })}

        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="evidence-card lime-panel flex aspect-[9/16] w-[78vw] max-w-[340px] shrink-0 snap-start flex-col justify-between p-5 sm:w-[310px]"
        >
          <div>
            <p className="mono-label">Profile</p>
            <h3 className="mt-8 text-4xl font-black leading-none tracking-tight">More on @ruuttarala</h3>
            <p className="mt-4 text-sm font-semibold leading-relaxed">
              More videos, project updates, and clips from the work around the work.
            </p>
          </div>
          <span className="inline-flex w-fit border border-[rgba(15,90,76,0.35)] px-4 py-2.5 font-mono text-xs font-black uppercase tracking-[0.08em]">
            Open Instagram
          </span>
        </a>
      </div>
    </section>
  );
}
