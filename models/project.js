var mongoose = require('mongoose');
var validators = require('mongoose-validators');
var Schema = mongoose.Schema;

function deleteEmpty(v) {
    if (v == null | v === "") {
        return undefined;
    }
    return v;
}

var ProjectSchema = new Schema({
    name: { type: String, required: [true, 'Project name is required'] },
    userId: { type: String, required: [true, 'User Id is required'] },
    description: {
        type: String,
        set: deleteEmpty
    },
    language: {
        type: String,
        set: deleteEmpty,
        validate: validators.isAscii({ message: 'Please enter a valid language' })
    },
    html_url: {
        type: String,
        set: deleteEmpty,
        validate: validators.isURL({ message: 'Please enter a valid URL'})
    },
    ext_url: {
        type: String,
        set: deleteEmpty,
        validate: validators.isURL({ message: 'Please enter a valid URL'})
    }
});

module.exports = mongoose.model('Project', ProjectSchema);