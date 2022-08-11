// In the package.json file add "type" : "module", Adding this enables ES6 modules
// import validator from 'validator';
import chalk from 'chalk';
import getNotes from './notes.js';

const msg = getNotes();
console.log(msg);
// console.log(validator.isEmail('andrew@example.com'));
// console.log(validator.isURL('www.google.com'));

// console.log(chalk.bgBlack.green.bold('Success!'));
console.log(chalk.green.inverse.bold.underline('Success!'));
