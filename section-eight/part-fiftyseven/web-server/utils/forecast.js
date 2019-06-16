const request = require('request');

// Fetch forecast
const forecast = ({ lat = '', long = '' } = {}, callback) => {
	const forecastKey = '';
	const forecastUrl = `https://api.darksky.net/forecast/${forecastKey}/`;

	request({ url: `${forecastUrl}${encodeURIComponent(`${lat}, ${long}`)}`, json: true}, (error, { body }) => {
		if (error) {
			callback('Unable to reach forecast service.');
		} else if (body.error) {
			callback('Unable to find location.');
		} else {
			const data = {
				temp: body.currently.temperature || 0,
				precip: body.currently.precipProbability || 0,
				dailySummary: body.daily.data[0].summary || ''
			};

			callback(undefined, data)
		}
	})

}

module.exports = forecast;
