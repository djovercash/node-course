const fs = require('fs');

function getNotes() {
	return 'Your notes...'
}

function addNote(title, body) {
	const notes = loadNotes();
	const duplicateNotes = notes.filter(note => {
		return note.title === title;
	});

	if (!duplicateNotes.length) {
		notes.push({
			title,
			body
		})
		saveNotes(notes);
		console.log('New note added to list.')
	} else {
		console.log('This note already exists. Write new note.')
	}
}

function saveNotes(notesArr) {
	fs.writeFileSync('notes.json', JSON.stringify(notesArr))
}

function loadNotes() {
	try {
		return JSON.parse(fs.readFileSync('notes.json').toString());
	} catch (e) {
		return [];
	}
}

module.exports = {
	addNote,
	getNotes
};
