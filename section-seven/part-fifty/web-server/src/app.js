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

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Drew Overcash',
		error: 'Help article not found.'
	});
});

// Set up a 404 page with a wildcard
app.get('*', (req, res) => {
	res.render( '404', {
		title: '404 page',
		name: 'Drew Overcash',
		error: 'Page not found.'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
