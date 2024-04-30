const { createSchema } = require('../schemas/aquarium')
const { createAquarium } = require('../controllers/aquarium')


const router = [
  {
    method: "GET",
    path: "/aquarium",
    handler: (req, h) => {
      return "Aquarium router";
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
    handler: (req, h) => {
      return "Aquarium router";
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