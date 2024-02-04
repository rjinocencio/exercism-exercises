export class DnDCharacter {
  public strength: number = DnDCharacter.generateAbilityScore();
  public dexterity: number = DnDCharacter.generateAbilityScore();
  public constitution: number = DnDCharacter.generateAbilityScore();
  public intelligence: number = DnDCharacter.generateAbilityScore();
  public wisdom: number = DnDCharacter.generateAbilityScore();
  public charisma: number = DnDCharacter.generateAbilityScore();
  public hitpoints: number =
    10 + DnDCharacter.getModifierFor(this.constitution);

  public static generateAbilityScore(): number {
    const diceRoll = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1
    );
    const minStat = Math.min(...diceRoll);
    const stats = diceRoll.filter((num) => num !== minStat);
    return stats.reduce((sum, stat) => {
      return (sum += stat);
    }, 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
