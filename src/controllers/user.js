const User = require("../models/user")
class UserController {
    async get(request, reply) {
        let user = await User.find({})
        return reply("ok");
    }
    async post(request, reply) {
        let user = await User.create({
            email: 'lyukio',
            password: 'sads',
        })
        return reply(user)
    }
}

const instance = new UserController();
module.exports = instance;