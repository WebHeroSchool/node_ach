const { response } = require('express');
require('dotenv').config({path: '../.env'});

const http = require('http');

const port = process.env.PORT;

http.createServer((request, response)=>{
    
    switch(request.url){
        case('/home'):
            response.write('home page');
            break
        case ('/books'):
            response.write('Books page');
            break
        case ('/post_info'):
            request.pipe(process.stdout)
            response.end()
            break
        default:
            response.write('not found');
            break
    }
    response.end()
}).listen(port, (error) => {
    if (error) {
        console.log(error);
    }else {
        console.log('API running on localhost:' + port)
    }
    
})