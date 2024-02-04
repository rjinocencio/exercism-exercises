export class LeapYearChecker {
  private year: number;
  constructor(year: number) {
    this.year = year;
  }

  check = (): boolean => {
    if (this.year % 400 == 0) return true;
    else if (this.year % 4 === 0 && this.year % 100 !== 0) return true;
    return false;
  };
}

export function isLeap(year: number): boolean {
  return new LeapYearChecker(year).check();
}
