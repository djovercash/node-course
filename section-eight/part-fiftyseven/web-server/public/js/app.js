console.log('Client Side JS')

fetch('http://localhost:3000/weather?address=boston')
	.then(res => res.json())
	.then(data => {
		if (data.error) {
			console.log('ERROR: ', data.error);
		} else {
			console.log('LOCATION: ', data.location);
			console.log('FORCAST: ', data.forcast);
		}
	});
