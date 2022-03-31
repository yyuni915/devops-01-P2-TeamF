'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.send("Hello world!")
         .code(200)
         
  })

  

}
