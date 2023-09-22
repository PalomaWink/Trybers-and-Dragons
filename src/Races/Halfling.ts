import Race from './Race';

class Halfling extends Race {
  private static _halflingInstance = 0;
  private _maxLifePoints: number;

  constructor(
    name: string, 
    dexterity: number, 
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._halflingInstance;
  }
}

export default Halfling;