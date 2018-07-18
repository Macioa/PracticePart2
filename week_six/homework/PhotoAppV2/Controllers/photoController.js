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
    },
    {
        user: "yuri",
        url: "https://images.pexels.com/photos/1073773/pexels-photo-1073773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "george",
        url: "https://images.pexels.com/photos/861132/pexels-photo-861132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    },
    {
        user: "bob",
        url: "https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350",
        about: "an image from pexels"
    }
]

/*for (let image of sampleData){
    Photos.create(image, (err, photo)=>{console.log(photo)})
}*/

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
                    res.redirect('/');
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
            photos:photos,
            username: req.params.username
        })
    })
})

//update 
router.get('/:id', (req,res)=>{
    Photos.findById(req.params.id, (err, photo)=>{
        if (err)
            console.error(err)
        else res.render('photos/edit.ejs', {
            photo:photo
        })
    })
})

router.put('/:id', (req, res)=>{
    console.log('update route reached')
    Photos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, photo)=>{
        if (err)
            console.error(err)
        else {
            console.log(`updated photo id ${photo._id}`)
            res.redirect('/');
        }
    })
})

router.delete('/:id', (req, res)=>{
    Photos.findByIdAndRemove(req.params.id, (err, photo)=>{
        if (err)
            console.error(err)
        else {
            res.redirect('/');
        }
    })
})



module.exports = router;