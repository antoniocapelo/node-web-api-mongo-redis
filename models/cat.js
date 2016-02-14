var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cats');

var catSchema = mongoose.Schema({
    name: String,
    age: Number,
    type: String
});

module.exports = mongoose.model('Cat', catSchema);
