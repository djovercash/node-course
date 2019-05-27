const request = require('request');
const key = '';
const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;

request(url, (error, res) => {
	const data = JSON.parse(res.body)
	console.log('DATA: ', data.currently);
})
