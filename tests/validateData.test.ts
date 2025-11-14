import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import {
  weekMetaSchema,
  sentenceFileSchema,
  chunkFileSchema,
  dialogFileSchema,
  exerciseFileSchema,
} from "../schemas/nkSchemas";

const dataDir = path.join(process.cwd(), "data");

// helper pour lire un JSON si le fichier existe
function readJsonIfExists(filePath: string): unknown | null {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

const weeks = fs
  .readdirSync(dataDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory() && /^week\d+$/i.test(dirent.name))
  .map((dirent) => dirent.name);

describe("NKAcademy data validation", () => {
  for (const weekFolder of weeks) {
    const weekPath = path.join(dataDir, weekFolder);

    it(`meta.json valid for ${weekFolder}`, () => {
      const metaPath = path.join(weekPath, "meta.json");
      const json = readJsonIfExists(metaPath);
      expect(json).not.toBeNull();
      const result = weekMetaSchema.safeParse(json);
      if (!result.success) {
        console.error(`❌ Errors meta ${weekFolder}`, result.error.format());
      }
      expect(result.success).toBe(true);
    });

    it(`sentences.json valid for ${weekFolder}`, () => {
      const filePath = path.join(weekPath, "sentences.json");
      const json = readJsonIfExists(filePath);
      expect(json).not.toBeNull();
      const result = sentenceFileSchema.safeParse(json);
      if (!result.success) {
        console.error(
          `❌ Errors sentences ${weekFolder}`,
          result.error.format(),
        );
      }
      expect(result.success).toBe(true);
    });

    it(`chunks.json valid for ${weekFolder}`, () => {
      const filePath = path.join(weekPath, "chunks.json");
      const json = readJsonIfExists(filePath);
      expect(json).not.toBeNull();
      const result = chunkFileSchema.safeParse(json);
      if (!result.success) {
        console.error(`❌ Errors chunks ${weekFolder}`, result.error.format());
      }
      expect(result.success).toBe(true);
    });

    it(`dialogs.json valid for ${weekFolder}`, () => {
      const filePath = path.join(weekPath, "dialogs.json");
      const json = readJsonIfExists(filePath);
      expect(json).not.toBeNull();
      const result = dialogFileSchema.safeParse(json);
      if (!result.success) {
        console.error(`❌ Errors dialogs ${weekFolder}`, result.error.format());
      }
      expect(result.success).toBe(true);
    });

    it(`exercises.json valid for ${weekFolder} (if present)`, () => {
      const filePath = path.join(weekPath, "exercises.json");
      const json = readJsonIfExists(filePath);
      if (json === null) {
        // certaines weeks n'auront peut-être pas encore d'exos
        return;
      }
      const result = exerciseFileSchema.safeParse(json);
      if (!result.success) {
        console.error(
          `❌ Errors exercises ${weekFolder}`,
          result.error.format(),
        );
      }
      expect(result.success).toBe(true);
    });
  }
});
