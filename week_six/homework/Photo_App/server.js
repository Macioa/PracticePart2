const express = require('express');
const app = express();

require('./Db/db')

app.listen(3000, () => {console.log('Express server listening')})