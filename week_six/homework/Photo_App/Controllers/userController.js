const express = require('express');
const router = express.Router();

const Users = require('../Models/User.js');


//create
router.get('/register', (req, res)=>{
    res.render('register.ejs');
})

router.post('/', (req, res)=>{
    Users.find({username: req.body.username}, (err, user)=>{
        if (err)
            console.error(err);
        else {    
            Users.create(req.body, (err, user)=>{
                if (err)
                    console.error(err)
                else res.redirect('/')
            })
        }
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
            } else res.render('signin', {
                retry: true
            })
        }
    })
})


//read
router.get('/', (req, res) =>{
    if (localStorage.getItem('signedin')===true){
        Users.find({}, (err, users)=>{
            if (err)
                console.error(err)
            else res.render('index.ejs', {
                users: users
            })
        })
    }
    else res.redirect('signin.ejs');
})

router.get('/:id', (req, res)=>{
    if (localStorage.getItem('signedin')===true){
        Users.findById(req.param.id, (err, user)=>{
            if (err)
                console.log(err)
            else res.render('show.ejs', {
                user: user
            })
        })
    } else res.redirect('signin.ejs');
})

//update
router.put('/:id', (req, res)=>{
    if (localStorage.getItem('signedin')===true){
        Users.findByIdAndUpdate(req.param.id, (err, user)=>{
            if (err)
                console.error(err);
            else res.redirect('/');
        })
    } else res.redirect('signin.ejs')
})


//delete
router.delete('/:id', (req, res)=>{
    if (localStorage.getItem('signedin')===true){
        Users.findByIdAndRemove(req.param.id, (err, user)=>{
            if (err) 
                console.error(err);
            else res.redirect('/');
        })
    } else res.redirect('singin.ejs');
})

module.exports = router;