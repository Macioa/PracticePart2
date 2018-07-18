const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    user: String,
    img: String,
    about: String
});

userSchema.index(
    { 'name' : 'text' },
  );

module.exports = mongoose.model('User', userSchema);