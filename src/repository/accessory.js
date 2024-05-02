// Faz a conexão com o banco

const findAll = async (page, itemsPerPage, mongo) => {
    try {
        const { db } = mongo;
        const result = await db.collection('accessories').find({}).skip((page - 1) * itemsPerPage).limit(itemsPerPage).toArray();
        const count = await db.collection('accessories').countDocuments();

        return { result, count };
    } catch (err) {
        throw request.logger.error(err);
    }
};

const create = async (payload, mongo) => {
    try {
        const { db } = mongo;
        const status = await db.collection('accessories').insertOne(payload);

        return { _id: status.insertedId, ...payload };
    } catch (err) {
        throw request.logger.error(err);
    }
};

const findOne = async (request) => {
    try {
        const { ObjectID, db } = mongo;
        const aquarium = await db.collection('accessories').findOne({ _id: new ObjectID(id) });

        return aquarium;
    } catch (err) {
        throw request.logger.error(err);
    }
};

const update = async (request) => {
    try {
        const { ObjectID, db } = mongo;
        const aquarium = await db.collection('accessories').updateOne({ _id: new ObjectID(id) }, { $set: payload });

        return aquarium;
    } catch (err) {
        throw request.logger.error(err);
    }
};

const destroy = async (request) => {
    try {
        const { ObjectID, db } = mongo;
        const status = await db.collection('accessories').deleteOne({ _id: new ObjectID(id) });

        return status
    } catch (err) {
        throw request.logger.error(err);
    }
};

module.exports = {
    findAll,
    create,
    findOne,
    update,
    destroy
};