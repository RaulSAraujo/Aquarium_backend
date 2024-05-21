const Hapi = require("@hapi/hapi");
const router = require("./src/routes");

const server = Hapi.server({
  port: process.env.PORT || 4000,
  host: "0.0.0.0",
  routes: {
    cors: true
  }
});

router.forEach((path) => server.route(path));

module.exports = server;