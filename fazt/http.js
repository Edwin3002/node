const http = require('http');

http.createServer(function (req, res){
    res.write('hi paco');
    res.end();
}).listen(3000);

console.log('server is ready');