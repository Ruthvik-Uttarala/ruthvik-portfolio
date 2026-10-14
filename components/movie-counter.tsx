"use client";

import { useEffect, useState } from "react";
import { elapsedCalendarDays, MOVIE_FREE_SINCE } from "@/lib/movie-counter.mjs";

export function MovieCounter() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => {
    let timer = 0;
    const refresh = () => {
      const now = new Date();
      setDays(elapsedCalendarDays(now));
      window.clearTimeout(timer);
      const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
      timer = window.setTimeout(refresh, next.getTime() - now.getTime());
    };
    const visible = () => { if (document.visibilityState === "visible") refresh(); };
    refresh();
    addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", visible);
    return () => { window.clearTimeout(timer); removeEventListener("focus", refresh); document.removeEventListener("visibilitychange", visible); };
  }, []);

  return <aside className="movie-counter" aria-live="polite">
    <p className="pixel-label">DAYS SINCE MY LAST MOVIE</p>
    <strong>{days ?? "…"}</strong>
    <p>The movie that inspired me to build things was also part of the medium I eventually decided to take a break from.</p>
    <details><summary>Why I stopped.</summary><p>On August 25, 2026, while my parents were visiting me near Cincinnati, they encouraged me to put more time into my goals. I made a personal commitment to step away from movies and television. It is not a judgment about anyone else; I simply feel clearer, and I now direct that restless energy toward meaningful work.</p></details>
    <time dateTime={MOVIE_FREE_SINCE}>Since August 25, 2026</time>
  </aside>;
}
