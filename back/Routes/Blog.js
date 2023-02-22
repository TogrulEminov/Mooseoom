const express = require("express");
const router = express.Router()
const Blog = require("../models/Blog")
const cloudinary = require("../Cloudinary/Cloudinary")

//! get back all the posts
router.get("/", async (req, res) => {
    try {
        const posts = await Blog.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// !submits a post
router.post("/", (req, res) => {
    const file = req.files.photo
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result)
        const blog = new Blog({
            title: req.body.title,
            information: req.body.information,
            date: req.body.date,
            publisher: req.body.publisher,
            publisherUrl: req.body.publisherUrl,
            Recentpost: req.body.Recentpost,
            archives: req.body.archives,
            catagories: req.body.catagories,
            blogImage: result.secure_url,
           
        })
        try {
            const savedPost = blog.save()
            res.json(savedPost)
        } catch (err) {
            res.json({ message: err })
        }
    });
})


//!specific post
router.get("/:id", async (req, res) => {
    try {
        const postId = await Blog.findById(req.params.id)
        res.json(postId)
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
router.put("/:id", (req, res) => {
    const { id } = req.params;
    Blog.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.send({ message: "SUCCESSFULLY Updated" });
        }
    });
})

module.exports = router