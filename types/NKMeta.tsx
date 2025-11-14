export interface GrammarPoint {
  kr: string;
  fr: string;
  rom: string;
}

export interface VocabularyItem {
  kr: string;
  fr: string;
  rom: string;
}

export interface WeekMeta {
  week: number;
  title: string;
  theme: string;
  speechLevel: string;
  objectives: string[];
  grammarFocus: GrammarPoint[];
  vocabulary: VocabularyItem[];
  audioBasePath: string;
  notes: string;
}

export interface NKSentence {
  id: string;
  kr: string;
  rom: string;
  fr: string;
  audio: string;
  order: number;
  tags?: string[];
}

export interface SentenceFile {
  audioBasePath: string;
  sentences: NKSentence[];
}

export interface NKChunk {
  id: string;
  title: string;
  description: string;
  sentenceIds: string[];
  audio: string;
  order: number;
  level: string;
  tags?: string[];
}

export interface ChunkFile {
  audioBasePath: string;
  chunks: NKChunk[];
}

export interface NKDialogTurn {
  id: string;
  speaker: string;
  sentenceId?: string;
  kr: string;
  rom: string;
  fr: string;
  audio: string;
}

export interface NKDialog {
  id: string;
  title: string;
  speechLevel: string;
  level: string;
  tags?: string[];
  audioFull: string;
  turns: NKDialogTurn[];
}

export interface DialogFile {
  dialogs: NKDialog[];
}

export type NKExerciseType =
  | "vocab"
  | "grammar"
  | "listening"
  | "writing"
  | "transform";

export interface NKExerciseItem {
  id: string;
  prompt: string; // consigne spécifique à l’item
  sentenceId?: string; // lien vers une phrase existante éventuelle
  kr?: string;
  rom?: string;
  fr?: string;
  audio?: string;
  options?: string[]; // pour QCM
  answer?: string | string[]; // réponse attendue (texte)
}

export interface NKExercise {
  id: string;
  title: string;
  type: NKExerciseType;
  instructions: string; // consigne affichée dans l’UI
  items: NKExerciseItem[];
}

export interface ExerciseFile {
  audioBasePath: string;
  exercises: NKExercise[];
}
