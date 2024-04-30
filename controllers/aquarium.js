const aquarium_db = [];

const getAquarium = (request, h) => {
  return aquarium_db;
};

const createAquarium = (request, h) => {
  aquarium_db.push(request.payload);

  return  h.response(aquarium_db).code(201);
};

module.exports = {
  getAquarium,
  createAquarium
};