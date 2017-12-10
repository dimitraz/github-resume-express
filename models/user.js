var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var Schema = mongoose.Schema;

var InterestSchema = new Schema({
    interest: { type: String, required: [true, 'Please enter a valid interest'] }
});

var UserSchema = new Schema({
    login: { type: String, required: [true, 'User login name is required'] },
    name: { type: String, required: [true, 'Name is required'] },
    bio: String,
    location: String,
    blog: {
        type: String,
        validate: validators.isURL({ message: 'Please enter a valid blog URL'})
    },
    email: {
        type: String,
        validate: validators.isEmail({ message: 'Please enter a valid email address'})
    },
    company: String,
    avatar_url: String,
    interests: [InterestSchema],
});

module.exports = mongoose.model('User', UserSchema);