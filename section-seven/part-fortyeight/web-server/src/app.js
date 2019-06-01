const path = require('path');
const express = require('express');

const app = express();
const publicPath = express.static(path.join(__dirname, '../public'));

// If you want to put things in a new directory rather than views, make the below
// and set it on line 12
const viewsPath = path.join(__dirname, '../templates');


// Setup HBS and views locations
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(publicPath);

app.get('', (req, res) => {
	res.render('index', {
		title: 'From dynamic index.html file: index.html',
		name: 'Drew Overcash'
	});
})

app.get('/about', (req, res) => {
	res.render('about', {
		title: 'From dynamic index.html file: about.html',
		imgSrc: '/images/Bianca.jpeg',
		altAlt: 'Bianca del Rio'
	})
})

app.get('/help', (req, res) => {
	res.render('help', {
		title: 'From dynamic index.html file: help.html'
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
