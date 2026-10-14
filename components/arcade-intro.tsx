"use client";

import { useEffect, useState } from "react";

export function ArcadeIntro() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches || sessionStorage.getItem("ru-intro-seen")) return;
    sessionStorage.setItem("ru-intro-seen", "1");
    const start = window.setTimeout(() => setVisible(true), 0);
    const finish = window.setTimeout(() => setVisible(false), 1200);
    return () => { window.clearTimeout(start); window.clearTimeout(finish); };
  }, []);
  if (!visible) return null;
  return <div className="arcade-intro" role="status" aria-label="Portfolio opening"><button onClick={() => setVisible(false)}>Skip</button><p>PLAYER 01</p><strong>RUTHVIK UTTARALA</strong><span>PRESS START TO READ</span></div>;
}
