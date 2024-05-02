const { createSchema, getAllSchema, getOneSchema, updateSchema, deleteSchema } = require('../schemas/accessory');
const { createAccessory, findAllAccessory, findOneAccessory, updateAccessory, deleteAccessory } = require('../controllers/accessory');

const router = [
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/accessories",
        options: {
            handler: findAllAccessory,
            validate: getAllSchema
        }
    },
    {
        method: "POST",
        path: "/aquarium/{aquarium_id}/accessories",
        options: {
            handler: createAccessory,
            validate: createSchema
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/accessories/{id}",
        options: {
            handler: findOneAccessory,
            validate: getOneSchema
        }
    },
    {
        method: "PUT",
        path: "/aquarium/{aquarium_id}/accessories/{id}",
        options: {
            handler: updateAccessory,
            validate: updateSchema
        }
    },
    {
        method: "DELETE",
        path: "/aquarium/{aquarium_id}/accessories/{id}",
        options: {
            handler: deleteAccessory,
            validate: deleteSchema
        }
    }
];

module.exports = router;