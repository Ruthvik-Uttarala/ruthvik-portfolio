"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type HoverState = {
  active: boolean;
  label: string;
};

export function CustomCursor() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<HoverState>({ active: false, label: "" });

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 34, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 400, damping: 34, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 800, damping: 48, mass: 0.2 });
  const dotY = useSpring(y, { stiffness: 800, damping: 48, mass: 0.2 });

  const canUse = useMemo(() => {
    if (typeof window === "undefined") return false;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    return !coarse && !reduce;
  }, [reduce]);

  useEffect(() => {
    if (!canUse) return;
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest<HTMLElement>("[data-cursor-expand],a,button");
      if (!interactive) {
        setHover({ active: false, label: "" });
        return;
      }
      const label = interactive.dataset.cursorLabel ?? "";
      setHover({ active: true, label });
    };

    const handleOut = (event: MouseEvent) => {
      const related = event.relatedTarget as HTMLElement | null;
      if (!related?.closest("[data-cursor-expand],a,button")) {
        setHover({ active: false, label: "" });
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
    };
  }, [canUse, x, y]);

  if (!canUse) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[120] size-2 rounded-full bg-[var(--accent)] mix-blend-screen"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[119] rounded-full border border-[var(--accent-soft)] bg-[color:var(--surface-transparent)]"
        animate={{ width: hover.active ? 54 : 34, height: hover.active ? 54 : 34 }}
        transition={{ type: "spring", stiffness: 360, damping: 26, mass: 0.4 }}
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
      />
      <AnimatePresence>
        {hover.label ? (
          <motion.div
            key={hover.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.14 }}
            aria-hidden
            className="pointer-events-none fixed z-[121] rounded-full border border-[var(--line)] bg-[color:var(--surface)] px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-[var(--text)] uppercase"
            style={{ x: ringX, y: ringY, translateX: 18, translateY: -30 }}
          >
            {hover.label}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
