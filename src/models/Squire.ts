import { Character } from './character';
import { Fighter } from './fighters';

export class Squire extends Character {
  constructor(
    characterName: string,
    family: string,
    age: number,
    public characterServed: Fighter,
    public gradeOfServe: number
  ) {
    super(characterName, family, age);
  }

  greeting() {
    return `Soy un loser`;
  }
}
