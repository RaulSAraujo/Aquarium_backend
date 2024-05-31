const prisma = require('../../prisma/index')

/**
 * @description Busca todos os sensores vinculados ao aquário.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Lista de sensores com a contagem total de sensores vinculadas ao aquário.
 */
const findAll = async (aquariumId, query, logger) => {
    try {
        const result = await prisma.sensor.findMany({
            where: {
                aquariumId,
                ...query
            },
            select: {
                id: true,
                name: true,
                metric: true,
                current: true,
                old_values: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Criação de um novo sensor.
 * @param {object} payload - Parâmetros de criação de um novo sensor.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do sensor criado.
 */
const create = async (payload, logger) => {
    try {
        const result = await prisma.sensor.create({
            data: payload,
            select: {
                id: true,
                name: true,
                metric: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Busca apenas um sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do sensor.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do sensor.
 */
const findOne = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.sensor.findUnique({
            where: {
                aquariumId,
                id
            },
            select: {
                id: true,
                name: true,
                metric: true,
                current: true,
                old_values: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Atualiza os dados do sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do sensor
 * @param {object} payload - Parâmetros de atualização do sensor.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Dados do sensor atualizado.
 */
const update = async (aquariumId, id, payload, logger) => {
    try {
        const result = await prisma.sensor.update({
            where: {
                aquariumId,
                id
            },
            data: payload,
            select: {
                id: true,
                name: true,
                metric: true,
                current: true,
                old_values: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Deleta o sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do sensor.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do sensor deletado.
 */
const destroy = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.sensor.delete({
            where: {
                aquariumId,
                id
            },
            select: {
                id: true,
                name: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
};