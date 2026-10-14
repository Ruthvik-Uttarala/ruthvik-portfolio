"use client";

import { useState } from "react";

export function RobotSprite() {
  return <button className="sprite robot-sprite" type="button" aria-label="Curiosity unlocked: animate robot"><span className="robot-antenna"/><span className="robot-head"><i/><i/></span><span className="robot-body"/><b>CURIOSITY UNLOCKED</b></button>;
}

export function FlowSprite() {
  const [active, setActive] = useState(false);
  const toggle = () => setActive(value => !value);
  return <button className={`sprite flow-sprite ${active ? "is-active" : ""}`} type="button" onClick={toggle} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} onFocus={() => setActive(true)} onBlur={() => setActive(false)} aria-pressed={active}>
    <span className="pixel-face"><i className="eye left"/><i className="eye right"/><i className="tongue"/></span>
    <b>{active ? "FLOW STATE DETECTED" : "FOCUSING…"}</b>
    <small>Apparently, my tongue gives away when I’m concentrating.</small>
  </button>;
}

export function InkDoodle({ kind }: { kind: "book" | "circuit" | "basketball" | "lion" }) {
  const paths = {
    book: <><path d="M8 5c5-2 10 0 12 2v18c-3-2-7-3-12-1zM32 5c-5-2-10 0-12 2v18c3-2 7-3 12-1z"/><path d="M20 7v18"/></>,
    circuit: <><path d="M4 20h10V8h12v12h10"/><circle cx="4" cy="20" r="2"/><circle cx="36" cy="20" r="2"/><circle cx="20" cy="8" r="2"/></>,
    basketball: <><circle cx="20" cy="20" r="15"/><path d="M5 20h30M20 5c-7 8-7 22 0 30M20 5c7 8 7 22 0 30"/></>,
    lion: <><path d="M8 28 5 17l6-10 9-3 9 3 6 10-3 11-12 8z"/><path d="M13 19h3m8 0h3m-12 7 5 3 5-3M20 4v9"/></>,
  };
  return <svg className={`ink-doodle ${kind}`} viewBox="0 0 40 40" aria-hidden="true">{paths[kind]}</svg>;
}
