const art = require("../models/Art")
const blog = require("../models/Blog")
const message = require("../models/Message")
const shop = require("../models/Post")
const user = require("../models/User")
const data_count = async (req, res) => {
    try {
        const count_data = []
        const art_data = await art.find().count()
        const blog_data = await blog.find().count()
        const shop_data = await shop.find().count()

        count_data.push({
            artNum:art_data,
            blogNum:blog_data,
            shopNum:shop_data
        })
        res.status(200).send({success:true,msg:"Counting data",data:count_data})
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message })
    }
}


module.exports = {
    data_count
}