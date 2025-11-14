import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs/promises";
import { getWeekData, getWeekOverview } from "../../services/data/ServiceData";
import type { WeekData } from "@/types/NKWeekData";
import type { ChunkFile } from "@/types/NKChunk";
import type { DialogFile } from "@/types/NKDialog";
import type { SentenceFile } from "@/types/NkSentence";
import type { ExerciseFile } from "@/types/NKExercise";
import type { WeekMeta } from "@/types/NKWeekMeta";
import type { WeekOverviewFile } from "@/types/NKWeekOverview";

vi.mock("fs/promises", () => ({
  default: {
    readFile: vi.fn(),
  },
}));

const mockedReadFile = fs.readFile as unknown as ReturnType<typeof vi.fn>;

describe("getWeekData", () => {
  beforeEach(() => {
    mockedReadFile.mockReset();
  });

  it("throws on invalid week number (<1 or >52)", async () => {
    await expect(getWeekData(0)).rejects.toThrow("Week number invalid.");
    await expect(getWeekData(53)).rejects.toThrow("Week number invalid.");
  });

  it("loads week data correctly for a valid week", async () => {
    const fakeChunks: ChunkFile = {
      audioBasePath: "audio/",
      chunks: [{ id: "chunk1" }],
    } as any;
    const fakeDialogs: DialogFile = { dialogs: [{ id: "dialog1" }] } as any;
    const fakeSentences: SentenceFile = {
      audioBasePath: "audio/",
      chunks: [{ id: "sentence1" }],
    } as any;
    const fakeMeta: WeekMeta = {
      week: 1,
      title: "Week 1",
      theme: "Greetings",
      speechLevel: "Standard",
      objectives: ["Learn greetings", "Practice basic phrases"],
      grammarFocus: [],
      vocabulary: [],
      audioBasePath: "/audio/week01",
      notes: "Test metadata",
    };
    const fakeExercises: ExerciseFile = {
      audioBasePath: "audio/",
      chunks: [{ id: "exercises" }],
    } as any;

    mockedReadFile.mockImplementation(async (filePath: any) => {
      const path = String(filePath);

      if (path.endsWith("chunks.json")) return JSON.stringify(fakeChunks);
      if (path.endsWith("dialogs.json")) return JSON.stringify(fakeDialogs);
      if (path.endsWith("sentences.json")) return JSON.stringify(fakeSentences);
      if (path.endsWith("meta.json")) return JSON.stringify(fakeMeta);
      if (path.endsWith("exercises.json")) return JSON.stringify(fakeExercises);

      throw new Error(`Unexpected file path in test: ${path}`);
    });

    const data: WeekData = await getWeekData(1);

    expect(data.meta).toEqual(fakeMeta);
    expect(data.chunks).toEqual(fakeChunks);
    expect(data.dialogs).toEqual(fakeDialogs);
    expect(data.sentences).toEqual(fakeSentences);
    expect(data.exercises).toEqual(fakeExercises);
  });
});

describe("getWeekOverview", () => {
  beforeEach(() => {
    mockedReadFile.mockReset();
  });

  const fakeOverviewFile: WeekOverviewFile = {
    weeks: [
      {
        week: 1,
        slug: "first-steps",
        title: "Premiers pas : se présenter simplement",
        summary:
          "Apprendre à se présenter et utiliser des expressions polies de base.",
        difficulty: "A1",
        audioBasePath: "/audio/week01/",
        tooltip: "Se présenter simplement.",
      },
      {
        week: 2,
        slug: "age-origin-occupation",
        title: "Parler de son âge, origine et métier",
        summary:
          "Savoir poser des questions simples sur l'âge, l'origine et le métier.",
        difficulty: "A1",
        audioBasePath: "/audio/week02/",
        tooltip: "Âge, origine, métier.",
      },
    ],
  } as any;

  const mockWeekOverviewRead = () => {
    mockedReadFile.mockImplementation(async (filePath: any) => {
      const path = String(filePath);

      if (path.endsWith("weekOverview.json")) {
        return JSON.stringify(fakeOverviewFile);
      }

      throw new Error(`Unexpected file path in test: ${path}`);
    });
  };

  it("returns all overviews when no week is provided", async () => {
    mockWeekOverviewRead();

    const result = await getWeekOverview();

    expect(result.overviews).toEqual(fakeOverviewFile.weeks);
  });

  it("filters overview when a valid week is provided", async () => {
    mockWeekOverviewRead();

    const result = await getWeekOverview(1);

    expect(result.overviews).toEqual([fakeOverviewFile.weeks[0]]);
  });

  it("returns empty array if week is valid but not present in file", async () => {
    mockWeekOverviewRead();

    const result = await getWeekOverview(52);

    expect(result.overviews).toEqual([]);
  });

  it("throws on invalid week number (<1 or >52)", async () => {
    mockWeekOverviewRead();

    await expect(getWeekOverview(0)).rejects.toThrow("Invalid week number.");
    await expect(getWeekOverview(53)).rejects.toThrow("Invalid week number.");
  });

  it("throws 'Error with Overview file.' when readJson fails", async () => {
    mockedReadFile.mockRejectedValueOnce(new Error("Boom"));

    await expect(getWeekOverview()).rejects.toThrow(
      "Error with Overview file.",
    );
  });
});
