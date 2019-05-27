// NPM Modules
// npm init
// JSON - Javascript Object notation

const validator = require('validator');
console.log(validator.isEmail('drewovercash@example.com')); //==> true
console.log(validator.isEmail('example.com')); // ==> false

console.log(validator.isURL('https://www.drewovercash.com')) // ==> true
console.log(validator.isURL('htp:/yasqueen.com')); // ==> false
