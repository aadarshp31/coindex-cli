const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('ansi-colors');
const { isRequired } = require('../utils/validation');

const key = {
	async set() {
		const keyManager = new KeyManager();
		const input = await inquirer.prompt([
			{
				type: 'input',
				name: 'apiKey',
				message: colors.bold('Enter API key ') + 'https://nomics.com',
				validate: isRequired,
			},
		]);

		const apiKey = keyManager.setKey(input.apiKey);

		if (apiKey) {
			console.log(colors.bold.blue('API key set!'));
		}
	},
	async show() {
		try {
			const keyManager = new KeyManager();
			const apiKey = keyManager.getKey();
			console.log(colors.bold('Current API Key: ') + colors.bold.cyan(apiKey));
		} catch (error) {
			console.log(colors.bold.red(error.message));
			const input = await inquirer.prompt([
				{
					type: 'confirm',
					name: 'consent',
					message: colors.bold.blue('Do you want to set a new API Key now?'),
					default: true,
				},
			]);

			if (!input.consent) {
				return;
			}
			this.set().then(() => this.show());
			return;
		}
	},
	remove() {
		const keyManager = new KeyManager();
		try {
			keyManager.deleteKey();
			console.log(colors.bold('API Key deleted successfully!'));
		} catch (error) {
			console.log(colors.bold.red(error.message));
		}
	},
};

module.exports = key;
