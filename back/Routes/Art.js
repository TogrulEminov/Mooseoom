const express = require("express");
const router = express.Router()
const Art = require("../models/Art")
// const cloudinary=require("../Cloudinary/Cloudinary")
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: 'dboyaaec5',
    api_key: '391521928856559',
    api_secret: 'qzZESyRwwIF-5ELmWZPbRi8rvh4',
    secure: true
});

//! get back all the posts
router.get("/", async (req, res) => {
    try {
        const posts = await Art.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})
// !submits a post
router.post("/", (req, res) => {
    console.log(req.body);
    const file = req.files.images
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result);
      
        
        try {
            let newArt = new Art({
                name: req.body.name,
                information: req.body.information,
                percantagePrice: req.body.percantagePrice,
                title: req.body.title,
                workers: req.body.workers,
                artPath: result.secure_url,
                user:req.userId
            })
            newArt.save()
            const savedPost = newArt
            res.json({
                message: "Success",
                data: savedPost
            })
        } catch (err) {
            res.json({ message: err })
        }
    });

});

//!specific post
router.get("/:id", async (req, res) => {
    try {
        const postId = await Art.findById(req.params.id)
        res.json(postId)
    } catch (err) {
        res.json({ message: err })
    }
})
// !delete post
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await Art.findByIdAndDelete(req.params.id)
        res.json(deleteId)
    } catch (err) {
        res.json({ message: err })
    }
})

// !uptade a post
router.put("/:id", (req, res) => {
    const { id } = req.params;

    Art.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.send({ message: "SUCCESSFULLY Updated" });
        }
    });
})

module.exports = router