// Faz a conexão com o banco

const findAll = async (request) => {
    try {
        const { page, itemsPerPage } = request.query
        const result = await request.mongo.db.collection('aquarium').find({}).skip((page - 1) * itemsPerPage).limit(itemsPerPage).toArray();
        return result;
    } catch (err) {
        throw request.logger.error(err)
    }
}

const create = async (request) => {
    try {
        const payload = request.payload
        const status = await request.mongo.db.collection('aquarium').insertOne(payload);
        return status;
    } catch (err) {
        throw request.logger.error(err)
    }
}

const findOne = async (request) => {
    try {
        const id = request.params.id
        const ObjectID = request.mongo.ObjectID;
        const aquarium = await request.mongo.db.collection('aquarium').findOne({ _id: new ObjectID(id) });
        return aquarium
    } catch (err) {
        throw request.logger.error(err)
    }
}

const update = async (request) => {
    try {
        const id = request.params.id
        const ObjectID = request.mongo.ObjectID;
        const payload = request.payload
        const aquarium = await request.mongo.db.collection('aquarium').updateOne({_id: new ObjectID(id)}, {$set: payload});
        return aquarium
    } catch (err) {
        throw request.logger.error(err)
    }
}

const destroy = async (request) => {
    try {
        const id = request.params.id
        const ObjectID = request.mongo.ObjectID;
        const status = await request.mongo.db.collection('aquarium').deleteOne({_id: new ObjectID(id)});
        return status;
    } catch (err) {
        throw request.logger.error(err)
    }
}

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
}