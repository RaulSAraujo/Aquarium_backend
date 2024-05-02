// regra de negocio
const repository = require('../repository/aquarium');

const findAll = (page, itemsPerPage, mongo) => {
    return repository.findAll(page, itemsPerPage, mongo);
};

const create = (payload, mongo) => {
    return repository.create(payload, mongo);
};

const findOne = (id, mongo) => {
    return repository.findOne(id, mongo);
};

const update = (id, payload, mongo) => {
    return repository.update(id, payload, mongo);
};

const destroy = (id, mongo) => {
    return repository.destroy(id, mongo);
};

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
};