const {Transform} = require('stream');

const to_upperCase = new Transform({
    transform(chunck, encoding, callback) {
        this.push(chunck.toString().toUpperCase())
        callback()
    }
});

process.stdin.pipe(to_upperCase).pipe(process.stdout)