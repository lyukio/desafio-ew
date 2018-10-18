const testeRouter = require("../controllers/test");
module.exports = [
    {
        path:'/teste',
        method:'GET',
        handler: testeRouter.get.bind(testeRouter)
    },
    {
        path: '/teste',
        method: 'POST',
        handler: testeRouter.post.bind(testeRouter)
    }
]