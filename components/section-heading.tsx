type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <header className={`mb-10 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--muted)] uppercase">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text)] sm:text-4xl">{title}</h2>
      {subtitle ? <p className="text-pretty text-base leading-relaxed text-[var(--muted)]">{subtitle}</p> : null}
    </header>
  );
}
