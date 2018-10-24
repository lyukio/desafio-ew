const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 4000 })

const fs = require("fs");
const path = require("path");

const Database = require('./db')

const { config } = require('dotenv')
console.log(process.env.NODE_ENV)

// if(process.env.NODE_ENV === 'production')
    config({ path: `env/.env.${process.env.NODE_ENV}`})
//     config({ path: 'env/.env.prod'})
// else
//     config({ path: 'env/.env.dev'})

;(async function run(server) {

    const routesPath = path.join(__dirname, 'src/routes')

    fs.readdirSync(routesPath).forEach((file) => {
        const routes = require(routesPath + "/" + file)
        routes.forEach(route => server.route(route))
    })

    await server.start()
    console.log(`API rodando!!`)

})(server)