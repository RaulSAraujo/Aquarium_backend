const Hapi = require("@hapi/hapi");
const router = require("./src/routes");

const server = Hapi.server({
  routes: {
    port: 3000,
    host: "0.0.0.0",
    cors: true
  }
});

router.forEach((path) => server.route(path));

module.exports = server;