var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var Schema = mongoose.Schema;

function deleteEmpty(v) {
    if (v == null | v === "") {
        return undefined;
    }
    return v;
}

var InterestSchema = new Schema({
    interest: { type: String, required: [true, 'Please enter a valid interest'] }
});

var UserSchema = new Schema({
    login: { 
        type: String, 
        unique: [true, 'A user with that login already exists'],
        required: [true, 'User login name is required'] 
    },
    name: { 
        type: String, 
        required: [true, 'Name is required'] 
    },
    github_id: { 
        type: Number, 
        unique: [true, 'A user with that id already exists'],
        required: [true, 'Github id is required']
    },
    bio: {
        type: String,
        set: deleteEmpty
    },
    location: {
        type: String,
        set: deleteEmpty
    },
    blog: {
        type: String,
        set: deleteEmpty,
        validate: validators.isURL({ message: 'Please enter a valid blog URL' })
    },
    email: {
        type: String,
        set: deleteEmpty,
        validate: validators.isEmail({ message: 'Please enter a valid email address' })
    },
    company: {
        type: String,
        set: deleteEmpty
    },
    avatar_url: {
        type: String,
        set: deleteEmpty
    },
    interests: [InterestSchema],
});

module.exports = mongoose.model('User', UserSchema);