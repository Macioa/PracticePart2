const mongoose = require('mongoose');
const Author = require('../models/authors.js')

const articleSchema = mongoose.Schema({
    title: String,
    body: String
});

module.exports = mongoose.model('Article', articleSchema);