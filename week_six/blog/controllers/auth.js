const express = require('express')
const router = express()

const User = require('../models/user')

router.get('/', (req, res)=>{
    res.render('auth/login.ejs')
})

router.post('/login', (req, res)=>{
    
})



module.exports = router;