const commander = require('commander');
const check = require('./commands/check');

commander
	.command('price')
	.description('Check price of Coins')
	.option(
		'--coin <coin>',
		'Select specific Coin types [comma seprated]',
		'BTC,ETH,XRP,DOGE'
	)
	.option('--curr <currency>', 'Select a currency', 'INR')
	.action((options) => check.price(options));

commander.parse(process.argv);
