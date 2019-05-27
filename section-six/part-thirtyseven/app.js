const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

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

const chicago = {
	lat: '40.6939',
	long: '-89.5891'
}

const newyork = {
	lat: '40.7648',
	long: '-73.9808'
}

forecast(chicago, (error, data) => {
	console.log('ERROR: ', error);
	console.log('DATA: ', data)
})

forecast(newyork, (error, data) => {
	console.log('ERROR: ', error);
	console.log('DATA: ', data)
})
