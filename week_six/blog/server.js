const port = 3000;

const express = require('express');
const app = express();

const methodoverride = require('method-override');
const bodyparser = require('body-parser');

require('./db/db');

app.use(methodoverride('_method'));
app.use(bodyparser.urlencoded({encoded: false}));

//app.use(bodyparcer);

const articlesController = require('./Controllers/Articles');
app.use('/articles', articlesController);

const authorsController = require('./Controllers/Authors');
app.use('/authors', authorsController);


app.get('/', (req, res) =>{
    res.render('index.ejs');
});

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});