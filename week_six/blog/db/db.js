const mongoose = require('mongoose');

//create our db and connect

mongoose.connect('mongodb://localhost/blog');

//these are event listeners we are about to set up each with error messages and logs
mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected to Mongodb');
})

mongoose.connection.on('error', (err) => {
  console.log(err, 'Mongoose failed to connect');
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected');
})
