const express = require('express')
const router = express()

const User = require('../models/user')

router.get('/', (req, res)=>{
    res.render('auth/login.ejs', {
        loggedIn:req.session.loggedIn,
        message:req.session.message
    })
})

router.post('/login', (req, res)=>{
    //req session is on all requests
    console.log(req.session);

    req.session.loggedIn = true; //custom property
    req.session.username = req.body.username;

    res.redirect('/articles');
})

router.get('/logout', (req, res)=>{ 
    req.session.destroy((err)=>{
        if (err){
            res.send('error destroying session');
        } else {
            res.redirect('/auth');
        }
    })
})


module.exports = router;