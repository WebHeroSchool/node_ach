const fs = require('fs');

const file1 = fs.readFileSync('./text.txt').toString().split('\n');
const file2 = fs.readFileSync('./text2.txt').toString().split('\n');

let diff_file_1 = file1.filter(x => !file2.includes(x));
let diff_file_2 = file2.filter(x => !file1.includes(x));
for(let ind=0;ind<diff_file_1.length;ind++) {
    console.log(diff_file_1[ind]+' --- '+ diff_file_2[ind]);
}