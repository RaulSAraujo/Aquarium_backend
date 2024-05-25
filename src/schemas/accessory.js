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
                'Filtro',
                'Luz LED',
                'Bombinha',
                'Plantas naturais',
                'Alimentador automático',
                'Termostato / Aquecedor',
            )
            .required()
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
                'Filtro',
                'Luz LED',
                'Bombinha',
                'Plantas naturais',
                'Alimentador automático',
                'Termostato / Aquecedor'
            )
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
                'Filtro',
                'Luz LED',
                'Bombinha',
                'Plantas naturais',
                'Alimentador automático',
                'Termostato / Aquecedor'
            ),
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
                'Filtro',
                'Luz LED',
                'Bombinha',
                'Plantas naturais',
                'Alimentador automático',
                'Termostato / Aquecedor'
            ),
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

module.exports = {
    createSchema,
    getAllSchema,
    getOneSchema,
    updateSchema,
    deleteSchema
};