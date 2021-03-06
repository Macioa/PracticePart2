const express = require('express');
// Next we set up the Router
const router = express.Router();
// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Fruits = require('../models/fruits');
// Creating the index route
// index route should show all the fruits
router.get('/', (req, res) => {
  // finding every fruit without a search parameter
  Fruits.find({}, (err, allFruits) => {
    if(err){
      res.send(err);
    } else {
        res.json(
                {status: 200,
                 data: allFruits
               });
    };
  });



});

// This is the route that the form is sending
// its info too
// aka the create route
router.post('/', (req, res) => {
  // contents of the form will be in req.body

  console.log(req.body, 'this is req.body, should be form info');
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
      console.log(createdFruit)
      // we want to respond to the client after
      // we get the response from the database
      // redirects the response back
      // to the get /fruits route
      res.json({status: 201, data: createdFruit});
    }
  });
});




// Show Route
router.get('/:id', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  Fruits.findById(req.params.id, (err, foundFruit) => {
      res.json({
      status: 200,
      data: foundFruit
    });
  });

});

router.put('/:id', (req, res) => {
  console.log(' am I hitting the put route') // Check to see if im hitting im route
  // If Im not hitting the route, there is probably something with the action of form

  // If it is hitting the route, I want to see
  console.log(req.body, 'Why: IT tells what is coming from the form')

  if(req.body.readyToEat === 'on'){ // if checked then req.body.readyToEat = 'on'
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // req.body is the updated form info
  //new true, says return to me the updated object, by default it is false
  // things that are default you don't have to specify

  // first argument, is the document you are looking for
  // second argument, is the content you are updating with
  Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    if(err){
      res.send(err);
    } else {
        res.json({status: 200, data: updatedFruit})
    }
  })

});


// Delete route
router.delete('/:id', (req, res) => {

  // Delete a specific fruit
  console.log(req.params.id, ' this is params in delete')
  Fruits.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    if(err){
      console.log(err, ' this is error in delete')
      res(err);
    } else {
      console.log(deletedFruit, ' this deletedfruit in the delete rout');
      res.json({status: 200, data: deletedFruit});
    }
  });



})
module.exports = router;