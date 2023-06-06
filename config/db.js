const mongoose = require("mongoose");


const connectDB= async()=>{

    try{

        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Database");
    }catch(err){
        console.log(`Error Occured : ${err}`);
    }
}

module.exports= connectDB;