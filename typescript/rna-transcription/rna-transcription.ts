type DNA = "C" | "G" | "A" | "T";
type RNA = "G" | "C" | "U" | "A";

type TranscriptionMap = {
  [key in DNA]: RNA;
};

export const transcription: TranscriptionMap = {
  C: "G",
  G: "C",
  A: "U",
  T: "A",
};

export class RNASequence {
  private dnaSeq: string;

  constructor(dnaSeq: string) {
    this.dnaSeq = dnaSeq.toUpperCase();
  }
  transcribe = () => {
    let rnaSeq: string = "";
    for (const dna of this.dnaSeq) {
      if (!Object.keys(transcription).includes(dna))
        throw new Error("Invalid input DNA.");
      rnaSeq += transcription[dna as DNA];
    }
    return rnaSeq;
  };
}

export function toRna(dna: string) {
  return new RNASequence(dna).transcribe();
}
