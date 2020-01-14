var http = require('http');
var msg = require('./myfirstmodule');
var imported_msg = msg['msg']
var imported_msg2 = msg

var server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type': 'text/html'});
    if (req.url === '/msg'){
        res.write('This is the /msg route');
    } else{
        res.write('Other route');
    }
    res.end();
    console.log(msg)
    // res.write('The date and time are currently  : ', msg['msg']);
    // res.end()
})

console.log(imported_msg)
console.log(imported_msg2)
console.log(typeof(msg))
server.listen(8080);
console.log('listening on port 8080 ...' );


var server2 = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.writeHead(200, {'Content-type':'text/html'});
        res.write('<h1>Home directory called.</h1>');
        // req.setMaxListeners(1);
        // console.log(req.client);
        console.log('-----------------------------------------------------------------------');
        // console.log(res);\\\\\\\\\\\\\
        res.end();
    } else if(req.url === '/api/learn'){
        res.write('<h1> api/learn called</h1>');
        res.end();
    }
})

server2.listen(3000);
console.log('Listening on port 3000 too .....')
setTimeout(() =>{
    console.log('Five seconds have passed!')
}, 5000);

// setInterval(() => {
//     console.log('Five seconds have passed again ')
// }, 5000);