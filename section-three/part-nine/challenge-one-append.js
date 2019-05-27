// Challenge: Append text to 'notes.txt'

// 1. Use appendFileSync() to appent to the file
// 2. Run the script
// 3. Check your work by opening the file.

const fs = require('fs');

fs.appendFileSync('notes.txt', ' This is challenge one!')
