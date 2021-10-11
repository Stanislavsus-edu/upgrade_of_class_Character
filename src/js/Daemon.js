import Upgrade from './upgrade.js';

export default class Daemon extends Upgrade {
	constructor(name) {
		super(name, 'Daemon');
		this.attack = 10;
		this.defence = 40;
	}
}