const { application } = require('express');
const express = require('express');

const app = express();

app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    console.log('paso por here');
    next();
});

app.all('/', (req, res) =>{
    console.log(`Url ${req.url} y method ${req.method}`);
    res.send('profile');
});

app.get('/p', (req, res) =>{
    res.send('profile')
});

app.use((req, res, next) => {
    if(req.query.login === 'ed'){
        next();
    }else{
        res.send('Not Authorizaded')
    }
});

app.get('/dashboard', (req, res) =>{
    res.send('dashboard page')
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`server is up ${PORT}`);
});