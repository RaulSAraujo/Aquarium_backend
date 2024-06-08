const petRouter = require('./pet');
const sensorRouter = require('./sensor');
const aquariumRouter = require('./aquarium');
const accessoryRouter = require('./accessory');
const authRouter = require('./auth');
const chart = require('./chart')

module.exports = [aquariumRouter, petRouter, sensorRouter, accessoryRouter, authRouter, chart];