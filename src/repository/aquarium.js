const prisma = require('../../prisma/index')

/**
 * @description Busca todos os aquários.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @param {object} user - Dados do usuario.
 * @returns {object} Lista de aquários com a contagem total de aquários.
 */
const findAll = async (query, logger, user) => {
    try {
        const result = await prisma.aquarium.findMany({
            where: {
                userId: user.id,
                ...query
            },
            select: {
                id: true,
                name: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                height: true,
                voltage: true,
                capacity: true,
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
 * @description Criação de um novo aquário.
 * @param {object} payload - Parâmetros de criação de um novo aquário.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @param {object} user - Dados do usuario.
 * @returns {object} Dados do aquário criado.
 */
const create = async (payload, logger, user) => {
    try {
        const result = await prisma.aquarium.create({
            data: {
                userId: user.id,
                ...payload
            },
            select: {
                id: true,
                name: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                voltage: true,
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
 * @description Busca apenas um aquário.
 * @param {number} id - Id do aquário.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @param {object} user - Dados do usuario.
 * @returns {object} Dados do aquário.
 */
const findOne = async (id, logger, user) => {
    try {
        const result = await prisma.aquarium.findUnique({
            where: {
                id,
                userId: user.id
            },
            select: {
                id: true,
                name: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                voltage: true,
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
 * @description Atualiza os dados do aquário.
 * @param {number} id - Id do aquário
 * @param {object} payload - Parâmetros de atualização do aquário.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @param {object} user - Dados do usuario.
 * @returns {object} Dados do aquário atualizado.
 */
const update = async (id, payload, logger, user) => {
    try {
        const result = await prisma.aquarium.update({
            where: {
                id,
                userId: user.id,
            },
            data: payload,
            select: {
                id: true,
                name: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                voltage: true,
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
 * @description Deleta um aquário.
 * @param {number} id - Id do aquário.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @param {object} user - Dados do usuario.
 * @returns {object} Dados do aquário deletado.
 */
const destroy = async (id, logger, user) => {
    try {
        const result = await prisma.aquarium.delete({
            where: {
                id,
                userId: user.id,
            },
            select: {
                id: true,
                name: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                voltage: true,
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