const Hapi = require("@hapi/hapi");
const router = require("./src/routes");

const server = Hapi.server({
  port: 4000,
  host: "localhost"
});

router.forEach((path) => server.route(path));

module.exports = server;