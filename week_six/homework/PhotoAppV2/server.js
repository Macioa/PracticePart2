const port = 3000;

const chalk = require('chalk');

var mongoose = require('./Db/db')
mongoose = mongoose('mongodb://localhost:27017/photo-app');

const express = require('express');
const app = express();

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

const session = require('express-session');
app.use(session({
    secret: 'secret key',
    resave: false, 
    saveUninitialized: false 
  }));

const bodyparser = require('body-parser');
app.use(bodyparser.json()); 
app.use( bodyparser.urlencoded( {extended: false} ));

app.get('*', (req, res)=>{
    res.send('middleware override')
})

const userController = require('./controllers/userController')
app.use('/users', userController);

const authController = require('./controllers/authController')
app.use('/auth', userController)

const photoController = require('./controllers/photoController')
app.use('/photos', photoController);

app.get('/', (req, res)=>{
    res.redirect('/photos');
})

app.get('*', (req, res)=>{
    res.send('404');
})

app.listen(port, () => {    
    console.log();
    console.log(chalk.green('Express server listening on : ')+chalk.yellow(`${port}`));   
});