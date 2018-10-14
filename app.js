const Hapi = require('hapi')
const app = new Hapi.Server()
app.connection({ port: 4000 })

async function run(app) {
    app.route([
        {
            path:'/teste',
            method:'GET',
            handler: async (request, reply) => {
                console.log('rota funcionando')
                return reply('rota funcionando')
            }
        }
    ])

    await app.start()
    console.log(`API rodando!!`)
}

run(app)