/* import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races'; */

class Character {
  /* private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(
    name: string, 
    nameRace: string, 
    dexterityRace: number,
    nameArchetype: string,
  ) {
    this._name = name;
    this._dexterity = Math.random() 
      * (Math.floor(10) - Math.ceil(1) + Math.ceil(1));
    this._race = new Elf(nameRace, dexterityRace);
    this._archetype = new Mage(nameArchetype);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = Math.random() 
    * (Math.floor(10) - Math.ceil(1) + Math.ceil(1));
    this._strength = Math.random() 
    * (Math.floor(10) - Math.ceil(1) + Math.ceil(1));
  } */

}

export default Character;