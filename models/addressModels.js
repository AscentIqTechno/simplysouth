var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    name: String,
    mobile: String,
    address: String,
});

var Address = mongoose.model('Address', addressSchema);

module.exports = Address;