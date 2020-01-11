
// var logger = require('./logger');
const logger = require('./logger');


// console.log(require);
console.log(logger);

logger('this message should be printed');

// logger = 1;

// the value of logger is overwritten
// so store the exported object to const

console.log(logger);

console.log(__filename);
console.log(__dirname)
// exports is reference to module.exports


