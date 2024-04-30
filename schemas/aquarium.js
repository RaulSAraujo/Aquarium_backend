const Joi = require('joi')

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
            .required(),
        height: Joi
            .number()
            .required(),
        width: Joi
            .number()
            .required(),
        depth: Joi
            .number()
            .required(),
        voltage: Joi
            .string()
            .valid('110', '220')
            .required(),
        created: Joi
            .date()
            .default(Date.now()),
    })
}

module.exports = {
    createSchema
}