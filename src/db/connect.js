const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/Students_Data").then(() => {
    console.log("Connection Success Full");
}).catch((err) => {
    console.log(`Internal Server Error ${err}`);
})