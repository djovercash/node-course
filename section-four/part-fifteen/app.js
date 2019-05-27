const chalk = require('chalk');
const getNotes = require('./notes');

// process is similar to window with a bunch of things on it to use from command line
// .argv = arguement vector
const command = process.argv[2];

if (command === 'add') {
	console.log('adding note')
} else if (command === 'remove') {
	console.log('removing note');
} else {
	console.log('not a valud command')
}

console.log(chalk.yellow(getNotes()));
