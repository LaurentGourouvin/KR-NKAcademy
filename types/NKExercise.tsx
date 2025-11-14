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
