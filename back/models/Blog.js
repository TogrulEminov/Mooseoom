const express = require("express")
const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
    },
    information: {
        type: String,
    },

    date:{
        type: String,
    },
    publisher: {
        type: String,
    },
    publisherUrl: {
        type: String
    },
    blogImage: {
        type: String
    },
    Recentpost: {
        type: String
    },
    archives:{
        type:String
    },
    catagories:{
        type:String
    }


})

module.exports = mongoose.model("blog", BlogSchema)