const express = require('express');
const router  = express.Router();
const Dog  = require('../models/dogs');

router.get('/', async(req, res, next)=>{
  try {
    const foundDogs = await Dog.find({});

    res.render('index.ejs',{ //render doesn't happen until dog.find is complete
      dogs: foundDogs
    })
  } catch (err){
    //next is from express. if dog.find fails 
    next(err)
  }
})

router.post('/', async (req, res)=>{
  try {
    const createdDog = await Dog.create(req.body);
    res.redirect('/dogs');
  } catch (err) {
    res.send(err);
  }
})

router.get('/', (req, res, next) => {
  Dog.find({}, (err, foundDogs) => {
      res.render('index.ejs', {
        dogs: foundDogs
      });
  });
});

router.get('/new', (req, res) => {
  res.render('new.ejs');
});


router.get('/:id', (req, res) => {
  Dog.findById(req.params.id, (err, foundDog) => {
    res.render('show.ejs', {
      dog: foundDog
    });
  });
});

router.get('/:id/edit', async (req, res) => {

  try {
    const foundDog = await Dog.findById(req.params.id);
    res.render('edit.ejs',{
      dog: foundDog
    })
  } catch {
    res.send (err)
  }
  // Dog.findById(req.params.id, (err, foundDog) => {
  //   res.render('edit.ejs', {
  //     dog: foundDog
  //   });
  // });

});

router.put('/:id', async (req, res) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, {new:true},);
    res.redirect('/dogs');
  } catch {
    res.send(err);
  }
  // Dog.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedDog)=> {
  //   console.log(updatedDog, ' this is updatedDog');
  //   res.redirect('/dogs');
  // });
});


router.post('/', (req, res) => {
  console.log(req.body)
  Dog.create(req.body, (err, createdDog) => {
    console.log(createdDog, ' this is the createdDog');
    res.redirect('/dogs');
  });

});


// router.delete('/:id', (req, res) => {

//   Dog.findByIdAndRemove(req.params.id, (err, deletedDog) => {
//     console.log(deletedDog, ' this is deletedDog');
//     res.redirect('/dogs')
//   })

// });

router.delete('/:id', async(req, res)=>{
  try {
    const deletedDog = await Dog.findByIdAndRemove(req.params.id)
    res.render('/dogs')
  } catch (err) {
    res.send(err)
  }
})


module.exports = router;
