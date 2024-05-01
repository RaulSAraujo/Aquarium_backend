const business = require('../business/aquarium');

// request.logger.info('In handler %s', request.path)

const findAllAquarium = async (request, h) => {
  const { query } = request;
  const result = await business.findAll(query);
  return h.response(result).code(200);
};

const createAquarium = async (request, h) => {
  const { payload } = request
  const result = await business.create(payload)
  return h.response(result).code(201);
};

const findOneAquarium = async (request, h) => {
  const { id } = request.params
  const result = await business.findOne(id)
  return h.response(result).code(200);
}

module.exports = {
  findAllAquarium,
  createAquarium,
  findOneAquarium
};