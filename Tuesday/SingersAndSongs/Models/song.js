const mongoose = require('mongoose');




const songSchema = new mongoose.Schema({
    name: String,
})


const Song = mongoose.model('Song', songSchema);

module.exports = Song;