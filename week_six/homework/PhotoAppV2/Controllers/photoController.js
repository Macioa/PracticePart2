const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');
const Users = require('../models/users');

const chalk = require('chalk');

//create
router.get('/new', (req, res) =>{
    res.render('photos/new.ejs');
})

router.post('/', (req, res)=>{
    Users.find({'name':req.body.username}, (err, user)=>{
        if (err)
            console.error(`${req.body.username} not found`)
        else {
            Photos.create(req.body, (err, photo)=>{
                if (err)
                    console.error(err)
                else {
                    console.log(`Created ${photo}`)
                }
            })
        }
    })
})

router.get('../users/:id/upload', (req, res)=>{
    Users.findById(req.params.id, (err, user)=>{
        if (err)
            console.error(err)
        else res.render('photos/newFrom.ejs',{
            user: user
        })
    })
})

module.exports = router;