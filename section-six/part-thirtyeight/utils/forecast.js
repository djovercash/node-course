const request = require('request');

// Fetch forecast
const forecast = (data, callback) => {
	const forecastKey = '';
	const forecastUrl = `https://api.darksky.net/forecast/${forecastKey}/`;

	request({ url: `${forecastUrl}${encodeURIComponent(`${data.lat}, ${data.long}`)}`, json: true}, (error, res) => {
		if (error) {
			callback('Unable to reach forecast service.');
		} else if (res.body.error) {
			callback('Unable to find location.');
		} else {
			const data = {
				temp: res.body.currently.temperature || 0,
				precip: res.body.currently.precipProbability || 0,
				dailySummary: res.body.daily.data[0].summary || ''
			};

			callback(undefined, data)
		}
	})

}

module.exports = forecast;
