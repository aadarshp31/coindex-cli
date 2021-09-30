const NomicsAPI = require('../lib/api/NomicsAPI');
const KeyManager = require('../lib/KeyManager');
const colors = require('ansi-colors');

const check = {
	async price(options) {
		try {
      const keyManager = new KeyManager();
			const apiKey = keyManager.getKey();
      const nomicsAPI = new NomicsAPI(apiKey);
			const output = await nomicsAPI.getPriceDataOutput(options.coin, options.curr);
			console.log(output);
		} catch (error) {
			console.error(colors.bold.red(error.message));
		}
	},
};

module.exports = check;
