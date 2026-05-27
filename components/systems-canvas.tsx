"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const nodes = [
  { label: "AI", x: 18, y: 24 },
  { label: "API", x: 45, y: 16 },
  { label: "Cloud", x: 77, y: 28 },
  { label: "UI", x: 24, y: 66 },
  { label: "Eval", x: 52, y: 56 },
  { label: "Deploy", x: 80, y: 72 },
];

const links = [
  [0, 1],
  [1, 2],
  [0, 3],
  [3, 4],
  [1, 4],
  [4, 5],
  [2, 5],
];

export function SystemsCanvas() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [cursor, setCursor] = useState({ x: 50, y: 50, active: false });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;

    const onMove = (event: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setCursor({ x, y, active: true });
      });
    };

    const onLeave = () => setCursor((prev) => ({ ...prev, active: false }));

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [reduce]);

  return (
    <div
      ref={ref}
      className="relative h-[340px] w-full overflow-hidden rounded-3xl border border-[var(--line)] bg-[color:var(--surface)] p-8 sm:h-[420px]"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--line-soft)_1px,transparent_1px),linear-gradient(to_bottom,var(--line-soft)_1px,transparent_1px)] [background-size:34px_34px] opacity-45" />
      <motion.div
        className="pointer-events-none absolute size-52 rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_70%)] blur-2xl"
        animate={
          reduce
            ? { opacity: 0.25, x: "30%", y: "30%" }
            : {
                opacity: cursor.active ? 0.6 : 0.25,
                left: `${cursor.x}%`,
                top: `${cursor.y}%`,
              }
        }
        transition={{ type: "spring", stiffness: 80, damping: 22 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      />

      <svg className="absolute inset-0 size-full">
        {links.map(([from, to]) => {
          const a = nodes[from];
          const b = nodes[to];
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const distance = Math.hypot(cursor.x - midX, cursor.y - midY);
          const highlight = reduce ? 0 : Math.max(0, 1 - distance / 36);
          return (
            <line
              key={`${a.label}-${b.label}`}
              x1={`${a.x}%`}
              y1={`${a.y}%`}
              x2={`${b.x}%`}
              y2={`${b.y}%`}
              stroke="var(--line)"
              strokeWidth={1}
              opacity={0.35 + highlight * 0.5}
            />
          );
        })}
      </svg>

      {nodes.map((node) => {
        const distance = Math.hypot(cursor.x - node.x, cursor.y - node.y);
        const glow = reduce ? 0 : Math.max(0, 1 - distance / 28);
        return (
          <motion.div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={reduce ? { y: 0 } : { y: [0, -2, 0] }}
            transition={reduce ? { duration: 0 } : { duration: 3.6 + node.x / 24, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              className="absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: `rgba(224,151,92,${0.4 + glow * 0.6})` }}
            />
            <span className="block rounded-full border border-[var(--line)] bg-[color:var(--surface)] px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-[var(--text)] uppercase">
              {node.label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
