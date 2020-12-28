const module2 = require('./messenger-ee');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on(module2.MESSAGE_EVENT, ()=>{
    console.log("EVENT")
});
new module2.MyMessenger(myEmitter);
myEmitter.emit(module2.MESSAGE_EVENT);