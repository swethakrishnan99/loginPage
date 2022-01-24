const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const url = "mongodb://localhost:27017/userStore";

mongoose.connect(url)
const database = mongoose.connection;
database.on('error', () => console.log("Error in Connecting to Database"));
database.once('open', () => console.log("Connected to Database"))

app.post("/sign_up", async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !password || !email || !phone) return res.status(400).json({ 'message': 'Username and password are required.' });

    // check for duplicate emails in the db
    const duplicate = await database.collection("users").findOne({ email });
    console.log(duplicate)
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //insert to database
        const result = await database.collection("users").insertOne({
            name, email, phone,
            password
        }, (err, res) => {
            if (err) throw err
        });

        return (res.redirect('success.html'))
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
});

app.post("/sign_in", async (req, res) => {
    const { email, password } = req.body;
    const data = { email, password }

    // find matching users
    const match = await database.collection("users").findOne(data);
    if (!match) return res.sendStatus(409);
    else
        return res.redirect('success.html')

});


app.get("/", (req, res) => {
    res.redirect("index.html")
});

app.listen(8000, console.log("server started on port 8000"));
