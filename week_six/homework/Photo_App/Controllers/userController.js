const express = require('express');
const router = express.Router();

const Users = require('../Models/User.js');


//create
router.get('/register', (req, res)=>{
    res.render('register.ejs');
})

router.post('/', (req, res)=>{
    Users.create(req.body, (err, user)=>{
        if (err)
            console.error(err)
        else res.redirect('/')
    })
})

router.get('/signin', (req, res)=>{
    res.render('signin.ejs');
})

router.post('/signin', (req, res)=>{
    Users.find({name: req.body.username}, (err, user)=>{
        if (err)
            console.err(err);
        else {
            if (req.body.password===user.password){
                localStorage.setItem('signedin', true)
                res.render('show.ejs', {
                    user: user
                })
            }
        }
    })
})


//read
router.get('/', (req, res) =>{
    Users.find({}, (err, users)=>{
        if (err)
            console.error(err)
        else res.render('index.ejs', {
            users: users
        })
    })
})

router.get('/:id', (err, res)=>{
    Users.findById(req.param.id, (err, user)=>{
        if (err)
            console.log(err)
        else res.render('show.ejs', {
            user: user
        })
    })
})

//update

//delete

module.exports = router;