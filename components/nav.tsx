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
          ? "border-[var(--line)] bg-[color:var(--surface-transparent)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      ].join(" "),
    [scrolled],
  );

  return (
    <header className={navClass}>
      <div className="mx-auto max-w-[1200px] px-5 py-4 sm:px-8">
        <div className="flex items-center justify-between">
        <Link href="#top" className="font-mono text-xs tracking-[0.22em] text-[var(--muted)] uppercase">
          {profile.shortMark}
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="relative rounded-full px-3 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
              data-cursor-expand="true"
            >
              {activeId === item.id ? (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-full border border-[var(--line)] bg-[color:var(--surface)]"
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
            className="hidden rounded-full px-2.5 py-1.5 text-xs text-[var(--muted)] transition hover:text-[var(--text)] sm:inline-flex"
            data-cursor-label="VIEW REPO"
            data-cursor-expand="true"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full px-2.5 py-1.5 text-xs text-[var(--muted)] transition hover:text-[var(--text)] sm:inline-flex"
            data-cursor-expand="true"
          >
            LinkedIn
          </a>
          <a
            href={resumeHref}
            className="inline-flex rounded-full border border-[var(--line)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            data-cursor-label="OPEN PDF"
            data-cursor-expand="true"
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
              className="relative rounded-full px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {activeId === item.id ? (
                <motion.span
                  layoutId="active-nav-mobile"
                  className="absolute inset-0 rounded-full border border-[var(--line)] bg-[color:var(--surface)]"
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
