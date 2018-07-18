const express = require('express');
const router = express.Router();

const Photos = require('../Models/Photo')


// //create
// router.get('/upload', (req, res) =>{
//     res.render('upload.ejs');
// })

// router.post('/', (req, res) =>{
//     Photos.create(req.body, (err, newPhoto)=>{
//         if(err)
//             console.log(err)
//         else {
//             console.log(`created ${newPhoto}`)
//         }
//     });
// });

// //read
// router.get('/', (req, res) =>{
//     Photos.find({}, (err, photos)=>{
//         res.render('index.ejs', {
//             photos: photos
//         })
//     })
// })

// router.get('/:id', (req, res)=>{
//     Photos.findById(req.params.id, (err, photo)=>{
//         if (err)
//             console.error(err);
//         else {
//             res.render('show.ejs', {
//                 photo: photo
//             })
//         }
//     })
// })

// //update
// router.get('/:id/edit', (req, res)=>{
//     Photos.findById(req.params.id, (err, photo)=>{
//         if (err)
//             console.error(err)
//         else {
//             res.render('edit.ejs', {
//                 photo: photo
//             })
//         }
//     })
// })

// router.put('/:id', (req, res)=>{
//     Photos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, photo)=>{
//         if (err)
//             console.error(err);
//         else {
//             console.log(`updated ${req.params.id}`)
//         }
//     })
// })

// //delete
// router.delete('/:id', (req, res)=>{
//     Photos.findByIdAndRemove(req.params.id, (err, deleted)=>{
//         if (err)
//             console.error(err);
//         else {
//             console.log(`deleted ${req.params.id}`)
//         }
//     })
// })


module.exports = router;