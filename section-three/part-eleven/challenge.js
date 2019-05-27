// Challenge: Import and use Chalk node module

// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js (for this challenge we're going to do it here)
// 3. Use it to print "Success!" in green
// 4. Test your work

// Bonus: Make text bold or inversed

const chalk = require('chalk');
console.log(chalk.green('Success!'))
console.log(chalk.green.bold('Success in Bold!'))
console.log(chalk.green.bold.inverse('Success in Bold and Inversed!'))
