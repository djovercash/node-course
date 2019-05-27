// Last lesson we did a static website - not dynamic
// Now we're doing a dynamic website using a template engine called Handlebars
// Handlebars (package hbs) also lets you create code reused across pages
// Handlebars needs all html files to lives in a fold called "views"

const path = require('path');
const express = require('express');

const app = express();
const publicPath = express.static(path.join(__dirname, '../public'));

// .set allows you to set a value for a given express value (key, setting name, value)
app.set('view engine', 'hbs');
app.use(publicPath);

app.get('', (req, res) => {
	// .render allows us to render one of our hbs views (name of file, values to access)
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
