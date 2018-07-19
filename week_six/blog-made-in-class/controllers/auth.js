const express = require('express');
const router  = express.Router();
const User    = require('../models/users');
const bcrypt = require('bcrypt');

const chalk = require('chalk')

router.get('/', (req, res) => {

  res.render('auth/login.ejs', {
    message: req.session.message
  });

});


router.post('/login', async (req, res) => {

  // req.session is availiable on EVERY SINGLE REQUEST FROM THE CLIENT
  // our session is availiable in the following
  console.log(req.session);


  //bcrypt.compareSync('plaintext password', hashedPassword)
  // YOU CAN ADD ANY PROPERTY YOU WANT TO THE SESSION,
  // and as soon as you do that its saved to the store
  var foundUser = await User.find({username:req.body.username}, (err, user)=>{
    if (user){
      if (bcrypt.compare(bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)), user.password)){
        console.log('password match');
        req.session.loggedIn = true;
        req.session.username = req.body.username;
        res.redirect('/articles');
      } else {
        console.log('password does not match');
        req.session.loggedIn = false;
        res.redirect('/login');
      }
    }
  })


})

router.post('/register', (req, res)=>{
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const userDbEntry = {};
  userDbEntry.username= req.body.username;
  userDbEntry.password= passwordHash;

  User.create(userDbEntry, (err, user)=>{
    req.session.username = user.username;
    req.session.loggedIn = true;
    res.redirect('/authors');
  })
})

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
