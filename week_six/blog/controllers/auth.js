const express = require('express')
const router = express()

const User = require('../models/user')

router.get('/', (req, res)=>{
    res.render('auth/login.ejs')
})

router.post('/login', (req, res)=>{
    //req session is on all requests
    console.log(req.session);

    req.session.loggedIn = true; //custom property
    req.session.username = req.body.username;

    res.redirect('/articles')
})



module.exports = router;