const EventEmitter =require('events');
const emitter = new EventEmitter();

//registering a listener 
emitter.on('logging', (arg)=>{
    console.log('Listener called', arg);
});


//raising logging event 
emitter.emit('logging', {data: 'message'});