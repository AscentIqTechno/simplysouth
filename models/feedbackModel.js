var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackSchema = new Schema({
    name: String,
    email: String,
    address: String,
    mobile: String,
    message: String,
});

var Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;