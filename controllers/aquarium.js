const business = require('../business/aquarium');

const findAllAquarium = async (request, h) => {
  const { result, count, page, itemsPerPage } = await business.findAll(request);
  const body = {
    paging: {
      total: count,
      page: page,
      itemsPerPage: itemsPerPage
    },
    data: result
  }

  return h.response(body).code(200);
};

const createAquarium = async (request, h) => {
  const result = await business.create(request)
  const body = {
    message: "Aquarium criado com sucesso.",
    data: result
  }

  return h.response(body).code(201);
};

const findOneAquarium = async (request, h) => {
  const result = await business.findOne(request)
  return h.response(
    result
      ? { data: result }
      : { message: "Aquário não encontrado" }
  ).code(result > 0 ? 200 : 404);
}

const updateAquarium = async (request, h) => {
  const { aquarium, payload } = await business.update(request)

  return h.response(
    aquarium.matchedCount > 0
      ? { message: "Aquário atualizado com sucesso.", data: { payload, modifiedCount: aquarium.modifiedCount } }
      : { message: "Aquário não encontrado" }
  ).code(aquarium.matchedCount > 0 ? 200 : 404);
}

const deleteAquarium = async (request, h) => {
  const { status, id } = await business.destroy(request)

  return h.response(
    status.deletedCount > 0
      ? { message: "Aquário deletado com sucesso.", id, deletedCount: status.deletedCount }
      : { message: "Aquário não encontrado" }
  ).code(status.deletedCount > 0 ? 200 : 404);
}

module.exports = {
  findAllAquarium,
  createAquarium,
  findOneAquarium,
  updateAquarium,
  deleteAquarium
};