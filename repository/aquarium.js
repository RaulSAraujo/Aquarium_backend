// Faz a conexão com o banco
const aquarium_db = [];

const findAll = async (query) => {
    const objects = Object.entries(query)

    if (objects) {
        const results = aquarium_db.filter(aquarium => {
            let match = true;

            for (const key in query) {
                if (aquarium[key] !== query[key]) {
                    match = false;
                    break;
                }
            }

            return match;
        });

        return results
    }

    return aquarium_db
}

const create = async (product) => {
    product.id = Math.floor(Math.random() * 1000);
    aquarium_db.push(product);
    return product;
}

const findOne = async (id) => {
    return aquarium_db.find(p => p.id === id) || {};
}

module.exports = {
    findAll,
    create,
    findOne
}