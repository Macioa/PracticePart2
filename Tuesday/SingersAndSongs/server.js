const express = require('express');
const app = express();

require('./db')

const singerController = require('./Controllers/singerController');
const songController = require('./Controllers/songController');

app.listen(3000, ()=>{console.log('server listening')})