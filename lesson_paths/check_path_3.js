const path = require('path');
const fs = require('fs');
const filename = "text.txt";

const absolutePath = path.resolve(__dirname, filename);

console.log(absolutePath);
if (fs.existsSync(absolutePath)) {
    let text = fs.readFileSync(filename).toString();
    console.log(text);
}