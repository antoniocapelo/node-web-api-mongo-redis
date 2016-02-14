var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var dogs = require('./routes/dogs.js')(app);

var server = app.listen(3001, function() {
    console.log('Dog Server running at http://127.0.0.1:3001/');
});

