export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const prefix: { [value: number]: string } = {
  3: "kiloohms",
  6: "megaohms",
  9: "gigaohms",
};

export class Resistor {
  private colors: string[];
  private multiplier: string;

  constructor(colors: string[]) {
    if (colors.length < 3) throw new Error("Please provide at least 3 colors");
    this.colors = colors.slice(0, 2);
    this.multiplier = colors[2];
  }

  private value = (): number => {
    let numericValue = 0;
    this.colors.forEach((color: string) => {
      if (COLORS.indexOf(color) === -1)
        throw new Error(`${color} is an invalid color`);
      const code = COLORS.indexOf(color);
      numericValue = 10 * numericValue + code;
    });
    return numericValue;
  };

  decodedValue = (): string => {
    const code = COLORS.indexOf(this.multiplier);
    if (code === -1) throw new Error(`${this.multiplier} is an invalid color`);
    const fullValue = this.value() * 10 ** code;
    const prefixIndex = Object.keys(prefix)
      .sort((a, b) => +b - +a)
      .find((prefix) => fullValue >= 10 ** +prefix);

    console.log(prefixIndex);
    if (prefixIndex)
      return `${fullValue / Math.pow(10, +prefixIndex)} ${
        prefix[+prefixIndex]
      }`;
    return `${fullValue} ohms`;
  };
}

export function decodedResistorValue(colors: string[]) {
  return new Resistor(colors).decodedValue();
}
