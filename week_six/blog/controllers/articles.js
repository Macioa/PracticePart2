const express = require('express');
const router = express.Router();
const Article = require('../models/articles')

//show all authors created in author index
//=======================================================
router.get('/', (req, res) => {
  Article.find({}, (err, foundArticles) => {


    res.render('articles/index.ejs', {
      articles: foundArticles
    })
  })

})

//=======================================================

router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
})



//=================================================
// Show Route
router.get('/:id', (req, res) => {

  // Render is when you want to send
  // an ejs template to the client
  Article.findById(req.params.id, (err, foundArticle) => {
      res.render('articles/show.ejs', {
      article: foundArticle// This creates
      // a "author" variable in the show page
    });
  })

});

//===================================

router.get('/:id/edit', (req, res) => {
  Article.findById(req.params.id, (err, foundArticle) => {
    res.render('articles/edit.ejs', {
      article: foundArtcile
    })
  })
})


//=========================================
router.put('/:id', (req, res) => {
  console.log(' am I hitting the put route') //
  // If it is hitting the route, I want to see
  console.log(req.body)


  Article.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedArticle) => {
    if(err){
      res.send(err);
    } else {
        // Check to see if it is updating correctly
        console.log(updatedArticle)
        res.redirect('/articles');
    }
  })

});



//=========================================

router.post('/', (req, res) => {
  console.log(req.body)

  Article.create(req.body, (err, createdArticle) => {
  console.log(createdArticle, 'this is the createdArticle')
  res.redirect('/articles');
  })
  //we are just doing this to see if server is receiving request
  // res.send('server received the request')
})

// Delete Route
//==========================================

router.delete('/:id', (req, res) => {

  // Delete a specific fruit
  console.log(req.params.id, ' this is params in delete')
  Article.findByIdAndRemove(req.params.id, (err, deletedArticle) => {
    if(err){
      console.log(err, ' this is error in delete')
      res.send(err);
    } else {
      console.log(deletedArticle, ' this is deletedarticle');
      res.redirect('/articles');
    }
  });
})

module.exports = router;
