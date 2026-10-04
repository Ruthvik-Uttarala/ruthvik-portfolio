"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { navItems, profile, resumeHref } from "@/data/portfolio";

const SECTION_IDS = navItems.map((item) => item.id);

export function Nav() {
  const [activeId, setActiveId] = useState("work");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { threshold: [0.2, 0.4, 0.65], rootMargin: "-12% 0px -55% 0px" },
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navClass = useMemo(
    () =>
      [
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-[var(--line)] bg-[rgba(17,19,18,0.86)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" "),
    [scrolled],
  );

  return (
    <header className={navClass}>
      <div className="mx-auto max-w-[1430px] px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="#top"
            className="border border-[var(--line)] bg-[var(--panel)] px-3 py-2 font-mono text-xs font-black tracking-[0.18em] text-[var(--lime)] uppercase"
          >
            {profile.shortMark}
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="relative px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              >
                {activeId === item.id ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 border border-[var(--line)] bg-[rgba(239,241,229,0.06)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.4 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden px-2.5 py-1.5 font-mono text-xs text-[var(--muted)] transition hover:text-[var(--text)] sm:inline-flex"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden px-2.5 py-1.5 font-mono text-xs text-[var(--muted)] transition hover:text-[var(--text)] sm:inline-flex"
            >
              LinkedIn
            </a>
            <a
              href={resumeHref}
              className="inline-flex border border-[var(--line)] bg-[var(--panel)] px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--text)] transition hover:border-[var(--lime)] hover:bg-[var(--lime)] hover:text-[var(--panel)]"
            >
              Resume
            </a>
          </div>
        </div>

        <nav className="mt-3 flex items-center gap-2 overflow-x-auto md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="relative px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {activeId === item.id ? (
                <motion.span
                  layoutId="active-nav-mobile"
                  className="absolute inset-0 border border-[var(--line)] bg-[rgba(239,241,229,0.06)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32, mass: 0.4 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
