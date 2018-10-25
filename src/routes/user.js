const userController = require("../controllers/user");
module.exports = [
    {
        path: '/user',
        method: 'GET',
        handler: userController.get.bind(userController)
    },
    {
        path: '/user',
        method: 'POST',
        handler: userController.post.bind(userController)
    }
]