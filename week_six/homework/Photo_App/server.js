//use process environment variable or port 
const port = process.env.PORT || 3000
const express = require('express');
const app = express();

const bodyparser = require('body-parser');
const methodoverride = require('method-override');

require('./Db/db')

app.use(methodoverride('_method'));
app.use(bodyparser.urlencoded({encoded: false}));


const photoController = require('./Controllers/photoController');
app.use('/photos', photoController);

const userController = require('./Controllers/userController');
app.use('/users', userController);

//   localhost:port/status
app.get("/status", (req, res) =>{
    const localTime = (new Date()).toLocaleTimeString();

    res
    .status(200)
    .send(`Server running. Local time is ${localTime}.`)
})

//404 on all unrouted pages
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {console.log(`Express server listening on ${port}`)})