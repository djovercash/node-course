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
	if (!req.query.address) {
		return res.send({
			error: 'You must provide an address.',
		});
	};

	res.send({
		forecast: 'It\'s 50 degrees',
		location: `${req.query.address}`,
	});
});

// Can not response twice. Can only respond once.
app.get('/products', (req, res) => {
	if (!req.query.search) {
		return res.send({
			error: 'You must provide a search term.',
		});
	}

	console.log(req.query)
	res.send({
		products: [],
	});
});

app.get('/help/*', (req, res) => {
	res.render('404', {
		title: '404',
		name: 'Drew Overcash',
		error: 'Help article not found.'
	});
});

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
