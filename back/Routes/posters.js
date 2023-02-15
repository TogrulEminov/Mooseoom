const express = require("express");
const Post = require("../models/Post");
const router = express.Router()
const Poster = require("../models/Post")
const multer = require('multer')
const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dboyaaec5",
    api_key: "391521928856559",
    api_secret: "qzZESyRwwIF-5ELmWZPbRi8rvh4"
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date() + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})



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
    console.log(req.body)
    const file = req.files.photo
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result)
        const Post = new Poster({
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
        const postId = await Post.findById(req.params.id)
        res.json(postId)
    } catch (err) {
        res.json({ message: err })
    }
})
// !delete post
router.delete('/:id', async (req, res) => {
    try {
        const deleteId = await Post.findByIdAndDelete(req.params.id)
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