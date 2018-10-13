const Hapi = require('hapi')
const app = new Hapi.Server()
app.connection({ port: 4000 })

(async function run(app) {
    console.log(`API rodando!!`);
})(app)