const business = require('../business/aquarium');

/**
 * @description Busca todos os aquários.
 * @param {*} request 
 * @param {*} h
 * @property {number} page - Pagina atual.
 * @default 1
 * @property {number} itemsPerPage - Quatidade de itens exibidos na pagina.
 * @default 10
 * @property {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {void}
 */
const findAllAquarium = async (request, h) => {
  const { page, itemsPerPage } = request.query;
  delete request.query.page
  delete request.query.itemsPerPage

  const { code, result, count } = await business.findAll(page, itemsPerPage, request.query, request.logger);
  const body = {
    paging: {
      total: count,
      page: page,
      current: result.length,
      itemsPerPage: itemsPerPage < 50 ? itemsPerPage : 50,
      maxItemsPerPage: 50
    },
    data: result
  };

  return h.response(body).code(code);
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
    data: result
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
    data: result
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
    data: result
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
    data: result
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