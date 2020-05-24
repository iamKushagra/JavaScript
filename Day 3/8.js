var events = require('events');
var eventEmitter = new events.EventEmitter();

var handler = function(){
    console.log('It matched..!! Event is triggered');
}
eventEmitter.on('hello', handler)

eventEmitter.emit('hello');