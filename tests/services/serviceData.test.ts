import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs/promises";
import { getWeekData } from "../../services/data/ServiceData";
import type {
  WeekData,
  ChunkFile,
  DialogFile,
  SentenceFile,
  ExerciseFile,
  WeekMeta,
} from "@/types/NKWeekMeta";

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
    const fakeExercices: ExerciseFile = {
      audioBasePath: "audio/",
      chunks: [{ id: "exercices" }],
    } as any;

    mockedReadFile.mockImplementation(async (filePath: any) => {
      const path = String(filePath);

      if (path.endsWith("chunks.json")) return JSON.stringify(fakeChunks);
      if (path.endsWith("dialogs.json")) return JSON.stringify(fakeDialogs);
      if (path.endsWith("sentences.json")) return JSON.stringify(fakeSentences);
      if (path.endsWith("meta.json")) return JSON.stringify(fakeMeta);
      if (path.endsWith("exercices.json")) return JSON.stringify(fakeExercices);

      throw new Error(`Unexpected file path in test: ${path}`);
    });

    const data: WeekData = await getWeekData(1);

    expect(data.meta).toEqual(fakeMeta);
    expect(data.chunks).toEqual(fakeChunks);
    expect(data.dialogs).toEqual(fakeDialogs);
    expect(data.sentences).toEqual(fakeSentences);
    expect(data.exercices).toEqual(fakeExercices);
  });
});
