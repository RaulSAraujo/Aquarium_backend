const { createSchema, getAllSchema, getOneSchema, updateSchema, deleteSchema } = require('../schemas/sensor');
const { createSensor, findAllSensor, findOneSensor, updateSensor, deleteSensor } = require('../controllers/sensor');


const router = [
    {
        method: "POST",
        path: "/aquarium/{aquarium_id}/sensors",
        options: {
            handler: createSensor,
            validate: createSchema
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/sensors",
        options: {
            handler: findAllSensor,
            validate: getAllSchema
        }
    },
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/sensors/{id}",
        options: {
            handler: findOneSensor,
            validate: getOneSchema
        }
    },
    {
        method: "PUT",
        path: "/aquarium/{aquarium_id}/sensors/{id}",
        options: {
            handler: updateSensor,
            validate: updateSchema
        }
    },
    {
        method: "DELETE",
        path: "/aquarium/{aquarium_id}/sensors/{id}",
        options: {
            handler: deleteSensor,
            validate: deleteSchema
        }
    }
];

module.exports = router;