const express = require('express');
require("./db/connect");
const Student = require("./db/models/students");

const app = express();
const port = process.env.PORT || 8000;
 
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Home Page");
})


// Create A New User 
// CALL BACK FUNCTION
// app.post("/students", (req, res) => {
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         console.log(`Error in Added ${err}`)
//         res.status(400).send(err);
//     });
// });

// BY ASYNC AWAIT 
app.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result); 
    }catch(err){
        console.log(`Error in Added ${err}`)
        res.status(400).send(err);
    }
});



app.listen(port, () => {
    console.log(`Listening Port on ${port}`);
}); 