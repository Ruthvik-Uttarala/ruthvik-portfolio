"use client";

import { useState } from "react";

const stages = [
  ["IDEA", "Start with a problem interesting enough to keep asking questions about."],
  ["BUILD", "Make the smallest honest version that can teach me something."],
  ["FEEDBACK", "Let real people challenge assumptions before they harden."],
  ["ITERATE", "Keep what works, change what does not, and carry the lesson forward."],
];

export function IdeaCycle() {
  const [selected, setSelected] = useState(0);
  return <div className="idea-cycle"><div role="tablist" aria-label="Entrepreneurial learning loop">{stages.map(([label], index) => <button role="tab" aria-selected={selected === index} aria-controls="idea-reflection" id={`idea-tab-${index}`} key={label} onClick={() => setSelected(index)}>{label}<span aria-hidden="true">→</span></button>)}</div><p role="tabpanel" id="idea-reflection" aria-labelledby={`idea-tab-${selected}`}>{stages[selected][1]}</p></div>;
}
