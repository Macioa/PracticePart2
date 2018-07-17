const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('connected', ()=>{console.log('mongoose connected')})

mongoose.connection.on('disconnected', ()=>{console.log('mongoose disconnected')})

mongoose.connection.on('error', (err)=>{console.error(err)});