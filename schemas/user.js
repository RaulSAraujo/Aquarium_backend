const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const createSchema = {
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
            .ref('password')
            .required(),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
    })
}

const getAllSchema = {
    query: Joi.object({
        username: Joi
            .string()
            .min(3)
            .max(30),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
}

const getOneSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        username: Joi
            .string()
            .min(3)
            .max(30),
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
}

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
}

const deleteSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    })
}

module.exports = {
    createSchema,
    getAllSchema,
    getOneSchema,
    updateSchema,
    deleteSchema
}