const fs = require('fs');

new Promise(resolve => {
    fs.readFile('./text.txt', ((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        resolve(data)
    }));
}).then(data => {

    fs.writeFile("text" + '.exmaple', data.toString(), ((err) => {
        if (err) {
            console.error(err);
            return;
        }
        setTimeout(() => {
            console.log('success');
        }, 300)
    }));

});