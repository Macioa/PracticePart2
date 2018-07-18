const port = 3000;

const express = require('express');
const app = express();

const session = require('express-session');

const methodoverride = require('method-override');
const bodyparser = require('body-parser');

require('./db/db');

app.use(session({
    secret: 'secret string',
    resave: false,//only saves session if session changed
    saveUninitialized: false
}));

app.use(methodoverride('_method'));
app.use(bodyparser.urlencoded({encoded: false}));

//app.use(bodyparcer);

const articlesController = require('./Controllers/Articles');
app.use('/articles', articlesController);

const authorsController = require('./Controllers/Authors');
app.use('/authors', authorsController);

const authController = require('./Controllers/auth');
app.use('/auth', authController);


app.get('/', (req, res) =>{
    res.render('index.ejs');
});

app.listen(port, ()=>{
    console.log(`server listening on ${port}`);
});