const { response } = require('express');
const http = require('http');

http.createServer((request, response)=>{
    
    switch(request.url){
        case('/home'):
            response.write('home page');
            break
        case ('/books'):
            response.write('Books page');
            break
        default:
            response.write('not found');
            break
    }
    response.end()
}).listen(3000, (error) => {
    if (error) {
        console.log(error);
    }else {
        console.log('API running on localhost:3000')
    }
    
})