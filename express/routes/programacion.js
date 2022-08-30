const express = require('express');
const {programacion} = require('../data').infoCursos;

const routerProgramacion = express.Router();

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


// dos params
routerProgramacion.get('/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const results = programacion.filter(curso => curso.tema === tema && curso.nivel === nivel);

    if(results.length === 0){
        res.status(404).send(`no se encontro ${results}`)
    };

    res.send(JSON.stringify(results));
});

module.exports = routerProgramacion;