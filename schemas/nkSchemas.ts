import { z } from "zod";

export const grammarPointSchema = z.object({
  kr: z.string(),
  fr: z.string(),
  rom: z.string(),
});

export const vocabularyItemSchema = z.object({
  kr: z.string(),
  fr: z.string(),
  rom: z.string(),
});

export const weekMetaSchema = z.object({
  week: z.number(),
  title: z.string(),
  theme: z.string(),
  speechLevel: z.string(),
  objectives: z.array(z.string()),
  grammarFocus: z.array(grammarPointSchema),
  vocabulary: z.array(vocabularyItemSchema),
  audioBasePath: z.string(),
  notes: z.string(),
});

// ---------- Sentences ----------

export const nkSentenceSchema = z.object({
  id: z.string(),
  kr: z.string(),
  rom: z.string(),
  fr: z.string(),
  audio: z.string(),
  order: z.number(),
  tags: z.array(z.string()).optional(),
});

export const sentenceFileSchema = z.object({
  audioBasePath: z.string(),
  sentences: z.array(nkSentenceSchema),
});

// ---------- Chunks ----------

export const nkChunkSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  sentenceIds: z.array(z.string()),
  audio: z.string(),
  order: z.number(),
  level: z.string(),
  tags: z.array(z.string()).optional(),
});

export const chunkFileSchema = z.object({
  audioBasePath: z.string(),
  chunks: z.array(nkChunkSchema),
});

// ---------- Dialogs ----------

export const nkDialogTurnSchema = z.object({
  id: z.string(),
  speaker: z.string(),
  sentenceId: z.string().optional(),
  kr: z.string(),
  rom: z.string(),
  fr: z.string(),
  audio: z.string(),
});

export const nkDialogSchema = z.object({
  id: z.string(),
  title: z.string(),
  speechLevel: z.string(),
  level: z.string(),
  tags: z.array(z.string()).optional(),
  audioFull: z.string(),
  turns: z.array(nkDialogTurnSchema),
});

export const dialogFileSchema = z.object({
  dialogs: z.array(nkDialogSchema),
});

// ---------- Exercises ----------

export const nkExerciseTypeSchema = z.enum([
  "vocab",
  "grammar",
  "listening",
  "writing",
  "transform",
]);

export const nkExerciseItemSchema = z.object({
  id: z.string(),
  prompt: z.string(),
  sentenceId: z.string().optional(),
  kr: z.string().optional(),
  rom: z.string().optional(),
  fr: z.string().optional(),
  audio: z.string().optional(),
  options: z.array(z.string()).optional(),
  answer: z.union([z.string(), z.array(z.string())]).optional(),
});

export const nkExerciseSchema = z.object({
  id: z.string(),
  title: z.string(),
  type: nkExerciseTypeSchema,
  instructions: z.string(),
  items: z.array(nkExerciseItemSchema),
});

export const exerciseFileSchema = z.object({
  audioBasePath: z.string(),
  exercises: z.array(nkExerciseSchema),
});

export const WeekOverviewSchema = z.object({
  week: z.number().int().min(1).max(52),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  difficulty: z.string().min(1),
  audioBasePath: z.string().min(1),
  tooltip: z.string().min(1),
  image: z.string().min(1).optional(),
});

export const weekOverviewFileSchema = z.object({
  weeks: z.array(WeekOverviewSchema).min(1),
});
