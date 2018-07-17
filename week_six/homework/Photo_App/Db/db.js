const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Photo_App')

mongoose.connection.on('connected', () =>{ console.log('mongoose connected to db')});

mongoose.connection.on('disconnected', ()=>{console.log('mongoose disconnected from db')});

mongoose.connection.on('error', (err)=>{console.error(err)});