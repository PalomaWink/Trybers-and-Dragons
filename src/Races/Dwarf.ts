import Race from './Race';

class Dwarf extends Race {
  private static _dwarfInstance = 0;
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number, 
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._dwarfInstance;
  }
}

export default Dwarf;