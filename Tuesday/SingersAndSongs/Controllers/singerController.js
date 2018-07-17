const express = require('express');
const router = express.Router();

const Singers = require('../Models/singer');


//create
router.get('/new', (req, res) =>{
    res.render('new.ejs')
})

router.post('/', (req, res)=>{
    Singers.create(req.body, (err, singer)=>{
        if (err)
            console.error(err)
        else {
            console.log(singer)
        }
    });
});

//read
router.get('/:id', (req, res)=>{
    Singers.findById(req.params.id, (err, singer)=>{
        if(err)
            console.error(err)
        else {
            res.render('show.ejs', {
                singer: singer
            })
        }
    });
})


module.exports = router;