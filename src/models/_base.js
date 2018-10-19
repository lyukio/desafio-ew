var mongoose = require("mongoose");

var BaseSchema = new mongoose.Schema({
    createdAt?: Date,
});

module.exports = mongoose.model("base", BaseSchema);