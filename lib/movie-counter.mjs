export const MOVIE_FREE_SINCE = "2026-08-25";

/** @param {Date} localDate @param {string} start */
export function elapsedCalendarDays(localDate, start = MOVIE_FREE_SINCE) {
  const [year, month, day] = start.split("-").map(Number);
  const currentDay = Date.UTC(localDate.getFullYear(), localDate.getMonth(), localDate.getDate());
  const startDay = Date.UTC(year, month - 1, day);
  return Math.max(0, Math.floor((currentDay - startDay) / 86_400_000));
}
