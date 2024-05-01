const server = require("./server");

(async () => {
  await server.register({
    plugin: require('hapi-pino'),
    options: {
      logPayload: true,
      mergeHapiLogData: true,
      ignorePaths: ['/alive.txt', '/private'],
      ignoreFunc: (options, request) => request.path.startsWith('/private'),
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          minimumLevel: 'info',
          levelFirst: true,
          messageFormat: true,
          timestampKey: 'time',
          translateTime: true,
          singleLine: false,
          mkdir: true,
          append: true,
          hideObject: true
        }
      }
    }
  })

  await server.start();
  server.logger.info(`Server listening: ${server.info.uri}`)
})()