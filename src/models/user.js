const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    firstName: {
        type: String,
        requried: true,
        minLength:4


    },
    lastName: {
        type: String,

    },
    email: {
        type: String,
        requried: true,
        unique:true,
        lowercase:true
        
    },
    password: {
        type: String,
        requried: true
    },
    age: {
        type: Number,
        min:18
    },
    gender: {
        type: String
    },
    photourl:{
        type:String,
    },
    about:{
        type:String,
    },
    skills:{
        type:[String]
    }




},{timestamp:true})

const User = mongoose.model("User", UserSchema);
module.exports = User