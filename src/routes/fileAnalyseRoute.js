const Route = require("express").Router()
const upload = require("multer")({dest:"./public/uploads"})

const fileAnalyseController = require("../controllers/fileAnalyseController")

Route.post("/",upload.single('upfile'),fileAnalyseController.fileAnalyse)

module.exports = Route