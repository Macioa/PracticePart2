const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
    user: String,
    img: String,
    about: String
})

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;