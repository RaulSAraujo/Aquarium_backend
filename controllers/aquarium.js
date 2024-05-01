const business = require('../business/aquarium');

const findAllAquarium = async (request, h) => {
  const result = await business.findAll(request);

  return h.response(result).code(200);
};

const createAquarium = async (request, h) => {
  const result = await business.create(request)

  return h.response(result).code(201);
};

const findOneAquarium = async (request, h) => {
  const result = await business.findOne(request)

  return h.response(result).code(200);
}

const updateAquarium = async (request, h) => {
  const result = await business.update(request)

  return h.response(result).code(200);
}

const deleteAquarium = async (request, h) => {
  const result = await business.destroy(request)

  return h.response(result).code(200);
}

module.exports = {
  findAllAquarium,
  createAquarium,
  findOneAquarium,
  updateAquarium,
  deleteAquarium
};