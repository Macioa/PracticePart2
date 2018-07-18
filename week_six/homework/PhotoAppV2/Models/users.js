const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    photos: [String]
});

userSchema.index(
    { 'name' : 'text' },
  );

module.exports = mongoose.model('User', userSchema);