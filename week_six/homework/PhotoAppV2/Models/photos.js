const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    user: String,
    url: String,
    about: String
});


module.exports = mongoose.model('Photo', photoSchema);