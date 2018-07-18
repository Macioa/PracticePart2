const express = require('express');
const router = express.Router();

const Article = require('../models/articles')
const Author = require('../models/authors')

//show all authors created in author index
//=======================================================
router.get('/', (req, res) => {
    console.log(req.session)
    if (req.session.loggedIn === true){

        Article.find({}, (err, foundArticles) => {


            res.render('articles/index.ejs', {
            articles: foundArticles,
            username: req.session.username,
            loggedIn: req.session.loggedIn
            })
        })
    } else {
        //res.send('LOG IN FIRST!')
        res.redirect('/auth');
    }

})

router.post('/', (req, res)=>{
    Author.findById(req.body.authorId, (err, foundAuthor)=>{
        Article.create(req.body, (err, createdArticle)=>{ //req.body.authorId is ignored due to Schema
            foundAuthor.articles.push(createdArticle);
            foundAuthor.save((err, data)=>{
                res.redirect('/articles');
            });
        });
    });
});

router.get('/new', (req, res)=>{
    Author.find({}, (err, allAuthors)=>{
        res.render('articles/new.ejs', {
            authors: allAuthors
        });
    });
});




router.get('/:id', async (req, res)=>{
    try{
        const foundArticle  = await Article.findById(req.params.id);
        const foundAuthor = await Author.findOne({name: foundArticle.author})
        console.log(foundArticle)
        console.log(foundAuthor)
        res.render('articles/show.ejs', {
            article: foundArticle,
            author: foundAuthor
        })
    } catch {
        res.send(err)
    }
});


router.get('/:id/edit', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		Author.find({}, (err, allAuthors)=>{
			Author.findOne({'articles._id':req.params.id}, (err, foundArticleAuthor)=>{
				res.render('articles/edit.ejs', {
					article: foundArticle,
					authors: allAuthors,
					articleAuthor: foundArticleAuthor
				});
			});
		});
	});
});


router.put('/:id', (req, res)=>{
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedArticle)=>{
        Author.findOne({ 'articles._id' : req.params.id }, (err, foundAuthor)=>{
		if(foundAuthor._id.toString() !== req.body.authorId){
			foundAuthor.articles.id(req.params.id).remove();
			foundAuthor.save((err, savedFoundAuthor)=>{
				Author.findById(req.body.authorId, (err, newAuthor)=>{
					newAuthor.articles.push(updatedArticle);
					newAuthor.save((err, savedNewAuthor)=>{
			        	        res.redirect('/articles/'+req.params.id);
					});
				});
			});
		} else {
			foundAuthor.articles.id(req.params.id).remove();
			foundAuthor.articles.push(updatedArticle);
			foundAuthor.save((err, data)=>{
		                res.redirect('/articles/'+req.params.id);
			});
		}
        });
    });
});








router.delete('/:id', (req, res)=>{
    Article.findByIdAndRemove(req.params.id, (err, foundArticle)=>{
        Author.findOne({'articles._id':req.params.id}, (err, foundAuthor)=>{
            foundAuthor.articles.id(req.params.id).remove();
            foundAuthor.save((err, data)=>{
                res.redirect('/articles');
            });
        });
    });
});

module.exports = router;