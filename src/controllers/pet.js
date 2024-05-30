const business = require('../business/pet');

/**
 * @description Busca todos os pets.
 * @param {*} request 
 * @param {*} h
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} query - Parâmetros de busca.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllPet = async (request, h) => {
  const { params: { aquarium_id }, query, logger } = request;
  const { code, result } = await business.findAll(aquarium_id, query, logger);

  return h.response(result).code(code);
};

/**
 * @description Criação de um novo pet.
 * @param {*} request 
 * @param {*} h 
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de criação.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const createPet = async (request, h) => {
  const { params: { aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.create(aquarium_id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca apenas um pet.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do pet
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findOnePet = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.findOne(aquarium_id, id, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Atualiza os dados do pet.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do pet.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de atualização.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const updatePet = async (request, h) => {
  const { params: { id, aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.update(aquarium_id, id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Deleta um pet.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do pet.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const deletePet = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.destroy(aquarium_id, id, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

module.exports = {
  findAllPet,
  createPet,
  findOnePet,
  updatePet,
  deletePet
};