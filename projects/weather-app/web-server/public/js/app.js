const weatherForm = document.querySelector('form.weather-input');
const userInput = weatherForm.querySelector('input');
const messageOne = document.querySelector('p#message-1');
const messageTwo = document.querySelector('p#message-2');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const location = userInput.value || '';

	messageOne.innerText = 'Loading...';
	messageTwo.innerText = '';

	fetch(`http://localhost:3000/weather?address=${location}`)
		.then(res => res.json())
		.then(data => {
			if (data.error) {
				messageOne.innerText = data.error;
			} else {
				messageOne.innerText = data.location;
				messageTwo.innerText = data.forecast;
			}
		});
});
