const bcrypt= require("bcrypt");

const hashPassword = async(password)=>{
    try{
        const saltRounds=10;
        const hashedPassword= await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }catch(err){
        console.log(err.message);
    }
}

const comparePassword = async(password,hashedPassword)=>{
    try{

        const result= await bcrypt.compare(password,hashedPassword);
        return result;
    }catch(err){
            console.log(err.message);
    }
}


module.exports= {hashPassword, comparePassword};