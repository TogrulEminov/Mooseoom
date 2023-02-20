const mongoose = require("mongoose");

const artSchema = mongoose.Schema({
    name: {
        type: String,
    },
    information: {
        type: String,
    },
    title: {
        type: String,
    },
    workers: {
        type: String,
    },
    artPath: {
        type: String
    }
})

module.exports = mongoose.model("art", artSchema)