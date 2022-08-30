const express = require('express');
const {programacion} = require('../data').infoCursos;

const routerProgramacion = express.Router();

// middleware
routerProgramacion.use(express.json())

routerProgramacion.get('/', (req, res) => {
    res.send(programacion);
});



//programacion
routerProgramacion.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const results = programacion.filter(curso => curso.tema === tema);

    if(results.length === 0){
        return res.status(404).send(`no se encontro ${tema}`);
    }

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(results.sort((a, b) => a.views - b.views)));
    }

    res.send(JSON.stringify(results));
});


routerProgramacion.get('/id/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const result = programacion.filter(curso => curso.id == id);
    console.log(result);

    if(result.length === 0){
        res.status(404).send(`no se encontro ${result} nada`)
    };

    res.send(JSON.stringify(result));
});


// dos params
routerProgramacion.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const results = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(results.length === 0){
        res.status(404).send(`no se encontro ${results}a`)
    };

    res.send(JSON.stringify(results));
});

routerProgramacion.post('/', (req, res) => {
    let cursoNew = req.body;
    programacion.push(cursoNew);
    res.send(JSON.stringify(programacion));
});


routerProgramacion.put('/:id', (req, res) => {
    let cursoUpdate = req.body;
    const id = req.params.id;
    
    const indice = programacion.findIndex(curso => curso.id == id);

if(indice >= 0){
    programacion[indice] = cursoUpdate;
}
    res.send(JSON.stringify(programacion));
});

routerProgramacion.patch('/:id', (req, res) => {
    let cursoUpdate = req.body;
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

if(indice >= 0){
    const cursoUp = programacion[indice];
    Object.assign(cursoUp, cursoUpdate);
}
    res.send(JSON.stringify(programacion));
});

routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;

    const indice = programacion.findIndex(curso => curso.id == id);

if(indice >= 0){
    programacion.splice(indice, 1)
}
    res.send(JSON.stringify(programacion));
});

module.exports = routerProgramacion;