fs = require('fs');

const read_file = fs.createReadStream(__dirname + '/text.txt', {
    encoding: 'utf-8',
    highWaterMark: 20
});
const write_file = fs.createWriteStream(__dirname + '/copy_text.txt');

read_file.on('error', err => {
    console.log('error reading file:' + err);
});

write_file.on('error', err => {
    console.log('error writing file:' + err)
})

read_file.pipe(write_file)