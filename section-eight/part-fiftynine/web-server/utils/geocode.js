const request = require('request');

// Fetch geocode information
const geocode = (location, callback) => {
	const geoKey = '';
	const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

	request( {url: `${geoUrl}${encodeURIComponent(location)}.json?access_token=${geoKey}&limit=1`, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to geocoding service.');
		} else if (body.message === 'Not Found' || !body.features.length) {
			callback('Unable to find location.');
		} else {
			let coordinates = body.features[0].center || [];
			const data = {
				lat: coordinates[1],
				long: coordinates[0],
				location: body.features[0].place_name
			}
			callback(undefined, data);
		}
	})
};

module.exports = geocode;
