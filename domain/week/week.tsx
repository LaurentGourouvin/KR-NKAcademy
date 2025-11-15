import { WeekOverviewData } from "@/types/NKWeekOverview";

export const getPreviousAndNextWeek = (
  lesson: WeekOverviewData,
  currentWeek: number,
) => {
  const previousWeek = lesson.overviews.find((w) => w.week === currentWeek - 1);
  const nextWeek = lesson.overviews.find((w) => w.week === currentWeek + 1);

  return { previousWeek: previousWeek, nextWeek: nextWeek };
};
