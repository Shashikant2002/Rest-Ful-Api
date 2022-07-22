const express = require('express');
const student = require('./models/students');
require("./db/connect");
const Student = require("./models/students");
const studentRouter = require("./router/students.js");

const app = express();
const port = process.env.PORT || 8000;


// we need to register our router
app.use(studentRouter);
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Home Page");
})

app.listen(port, () => {
    console.log(`Listening Port on ${port}`);
}); 