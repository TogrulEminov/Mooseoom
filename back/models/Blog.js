const express = require("express")
const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },


})

module.exports = mongoose.model("blog",BlogSchema)