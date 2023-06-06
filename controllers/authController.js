const User= require("../models/userModel");
const {hashPassword, comparePassword}= require("../helpers/authHelper");

const registerController=async(req,res)=>{
    try{

        const {name,email,password,phone,address}= req.body;
        const hashedPassword= await hashPassword(password);

        const existingUser= await User.findOne({email:email});

        if(existingUser){

            res.status(200).send({
                success:"true",
                message:"User already exist. Please LogIn"
            });

        }else{

        const user= await new User({
            name: name,
            email:email,
            password: hashedPassword,
            phone:phone,
            address:address
        }).save();

        res.status(201).send({
            success:"true",
            message:"User Registered Successfully",
            user: user
        });

    }


    }catch(err){
        res.status(500).send({
            success:"false",
            message:"Error Occured",
            error: err
        });
    }

}

const loginController = async (req,res)=>{

    try {

        const {email, password}= req.body;

        const userExist= await User.findOne({email:email});

        if(!userExist){
            return res.status(404).send({
                success:"false",
                messgae:"Invalid User Information"
            });
        }

        const crrctPass= await comparePassword(password, userExist.password);

        if(!crrctPass){
            return res.status(200).send({
                success:"false",
                messgae:"Invalid User Information"
            });
        }

        res.status(201).send({
            success:"true",
            messgae:"User LogIn Successful",
            user:{
                name: userExist.name,
                email: userExist.email,
                phone: userExist.phone,
                address: userExist.address 
            }
        });

        
    } catch (error) {
        res.status(500).send({
            success:"false",
            messgae:"Error Occured",
            error: error
        });
    }
}

module.exports= {registerController, loginController};