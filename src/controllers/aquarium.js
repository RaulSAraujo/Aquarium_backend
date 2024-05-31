const business = require('../business/aquarium');

/**
 * @description Busca todos os aquários.
 * @param {*} request 
 * @param {*} h
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllAquarium = async (request, h) => {
  const { code, result } = await business.findAll(request.query, request.logger);

  return h.response(result).code(code);
};

/**
 * @description Criação de um novo aquário
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const createAquarium = async (request, h) => {
  const { message, code, result } = await business.create(request.payload, request.logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Busca apenas um aquário.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const findOneAquarium = async (request, h) => {
  const { message, code, result } = await business.findOne(request.params.id, request.logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Atualiza os dados do aquário.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const updateAquarium = async (request, h) => {
  const { payload, params } = request;
  const { message, code, result } = await business.update(params.id, payload, request.logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

/**
 * @description Deleta um aquário.
 * @param {*} request 
 * @param {*} h 
 * @returns {void}
 */
const deleteAquarium = async (request, h) => {
  const { message, code, result } = await business.destroy(request.params.id, request.logger);

  const body = {
    message,
    result
  };

  return h.response(body).code(code);
};

module.exports = {
  findAllAquarium,
  createAquarium,
  findOneAquarium,
  updateAquarium,
  deleteAquarium
};