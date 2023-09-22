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

  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static override createdRacesInstances(): number {
    return this._halflingInstance;
  }
}

export default Halfling;