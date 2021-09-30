const { default: axios } = require('axios');
const colors = require('ansi-colors');

class NomicsAPI {
	constructor(apiKey) {
		this.apiKey = apiKey;
		this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker';
	}

	async getPriceDataOutput(coinOption, currOption, perPage = 100, pageNo = 1) {
		const currencyFormatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: currOption,
		});

		try {
			const res = await axios.get(
				`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}&per-page=${perPage}&page=${pageNo}`
			);
			let output = '';
			res.data.forEach((coin) => {
				output += colors.bold(
					`Coin: ${colors.yellow(coin.symbol)} (${
						coin.name
					}) | Price: ${colors.green(
						currencyFormatter.format(coin.price)
					)} | Rank: ${colors.blue(coin.rank)} \n`
				);
			});
			return output;
		} catch (error) {
			this.handleError(error);
		}
	}

	handleError(error) {
    if(!error.response){
      throw new Error('Unable to contact Nomics API service. Please check the internet connection');
    }
		switch (error.response?.status) {
			case 401:
				throw new Error(
					'Your API key is invalid! - Get one from https://nomics.com'
				);
			case 404:
				throw new Error('API is not responding');
			default:
				throw error;
		}
	}
}

module.exports = NomicsAPI;
