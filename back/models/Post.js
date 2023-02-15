const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },

    rate: {
        type: Number,
    },
    price: {
        type: String,
    },
    percantagePrice: {
        type: Number
    },
    sale: {
        type: Boolean,
    },
    catagory: {
        type: String,
    },
    catagoryTwo: {
        type: String,
    },
    imagePath: {
        type: String
    }
})

module.exports = mongoose.model("posters", PostSchema)