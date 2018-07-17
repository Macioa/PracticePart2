const mongoose = require('mongoose');

require('./db')

const articleSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String
})

const authorSchema = new mongoose.Schema({
    name: String,
    articles: [articleSchema],//mongoose subdocument
})

const Article = mongoose.model('Article', articleSchema);
const Author = mongoose.model('Author', authorSchema);

//instantiate an author or article
const billy = new Author({
    name: 'Billy',
})

const bob = Author.create({
    name: 'Bob'
})

const article1 = new Article({
    title: "a new article",
    author: billy.name
})

billy.articles.push(article1);


//store to mongo
//billy.save();
article1.save();

console.log(billy, 'is billy');

//find subdocument by id
console.log( billy.articles.id(article1.id) );

//update subdocument - does not change original document in this instance
billy.articles.id(article1.id).title = "Some new name"
//billy.save();

// Delete properties
billy.articles.id(article1.id).remove();
//billy.save(); //remove subdocument but not the original

console.log(billy);
console.log(article1);

// create articles on the fly
const subdoc_article = billy.articles.create({title: 'On the fly', author: billy.name});
billy.articles.push(subdoc_article);
billy.save(); //creates articles and duplicates it into 'billy.articles'



//all articles
Article.find({}, (err, articles)=>{console.log(articles)})



