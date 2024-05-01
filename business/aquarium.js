const repository = require('../repository/aquarium')
//logica negocio

const findAll = async (query) => {
    return repository.findAll(query);
}

const create = async (product) => {
    return repository.create(product);
}

const findOne = async (id) => {
    return repository.findOne(id);
}

module.exports = {
    findAll,
    create,
    findOne
}