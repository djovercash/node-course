const path = require('path');

const express = require('express');
const app = express();

// Complete path of the directory where the current file lives in.
// This would return: "...filepath.../web-server/src"
console.log('DIRECTORY NAME: ', __dirname);
// This would return: "...filepath.../web-server/public"
console.log('USING PATH: ', path.join(__dirname, '../public'))

// Serve up the directory using app.use (will explore in detail later)
const publicPath = express.static(path.join(__dirname, '../public'));
app.use(publicPath)

app.get('/weather', (req, res) => {
	res.send({
		forecast: 'It\'s 50 degrees',
		location: 'New York, New York'
	});
});

app.listen(3000, () => {
	console.log('Server is up on port 3000');
});
