const fs = require('fs');
//change to async
fs.readFile('./text.txt',(error, resp) => {
    if(error) throw error; 
    let count = resp.toString().replace(/[^a-zа-яё\s]/gi, "").replace(/\n\r/g, " ").replace("  ", "").split(" ")

    console.log("TEXT: "+resp.toString());
    console.log("Count: "+count.length);

});
