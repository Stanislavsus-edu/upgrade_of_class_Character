import Upgrade from './upgrade.js';

export default class Magician extends Upgrade {
	constructor(name) {
		super(name, 'Magician');
		this.attack = 10;
		this.defence = 40;
	}
}