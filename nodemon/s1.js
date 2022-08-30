const http = require('http');
const server = http.createServer((req, res) => {
    res.end('hola, paco')
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log('SERVER IS READY');
});