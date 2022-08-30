const http = require('http');
const cursos = require('./cursos4');

const servidor = http.createServer((req, res) => {
    const { method } = req

    switch (method) {
        case 'GET':
            return solicitudGet(req, res);
            break;

        case 'POST':
            return solicitudPost(req, res);
            break;

        default:
            res.statusCode = 501
            res.end('algo fallo 01');
            break;
    }
});

function solicitudGet(req, res) {
    const path = req.url;

    if (path === '/') {
        res.writeHead = (200, { 'Content-Tipe': 'application/json' });
        res.end('Welcome to node')
    } else if (path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos))
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion))
    }

    // res.statusCode = 404;
    // res.end('Algo fallo')
}

function solicitudPost(req, res) {
    if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end('server post')
    } else {
        res.statusCode = 404;
        res.end('Algo fallo en el metodo')
    }
}

const port = 3000;
servidor.listen(port, () => {
    console.log(`server is up ${port}`);
})