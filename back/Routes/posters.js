const express = require("express");
const router = express.Router()
const Poster = require("../models/Post")
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
        const posts = await Poster.find();
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
       let Post = new Poster({
            name: req.body.name,
            description: req.body.description,
            rate: req.body.rate,
            price: req.body.price,
            percantagePrice: req.body.percantagePrice,
            sale: req.body.sale,
            catagory: req.body.catagory,
            catagoryTwo: req.body.catagoryTwo,
            imagePath: result.secure_url,

        })
        try {
            const savedPost = Post.save()
            res.json(savedPost)
        } catch (err) {
            res.json({ message: err })
        }
    });

})


//!specific post
router.get("/:id", async (req, res) => {
    try {
        const postId = await Poster.findById(req.params.id)
        res.json(postId)
    } catch (err) {
        res.json({ message: err })
    }
})
// !delete post
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await Poster.findByIdAndDelete(req.params.id)
        res.json(deleteId)
    } catch (err) {
        res.json({ message: err })
    }
})

// !uptade a post
router.put("/:id", (req, res) => {
    const { id } = req.params;

    Poster.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.send({ message: "SUCCESSFULLY Updated" });
        }
    });
})

module.exports = router