import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

interface Fighter extends SimpleFighter{
  defense: number;
  energy?: Energy;

  attack(enemy: SimpleFighter): void;
  special?(enemy: SimpleFighter): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): number;
}

export default Fighter;