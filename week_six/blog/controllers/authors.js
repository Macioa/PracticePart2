const express = require('express');
const router = express.Router();
const Author = require('../models/authors')

//show all authors created in author index
//=======================================================
router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {


    res.render('authors/index.ejs', {
      authors: foundAuthors
    })
  })

})

//=======================================================

router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})



//=================================================
// Show Route
router.get('/:id', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  Author.findById(req.params.id, (err, foundAuthor) => {
      res.render('authors/show.ejs', {
      author: foundAuthor// This creates
      // a "author" variable in the show page
    });
  })

});

//===================================

router.get('/:id/edit', (req, res) => {
  Author.findById(req.params.id, (err, foundAuthor) => {
    res.render('authors/edit.ejs', {
      author: foundAuthor
    })
  })
})


//=========================================
router.put('/:id', (req, res) => {
  console.log(' am I hitting the put route') //
  // If it is hitting the route, I want to see
  console.log(req.body)


  Author.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedAuthor) => {
    if(err){
      res.send(err);
    } else {
        // Check to see if it is updating correctly
        console.log(updatedAuthor)
        res.redirect('/authors');
    }
  })

});



//=========================================

router.post('/', (req, res) => {
  console.log(req.body)

Author.create(req.body, (err, createdAuthor) => {
  console.log(createdAuthor, 'this is the createdAuthor')
  res.redirect('/authors');
  })
  //we are just doing this to see if server is receiving request
  // res.send('server received the request')
})

// Delete Route
//==========================================

router.delete('/:id', (req, res) => {

  // Delete a specific fruit
  console.log(req.params.id, ' this is params in delete')
  Author.findByIdAndRemove(req.params.id, (err, deletedAuthor) => {
    if(err){
      console.log(err, ' this is error in delete')
      res.send(err);
    } else {
      console.log(deletedAuthor, ' this is deletedauthor');
      res.redirect('/authors');
    }
  });
})

module.exports = router;
