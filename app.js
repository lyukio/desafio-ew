const Hapi = require('hapi')
const server = new Hapi.Server()
server.connection({ port: 4000 })

const fs = require("fs");
const path = require("path");

(async function run(server) {

    const routesPath = path.join(__dirname, 'src/routes');

    fs.readdirSync(routesPath).forEach((file) => {
        const routes = require(routesPath + "/" + file);
        routes.forEach(route => server.route(route));
    
    });

    await server.start()
    console.log(`API rodando!!`)
})(server)