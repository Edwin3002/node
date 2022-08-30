const http = require('http');

const server = http.createServer((req, res) => {
    console.log('=> req');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.statusCode);
    // res.setHeader('content-type', 'application/json')
    // console.log(res.getHeaders());
    res.end('hi')
})

server.listen(3001, () => {
console.log('server start');
})