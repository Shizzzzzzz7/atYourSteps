const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const router = require("./routes/authRoute");


//rest object
const app= express();


//configure env
dotenv.config(); //If env is in any folder then do dotenv.config({path:'.....path.....'});


//connect to database
connectDB();

//Port
const PORT= process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use("/api/v1/auth", router);


//rest api

app.get("/", (req, res)=>{

    res.send("Hello There");
});

app.listen(PORT, ()=>{

    console.log(`Server strated on port : ${PORT}`);
});