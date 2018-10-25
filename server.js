const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 4000 })

const fs = require("fs");
const path = require("path");

const Database = require('./database')

const { config } = require('dotenv')

process.env.NODE_ENV === 'prod' ? config({ path: 'env/.env.prod'}) : config({ path: 'env/.env.dev'})

console.log(`URL: ${process.env.MONGO_URL}`)

;(async function run(server) {
    await Database.connect()
    const routesPath = path.join(__dirname, 'src/routes')

    fs.readdirSync(routesPath).forEach((file) => {
        const routes = require(routesPath + "/" + file)
        routes.forEach(route => server.route(route))
    })

    await server.start()
    console.log(`API rodando!!`)

})(server)