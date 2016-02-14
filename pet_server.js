var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var pets = require('./routes/pets.js')(app);

var server = app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000/');
});

