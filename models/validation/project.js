var Joi = require('joi');

module.exports = {
    query: {
        language: Joi.string().regex(/[\x00-\x7F]/),
        html_url: Joi.string().uri(),
        ext_url: Joi.string().uri(),
    }
};