const mongoose = require("mongoose");

const UserScheema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createdat: {
        type: Date,
        default: Date.now
    }
});


module.exports = users = mongoose.model("users", UserScheema);