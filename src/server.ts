import fastify from 'fastify'

const app = fastify()
app.get('/', (request, reply) => {
  reply.send('Hello world!')
})

app.listen({ port: 3333 }).then(() => {
  console.log(`Server listening on http://localhost:3333`)
})
