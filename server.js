const Hapi = require("@hapi/hapi");
const router = require("./src/routes");

const server = Hapi.server({
  routes: {
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  }
});

router.forEach((path) => server.route(path));

module.exports = server;