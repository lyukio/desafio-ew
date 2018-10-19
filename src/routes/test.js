const testeController = require("../controllers/test");
module.exports = [
    {
        path:'/teste',
        method:'GET',
        handler: testeController.get.bind(testeController)
    },
    {
        path: '/teste',
        method: 'POST',
        handler: testeController.post.bind(testeController)
    }
]