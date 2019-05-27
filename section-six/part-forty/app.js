const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
	return console.log('Please provide a location.')
} else {
	geocode(address, (error, geocodeData) => {
		if (error) {
			return console.log(error);
		}

		forecast(geocodeData, (error, forcastData) => {
			if (error) {
				return console.log(error)
			}

			console.log('LOCATION: ', geocodeData.location)
			console.log('DATA: ', forcastData);
		})
	})
}
