const Post = require('../static-files/models/PostModel');

module.exports = {
    main: (req, res) => {
        Post.find({}).lean().then((posts)=>{
                    console.log(posts);

                    // res.send('działa'); 
                    res.render('blogViews/blog', {posts: posts});

                }).catch((err) => {
                        res.send(err);
                    });
    },
    post: (req, res) => {
        Post.findById(req.params.id).then((post)=>{
            res.render('blogViews/singlePost', post);

        }).catch((err) => {
                // res.send(err);
                res.send('Get post error');
            });
    },
    create: (req, res) => {
        // console.log(req.body);

        let newPost = new Post({...req.body, author: 'Jan K.'});
        newPost.save();

        res.redirect('/blog');
    }
};