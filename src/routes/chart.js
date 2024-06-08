const { getAllOldValuesSchema } = require('../schemas//sensor');
const { findAll } = require('../controllers/chart');

const router = [
    {
        method: "GET",
        path: "/aquarium/{aquarium_id}/chart",
        options: {
            handler: findAll,
            validate: getAllOldValuesSchema
        }
    }
];

module.exports = router;