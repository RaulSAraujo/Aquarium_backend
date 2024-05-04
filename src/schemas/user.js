const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const getOneSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        username: Joi
            .string()
            .min(8)
            .max(30),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
};

const updateSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    }),
    payload: Joi.object({
        username: Joi
            .string()
            .min(3)
            .max(30),
        password: Joi
            .string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        repeat_password: Joi
            .ref('password'),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
};

module.exports = {
    getOneSchema,
    updateSchema
};