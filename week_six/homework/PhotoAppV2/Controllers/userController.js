const express = require('express');
const router = express.Router();
const Users = require('../models/users');

const chalk = require('chalk');


//create
router.get('/new', (req, res) =>{
    res.render('users/new.ejs');
});

router.post('/', (req, res) =>{
    let newUser = { 
        'name' : req.body.name, 
        'email' : req.body.email
    }
    Users.create(req.body, (err, created)=>{
        if (err){
            console.error(chalk.red(err));
        } else {
            console.log(chalk.green('Created ')+chalk.grey(`${req.body.name}`));
            res.redirect('/users/');
        }
    });
});



//read
router.get('/', (req, res) =>{
    Users.find({}, (err, users)=>{
        if (err){
            console.error(chalk.red(err));
        } else
        res.render('users/index.ejs', {
            users: users
        });
    });
});

router.get('/find', (req, res) =>{
    res.render('users/find.ejs');
});

//https://www.npmjs.com/package/mongoose-text-search
/*router.post('/find', (req, res) =>{//{$search: req.body.namePart}
    //Users.find({ 'name': $text: { $search : 'a' } }, (err, users) =>{
    Users.find({    $text: {$search : 'a'}    }, (err, users) =>{
        if (err){
            console.error(chalk.red(err));
        } else {
            console.log(chalk.green(`Found ${users.length} users`))
            res.render('index.ejs', {
                users: users
            });
        }
    });
});*/

router.get('/:id', (req, res) =>{
    Users.findById(req.params.id, (err, user)=>{
        if (user){
            res.render('users/show.ejs', {
                user: user
            })
        } else
        console.error(chalk.red('Could not find user with id ')+chalk.grey(`${req.params.id}`));
    })
})

//update
router.get('/:id/edit', (req, res) =>{
    let user = Users.findById(req.params.id, (err, user)=>{
        if (user){
            res.render('users/edit.ejs', {
                user: user
            })
        } else{
        console.error(chalk.red('Could not find user with id ')+chalk.grey(`${req.params.id}`));
        res.redirect('/users/')
        }
    });
});

router.put('/:id', (req, res) =>{
    Users.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not update user id ')+chalk.grey(req.params.id));
		} else {
			console.log(chalk.green('Updated user id ')+chalk.grey(req.params.id));
			res.redirect('/users/');
        }
    })
});

//delete
router.delete('/:id', (req, res) =>{
    Users.findByIdAndDelete(req.params.id, (err, updatedUser) =>{
		if(err) {
            console.error(chalk.red(err));
            console.error(chalk.red('Could not delete user id ')+chalk.grey(''));
		} else {
			console.log(chalk.green('Deleted user id ')+chalk.grey(req.params.id));
			res.redirect('/users/');
        }
    })
});



module.exports = router;