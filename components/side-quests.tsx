"use client";

import { useState } from "react";
import { InkDoodle } from "./pixel-sprites";

const quests = [
  ["GYM — THREE DAYS A WEEK", "Current side quest: building toward a Batman-inspired V-taper."],
  ["BASKETBALL — RETURNING", "I stopped playing in seventh grade. The Knicks’ 2026 Finals comeback reignited the urge to return."],
  ["BASEBALL — TO LEARN", "A sport I want to understand by learning how it is actually played."],
  ["AMERICAN FOOTBALL — TO LEARN", "Another American sport I want to approach as a beginner."],
];

export function SideQuests() {
  const [open, setOpen] = useState(0);
  return <section className="quest-log"><header><InkDoodle kind="basketball"/><div><p className="pixel-label">SIDE QUEST JOURNAL</p><h3>Learning outside the terminal.</h3></div></header>{quests.map(([title, text], index) => <button key={title} aria-expanded={open === index} onClick={() => setOpen(index)}><b>{title}</b>{open === index && <span>{text}</span>}</button>)}</section>;
}
