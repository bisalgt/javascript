const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.addListener('login', (eventArg) =>{
    console.log('Logged in successfully by, ', eventArg)
});


emitter.emit('login', {name: 'Bishal'});