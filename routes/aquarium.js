const { createSchema, getAllSchema, getOneSchema } = require('../schemas/aquarium')
const { createAquarium, findAllAquarium, findOneAquarium } = require('../controllers/aquarium')


const router = [
  {
    method: "GET",
    path: "/aquarium",
    options: {
      handler: findAllAquarium,
      validate: getAllSchema
    }
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
    handler: (req, h) => {
      return "Aquarium router";
    }
  },
  {
    method: "DELETE",
    path: "/aquarium/{id}",
    handler: (req, h) => {
      return "Aquarium router";
    }
  }
];

module.exports = router;