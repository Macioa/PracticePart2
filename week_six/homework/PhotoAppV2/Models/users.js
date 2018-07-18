const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

userSchema.index(
    { 'name' : 'text' },
  );

module.exports = mongoose.model('User', userSchema);