// Faz a conexão com o banco

const findAll = async (request) => {
    try {
        const page = Number(request.query.page) || 0;
        const itemsPerPage = Number(request.query.itemsPerPage) || 10;

        const result = await request.mongo.db.collection('aquarium').find({}).sort({ id: -1 }).skip(page).limit(itemsPerPage).toArray();
        return result;
    }
    catch (err) {
        throw request.logger.error(err)
    }
}

const create = async (request) => {
    const payload = request.payload
    const status = await request.mongo.db.collection('aquarium').insertOne(payload);
    return status;
}

const findOne = async (request) => {
    const id = request.params.id
    const ObjectID = request.mongo.ObjectID;
    const aquarium = await request.mongo.db.collection('aquarium').findOne(
        {
            _id: new ObjectID(id)
        }
    );

    return aquarium
}

module.exports = {
    findAll,
    create,
    findOne
}