console.log('Client Side JS')

const weatherForm = document.querySelector('form.weather-input');
const userInput = weatherForm.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const location = userInput.value || '';

	fetch(`http://localhost:3000/weather?address=${location}`)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				console.log('ERROR: ', data.error);
			} else {
				console.log('LOCATION: ', data.location);
				console.log('FORCAST: ', data.forecast);
			}
		});
});
