const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

 // ==============================================================
// ==============================================================

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());


// ==============================================================
// ==============================================================



// require our db
require('./db/db');


app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// Require the controller after the middleware
const fruitController = require('./controllers/fruitController');

// This means every route in the fruitController
// now starts with /fruits
app.use('/api/v1/fruits', fruitController);





app.listen(3000, () => {
  console.log('listening on port 3000');
});
