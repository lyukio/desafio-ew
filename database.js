const Mongoose = require('mongoose')

class Database{
    connect() {
        Mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
        const connection = Mongoose.connection
        connection.once('open', () => console.log('db rodando!!'))
    }
}


module.exports = new Database()