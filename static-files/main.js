const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
const Post = require('./models/PostModel')

mongoose.connect('mongodb://127.0.0.1:27017/express-blog');

const postController = require('../controllers/postController')

app.use(express.urlencoded({ extended: true }));

app.engine('hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs'); 


// app.get('/mongoose', function(req, res){
    // Post.findById('63bfb0e000bf08070bf491ca').exec((err, post)=>{
        
        // if(err) {
        //     res.send(err);
        // } 
        // console.log(post);
    // }) stara wersja przed 7.

//     Post.findById('63bfb0e000bf08070bf491ca').then((post)=>{
//         console.log(post);
//     }).catch((err) => {
//             res.send(err);
//         });
// });
app.get('/mongoose/:id', function(req, res){
    Post.findById(req.params.id).then((post)=>{
        // console.log(post);
        res.render('home', {
            title: post.title, 
            content: post.content, 
            displayTitle: true,
            names: ['Adam', 'Ola', 'Kasia', 'Tomek']
        });
    }).catch((err) => {
            res.send(err);
        });
});

// app.get('/', function(req, res){
//     res.render('home', {
//         title: 'My app title', 
//         content: 'Lorem ipsum', 
//         displayTitle: false,
//         names: ['Adam', 'Ola', 'Kasia', 'Tomek']
//     });
// });

app.get('/blog', postController.main);
app.get('/blog/add', (req, res) => {res.render('blogViews/addPost')});
app.post('/blog/add', postController.create);
app.get('/blog/:id', postController.post);


app.listen(8080, function(){
    console.log('Serwer Node.js działa');
});