const fs = require('fs');
const path = require('path');

const old_file = fs.readFileSync('./text.txt').toString().split('\n');
fs.watchFile(path.resolve('./text.txt'), (ev) => {
    const new_file = fs.readFileSync('./text.txt').toString().split('\n');
    let diff_file = old_file.filter(x => !new_file.includes(x));

console.log("Difference: "+diff_file);
})

