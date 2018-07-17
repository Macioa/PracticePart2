const mongoose = require('mongoose');

const User = mongoose.Schema({
    username: String,
    name: String,
    password: String,
})

module.exports = User;