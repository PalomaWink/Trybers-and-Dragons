import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _mageInstance = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mageInstance += 1;
  }

  public static createdArchetypeInstances(): number {
    return this._mageInstance;  
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;