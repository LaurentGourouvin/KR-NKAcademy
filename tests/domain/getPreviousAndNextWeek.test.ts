import { describe, it, expect, vi, beforeEach } from "vitest";
import { getPreviousAndNextWeek } from "../../domain/week/week";
import type { WeekOverviewData, WeekOverview } from "@/types/NKWeekOverview";

const makeLesson = (weeks: number[]): WeekOverviewData => ({
  overviews: weeks.map((w) => ({
    week: w,
    slug: `week-${w}`,
    title: `Week ${w}`,
    summary: `Résumé ${w}`,
    difficulty: "A1",
    audioBasePath: `/audio/week${String(w).padStart(2, "0")}/`,
    tooltip: `Tooltip ${w}`,
  })) as WeekOverview[],
});

describe("getPreviousAndNextWeek", () => {
  it("retourne previous et next pour une semaine au milieu", () => {
    const lesson = makeLesson([1, 2, 3, 4, 5]);

    const { previousWeek, nextWeek } = getPreviousAndNextWeek(lesson, 3);

    expect(previousWeek).toBeDefined();
    expect(previousWeek?.week).toBe(2);

    expect(nextWeek).toBeDefined();
    expect(nextWeek?.week).toBe(4);
  });

  it("retourne uniquement next pour la première semaine", () => {
    const lesson = makeLesson([1, 2, 3]);

    const { previousWeek, nextWeek } = getPreviousAndNextWeek(lesson, 1);

    expect(previousWeek).toBeUndefined();
    expect(nextWeek).toBeDefined();
    expect(nextWeek?.week).toBe(2);
  });

  it("retourne uniquement previous pour la dernière semaine", () => {
    const lesson = makeLesson([1, 2, 3]);

    const { previousWeek, nextWeek } = getPreviousAndNextWeek(lesson, 3);

    expect(previousWeek).toBeDefined();
    expect(previousWeek?.week).toBe(2);
    expect(nextWeek).toBeUndefined();
  });

  it("retourne previous/next undefined si la semaine n’existe pas", () => {
    const lesson = makeLesson([1, 2, 3]);

    const { previousWeek, nextWeek } = getPreviousAndNextWeek(lesson, 10);

    expect(previousWeek).toBeUndefined();
    expect(nextWeek).toBeUndefined();
  });
});
