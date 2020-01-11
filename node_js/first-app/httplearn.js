const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/learn'){
        let obj = {
            name: 'bishal gautam',
            msg: 'Hello World',
        }
        res.write(JSON.stringify(obj));
        res.end();
    }
})


server.listen(3000);

console.log('Listening on port 3000 .....')