const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var morgan = require('morgan')
const postRoute = require("./Routes/posters")
const blogRoute = require("./Routes/Blog");
const authRouter=require('./Routes/Auth')
const artRoute = require("./Routes/Art");
const messageRoute = require("./Routes/Message");
const CommonRoute=require("./Routes/CommonRoute")
const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();
mongoose.set("strictQuery", false);

const fileUpload = require("express-fileupload")
app.use(fileUpload({
    useTempFiles: true
}))

//Import Routes
// !poster 
app.use('/posters', postRoute)
//!blog
app.use('/blog', blogRoute)
//! art 
app.use('/art', artRoute)
//! message
app.use('/message', messageRoute)
// ! user
app.use("/auth",authRouter)

app.use("/common",CommonRoute)

//Routes
app.get("/", (req, res) => {
    res.send("we are on home")
})





// ?connect to db
const PORT = process.env.PORT
const DB = process.env.URL.replace("<password>", process.env.PASSWORD)

mongoose.connect(DB, () => {
    console.log("connecting Database")
    app.listen(PORT, () => {
        console.log(`PORT IS UP AND RUNNING ${PORT}`)
    })
})

