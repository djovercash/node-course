const fs = require('fs');

// const book = {
// 	title: 'Harry Potter',
// 	author: 'J.K. Rowling',
// }

// Returns a string
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// Returns a object
// const bookPARSE = JSON.parse(bookJSON)
// console.log(bookPARSE)
// console.log('TITLE: ', bookPARSE.title);
// console.log('AUTHOR: ', bookPARSE.author);
//
// fs.writeFileSync('1-json.txt', bookJSON);
// readFileSyce returns code as a binary buffer. Just set it toString() to fix it.
// const dataBuffer = fs.readFileSync('1-json.txt');
// const dataParse = dataBuffer.toString();
// const data = JSON.parse(dataParse)
// console.log('DATA BUFFER: ', data)


//CHALLENGE: Work with JSON and file system
//Starting Data: { "name": "Andrew", "planet": "Earth", "age": 27 }

// 1. Load and parse the JSON data
// 2. Change name and age property using your own info
// 3. Stringify the changed object and override the original data
// 4. Test your work by viewing data in JSON file

// STEP ONE
let data = JSON.parse(fs.readFileSync('1-json.txt').toString())
console.log('DATA: ', data)

// STEP TWO
data = {
	...data,
	name: 'Drew',
	age: 31
}
console.log('DATA: ', data)

// STEP THREE
fs.writeFileSync('1-json.txt', JSON.stringify(data))

// STEP FOUR AND YOUR DONE!
