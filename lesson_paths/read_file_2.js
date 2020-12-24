const fs = require('fs');

const test = fs.readFileSync('./text.txt');
let count = test.toString().replace(/[^a-zа-яё\s]/gi, "").replace(/\n\r/g, " ").replace("  ", "").split(" ")

console.log("TEXT: "+test.toString());
console.log("Count: "+count.length);
