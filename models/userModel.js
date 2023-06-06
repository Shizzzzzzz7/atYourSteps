const mongoose = require("mongoose");

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:Number,
        default:0
    }
},{timestamps:true});

const User= mongoose.model("User", userSchema);

module.exports= User;