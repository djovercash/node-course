const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk.white.inverse('HERE ARE YOUR NOTES: '));
	notes.forEach(note => console.log(`- ${note.title}`))
}

const addNote = (title, body) => {
	const notes = loadNotes();

	if (!notes.find(note => note.title === title)) {
		notes.push({
			title,
			body
		})
		saveNotes(notes);
		console.log(chalk.greenBright.inverse(`Note "${title}" added to list.`))
	} else {
		console.log(chalk.red.inverse(`Note "${title}" already exists. No note added to list.`));
	}
}

const removeNote = (title) => {
	const notes = loadNotes();
	const nonDuplicateNotes = notes.filter(note => note.title !== title);

	if (nonDuplicateNotes.length && (nonDuplicateNotes.length !== notes.length)) {
		saveNotes(nonDuplicateNotes);
		console.log(chalk.greenBright.inverse(`Note "${title}" was removed`))
	} else {
		console.log(chalk.red.inverse(`Note "${title}" did not exist!`));
	}
}

const saveNotes = (notesArr) => {
	fs.writeFileSync('notes.json', JSON.stringify(notesArr))
}

const loadNotes = () => {
	try {
		return JSON.parse(fs.readFileSync('notes.json').toString());
	} catch (e) {
		return [];
	}
}

const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find(note => note.title === title);

	if (note) {
		console.log(chalk.white.inverse(`Note: "${note.title}"`))
		console.log(note.body);
	} else {
		console.log(chalk.red.inverse(`Note "${title}" does not exist`))
	}
}

module.exports = {
	addNote,
	listNotes,
	readNote,
	removeNote
};
