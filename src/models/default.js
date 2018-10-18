var mongoose = require("mongoose");

var AchievementSchema = new mongoose.Schema({
    name: String,
    ids: {
        google: String,
        apple: String
    },
    createdAt: Date,
});


AchievementSchema.pre("save", function (next) {
    let now = new Date();
    let doc = this;
    if (!doc.createdAt) {
        doc.createdAt = now;
    }

    next();
})
module.exports = mongoose.model("achievement", AchievementSchema);