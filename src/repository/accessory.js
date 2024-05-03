const prisma = require('../../prisma/index')

/**
 * @description Busca todos os acessórios vinculados ao acessórios.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Lista de acessórios com a contagem total de acessórios.
 */
const findAll = async (aquariumId, query, logger) => {
    try {
        const result = await prisma.accessory.findMany({
            where: {
                aquariumId,
                ...query
            },
            select: {
                id: true,
                name: true,
                quantity: true,
                created_at: true,
                updated_at: true,
            },
        })
        const count = await prisma.accessory.count()

        return { result, count };
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Criação de um novo acessório.
 * @param {object} payload - Parâmetros de criação de um novo acessórios.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do acessórios criado.
 */
const create = async (payload, logger) => {
    try {
        const result = await prisma.accessory.create({
            data: payload
        })

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Busca apenas um acessórios.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do acessório.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do acessórios.
 */
const findOne = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.accessory.findUnique({
            where: {
                aquariumId,
                id
            }
        })

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Atualiza os dados do acessórios.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do acessórios
 * @param {object} payload - Parâmetros de atualização do acessórios.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Dados do acessórios atualizado.
 */
const update = async (aquariumId, id, payload, logger) => {
    try {
        const result = await prisma.accessory.update({
            where: {
                aquariumId,
                id
            },
            data: payload
        })

        return result;
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Deleta um acessórios.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do acessórios.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do acessórios deletado.
 */
const destroy = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.accessory.delete({
            where: {
                aquariumId,
                id
            }
        })

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