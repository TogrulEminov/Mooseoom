const express = require("express");
const router = express.Router()
const Message = require("../models/Message")
const cloudinary = require("cloudinary").v2

//! get back all the posts
router.get("/", async (req, res) => {
    try {
        const posts = await Message.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// !submits a post
router.post("/", (req, res) => {
    let message = new Message({
        name: req.body.name,
        message: req.body.message,
        affilation: req.body.affilation,
        email: req.body.email,
        tel: req.body.tel,
        website: req.body.website,
        department: req.body.department,
        topic: req.body.topic,
        
    })
    try {
        const savedMessage = message.save()
        res.json(savedMessage)
    } catch (err) {
        res.json({ message: err })
    }
});



//!specific post
router.get("/:id", async (req, res) => {
    try {
        const messageId = await Message.findById(req.params.id)
        res.json(messageId)
    } catch (err) {
        res.json({ message: err })
    }
})
// !delete post
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await Message.findByIdAndDelete(req.params.id)
        res.json(deleteId)
    } catch (err) {
        res.json({ message: err })
    }
})

// !uptade a post
router.put("/:id", (req, res) => {
    const { id } = req.params;

    Message.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.send({ message: "SUCCESSFULLY Updated" });
        }
    });
})

module.exports = router