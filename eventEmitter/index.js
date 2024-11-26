const logEvent = require('./logEvent');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('log',(msg)=>{
    logEvent(msg);
})

myEmitter.emit('log','logEmitted');