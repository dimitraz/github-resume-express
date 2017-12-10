var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = mongoose.model('User', {
    login: { type: String, required: true },
    name: { type: String, required: true },
    bio: String,
    location: String,
    blog: String,
    email: String,
    company: String, 
    avatar_url: String
});

module.exports = User;