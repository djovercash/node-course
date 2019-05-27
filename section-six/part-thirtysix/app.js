const request = require('request');
// const key = '';
// const url = `https://api.darksky.net/forecast/${key}/37.8267,-122.4233`;
//
// request({ url: url, json: true }, (error, res) => {
// 	if (error) {
// 		console.log('Unable to connect to weather service.');
// 	} else if (res.body.error) {
// 		console.log('Unable to find location.')
// 	} else {
// 		const temp = res.body.currently.temperature || 0;
// 		const precip = res.body.currently.precipProbability || 0;
// 		const dailySummary = res.body.daily.data[0].summary || '';
// 		console.log(`${dailySummary} It is currently ${temp} degrees out. There is a ${(precip * 100).toFixed(2)}% chance of rain.`)
// 	}
// })

const geocode = (location, callback) => {
	const geoKey = '';
	const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

	request( {url: `${geoUrl}${encodeURIComponent(location)}.json?access_token=${geoKey}&limit=1`, json: true }, (error, res) => {
		if (error) {
			callback('Unable to connect to geocoding service.');
		} else if (res.body.message === 'Not Found' || !res.body.features.length) {
			callback('Unable to find location.');
		} else {
			let coordinates = res.body.features[0].center || [];
			const data = {
				lat: coordinates[1],
				long: coordinates[0],
				location: res.body.features[0].place_name
			}
			callback(undefined, data);
		}
	})

}

// Common to show error and data for callbacks
geocode('New York', (error, data) => {
	console.log('ERROR: ', error);
	console.log('DATA: ', data)
})

// Common to show error and data for callbacks
geocode('Peoria', (error, data) => {
	console.log('ERROR: ', error);
	console.log('DATA: ', data)
})
