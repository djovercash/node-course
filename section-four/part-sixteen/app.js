const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'adds a new note',
	handler: function () {
		console.log('ADDING A NEW NOTE')
	}
})

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'removes a note',
	handler: function() {
		console.log('REMOVING A NOTE')
	}
})

// Create list command
yargs.command({
	command: 'list',
	describe: 'LISTING OF NOTES',
	handler: function() {
		getNotes();
	}
})

yargs.command({
	command: 'read',
	describe: 'READ A SPECIFIC NOTE',
	handler: function() {
		console.log('Here\'s your specific note')
	}
})

console.log(yargs.argv)

// const command = process.argv[2];
//
// if (command === 'add') {
// 	console.log('adding note')
// } else if (command === 'remove') {
// 	console.log('removing note');
// } else {
// 	console.log('not a valud command')
// }
// 
// console.log(chalk.yellow(getNotes()));
