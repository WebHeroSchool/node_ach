const fs = require('fs');

setInterval(()=>{
    try {
        fs.readFileSync(__dirname + 'lalala.txt')
    } catch(err) {
        console.log("Error:" + err);
    }
},1000)