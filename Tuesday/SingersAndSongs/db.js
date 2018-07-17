const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/singersandsongs');

mongoose.connection.on('connected', ()=>{
    console.log('mongoose connected')
})

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose disconnected')
})

mongoose.connection.on('err',(err)=>{console.error(err)})