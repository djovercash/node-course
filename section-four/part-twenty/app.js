const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const { addNote, listNotes, readNote, removeNote } = require('./notes');

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
	handler(argv) {
		addNote(argv.title, argv.body)
	}
})

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'removes a note',
	builder: {
		title: {
			describe: 'Note Title',
			type: 'string',
			demandOption: true
		}
	},
	handler(argv) {
		removeNote(argv.title);
	}
})

// Create list command
yargs.command({
	command: 'list',
	describe: 'LISTING OF NOTES',
	handler() {
		listNotes();
	}
})

yargs.command({
	command: 'read',
	describe: 'READ A SPECIFIC NOTE',
	builder: {
		title: {
			describe: 'Note title for desired note',
			type: 'string',
			demandOption: true
		}
	},
	handler(argv) {
		readNote(argv.title)
	}
})

yargs.parse();
