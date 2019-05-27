const express = require('express');

// Creating an instance of express. App is the naming convention
const app = express();

// App.get allows you to set your routes
// Takes to parameters: the route and a function (which takes the request and response)
app.get('', (req, res) => {
	res.send('Hello Express!');
});

app.get('/help', (req, res) => {
	res.send('Help Page');
});

app.get('/about', (req, res) => {
	res.send('About Page');
});

app.get('/weather', (req, res) => {
	res.send('Weather Page');
});

// This starts the server on a specific port.
app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
