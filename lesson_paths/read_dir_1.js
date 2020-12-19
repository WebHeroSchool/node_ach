const { dir } = require('console');
const fs = require('fs');

const dirs = fs.readdirSync('./').sort();

console.log("files into current directory: " + dirs);