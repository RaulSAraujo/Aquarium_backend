const petRouter = require('./pet');
const userRouter = require('./user');
const sensorRouter = require('./sensor');
const aquariumRouter = require('./aquarium');
const accessoryRouter = require('./accessory');

module.exports = [aquariumRouter, userRouter, petRouter, sensorRouter, accessoryRouter]