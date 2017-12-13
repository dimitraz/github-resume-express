var Joi = require('joi');

module.exports = {
    query: {
        email: Joi.string().email(),
        blog: Joi.string().uri()
    }
};