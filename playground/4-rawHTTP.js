const https = require('https');
const url = `https://api.darksky.net/forecast/<KEY>/40, -73`;

const request = https.request(url, (res) => {
	let data = '';

	// .on Allows us to register a handle
	// chuck comes back as a buffer - must be string
	res.on('data', (chunk) => {
		data += chunk.toString();
	});

	res.on('end', () => {
		const body = JSON.parse(data)
		console.log('END: ', body)
	});
})

request.on('error', (error) => {
	console.log('ERROR: ', error);
})

request.end()
