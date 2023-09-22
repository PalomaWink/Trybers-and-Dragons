import Race from './Race';

class Orc extends Race {
  private static _orcInstance = 0;
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number, 
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._orcInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Orc._orcInstance;
  }
}

export default Orc;