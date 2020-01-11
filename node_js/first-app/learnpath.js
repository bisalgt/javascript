const path = require('path');

const pathObj = path.parse(__filename);

console.log(pathObj);

const os = require('os');

var osTotal = os.totalmem();

console.log(osTotal)