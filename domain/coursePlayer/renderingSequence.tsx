import ChunkScreen from '@/components/coursePlayer/ChunkScreen';
import DialogScreen from '@/components/coursePlayer/DialogScreen';
import GrammarScreen from '@/components/coursePlayer/GrammarScreen';
import SentenceScreen from '@/components/coursePlayer/SentenceScreen';
import VocabularyScreen from '@/components/coursePlayer/VocabularyScreen';
import { ChunkFile } from '@/types/NKChunk';
import { DialogFile } from '@/types/NKDialog';
import { ExerciseFile } from '@/types/NKExercise';
import { SentenceFile } from '@/types/NkSentence';
import { SequenceItem, WeekMeta } from '@/types/NKWeekMeta';

type SequenceData = {
    chunks: ChunkFile;
    dialogs: DialogFile;
    sentences: SentenceFile;
    exercises: ExerciseFile;
    meta: WeekMeta;
};

export function renderSequence(section: SequenceItem, sequence: SequenceData) {
    console.log(sequence);
    switch (section.type) {
        case 'dialog':
            return <DialogScreen {...sequence.dialogs} />;
        case 'chunks':
            return <ChunkScreen chunks={sequence.chunks} sentences={sequence.sentences} />;
        case 'sentences':
            return <SentenceScreen />;
        case 'vocabulary':
            return <VocabularyScreen {...sequence.meta} />;
        case 'grammar':
            return <GrammarScreen {...sequence.meta} />;
        default:
            null;
    }
}
