const request = require('request');
const key = 'dedac8699c06b18d90be6c3fc8be82ee';
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233?units=si`;

request({ url: url, json: true }, (error, res) => {
	const temp = res.body.currently.temperature || 0;
	const precip = res.body.currently.precipProbability || 0;
	const dailySummary = res.body.daily.data[0].summary || '';
	console.log(`${dailySummary} It is currently ${temp} degrees out. There is a ${(precip * 100).toFixed(2)}% chance of rain.`)
})
