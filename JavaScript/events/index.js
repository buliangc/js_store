var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('say', function(name) {
    console.log('Hello',name);
})
eventEmitter.on('say', function(name) {
    console.log('Hello',name);
})

eventEmitter.emit('say','Jonh');