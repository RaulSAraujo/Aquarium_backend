const repository = require('../repository/aquarium')
//logica negocio

const findAll = async (request) => {
    return repository.findAll(request);
}

const create = async (request) => {
    return repository.create(request);
}

const findOne = async (request) => {
    return repository.findOne(request);
}

const update = async (request) => {
    return repository.update(request);
}

const destroy = async (request) => {
    return repository.destroy(request);
}

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
}