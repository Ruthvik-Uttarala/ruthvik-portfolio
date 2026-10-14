import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const roots = ["app", "components", "data", "lib"];
const files = roots.flatMap(function walk(path) {
  return readdirSync(path).flatMap(name => {
    const entry = join(path, name);
    return statSync(entry).isDirectory() ? walk(entry) : /\.(tsx?|mjs|css)$/.test(entry) ? [entry] : [];
  });
});
const source = files.map(file => [file, readFileSync(file, "utf8")]);

test("public source contains no em dash characters", () => {
  const failures = source.filter(([, text]) => text.includes("\u2014")).map(([file]) => file);
  assert.deepEqual(failures, []);
});

test("retired portfolio phrases do not return", () => {
  const retired = [
    "No invented screenshots",
    "Public repository details remain intentionally modest",
    "keeping the public description intentionally modest",
    "I’m not claiming expertise",
    "Four systems, four kinds of trust",
    "The real world leaves useful marks",
    "Side quests keep the story human",
    "Enormous ambition. One honest step at a time",
    "Visakhapatnam",
  ];
  for (const phrase of retired) assert.equal(source.some(([, text]) => text.includes(phrase)), false, phrase);
});

test("source has no placeholder anchors", () => {
  assert.equal(source.some(([, text]) => /href=["']#["']/.test(text)), false);
});
