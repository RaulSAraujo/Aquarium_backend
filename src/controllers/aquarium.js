const business = require('../business/aquarium');

const findAllAquarium = async (request, h) => {
  const { page, itemsPerPage } = request.query;
  const { result, count } = await business.findAll(page, itemsPerPage, request.mongo);
  const body = {
    paging: {
      total: count,
      page: page,
      itemsPerPage: itemsPerPage
    },
    data: result
  };

  return h.response(body).code(200);
};

const createAquarium = async (request, h) => {
  const { payload, mongo } = request;
  const result = await business.create(payload, mongo);
  const body = {
    message: "Aquarium criado com sucesso.",
    data: result
  };

  return h.response(body).code(201);
};

const findOneAquarium = async (request, h) => {
  const { params, mongo } = request;
  const result = await business.findOne(params.id, mongo);

  return h.response(
    result
      ? { data: result }
      : { message: "Aquário não encontrado" }
  ).code(result > 0 ? 200 : 404);
};

const updateAquarium = async (request, h) => {
  const { payload, mongo, params } = request;
  const aquarium = await business.update(params.id, payload, mongo);

  return h.response(
    aquarium.matchedCount > 0
      ? { message: "Aquário atualizado com sucesso.", data: { payload, modifiedCount: aquarium.modifiedCount } }
      : { message: "Aquário não encontrado" }
  ).code(aquarium.matchedCount > 0 ? 200 : 404);
};

const deleteAquarium = async (request, h) => {
  const { params, mongo } = request;
  const status = await business.destroy(params.id, mongo);

  return h.response(
    status.deletedCount > 0
      ? { message: "Aquário deletado com sucesso.", id: params.id, deletedCount: status.deletedCount }
      : { message: "Aquário não encontrado" }
  ).code(status.deletedCount > 0 ? 200 : 404);
};

module.exports = {
  findAllAquarium,
  createAquarium,
  findOneAquarium,
  updateAquarium,
  deleteAquarium
};