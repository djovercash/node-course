// This project was covered sections three and four. This is a final version of the project.
const yargs = require('yargs');
const { addNote, listNotes, readNote, removeNote } = require('./notes');

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
	describe: 'lists all notes',
	handler() {
		listNotes();
	}
})

yargs.command({
	command: 'read',
	describe: 'prints out a specific note',
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
