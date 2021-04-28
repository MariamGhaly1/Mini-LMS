
//console.log(window);     in node we don't have document objects or window  those works with browsers 
// in node we have other obects thaat works with files, OS, network


// const logger = require('./logger');
// console.log(logger.loggerfunc('ya allah '));


// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(__filename);
// console.log(pathObj);


// //os module
// const os = require('os');
// var totalMem = os.totalmem();
// var freeMem = os.freemem();
// //normal concatenation
// console.log('Total memory: ' + totalMem );
// //template string
// //ES6 / ES2015 : ECMAScript 6 
// console.log(`Total memory: ${totalMem}`);
// console.log(`Free memory: ${f reeMem}`);
// //js on a browser works only on the document or window objects
// //node works on the server so we can use it to build a server 
// //that works with http requests on a certain port


// //File System Module
// //Async == nonblocking
// //a node process has a single thread so use ASync. method

// const fs = require('fs');
// // const files = fs.readdirSync('./');  //   ./ ==current dir
// // console.log(files);

// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Results' ,files);
// })


//events module
const EventEmitter = require('events');      // it returns a class
const emitter = new EventEmitter();      //creating an object from this class
/*register a listener*/
emitter.on('messageLoggeed', function(arg){    //e, eventArg
    console.log('Listener called', arg);
});    //(name of the event, callback function or the actual listener)                
//on = addlistener

/*raise an event*/
// making a noise, produce - signaling 
//the event must come after creating a listener to be detected
emitter.emit('messageLogged', 1,'url');   //(eventname, id, url)
// or better emitter.emit('messageLogged', {id: 1,url: 'http://'});
//{id: 1,url: 'http://'}  is called event arguments

//arrow function
/* (arg) => {    //e, eventArg
    console.log('Listener called', arg);
} */







