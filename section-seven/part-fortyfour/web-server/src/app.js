const express = require('express');
const app = express();

// .send can send back html
// .send can send back json
// .send can send text as innerText to the body element
app.get('', (req, res) => {
	res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
	res.send({
		name: 'Andrew',
		age: 27
	});
});

app.get('/about', (req, res) => {
	res.send('<h1>About</h1>');
});

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It\'s 50 degrees',
		location: 'New York, New York'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
