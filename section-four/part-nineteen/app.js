const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, getNotes } = require('./notes');

// customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
	command: 'add',
	describe: 'adds a new note',
	builder: {
		title: {
			describe: 'Note Title',
			type: 'string',
			demandOption: true
		},
		body: {
			describe: 'Note Body',
			type: 'string',
			demandOption: true
		}
	},
	handler: function (argv) {
		addNote(argv.title, argv.body)
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
		console.log(getNotes());
	}
})

yargs.command({
	command: 'read',
	describe: 'READ A SPECIFIC NOTE',
	handler: function() {
		console.log('Here\'s your specific note')
	}
})

yargs.parse();
// console.log(yargs.argv)
