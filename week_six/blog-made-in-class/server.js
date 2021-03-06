const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');

const bcrypt = require('bcrypt');

// require db
require('./db/db');

// set Up our session
app.use(session({
  secret: 'this is a random secret string that you make up',
  resave: false, // only save when the session object has been modified
  saveUninitialized: false // useful for login sessions, we only want to to save when we modify
  // session
}));

// Set up middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));


// // Custom middleware to check sesssion
// app.use((req, res, next) => {
//   // Check to see if they are logged
//   // calling next will send them to the route the route they were going to
//   // so one of your controllers

//   // LOOK AT THE REQUEST FOR INFORMATION ABOUT WHERE IT IS COMING FROM.
//   next()
//   // if not logged you can redirect wherever you want
// });



const userController   = require('./controllers/auth');
const authorsController = require('./controllers/authors');
const articlesController = require('./controllers/articles');

// set up controller routes
app.use('/auth', userController);
app.use('/articles', articlesController);
app.use('/authors', authorsController);


app.get('/', (req, res) => {
  res.render('index.ejs');
});



app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
