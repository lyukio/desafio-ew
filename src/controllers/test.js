const HelloWorld = require("../models/helloWorld");
class TesteRouterController {
    async get(request, reply) {
        console.log('rota funcionando');
        return reply(new HelloWorld().concat());
    }
    async post(request, reply) {
        return reply("OK");
    }
}

const instance = new TesteRouterController();
module.exports = instance;