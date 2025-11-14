import fs from "fs/promises";
import path from "path";
import { WeekData } from "@/types/NKWeekData";
import { ChunkFile } from "@/types/NKChunk";
import { DialogFile } from "@/types/NKDialog";
import { SentenceFile } from "@/types/NkSentence";
import { WeekMeta } from "@/types/NKWeekMeta";
import { ExerciseFile } from "@/types/NKExercise";
import {
  WeekOverview,
  WeekOverviewData,
  WeekOverviewFile,
} from "@/types/NKWeekOverview";

export const getWeekData = async (week: number): Promise<WeekData> => {
  if (week < 1 || week > 52) {
    throw new Error("Week number invalid.");
  }

  const weekFolder = `week${String(week).padStart(2, "0")}`;

  const baseDir = path.join(process.cwd(), "public", "data", weekFolder);

  const readJson = async <T>(fileName: string): Promise<T> => {
    const filePath = path.join(baseDir, fileName);
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T;
  };

  try {
    const [chunks, dialogs, sentences, meta, exercises] = await Promise.all([
      readJson<ChunkFile>("chunks.json"),
      readJson<DialogFile>("dialogs.json"),
      readJson<SentenceFile>("sentences.json"),
      readJson<WeekMeta>("meta.json"),
      readJson<ExerciseFile>("exercises.json"),
    ]);

    const weekData: WeekData = {
      chunks,
      dialogs,
      sentences,
      meta,
      exercises,
    };

    return weekData;
  } catch (error) {
    throw new Error("Error with week files.");
  }
};

export const getWeekOverview = async (
  week?: number,
): Promise<WeekOverviewData> => {
  const baseDir = path.join(process.cwd(), "public", "data");

  const readJson = async <T>(fileName: string): Promise<T> => {
    const filePath = path.join(baseDir, fileName);
    const content = await fs.readFile(filePath, "utf-8");
    return JSON.parse(content) as T;
  };

  if (week !== undefined && (week < 1 || week > 52)) {
    throw new Error("Invalid week number.");
  }

  try {
    const data = await readJson<WeekOverviewFile>("weekOverview.json");
    let overviews: WeekOverview[];

    if (week === undefined) {
      return { overviews: data.weeks };
    }

    return { overviews: data.weeks.filter((w) => w.week === week) };
  } catch (error) {
    throw new Error("Error with Overview file.");
  }
};
