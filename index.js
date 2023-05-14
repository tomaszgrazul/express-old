const express = require('express');
const app = express();



app.use(express.static('public'));

app.get('/', function(req, res) {

    res.send('Witaj programisto 123!');
});

app.listen(8080, function() {
    console.log('Serwer Node.js działa');
});