const mongoose = require("mongoose");
const { Schema } = mongoose
const MessageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    affilation: {
        type: String,
    },

    email: {
        type: String,
        required: true
    },
    tel: {
        type: Number,
    },
    website: {
        type: String
    },
    department: {
        type: String
    },
    topic: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model("message", MessageSchema)