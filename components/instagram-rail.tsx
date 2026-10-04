import { instagramReels, profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

function isExactReel(item: { url: string; embedUrl: string }) {
  return (
    item.url.includes("instagram.com/reel/") &&
    item.embedUrl.includes("instagram.com/reel/") &&
    item.embedUrl.endsWith("/embed/")
  );
}

export function InstagramRail() {
  const realReels = instagramReels.filter(isExactReel);

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

      {realReels.length ? (
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:thin]">
          {realReels.map((item) => (
            <article
              key={item.id}
              className="evidence-card dark-panel flex aspect-[9/16] w-[78vw] max-w-[340px] shrink-0 snap-start flex-col overflow-hidden p-3 sm:w-[310px]"
            >
              <div className="flex items-center justify-between border-b border-[var(--line)] px-2 py-2">
                <p className="font-mono text-xs font-black text-[var(--text)]">@ruuttarala</p>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--muted)]">Instagram</p>
              </div>

              <div className="relative my-3 flex-1 overflow-hidden border border-[var(--line)] bg-[rgba(239,241,229,0.05)]">
                <iframe
                  title={`${item.title} Instagram reel`}
                  src={item.embedUrl}
                  className="h-full w-full"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>

              <div className="px-2 pb-2">
                <p className="text-sm leading-relaxed text-[var(--muted)]">{item.caption}</p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex border border-[var(--line)] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
                >
                  Watch reel
                </a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        // To show actual reels, add exact public Reel URLs to instagramReels.
        <a
          href={profile.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="evidence-card dark-panel grid gap-6 overflow-hidden p-5 sm:grid-cols-[1fr_auto] sm:items-end"
        >
          <div>
            <p className="mono-label text-[var(--lime)]">Follow @ruuttarala</p>
            <h3 className="mt-4 max-w-2xl text-4xl font-black leading-none tracking-tight">
              Short videos, project updates, and clips from the work around the work.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
              Exact Reel embeds will appear here once public Reel URLs are added.
            </p>
          </div>
          <span className="inline-flex w-fit border border-[var(--lime)] bg-[var(--lime)] px-4 py-2.5 font-mono text-xs font-black uppercase tracking-[0.08em] text-[var(--panel)]">
            Open Instagram
          </span>
        </a>
      )}
    </section>
  );
}
