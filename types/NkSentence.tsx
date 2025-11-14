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
