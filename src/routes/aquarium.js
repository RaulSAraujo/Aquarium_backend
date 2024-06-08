const { createSchema, getAllSchema, getOneSchema, updateSchema, deleteSchema } = require('../schemas/aquarium');
const { createAquarium, findAllAquarium, findOneAquarium, updateAquarium, deleteAquarium } = require('../controllers/aquarium');


const router = [
  {
    method: "GET",
    path: "/aquarium",
    options: {
      handler: findAllAquarium,
      validate: getAllSchema,
    },
  },
  {
    method: "POST",
    path: "/aquarium",
    options: {
      handler: createAquarium,
      validate: createSchema
    }
  },
  {
    method: "GET",
    path: "/aquarium/{id}",
    options: {
      handler: findOneAquarium,
      validate: getOneSchema
    }
  },
  {
    method: "PUT",
    path: "/aquarium/{id}",
    options: {
      handler: updateAquarium,
      validate: updateSchema
    }
  },
  {
    method: "DELETE",
    path: "/aquarium/{id}",
    options: {
      handler: deleteAquarium,
      validate: deleteSchema
    }
  }
];

module.exports = router;