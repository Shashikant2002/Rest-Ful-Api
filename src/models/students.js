const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is Already Present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Envalid Email");
            }
        }
    },
    phone: {
        type: Number,
        minLength: 10,
        required: true,
    },
    address: {
        type: String,
        required: true,
        minLength: 3
    },
});

// We Will Create a new Collection 
const student = new mongoose.model('Student', studentSchema);   

module.exports = student;