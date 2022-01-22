var express = require('express')
var cors = require('cors')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('pubic'))
app.use(bodyParser.urlencoded({ extended: true }))
const url = '/mongodb://localhost:27017'


mongoose.connect()
app.get("/", (req, res) => {
    res.send("Hello friend")
})

app.listen(8000, console.log("server started on port 8000"))