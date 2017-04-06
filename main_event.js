var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('Listener listener one executed!');
}

var listener2 = function listener2() {
    console.log('Listener listener two executed!');
}

eventEmitter.addListener('connection', listener1);
//eventEmitter.on('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ": the number of listener connection events");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 is abandoned!");

eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ": the number of listener connection events");

console.log("Program ended!");
