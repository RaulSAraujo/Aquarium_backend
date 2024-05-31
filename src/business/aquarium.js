const repository = require('../repository/aquarium');

/**
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findAll Realiza a consulta no banco de dados.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const findAll = async (query, logger) => {
    const result = await repository.findAll(query, logger);

    return { message: undefined, code: 200, result };
};

/**
 * @param {object} payload - Parâmetros de criação.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.create Realiza a criação do aquário no banco de dados
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const create = async (payload, logger) => {
    const result = await repository.create(payload, logger);

    return { message: 'Aquário criado com sucesso.', code: 201, result };
};

/**
 * @param {number} id - Id do aquário.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Realiza a busca do aquário de acordo com o id.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const findOne = async (id, logger) => {
    const result = await repository.findOne(id, logger);

    if (!result) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    return { message: undefined, code: 200, result };
};

/**
 * @description Verifica se o aquário é valido para atualizar.
 * @param {number} id - Id do aquário.
 * @param {object} payload - Parâmetros para a atualização do aquário.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o aquário pelo id.
 * @throws {Error} Se o id for invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const update = async (id, payload, logger) => {
    const aquarium = await repository.findOne(id, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.update(id, payload, logger);

    return { message: "Dados do aquário atualizado com sucesso.", code: 200, result };
};

/**
 * @description Verifica se o aquário é valido para deletar.
 * @param {number} id - Id do aquário.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o aquário pelo id.
 * @throws {Error} Se o id for invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const destroy = async (id, logger) => {
    const aquarium = await repository.findOne(id, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.destroy(id, logger);

    return { message: "Aquário deletado com sucesso.", code: 200, result };
};

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
};