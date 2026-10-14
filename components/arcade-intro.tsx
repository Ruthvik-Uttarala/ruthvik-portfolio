"use client";

import { MouseEvent, useState } from "react";

export function ArcadeIntro() {
  const [starting, setStarting] = useState(false);
  const startReading = (event: MouseEvent<HTMLAnchorElement>) => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    event.preventDefault();
    setStarting(true);
    window.setTimeout(() => {
      location.hash = "origin";
      setStarting(false);
    }, 180);
  };
  return <aside className={`arcade-cover ${starting ? "is-starting" : ""}`} aria-label="Story shortcuts">
    <p>MY STORY</p>
    <strong>RUTHVIK UTTARALA</strong>
    <div><a href="#origin" onClick={startReading}>Start reading</a><a href="#builds">Skip to projects</a></div>
  </aside>;
}
