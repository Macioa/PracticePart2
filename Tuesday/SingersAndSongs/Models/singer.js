const mongoose = require('mongoose');


const singerSchema = new mongoose.Schema({
    name: String,
    songs: [songSchema]
})



const Singer = mongoose.model('Singer', singerSchema);


module.exports = Singer