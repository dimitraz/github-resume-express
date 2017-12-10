var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: { type: String, required: [true, 'Project name is required'] },
    userId: { type: String, required: [true, 'User Id is required'] },
    description: String,
    language: {
        type: String,
        validate: validators.isAlphanumeric()
    },
    html_url: {
        type: String,
        validate: validators.isURL({ message: 'Please enter a valid URL'})
    },
    ext_url: {
        type: String,
        validate: validators.isURL({ message: 'Please enter a valid URL'})
    },
    company: String, 
    avatar_url: {
        type: String,
        validate: validators.isURL({ message: 'Please enter a valid avatar URL'})
    }
});

module.exports = mongoose.model('Project', ProjectSchema);