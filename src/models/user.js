const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Password field is required']
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

class User {

}



module.exports = Mongoose.model("user", UserSchema);