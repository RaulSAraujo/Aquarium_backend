const { createSchema, getAllSchema, getOneSchema, updateSchema, deleteSchema } = require('../schemas/pet');
const { createPet, findAllPet, findOnePet, updatePet, deletePet } = require('../controllers/pet');

const router = [
    {
        method: "POST",
        path: "/aquarium/{aquarium_id}/pets",
        options: {
            handler: createPet,
            validate: createSchema
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/pets",
        options: {
            handler: findAllPet,
            validate: getAllSchema
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        options: {
            handler: findOnePet,
            validate: getOneSchema
        }
    },
    {
        method: "PUT",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        options: {
            handler: updatePet,
            validate: updateSchema
        }
    },
    {
        method: "DELETE",
        path: "/aquarium/{aquarium_id}/pets/{id}",
        options: {
            handler: deletePet,
            validate: deleteSchema
        }
    }
];

module.exports = router;