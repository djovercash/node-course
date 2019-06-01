// HBS allows you to use partials which is reusable code to make things more uniform.
// You should keep your templates/views that are called with render in a seperate director
// from your partials. Also, you must require 'HBS' to build partials (using registerPartials());

// Also, when you build new templates, nodemon does not restart. Therefore you should use the
// following cli command: "nodemon src/app.js -e js, hbs" where -e flag means extensions and
// the file types/extensions after are what nodemon should watch.
const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const publicPath = express.static(path.join(__dirname, '../public'));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
app.use(publicPath);

app.get('', (req, res) => {
	res.render('index', {
		title: 'Weather App',
		name: 'Drew Overcash'
	});
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'About Page',
		name: 'Drew Overcash',
		imgSrc: '/images/Bianca.jpeg',
		altText: 'Bianca del Rio'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'Help Page',
		name: 'Drew Overcash'
	})
})

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It\'s 50 degrees',
		location: 'New York, New York'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
