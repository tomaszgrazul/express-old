const express = require('express');
const app = express();


app.get('/', function(req, res) {

    res.send('Witaj programisto 123!');
});

// app.get('/user/:id', function(req, res) {
//     res.send('user ' + req.params.id)
// });

app.get('/user/:id?/:name?', function(req, res) {
    

    if(req.params.id) {
        res.send('user ' + req.params.id + ' ' +  req.params.name);
    } else {
        res.send('All users');
    }
});

app.get('/data', function(req, res) {
    
    console.log(req.query);
    if(req.query.search) {
        res.send('wyszukaj ' + req.query.search + ' ' +  req.query.model);
    } else {
        res.send('Błąd');
    }
});

app.listen(8080, function() {
    console.log('Serwer Node.js działa');
});