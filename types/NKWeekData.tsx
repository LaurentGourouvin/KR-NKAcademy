import { WeekMeta } from "./NKWeekMeta";
import { DialogFile } from "./NKDialog";
import { SentenceFile } from "./NkSentence";
import { ChunkFile } from "./NKChunk";
import { ExerciseFile } from "./NKExercise";

export interface WeekData {
  meta: WeekMeta;
  dialogs: DialogFile;
  sentences: SentenceFile;
  chunks: ChunkFile;
  exercises: ExerciseFile;
}
