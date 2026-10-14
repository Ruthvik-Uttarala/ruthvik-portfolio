"use client";

import { useEffect, useState } from "react";

export function ChapterNav({ items }: { items: { id: string; label: string }[] }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      setProgress(root.scrollTop / Math.max(1, root.scrollHeight - root.clientHeight));
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-20% 0px -65%" });
    items.forEach(item => { const section = document.getElementById(item.id); if (section) observer.observe(section); });
    update();
    addEventListener("scroll", update, { passive: true });
    return () => { observer.disconnect(); removeEventListener("scroll", update); };
  }, [items]);
  return <header className="book-nav">
    <div className="progress" style={{ transform: `scaleX(${progress})` }} />
    <div className="nav-inner"><a className="mark" href="#top">RU</a>
      <span className="current-level" aria-live="polite">{items.find(item => item.id === active)?.label}</span>
      <nav className="desktop-nav" aria-label="Primary navigation"><a href="#builds">Work</a><a href="#production">Experience</a><a href="#origin">My story</a><a href="/resume.pdf">Résumé</a><a href="#contact">Contact</a></nav>
      <details className="mobile-nav"><summary>Menu</summary><div><a href="#builds">Work</a><a href="#production">Experience</a><a href="#origin">My story</a><a href="/resume.pdf">Résumé</a><a href="#contact">Contact</a></div></details>
    </div>
  </header>;
}
