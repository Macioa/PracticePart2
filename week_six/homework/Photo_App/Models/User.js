const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    password: String,
 //  photos: [photoSchema]
})

const User = mongoose.model('User', userSchema);

module.exports = User;