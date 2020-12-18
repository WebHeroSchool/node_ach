const fs = require('fs');

const test = fs.readFileSync('./text.txt');

console.log(test.toString());
