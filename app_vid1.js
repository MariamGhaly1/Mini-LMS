const http = require('http');

const server =  http.createServer((req,res)=>{
    if (req.url === '/')
    {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses')
    {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
}); 
//server is an eventEmitter

// server.on('connection', (socket)=>{
//    console.log('New connection...')
// })


server.listen(3000);

console.log('Listening on port 3000...');

/* everytime there is a new connection or request
this server raises an event*/


//opening browser  localhost:3000  an new connection is made


