const express = require("express");
const router = new express.Router();
const student = require("../models/students");




// we need to define a router 
router.get("/skp", (req, res) => {
    res.send("Hello Skp Page");
})

// Create A New User 
// CALL BACK FUNCTION
// router.post("/students", (req, res) => {
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         console.log(`Error in Added ${err}`)
//         res.status(400).send(err);
//     });
// });
// BY ASYNC AWAIT 
router.post("/students", async (req, res) => {
    try{
        const user = new Student(req.body);
        const result = await user.save();
        res.status(201).send(result); 
    }catch(err){
        console.log(`Error in Added ${err}`)
        res.status(400).send(err);
    }
});

// Get A data from data base 
router.get("/students", async (req, res) => {
    try{
        const result = await student.find();
        res.status(201).send(result); 
    }catch(err){
        console.log(`Error in Getting ${err}`)
        res.status(400).send(err);
    }
});

// Get A data from data base Induvisual
router.get("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const result = await student.findById(_id);
        if(!result){
            res.status(404).send(); 
        }else{
            res.status(201).send(result); 
        }
    }catch(err){
        console.log(`Error in Getting ${err}`)
        res.status(500).send(err);
    }
});


// Update A data from data base Induvisual
router.patch("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const result = await student.findByIdAndUpdate(_id, req.body , {
            new : true
        }); 
        if(!result){
            res.status(404).send(); 
        }else{
            res.status(201).send(result); 
        }
    }catch(err){
        console.log(`Error in Getting ${err}`)
        res.status(500).send(err);
    }
});

// Delete A data from data base Induvisual
router.delete("/students/:id", async (req, res) => {
    try{
        const _id = req.params.id;
        const result = await student.findByIdAndDelete(_id); 
        if(!result){
            res.status(404).send(); 
        }else{
            res.status(201).send(result); 
        }
    }catch(err){
        console.log(`Error in Getting ${err}`)
        res.status(500).send(err);
    }
});



module.exports = router;