import type { SequenceItem } from '@/types/NKWeekMeta';

export const SECTION_ANCHORS: Record<SequenceItem['type'], string> = {
    dialog: 'dialog',
    chunks: 'chunks',
    sentences: 'sentences',
    exercises: 'exercises',
    vocabulary: 'Vocabulaire',
    grammar: 'Grammaire',
};
