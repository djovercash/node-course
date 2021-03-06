const request = require('request');
const key = '';
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233?units=si`;

const geoKey = '';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

request({ url: url, json: true }, (error, res) => {
	const temp = res.body.currently.temperature || 0;
	const precip = res.body.currently.precipProbability || 0;
	const dailySummary = res.body.daily.data[0].summary || '';
	console.log(`${dailySummary} It is currently ${temp} degrees out. There is a ${(precip * 100).toFixed(2)}% chance of rain.`)
})

request({ url: `${geoUrl}Los%20Angeles.json?access_token=${geoKey}&limit=1`, json: true }, (error, res) => {
	let coordinates = res.body.features[0].center || [];
	let lat = coordinates[1];
	let long = coordinates[0];
	console.log(`LAT: ${lat}`);
	console.log(`LONG: ${long}`);
})
