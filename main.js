var express = require("express")
var server = express()

server.listen(22000)
server.use(express.static("public"))
