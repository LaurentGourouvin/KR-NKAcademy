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
