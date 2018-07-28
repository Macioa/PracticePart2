const express = require('express');
const router  = express.Router();
const User    = require('../models/users');
const bcrypt = require('bcrypt');

const chalk = require('chalk')

//             REDIRECT
router.get('/', (req, res) => {
  res.render('auth/login.ejs', {
    message: req.session.message
  });
});

//                LOGIN
router.post('/login', (req, res) => {
  console.log(req.session);

   User.find({username:req.body.username}, async (err, user)=>{
     try{
          if (user){
            let dbPassword = user.password;
            let enteredPassword = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            console.log(chalk.green(dbPassword, ))
            if(  bcrypt.compare(enteredPassword, dbPassword)  ){
              console.log('password match');
              req.session.loggedIn = true;
              req.session.username = req.body.username;
              res.redirect('/');
            } else {
              console.log('password does not match');
              req.session.loggedIn = false;
              res.redirect('/login');
            }
          }
        } catch {

        }
    }
  )
})

//                REGISTER
router.post('/register', (req, res)=>{
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  console.log(passwordHash)

  const userDbEntry = {};
  userDbEntry.username= req.body.username;
  userDbEntry.email= req.body.email;
  userDbEntry.password= passwordHash;
  

  User.create(userDbEntry, (err, user)=>{
    req.session.username = user.username;
    req.session.loggedIn = true;
    console.log(userDbEntry.password)
    res.redirect('/');
  })
})

//              LOGOUT
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      res.send('error destroying seesion');
    } else {
      res.redirect('/auth');
    }
  });

});








module.exports = router;
