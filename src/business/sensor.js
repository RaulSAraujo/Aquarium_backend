const repository = require('../repository/sensor');
const aquariumRepository = require('../repository/aquarium');

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findAll Realiza a consulta no banco de dados.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const findAll = async (aquariumId, query, logger) => {
    const result = await repository.findAll(aquariumId, query, logger);

    return { message: undefined, code: 200, result };
};

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {object} payload - Parâmetros de criação.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.create Realiza a criação do sensores no banco de dados
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const create = async (aquariumId, payload, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.create({ aquariumId, ...payload }, logger);

    return { message: 'Sensor criado com sucesso.', code: 201, result };
};

/**
 * @param {string} aquariumId - Id do aquário.
 * @param {string} id - Id do sensor.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Realiza a busca do sensor de acordo com o aquariumId e o id.
 * @returns {object} message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const findOne = async (aquariumId, id, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.findOne(aquariumId, id, logger);

    if (!result) return { message: "Sensor não encontrado.", code: 404, result: undefined };

    return { message: undefined, code: 200, result };
};

/**
 * @description Verifica se o aquário e o sensor são validos e atualizar o sensor e adiciona um historico.
 * @param {string} aquariumId - Id do aquário.
 * @param {string} id - Id do sensor.
 * @param {object} payload - Parâmetros para a atualização do sensor.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o sensor pelo id.
 * @throws {Error} Se o id || aquariumId invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const update = async (aquariumId, id, payload, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const sensor = await repository.findOne(aquariumId, id, logger);

    if (!sensor) return { message: "Sensor não encontrado.", code: 404, result: undefined };

    const result = await repository.update(aquariumId, id, payload, sensor, logger);

    return { message: "Dados do sensor atualizados com sucesso.", code: 200, result };
};

/**
 * @description Verifica se o aquário e o sensor são validos e deleta o sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do sensor.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o sensor pelo id.
 * @throws {Error} Se o id || aquariumId invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const destroy = async (aquariumId, id, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const sensor = await repository.findOne(aquariumId, id, logger);

    if (!sensor) return { message: "Sensor não encontrado.", code: 404, result: undefined };

    const result = await repository.destroy(aquariumId, id, logger);

    return { message: "Sensor deletado com sucesso.", code: 200, result };
};

/**
 * @description Verifica se o aquário e o sensor são validos e busca os dados antigos do sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o sensor pelo id.
 * @throws {Error} Se o id || aquariumId invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const findAllOldValues = async (aquariumId, query, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.findAllOldValues(aquariumId, query, logger);

    return { message: undefined, code: 200, result };
}

/**
 * @description Verifica se o aquário e o sensor são validos e busca os dados antigos do sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} sensorId - Id do sensor.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o sensor pelo id.
 * @throws {Error} Se o id || aquariumId invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
const findAOneOldValues = async (aquariumId, sensorId, query, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const sensor = await repository.findOne(aquariumId, sensorId, logger);

    if (!sensor) return { message: "Sensor não encontrado.", code: 404, result: undefined };

    const result = await repository.findOneOldValues(aquariumId, sensorId, query, logger);

    return { message: undefined, code: 200, result };
}

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy,
    findAllOldValues,
    findAOneOldValues
};