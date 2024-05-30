const business = require('../business/accessory');

/**
 * @description Busca todos os acessórios.
 * @param {*} request 
 * @param {*} h
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} query - Parâmetros de busca.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllAccessory = async (request, h) => {
  const { params: { aquarium_id }, query, logger } = request;
  const { code, result } = await business.findAll(aquarium_id, query, logger);

  return h.response(result).code(code);
};

/**
 * @description Criação de um novo acessório.
 * @param {*} request 
 * @param {*} h 
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de criação.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const createAccessory = async (request, h) => {
  const { params: { aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.create(aquarium_id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca apenas um acessório.
 * @param {*} request 
 * @param {*} h
 * @property {string} id - Id do acessório.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findOneAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.findOne(aquarium_id, id, logger);

  const body = {
    message,
    result 
  };

  return h.response(body).code(code);
};

/**
 * @description Atualiza os dados do acessório.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do acessório.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de atualização.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const updateAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.update(aquarium_id, id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Deleta um acessório.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do acessório.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const deleteAccessory = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.destroy(aquarium_id, id, logger);

  const body = {
    message,
    result
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