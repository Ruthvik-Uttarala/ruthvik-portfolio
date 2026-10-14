"use client";

import { useState } from "react";
import { InkDoodle } from "./pixel-sprites";

const quests = [
  ["Gym, three days a week", "I’m working toward a Batman-inspired V-taper. It’s very much a work in progress."],
  ["Getting back into basketball", "I stopped playing in seventh grade. The Knicks’ 2026 Finals run made me want to pick it up again."],
  ["Learning baseball", "I want to understand the sport by learning how it’s actually played."],
  ["Learning American football", "Another sport I’m approaching as a curious beginner."],
];

export function SideQuests() {
  const [open, setOpen] = useState(0);
  return <section className="quest-log"><header><InkDoodle kind="basketball"/><div><p className="pixel-label">LIFE LATELY</p><h3>A few things I’m getting into.</h3></div></header>{quests.map(([title, text], index) => <button key={title} aria-expanded={open === index} onClick={() => setOpen(index)}><b>{title}</b>{open === index ? <span>{text}</span> : null}</button>)}</section>;
}
