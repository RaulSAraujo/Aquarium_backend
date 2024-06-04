const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required()
    }),
    payload: Joi.object({
        name: Joi
            .string()
            .valid(
                'pH',
                'Saturação',
                'Luminosidade',
                'Nível de água',
                'Nível oxigênio',
                'Temperatura',
            )
            .required(),
        current: Joi
            .string()
            .default("0"),
        old_values: Joi
            .array()
            .items(
                Joi.string()
            )
            .default([])
    })
};

const getAllSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        name: Joi
            .string()
            .valid(
                'pH',
                'Saturação',
                'Luminosidade',
                'Nível de água',
                'Nível oxigênio',
                'Temperatura',
            ),
        current: Joi
            .string()
    })
};

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
            .valid(
                'pH',
                'Saturação',
                'Luminosidade',
                'Nível de água',
                'Nível oxigênio',
                'Temperatura',
            ),
        current: Joi
            .string()
    })
};

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
            .valid(
                'pH',
                'Saturação',
                'Luminosidade',
                'Nível de água',
                'Nível oxigênio',
                'Temperatura',
            ),
        current: Joi
            .string()
    })
};

const deleteSchema = {
    params: Joi.object({
        aquarium_id: Joi
            .objectId()
            .required(),
        id: Joi
            .objectId()
            .required()
    })
};

// const getOldValuesSchema = {
    
// }

module.exports = {
    createSchema,
    getAllSchema,
    getOneSchema,
    updateSchema,
    deleteSchema
};