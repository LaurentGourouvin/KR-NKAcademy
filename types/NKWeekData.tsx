import { WeekMeta } from "./NKWeekMeta";
import { DialogFile } from "./NKDialog";
import { SentenceFile } from "./NkSentence";
import { ChunkFile } from "./NKChunk";
import { ExerciseFile } from "./NKExercice";

export interface WeekData {
  meta: WeekMeta;
  dialogs: DialogFile;
  sentences: SentenceFile;
  chunks: ChunkFile;
  exercices: ExerciseFile;
}
