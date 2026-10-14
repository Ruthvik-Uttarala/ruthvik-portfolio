import assert from "node:assert/strict";
import test from "node:test";
import { elapsedCalendarDays } from "../lib/movie-counter.mjs";

test("returns zero before and on the start date", () => {
  assert.equal(elapsedCalendarDays(new Date(2026, 7, 24, 23, 59)), 0);
  assert.equal(elapsedCalendarDays(new Date(2026, 7, 25, 12)), 0);
});

test("counts local calendar boundaries, not elapsed hours", () => {
  assert.equal(elapsedCalendarDays(new Date(2026, 7, 26, 0, 1)), 1);
  assert.equal(elapsedCalendarDays(new Date(2026, 9, 14, 23, 59)), 50);
});

test("remains stable around daylight-saving dates", () => {
  assert.equal(elapsedCalendarDays(new Date(2026, 10, 1, 1, 30)), 68);
  assert.equal(elapsedCalendarDays(new Date(2026, 10, 2, 1, 30)), 69);
});
