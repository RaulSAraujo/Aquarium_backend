const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const createSchema = {
    payload: Joi.object({
        name: Joi
            .string()
            .min(3)
            .required(),
        icon: Joi
            .string()
            .required(),
        format_aquarium: Joi
            .string()
            .valid('rectangular', 'curved', 'hexagonal')
            .required(),
        material: Joi
            .string()
            .valid('glass', 'acrylic', 'plastic')
            .required(),
        thickness: Joi
            .number()
            .integer()
            .description('Define measurements in mm')
            .required(),
        capacity: Joi
            .number()
            .description('Define measurements in liters')
            .required(),
        height: Joi
            .number()
            .description('Define measurements in cm')
            .required(),
        width: Joi
            .number()
            .description('Define measurements in cm')
            .required(),
        depth: Joi
            .number()
            .description('Define measurements in cm')
            .required(),
        voltage: Joi
            .string()
            .valid('110', '220')
            .required(),
        created: Joi
            .date()
            .default(new Date().toISOString()),
    })
}

const getAllSchema = {
    query: Joi.object({
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('rectangular', 'curved', 'hexagonal'),
        material: Joi
            .string()
            .valid('glass', 'acrylic', 'plastic'),
        thickness: Joi
            .number()
            .integer()
            .description('Define measurements in mm'),
        capacity: Joi
            .number()
            .description('Define measurements in liters'),
        height: Joi
            .number()
            .description('Define measurements in cm'),
        width: Joi
            .number()
            .description('Define measurements in cm'),
        depth: Joi
            .number()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110', '220')
    })
}

const getOneSchema = {
    params: Joi.object({
        id: Joi.objectId()
    }),
    query: Joi.object({
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('rectangular', 'curved', 'hexagonal'),
        material: Joi
            .string()
            .valid('glass', 'acrylic', 'plastic'),
        thickness: Joi
            .number()
            .integer()
            .description('Define measurements in mm'),
        capacity: Joi
            .number()
            .description('Define measurements in liters'),
        height: Joi
            .number()
            .description('Define measurements in cm'),
        width: Joi
            .number()
            .description('Define measurements in cm'),
        depth: Joi
            .number()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110', '220')
    })
}

const putSchema = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    }),
    query: Joi.object({
        name: Joi
            .string(),
        format_aquarium: Joi
            .string()
            .valid('rectangular', 'curved', 'hexagonal'),
        material: Joi
            .string()
            .valid('glass', 'acrylic', 'plastic'),
        thickness: Joi
            .number()
            .integer()
            .description('Define measurements in mm'),
        capacity: Joi
            .number()
            .description('Define measurements in liters'),
        height: Joi
            .number()
            .description('Define measurements in cm'),
        width: Joi
            .number()
            .description('Define measurements in cm'),
        depth: Joi
            .number()
            .description('Define measurements in cm'),
        voltage: Joi
            .string()
            .valid('110', '220')
    })
}

const deleteSchema = {
    params: Joi.object({
        id: Joi
            .number()
            .integer()
            .required()
    })
}

module.exports = {
    createSchema,
    getAllSchema,
    getOneSchema,
    putSchema,
    deleteSchema
}