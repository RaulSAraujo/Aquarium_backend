// regra de negocio
const repository = require('../repository/accessory');
const aquariumRepository = require('../repository/aquarium');

const findAll = (page, itemsPerPage, mongo) => {
    return repository.findAll(page, itemsPerPage, mongo);
};

const create = async (aquarium_id, payload, mongo) => {
    const aquarium = await aquariumRepository.findOne(aquarium_id, mongo); // Verificar se o id do aquarium é valido

    if (!aquarium) return { message: "Aquário não encontrado.", code: 404, result: undefined };

    const result = await repository.create(payload, mongo);
    // await aquariumRepository.update(aquarium_id, { acessories_id: [...aquarium.acessories_id, result._id] }, mongo);

    return { message: "Acessorio criado com sucesso.", code: 201, result };
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