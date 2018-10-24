const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const EmployeeSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = Mongoose.model("employee", EmployeeSchema);