// Require other files to be run in main app.js file.
const add = require('./utils');
const getNotes = require('./challenge.js');

const sum = add(-2, 4);
const notes = getNotes();
console.log(sum)
console.log(notes);
