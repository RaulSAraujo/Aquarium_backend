const business = require('../business/accessory');

/**
 * @description Busca todos os acessórios.
 * @param {*} request 
 * @param {*} h
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllAccessory = async (request, h) => {
  const { params: { aquarium_id }, query, logger } = request;
  const { code, result, count } = await business.findAll(aquarium_id, query, logger);
  const body = {
    data: result
  };

  return h.response(body).code(code);
};

/**
 * @description Criação de um novo acessórios.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const createAccessory = async (request, h) => {
  const { params: { aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.create(aquarium_id, payload, logger);

  const body = {
    message,
    data: result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca apenas um acessórios.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const findOneAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.findOne(aquarium_id, id, logger);

  const body = {
    message,
    data: result
  };

  return h.response(body).code(code);
};

/**
 * @description Atualiza os dados do acessórios.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const updateAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.update(aquarium_id, id, payload, logger);

  const body = {
    message,
    data: result
  };

  return h.response(body).code(code);
};

/**
 * @description Deleta um acessórios.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const deleteAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.destroy(aquarium_id, id, logger);

  const body = {
    message,
    data: result
  };

  return h.response(body).code(code);
};

module.exports = {
  findAllAccessory,
  createAccessory,
  findOneAccessory,
  updateAccessory,
  deleteAccessory
};