const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('pubic'))
app.use(bodyParser.urlencoded({ extended: true }))
const url = '/mongodb://localhost:27017/userStore'

const database = mongoose.connection;

app.post("/signup", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const data = { name, email, phone, password }
})


mongoose.connect()
app.get("/", (req, res) => {
    res.send("Hello friend")
})

app.listen(8000, console.log("server started on port 8000"))