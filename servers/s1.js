const http = require('http');

const server = http.createServer((req, res) =>{
    console.log('jajajajja');
    res.end('hi world');
})

const  serverPort = 3002

server.listen(serverPort, () =>{
    console.log(`server is up ${serverPort}`);
})