var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var franchiseSchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    address: String,
    location: String,
    comments: String,
});

var Franchise = mongoose.model('Franchise', franchiseSchema);

module.exports = Franchise;