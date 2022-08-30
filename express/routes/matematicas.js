const express = require('express');
const {matematicas} = require('../data').infoCursos;

const routerMatematicas = express.Router();

routerMatematicas.get('/', (req, res) => {
    res.send(matematicas);
});


//matematicas
routerMatematicas.get('/:tema', (req, res) => {
    const tema = req.params.tema;
    const results = matematicas.filter(curso => curso.tema === tema);

    if(results.length === 0){
        return res.status(404).send(`no se encontro ${tema}`);
    }

    res.send(JSON.stringify(results));
});

module.exports = routerMatematicas;