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

//update
router.get('/:id/edit', (req, res)=>{
    Singers.findById(req.params.id, (err, singer)=>{
        if (err)
            console.error(err)
        else {
            res.render('edit.ejs', {
                singer: singer
            })
        }
    });
});

router.put('/:id', (req, res)=>{
    Singers.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, singer)=>{
        if (err)
            console.error(err);
        else {
            console.log(`updated ${singer}`)
        }
    })
})

router.delete('/:id', (req, res)=>{
    Singers.findByIdAndRemove(req.params.id, (err, singer)=>{
        if (err)
            console.error(err)
        else console.log(`Deleted ${singer}`)
    })
})

module.exports = router;