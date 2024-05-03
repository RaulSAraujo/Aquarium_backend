
const business = require('../business/accessory');

const findAllAccessory = async (request, h) => {
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

const createAccessory = async (request, h) => {
  const { params, payload, mongo } = request;
  const { message, code, result } = await business.create(params.aquarium_id, payload, mongo);

  const body = {
    message: message,
    data: result
  }

  return h.response(body).code(code);
};

const findOneAccessory = async (request, h) => {
  const { params, mongo } = request;
  const result = await business.findOne(params.id, mongo);

  return h.response(
    result
      ? { data: result }
      : { message: "Aquário não encontrado" }
  ).code(result > 0 ? 200 : 404);
};

const updateAccessory = async (request, h) => {
  const { payload, mongo, params } = request;
  const accessory = await business.update(params.id, payload, mongo);

  return h.response(
    accessory.matchedCount > 0
      ? { message: "Aquário atualizado com sucesso.", data: { payload, modifiedCount: accessory.modifiedCount } }
      : { message: "Aquário não encontrado" }
  ).code(accessory.matchedCount > 0 ? 200 : 404);
};

const deleteAccessory = async (request, h) => {
  const { params, mongo } = request;
  const status = await business.destroy(params.id, mongo);

  return h.response(
    status.deletedCount > 0
      ? { message: "Aquário deletado com sucesso.", id: params.id, deletedCount: status.deletedCount }
      : { message: "Aquário não encontrado" }
  ).code(status.deletedCount > 0 ? 200 : 404);
};

module.exports = {
  findAllAccessory,
  createAccessory,
  findOneAccessory,
  updateAccessory,
  deleteAccessory
};