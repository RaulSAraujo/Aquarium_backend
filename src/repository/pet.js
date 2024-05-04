const prisma = require('../../prisma/index')

/**
 * @description Busca todos os pets vinculados ao aquário.
 * @param {string} aquariumId - Id do aquário.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Lista de pets com a contagem total de pets vinculadas ao aquário.
 */
const findAll = async (aquariumId, query, logger) => {
    try {
        const result = await prisma.pet.findMany({
            where: {
                aquariumId,
                ...query
            },
            select: {
                id: true,
                species: true,
                quantity: true,
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
 * @description Criação de um novo pet.
 * @param {object} payload - Parâmetros de criação de um novo pet.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do pet criado.
 */
const create = async (payload, logger) => {
    try {
        const result = await prisma.pet.create({
            data: payload,
            select: {
                id: true,
                species: true,
                quantity: true,
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
 * @description Busca apenas um pet.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do pet.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do pet.
 */
const findOne = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.pet.findUnique({
            where: {
                aquariumId,
                id
            },
            select: {
                id: true,
                species: true,
                quantity: true,
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
 * @description Atualiza os dados do pet.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do pet
 * @param {object} payload - Parâmetros de atualização do pet.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Dados do pet atualizado.
 */
const update = async (aquariumId, id, payload, logger) => {
    try {
        const result = await prisma.pet.update({
            where: {
                aquariumId,
                id
            },
            data: payload,
            select: {
                id: true,
                species: true,
                quantity: true,
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
 * @description Deleta o pet.
 * @param {string} aquariumId - Id do aquário.
 * @param {number} id - Id do pet.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do pet deletado.
 */
const destroy = async (aquariumId, id, logger) => {
    try {
        const result = await prisma.pet.delete({
            where: {
                aquariumId,
                id
            },
            select: {
                id: true,
                species: true,
                quantity: true,
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