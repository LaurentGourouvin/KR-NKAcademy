export interface WeekOverviewFile {
  weeks: WeekOverview[];
}

export interface WeekOverview {
  week: number;
  slug: string;
  title: string;
  summary: string;
  difficulty: string;
  audioBasePath: string;
  tooltip: string;
  image: string;
}

export interface WeekOverviewData {
  overviews: WeekOverview[];
}
