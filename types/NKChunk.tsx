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
