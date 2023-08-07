const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/login")
.then(() => {
    console.log("mongodb connected");
})
.catch(() =>{
    console.log("mongodb disconnected");
})
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Collection1", LoginSchema);