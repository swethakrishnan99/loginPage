const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const url = "mongodb://localhost:27017/userStore";

mongoose.connect(url)
const database = mongoose.connection;
database.on('error', () => console.log("Error in Connecting to Database"));
database.once('open', () => console.log("Connected to Database"))

app.post("/sign_up", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const data = { name, email, phone, password };
    database.collection("users").insertOne(data, (err, res) => {
        if (err) throw err;
        console.log("Record inserted successfully");
    });
    return (res.redirect('success.html'))
});


app.get("/", (req, res) => {
    res.redirect("index.html")
});

app.listen(8081, console.log("server started on port 8081"));
