const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const createSchema = {
    payload: Joi.object({
        name: Joi
            .string()
            .min(3)
            .required(),
        format_aquarium: Joi
            .string()
            .valid('Retangular', 'Curvo', 'Sextavado')
            .required(),
        material: Joi
            .string()
            .valid('Vidro', 'Acrílico', 'Plástico')
            .required(),
        thickness: Joi
            .string()
            .description('Define measurements in mm')
            .required(),
        capacity: Joi
            .string()
            .description('Define measurements in liters')
            .required(),
        height: Joi
            .string()
            .description('Define measurements in cm')
            .required(), 
        width: Joi
            .string()
            .description('Define measurements in cm')
            .required(),
        voltage: Joi
            .string()
            .valid('110V', '220V')
            .required()
    })
};

const getAllSchema = {
    query: Joi.object({
        page: Joi
            .number()
            .integer()
            .default(1),
        itemsPerPage: Joi
            .number()
            .integer()
            .default(10),
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('Retangular', 'Curvo', 'Sextavado'),
        material: Joi
            .string()
            .valid('Vidro', 'Acrílico', 'Plástico'),
        thickness: Joi
            .string()
            .description('Define measurements in mm'),
        capacity: Joi
            .string()
            .description('Define measurements in liters'),
        height: Joi
            .string()
            .description('Define measurements in cm'),
        width: Joi
            .string()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110V', '220V')
    })
};

const getOneSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    }),
    query: Joi.object({
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('Retangular', 'Curvo', 'Sextavado'),
        material: Joi
            .string()
            .valid('Vidro', 'Acrílico', 'Plástico'),
        thickness: Joi
            .string()
            .description('Define measurements in mm'),
        capacity: Joi
            .string()
            .description('Define measurements in liters'),
        height: Joi
            .string()
            .description('Define measurements in cm'),
        width: Joi
            .string()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110V', '220V')
    })
};

const updateSchema = {
    params: Joi.object({
        id: Joi
            .objectId()
            .required()
    }),
    payload: Joi.object({
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('Retangular', 'Curvo', 'Sextavado'),
        material: Joi
            .string()
            .valid('Vidro', 'Acrílico', 'Plástico'),
        thickness: Joi
            .string()
            .description('Define measurements in mm'),
        capacity: Joi
            .string()
            .description('Define measurements in liters'),
        height: Joi
            .string()
            .description('Define measurements in cm'),
        width: Joi
            .string()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110V', '220V')
    })
};

const deleteSchema = {
    params: Joi.object({
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