const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
})

mongoose.connection.on('error', (err) => {
    console.error(err);
})

mongoose.connection.on('disconnected', () =>{
    console.log('mongoose disconnected');
})