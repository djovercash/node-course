const path = require('path');
const express = require('express');

const app = express();
const publicPath = express.static(path.join(__dirname, '../public'));

app.use(publicPath);

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It\'s 50 degrees',
		location: 'New York, New York'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
