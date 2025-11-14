export interface NKDialog {
  id: string;
  title: string;
  speechLevel: string;
  level: string;
  tags?: string[];
  audioFull: string;
  turns: NKDialogTurn[];
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

export interface DialogFile {
  dialogs: NKDialog[];
}
