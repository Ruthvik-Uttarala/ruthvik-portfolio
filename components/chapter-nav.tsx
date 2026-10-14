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
    <div className="nav-inner"><a className="mark" href="#top">RU · BOOK II</a>
      <nav className="desktop-nav" aria-label="Table of contents">{items.map(item => <a className={active === item.id ? "active" : ""} aria-current={active === item.id ? "location" : undefined} key={item.id} href={`#${item.id}`}>{item.label}</a>)}</nav>
      <details className="mobile-nav"><summary>{items.find(item => item.id === active)?.label ?? "Contents"}</summary><div>{items.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}</div></details>
    </div>
  </header>;
}
