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
                current: true,
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
                current: true,
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
const update = async (aquariumId, id, payload, sensor, logger) => {
    try {
        const mutation = await prisma.$transaction([
            prisma.sensor.update({
                where: {
                    aquariumId,
                    id
                },
                data: payload,
                select: {
                    id: true,
                    name: true,
                    current: true,
                    created_at: true,
                    updated_at: true
                }
            }),
            prisma.oldValues.create({
                data: {
                    name: sensor.name,
                    value: sensor.current,
                    aquariumId: aquariumId,
                    sensorId: id
                },
            })
        ]);

        return mutation[0];
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

/**
 * @description Busca todos os valores antigos de todos os sensores.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do sensor deletado.
 */
const findAllOldValues = async (aquariumId, query, logger) => {
    try {
        let where = undefined
        if (query.created_at) {
            const dates = query.created_at.split(',')
            where = {
                name: query.name,
                created_at: {
                    gte: new Date(dates[0]).toISOString(), // Data inicial
                    lte: new Date(dates[1] + "T23:00:00").toISOString(), // Data final
                }
            }
        }

        const result = await prisma.oldValues.findMany({
            where: {
                aquariumId,
                ...where
            },
            select: {
                id: true,
                name: true,
                value: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
}

/**
 * @description Busca os valores antigos de apenas um sensor.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} sensorId - Id do sensor.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do sensor deletado.
 */
const findOneOldValues = async (aquariumId, sensorId, query, logger) => {
    try {

        let where = undefined
        if (query.created_at) {
            const dates = query.created_at.split(',')
            where = {
                name: query.name ? query.name : undefined,
                created_at: {
                    gte: new Date(dates[0]).toISOString(), // Data inicial
                    lte: new Date(dates[1] + "T23:00:00").toISOString(), // Data final
                }
            }
        }

        const result = await prisma.oldValues.findMany({
            where: {
                aquariumId,
                sensorId,
                ...where
            },
            select: {
                id: true,
                name: true,
                value: true,
                created_at: true,
                updated_at: true
            }
        });

        return result;
    } catch (err) {
        throw logger.error(err);
    }
}

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy,
    findAllOldValues,
    findOneOldValues
};