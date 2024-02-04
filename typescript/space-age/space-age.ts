export const EARTH_YEAR = 31557600;

type Planet =
  | "mercury"
  | "venus"
  | "earth"
  | "mars"
  | "jupiter"
  | "saturn"
  | "uranus"
  | "neptune";

type Mapper = {
  [key in Planet]: number;
};

const PlanetRatio: Mapper = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export class AgeCalculator {
  private planet: Planet;
  private seconds: number;

  constructor(planet: Planet, seconds: number) {
    this.planet = planet;
    this.seconds = seconds;
  }

  calculate = (): number => {
    return +(this.seconds / EARTH_YEAR / PlanetRatio[this.planet]).toFixed(2);
  };
}

export function age(planet: Planet, seconds: number): number {
  return new AgeCalculator(planet, seconds).calculate();
}
