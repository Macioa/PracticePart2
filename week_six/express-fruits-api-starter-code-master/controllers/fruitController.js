const express = require('express');
// Next we set up the Router
const router = express.Router();
const Fruits = require('../models/fruits');

router.get('/', (req, res) => {

  Fruits.find({}, (err, allFruits) => {
    if(err){
      res.send(err);
    } else {


        // API RESPONSE GOES HERE
    };
  });



});

router.post('/', (req, res) => {

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // adding the contents of the form to the model
  Fruits.create(req.body, (err, createdFruit)=> {
    if(err){
      console.log(err)
      res.send(err);
    } else {


      /// API RESPONSE GOES HERE
    }
  });
});




// Show Route
router.get('/:id', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  Fruits.findById(req.params.id, (err, foundFruit) => {

    // API RESPONSE GOES HERE

  });

});

router.put('/:id', (req, res) => {

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    if(err){
      res.send(err);
    } else {

      // API RESPONSE GOES HERE
    }
  })

});



router.delete('/:id', (req, res) => {


  Fruits.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    if(err){
      console.log(err, ' this is error in delete')
      res(err);
    } else {
      // API RESPONSE GOES HERE
    }
  });



})



module.exports = router;
