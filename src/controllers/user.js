const User = require("../models/user")
class UserController {
    async get(request, reply) {
        console.log('rota funcionando')
        return reply(new User({
            email: 'lyukio'
        }));
    }
    async post(request, reply) {
        return reply("OK")
    }
}

const instance = new UserController();
module.exports = instance;