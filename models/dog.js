var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dogs');

var dogSchema = mongoose.Schema({
    name: String,
    age: Number,
    type: String
});

module.exports = mongoose.model('Dog', dogSchema);
