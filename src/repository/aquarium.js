const prisma = require('../../prisma/index')

/**
 * @description Busca todos os aquários.
 * @param {number} page - Pagina atual.
 * @param {number} itemsPerPage - Quatidade de itens exibidos na pagina.
 * @param {object} query - Parâmetros de busca.
 * @param {object} logger - Parâmetros do log exe: info, warn, error.
 * @returns {object} Lista de aquários com a contagem total de aquários.
 */
const findAll = async (page, itemsPerPage, query, logger) => {
    try {
        const result = await prisma.aquarium.findMany({
            where: {
                ...query
            },
            select: {
                id: true,
                name: true,
                icon: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                width: true,
                depth: true,
                voltage: true,
                created_at: true,
                updated_at: true
            },
            skip: (page - 1) * itemsPerPage,
            take: itemsPerPage
        });
        const count = await prisma.aquarium.count();

        return { result, count };
    } catch (err) {
        throw logger.error(err);
    }
};

/**
 * @description Criação de um novo aquário.
 * @param {object} payload - Parâmetros de criação de um novo aquário.
 * @param {object} logger - Parâmetros de log exe: info, warn, error.
 * @returns {object} Dados do aquário criado.
 */
const create = async (payload, logger) => {
    try {
        const result = await prisma.aquarium.create({
            data: payload,
            select: {
                id: true,
                name: true,
                icon: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                width: true,
                depth: true,
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
 * @returns {object} Dados do aquário.
 */
const findOne = async (id, logger) => {
    try {
        const result = await prisma.aquarium.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                icon: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                width: true,
                depth: true,
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
 * @returns {object} Dados do aquário atualizado.
 */
const update = async (id, payload, logger) => {
    try {
        const result = await prisma.aquarium.update({
            where: {
                id,
            },
            data: payload,
            select: {
                id: true,
                name: true,
                icon: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                width: true,
                depth: true,
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
 * @returns {object} Dados do aquário deletado.
 */
const destroy = async (id, logger) => {
    try {
        const result = await prisma.aquarium.delete({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                icon: true,
                format_aquarium: true,
                material: true,
                thickness: true,
                capacity: true,
                height: true,
                width: true,
                depth: true,
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