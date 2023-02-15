const express = require("express");
const Post = require("../models/Post");
const router = express.Router()
const Blog = require("../models/Blog")


//! get back all the posts
router.get("/", async (req, res) => {
    try {
        const blog = await Blog.find();
        res.json(blog)
    } catch (err) {
        res.json({ message: err })
    }
})
// !submits a post
router.post("/", async (req, res) => {

    const newBlog = new Blog({
        title: req.body.title,
        desc: req.body.desc,
        date: req.body.date,
        publisher: req.body.publisher,
    });
    try {
        const savedBlog = await newBlog.save()
        res.json(savedBlog)
    } catch (err) {
        res.json({ message: err })
    }
})


//!specific post
router.get("/:id", async (req, res) => {
    try {
        const BlogId = await Blog.findById(req.params.id)
        res.json(BlogId)
    } catch (err) {
        res.json({ message: err })
    }
})
// !delete post
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await Blog.findByIdAndDelete(req.params.id)
        res.json(deleteId)
    } catch (err) {
        res.json({ message: err })
    }
})

// !uptade a post
router.put("/:id", async (req, res) => {
    try {
        const uptadeId = await Blog.findByIdAndUpdate(req.params.id)
        res.json(uptadeId)
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router