const Hapi = require("@hapi/hapi");
const router = require("./routes")

const server = Hapi.server({
  port: 8000,
  host: "localhost"
});

router.forEach((path) => server.route(path));

module.exports = server;