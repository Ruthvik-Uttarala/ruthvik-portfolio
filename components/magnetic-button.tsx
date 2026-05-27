"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { type MouseEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  label?: string;
  external?: boolean;
};

export function MagneticButton({ href, children, className, label, external }: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 360, damping: 28, mass: 0.4 });
  const ySpring = useSpring(y, { stiffness: 360, damping: 28, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px * 6);
    y.set(py * 6);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls =
    className ??
    "inline-flex items-center justify-center rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[color:var(--accent)] hover:bg-[color:var(--surface-hover)]";

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ x: xSpring, y: ySpring }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={cls}
        data-cursor-expand="true"
        data-cursor-label={label}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div style={{ x: xSpring, y: ySpring }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <Link href={href} className={cls} data-cursor-expand="true" data-cursor-label={label}>
        {children}
      </Link>
    </motion.div>
  );
}
