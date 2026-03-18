import userModel from "../model/user.model.js";

import crypto from "crypto"

import jwt from "jsonwebtoken"

import config from "../config/config.js";


const register  = async (req,res)=>{
    const {username  , password , email} = req.body ; 

    // console.log(username + "in register");

    const isAlreadyRegistered = await userModel.findOne({
        $or : [
            {username} , 
            {email} , 
        ]
    }) ; 

    if(isAlreadyRegistered){
        return res.status(409).json({
            message : "User or email already exists " 
        })
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex") ; 

    const user  = await userModel.create({
        username , 
        email , 
        password : hashedPassword ,
    })

    const token  = jwt.sign({
        id : user._id , 
    },config.JWT_SECRET , {
        expiresIn : "1d" ,
    }) ; 

    res.status(201).json({
        message : "User registered successfully" , 
        user : {
            username : user.username , 
            email : user.email
        } , 
        token
    })

}

export { register } ; 
