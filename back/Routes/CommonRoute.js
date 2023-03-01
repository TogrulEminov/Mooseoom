const express = require("express")
const common_route = express()
var bodyParser = require("body-parser");
common_route.use(bodyParser.json());
common_route.use(bodyParser.urlencoded({ extended: true }))
const commonModel = require("../Controller/Common")

common_route.get('/datacount', commonModel.data_count)

module.exports = common_route