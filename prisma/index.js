const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient(
    // { log: ['info', 'query'] }
)

module.exports = prisma