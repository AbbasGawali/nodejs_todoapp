const mongoose = require("mongoose");

const taskScheema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
    ,
    createdat: {
        type: Date,
        default: Date.now
    }
});


module.exports = Tasks = mongoose.model("tasks", taskScheema);