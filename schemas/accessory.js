const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const createSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required()
    }),
    payload: Joi.object({
        name: Joi
            .string()
            .valid('auto feeder', 'thermostat / heater', 'filter', 'bomb', 'led light')
            .required(),
        quantity: Joi
            .number()
            .integer()
            .required()
    })
}

const getAllSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        name: Joi
            .string()
            .valid('auto feeder', 'thermostat / heater', 'filter', 'bomb', 'led light'),
        quantity: Joi
            .number()
            .integer()
    })
}

const getOneSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required(),
        id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        name: Joi
            .string()
            .valid('auto feeder', 'thermostat / heater', 'filter', 'bomb', 'led light'),
        quantity: Joi
            .number()
            .integer()
    })
}

const updateSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required(),
        id: Joi
            .objectId()
            .required()
    }),
    payload: Joi.object({
        name: Joi
            .string()
            .valid('auto feeder', 'thermostat / heater', 'filter', 'bomb', 'led light'),
        quantity: Joi
            .number()
            .integer()
    })
}

const deleteSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required(),
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