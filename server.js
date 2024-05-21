const Hapi = require("@hapi/hapi");
const router = require("./src/routes");

const server = Hapi.server({
  routes: {
    cors: true
  }
});

router.forEach((path) => server.route(path));

module.exports = server;