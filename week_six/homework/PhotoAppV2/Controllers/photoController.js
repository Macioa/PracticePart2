const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');
const Users = require('../models/users');

const chalk = require('chalk');

const sampleData = [
    {
        user: "ryan",
        url:"https://images.pexels.com/photos/1081673/pexels-photo-1081673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "asljflasjdfljaslkfjajsdfjlksajfljfa"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/764880/pexels-photo-764880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/1236044/pexels-photo-1236044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/1236044/pexels-photo-1236044.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/662852/pexels-photo-662852.png?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"    
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/92332/pexels-photo-92332.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        about: "an image from pexels"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "ryan",
        url: "https://images.pexels.com/photos/196634/pexels-photo-196634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        about: "an image from pexels"
    }
]

for (let image of sampleData){
    Photos.create(image, (err, photo)=>{console.log(photo)})
}

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

//read
router.get('/', (req, res)=>{
    Photos.find({}, (err, photos)=>{
        console.log(chalk.red(`found ${photos.length} photos`))
        res.render('photos/index.ejs',{
            photos: photos
        })
    })
})

router.get('/:username/photos', (req, res)=>{
    Photos.find({user:req.params.username}, (err, photos)=>{
        res.render('photos/index.ejs',{
            photos:photos
        })
    })
})


module.exports = router;