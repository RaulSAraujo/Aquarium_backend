const petRouter = require('./pet');
const sensorRouter = require('./sensor');
const aquariumRouter = require('./aquarium');
const accessoryRouter = require('./accessory');
const authRouter = require('./auth');

module.exports = [aquariumRouter, petRouter, sensorRouter, accessoryRouter, authRouter];