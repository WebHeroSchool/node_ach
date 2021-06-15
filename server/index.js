const { response } = require('express');
require('dotenv').config({path: '../.env'});

const http = require('http');
const winston = require('winston');

const port = process.env.PORT;

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'user-service'},
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error'}),
        new winston.transports.File({ filename: 'combined.log', maxsize: 500 }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}



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
        logger.error('Something went wrong! error: ' + error)
    }else {
        logger.info('API running on localhost:' + port)
    }
})