var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var cats = require('./routes/cats.js')(app);

var server = app.listen(3002, function() {
    console.log('Cat Server running at http://127.0.0.1:3002/');
});

