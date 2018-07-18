const mongoose = require('mongoose');
const Article = require('./articles');

const authorSchema = mongoose.Schema({
	name: String,
	articles: [Article],
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;