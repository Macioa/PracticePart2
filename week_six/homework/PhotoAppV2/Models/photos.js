const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    user: String,
    url: String,
    about: String,
    user_id: String
});


module.exports = mongoose.model('Photo', photoSchema);