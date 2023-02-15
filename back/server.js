const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var morgan = require('morgan')

const dotenv = require("dotenv");
const app = express();
app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();
mongoose.set("strictQuery", false);

const filesUpload = require("express-fileupload")
app.use(filesUpload({
        useTempFiles:true
}))

//Import Routes
const postRoute = require("./Routes/posters")
app.use('/posters', postRoute)
const blogRoute = require("./Routes/Blog");
app.use('/blog', blogRoute)


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

