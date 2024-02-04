const alphabet = "abcdefghijklmnopqrstuvwxyz";

export function isPangram(sentence: string): boolean {
  for (const letter of alphabet) {
    if (!sentence.toLowerCase().includes(letter)) return false;
  }
  return true;
}
