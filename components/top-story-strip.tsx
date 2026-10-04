import Image from "next/image";

const chips = ["B.S. CS", "AWS ML + AI", "President Walker Award", "OPT + STEM OPT eligible"];

export function TopStoryStrip() {
  return (
    <section className="mx-auto w-full max-w-[1430px] px-4 py-8 sm:px-6">
      <div className="grid gap-4 md:grid-cols-12">
        <article className="evidence-card dark-panel grid overflow-hidden md:col-span-8 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[280px]">
            <Image
              src="/media/personal/flying-beaver-stadium.jpg"
              alt="Ruthvik at Beaver Stadium after graduation"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-[50%_52%]"
            />
          </div>
          <div className="flex flex-col justify-between gap-8 p-5 sm:p-6">
            <div>
              <p className="mono-label text-[var(--lime)]">Penn State to production</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-none tracking-tight sm:text-5xl">
                Penn State CS gave me the foundation. Production systems gave me the proof.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="border border-[var(--line)] bg-[rgba(239,241,229,0.06)] px-3 py-2 font-mono text-[10px] font-black uppercase tracking-[0.08em] text-[var(--text)]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </article>

        <article className="evidence-card cream-panel overflow-hidden md:col-span-4">
          <div className="relative h-[320px]">
            <Image
              src="/media/personal/lion-shrine-riding.jpg"
              alt="Ruthvik at the Penn State Lion Shrine"
              fill
              sizes="(min-width: 768px) 32vw, 100vw"
              className="object-cover object-[50%_42%]"
            />
          </div>
          <div className="p-5">
            <p className="mono-label text-[var(--green)]">Identity</p>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#5f665d]">
              Campus story, engineering discipline, and production software work in one throughline.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
