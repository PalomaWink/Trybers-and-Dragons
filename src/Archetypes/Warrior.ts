import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _warriorInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._warriorInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._warriorInstance;  
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;