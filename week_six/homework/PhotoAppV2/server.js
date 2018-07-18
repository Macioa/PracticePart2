const port = 3000;

const chalk = require('chalk');

var mongoose = require('./Db/db')
mongoose = mongoose('mongodb://localhost:27017/users');

const express = require('express');
const app = express();

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

const bodyparser = require('body-parser');
app.use(bodyparser.json()); 
app.use( bodyparser.urlencoded( {extended: false} ));

const userController = require('./controllers/userController')
app.use('/users', userController);

const photoController = require('./controllers/photoController')
app.use('/photos', photoController);

app.listen(port, () => {    
    console.log();
    console.log(chalk.green('Express server listening on : ')+chalk.yellow(`${port}`));   
});