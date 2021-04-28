const EventEmitter =require('events');

var url = 'fljfl';


class Logger extends EventEmitter{
    log(massage){    //how to define a method
        // send http request
        console.log(massage+' el ra7ma');
        //Raise an event
        this.emit('messageLogged', {id: 1,url: 'http://'});
        /*this refers to an object that takes in all the 
        functionality of EventEmitter class*/
    }

}




module.exports = logger;