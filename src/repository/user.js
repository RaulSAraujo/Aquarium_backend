const prisma = require('../../prisma/index')

/**
 * @description Criação de um novo usuario.
 * @param {object} payload - Parâmetros de criação de um novo usuario.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do usuario criado.
 */
const create = async (payload, logger) => {
    try {
        const result = await prisma.user.create({
            data: payload,
            select: {
                id: true,
                username: true,
                email: true,
                password: true,
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
 * @description Busca apenas um usuario.
 * @param {number} id - Id do usuario.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do usuario.
 */
const findOne = async (id, logger) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                password: true,
                email: true,
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
 * @description Busca usuario pelo username.
 * @param {object} username - Parâmetros para buscar o usuario.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Lista de usuario com a contagem total de usuario.
 */
const findByUsername = async (username, logger) => {
    try {
        const result = await prisma.user.findUnique({
            where: {
                username
            },
            select: {
                id: true,
                username: true,
                password: true,
                email: true,
                created_at: true,
                updated_at: true
            }
        });

        return result
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Atualiza os dados do usuario.
 * @param {number} id - Id do usuario
 * @param {object} payload - Parâmetros de atualização do usuario.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Dados do usuario atualizado.
 */
const update = async (id, payload, logger) => {
    try {
        const result = await prisma.user.update({
            where: {
                id,
            },
            data: payload,
            select: {
                id: true,
                username: true,
                email: true,
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
 * @description Deleta um usuario.
 * @param {number} id - Id do usuario.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do usuario deletado.
 */
const destroy = async (id, logger) => {
    try {
        const result = await prisma.user.delete({
            where: {
                id
            },
            select: {
                id: true,
                username: true,
                email: true,
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
    create,
    findOne,
    findByUsername,
    update,
    destroy
};