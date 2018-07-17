//use process environment variable or port 
const port = process.env.PORT || 3000
const express = require('express');
const app = express();

require('./Db/db')


const userController = require('./Controllers/userController');
app.use('/users', userController)

//   localhost:port/status
app.get("/status", (req, res) =>{
    const localTime = (new Date()).toLocaleTimeString();

    res
    .status(200)
    .send(`Server time is ${localTime}.`)
})

//404 on all unrouted pages
app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(port, () => {console.log(`Express server listening on ${port}`)})