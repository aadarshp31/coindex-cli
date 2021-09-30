const ConfigStore = require('conf');
const pkg = require('../../package.json');

class KeyManager {
	constructor() {
		this.conf = new ConfigStore(pkg.name);
	}

	setKey(key) {
		this.conf.set('apiKey', key);
		return key;
	}

	getKey() {
		let key = this.conf.get('apiKey');
		if (!key) {
			throw new Error('No API key found! Get a key at https://nomics.com');
		}
		return key;
	}

	deleteKey() {
		let key = this.conf.get('apiKey');
		if (!key) {
			throw new Error('No API key found! Get a key at https://nomics.com');
		}
		this.conf.delete('apiKey');
		return;
	}
}

module.exports = KeyManager;
