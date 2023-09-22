import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private static _rangerInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._rangerInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._rangerInstance;  
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;