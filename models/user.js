var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InterestSchema = new Schema({
    interest: { type: String, required: true } 
});

var UserSchema = new Schema({
    login: { type: String, required: true },
    name: { type: String, required: true },
    bio: String,
    location: String,
    blog: String,
    email: String,
    company: String, 
    avatar_url: String,
    interests: [InterestSchema],
});

module.exports = mongoose.model('User', UserSchema);