// fs = 'File System'. Best practice to use fs in naming convention.
const fs = require('fs');

// So writeFile and the writeFileSync methods are responsible for writing data to a file.
// If the file doesn't exist, it will be created.
// If the file does exist, its content will be overwritten with the new provided message.
fs.writeFileSync('notes.txt', 'My name is Drew.');
