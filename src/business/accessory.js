const repository = require('../repository/accessory');
const aquariumRepository = require('../repository/aquarium');

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findAll Realiza a consulta no banco de dados.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const findAll = async (aquariumId, query, logger) => {
    const { result, count } = await repository.findAll(aquariumId, query, logger);

    return { message: undefined, code: 200, result, count };
};

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {object} payload - Parâmetros de criação.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.create Realiza a criação do acessórios no banco de dados
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const create = async (aquariumId, payload, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.create({ aquariumId, ...payload }, logger);

    return { message: 'Acessório criado com sucesso.', code: 201, result };
};

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {string} id - Id do acessório.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Realiza a busca do acessório de acordo com o aquariumId e o id.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const findOne = async (aquariumId, id, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.findOne(aquariumId, id, logger);

    if (!result) return { message: "Acessório não encontrado.", code: 404, result: undefined };

    return { message: undefined, code: 200, result };
};

/**
 * @description Verifica se o aquário e o acessório são validos e atualizar o acessório.
 * @param {string} aquariumId - Id do aquário.
 * @param {string} id - Id do acessórios.
 * @param {object} payload - Parâmetros para a atualização do acessórios.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o acessórios pelo id.
 * @throws {Error} Se o id for invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const update = async (aquariumId, id, payload, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const accessory = await repository.findOne(aquariumId, id, logger);

    if (!accessory) return { message: "Acessório não encontrado.", code: 404, result: undefined };

    const result = await repository.update(aquariumId, id, payload, logger);

    return { message: "Acessório atualizado com sucesso.", code: 200, result };
};

/**
 * @description Verifica se o aquário e o acessório são validos e deleta o acessório.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do acessórios.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o acessórios pelo id.
 * @throws {Error} Se o id for invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados, count: Total de registros no banco de dados.
 */
const destroy = async (aquariumId, id, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const accessory = await repository.findOne(aquariumId, id, logger);

    if (!accessory) return { message: "Acessório não encontrado.", code: 404, result: undefined };

    const result = await repository.destroy(aquariumId, id, logger);

    return { message: "Acessório deletado com sucesso.", code: 200, result };
};

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
};