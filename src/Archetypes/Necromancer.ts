import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _necromancerInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._necromancerInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._necromancerInstance;  
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;