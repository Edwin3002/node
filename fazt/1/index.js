const express = require('express');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) =>{
    res.sendFile('./html/index.html', {
        root: __dirname
    });
});

// app.get('/about', (req, res) =>{
//     res.send('about')
// });
// app.put('/', (req, res) =>{
//     res.send('actualizando')
// });
// app.get('/*', (req, res) =>{
//     res.send('no existe')
// });

app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('recibido');
});
app.all('/info', (req, res) => {
    console.log(req.body);
    res.send('recibido info all');
});
app.get('/hello/:user', (req, res) => {
    console.log(req.query.q);
    console.log(req.query);
    res.send(`hello ${req.params.user}`);
});
app.get('/user/:user/age/:age', (req, res) => {
    const {user, age} = req.params
    res.send(`El usuario ${user} tiene ${age} años`);
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server is up ${PORT}`);
});