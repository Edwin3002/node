const express = require('express');
const app = express();

const {infoCursos} = require('./data');

//routers
const routerProgramacion = require('./routes/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routes/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

//Routing

app.get('/', (req, res) =>{
    res.send('Hola, paco');
});

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server up ${PORT}`);
});