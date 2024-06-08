const repository = require('../repository/sensor');
const aquariumRepository = require('../repository/aquarium');


/**
 * @description Verifica se o aquário e o sensor são validos e busca os dados antigos do sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @callback repository.findOne Busca o sensor pelo id.
 * @throws {Error} Se o id || aquariumId invalido.
 * @returns {object}  message: Erro ou alerta exibido ao usuario, code: Status HTTP, result: Dados obtidos do banco de dados.
 */
 const findAll = async (aquariumId, query, logger) => {
    const aquarium = await aquariumRepository.findOne(aquariumId, logger);

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.findAllOldValues(aquariumId, query, logger);

    return { message: undefined, code: 200, result };
}

module.exports = {
    findAll
}