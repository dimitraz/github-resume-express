
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: { type: String, required: true },
    userId: { type: String, required: true },
    description: String,
    language: String,
    html_url: String,
    ext_url: String,
    company: String, 
    avatar_url: String
});

module.exports = mongoose.model('Project', ProjectSchema);