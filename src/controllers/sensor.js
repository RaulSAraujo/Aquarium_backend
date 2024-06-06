const business = require('../business/sensor');

/**
 * @description Busca todos os sensores.
 * @param {*} request 
 * @param {*} h
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} query - Parâmetros de busca.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllSensor = async (request, h) => {
  const { params: { aquarium_id }, query, logger } = request;
  const { code, result } = await business.findAll(aquarium_id, query, logger);

  return h.response(result).code(code);
};

/**
 * @description Criação de um novo sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de criação.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const createSensor = async (request, h) => {
  const { params: { aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.create(aquarium_id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca apenas um sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do sensor
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findOneSensor = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.findOne(aquarium_id, id, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Atualiza os dados do sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do sensor.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} payload - Parâmetros de atualização.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const updateSensor = async (request, h) => {
  const { params: { id, aquarium_id }, payload, logger } = request;
  const { message, code, result } = await business.update(aquarium_id, id, payload, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Deleta um sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do sensor.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const deleteSensor = async (request, h) => {
  const { params: { id, aquarium_id }, logger } = request;
  const { message, code, result } = await business.destroy(aquarium_id, id, logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca valores antigos do sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllOldValues = async (request, h) => {
  const { params: { aquarium_id }, query, logger } = request;
  const { code, result } = await business.findAllOldValues(aquarium_id, query, logger);

  return h.response(result).code(code);
}

/**
 * @description Busca valores antigos do sensor.
 * @param {*} request 
 * @param {*} h 
 * @property {string} id - Id do sensor.
 * @property {string} aquarium_id - Id do aquário.
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findOneOldValues = async (request, h) => {
  const { params: { aquarium_id, id }, query, logger } = request;
  const { code, result } = await business.findAOneOldValues(aquarium_id, id, query, logger);

  return h.response(result).code(code);
}

module.exports = {
  findAllSensor,
  createSensor,
  findOneSensor,
  updateSensor,
  deleteSensor,
  findAllOldValues,
  findOneOldValues
};