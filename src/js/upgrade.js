import Character from './app';

export default class Upgrade extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
  }

  get attack() {
    let New_Attack =  Math.round(this.setAttack * (1.1 - 0.1 * this.distance));
    if (this.setStoned) {
      New_Attack = Math.round(New_Attack - Math.log2(this.distance) * 5);
      if (New_Attack < 0) {
        return 0;
      }
      return New_Attack;
    }
    return New_Attack;
  }

  set attack(damage) {
    this.setAttack = damage;
  }

  get stoned() {
    return this.setStoned;
  }

  set stoned(YesOrNo) {
    this.setStoned = YesOrNo;
  }
}