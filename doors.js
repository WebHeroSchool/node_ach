const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let state = 'close';
myEmitter.on('open', ()=>{
    console.log("please open door!")
    if (state == 'close') {
        state = 'open';
        console.log("The door is opened");
        return;
    }
    if (state == 'block') {
        console.log("The door is blocked!Please unblock the door!")
    }
    if (state == 'open') {
        console.log("The door is already open!")
    }
});
myEmitter.on('close', ()=>{
    console.log("please close the door!")
    if (state == 'open') {
        state = 'close';
        console.log("The door is closed");
        return;
    }
    if (state == 'block') {
        console.log("The door is blocked!Please unblock the door!")
    }
    if (state == 'close') {
        console.log("The door is already closed!")
    }
});

myEmitter.on('block', ()=>{
    console.log("please block the door!")
    if (state == 'close') {
        state = 'block';
        console.log("The door is blocked");
        return;
    }
    if (state == 'open') {
        console.error("The door is opened!Please close the door!")
    }
    if (state == 'block') {
        console.log("The door is already blocked!")
    }
});
myEmitter.emit('open');
myEmitter.emit('block');
myEmitter.emit('close');