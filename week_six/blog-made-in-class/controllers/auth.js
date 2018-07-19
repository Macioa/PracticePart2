const express = require('express');
const router  = express.Router();
const User    = require('../models/users');

router.get('/', (req, res) => {

  res.render('auth/login.ejs', {
    message: req.session.message
  });

});


router.post('/login', (req, res) => {

  // req.session is availiable on EVERY SINGLE REQUEST FROM THE CLIENT
  // our session is availiable in the following
  console.log(req.session);

  // YOU CAN ADD ANY PROPERTY YOU WANT TO THE SESSION,
  // and as soon as you do that its saved to the store
  req.session.loggedIn = true;
  req.session.username = req.body.username;

  res.redirect('/articles');
});


// LOGGING OUT OR DESTROYING THE SESSIOn

router.get('/logout', (req, res) => {

  req.session.destroy((err) => {
    if(err){
      // do something
      res.send('error destroying seesion');
    } else {
      res.redirect('/auth');
    }
  });

});








module.exports = router;
