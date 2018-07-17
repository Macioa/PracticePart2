const express = require('express');
const app = express();

require('./Db/db')


const userController = require('./Controllers/userController');
app.use('/users', userController)

app.listen(3000, () => {console.log('Express server listening')})