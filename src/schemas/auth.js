const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const registerSchema = {
    payload: Joi.object({
        username: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
        repeat_password: Joi
            .ref('password'),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
    })
};

const loginSchema = {
    payload: Joi.object({
        username: Joi
            .string()
            .min(3)
            .max(30)
            .required(),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required()
    })
};

module.exports = {
    registerSchema,
    loginSchema
};