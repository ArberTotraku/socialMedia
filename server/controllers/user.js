import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user= User.findOne({email});
        if(!user) return res.status(404).json({message:"User doesn't exist"});
        const isPasswordCorrect= await bcrypt.compare(password,user.password);
        if(!isPasswordCorrect) return res.status(400).json({message:"Invalid credentials"});
        const token= jwt.sign({email:user.email,id:user._id},"secret",{expiresIn:"1h"});
        res.status(200).json({user,token});
    }catch(error){
        res.status(500).json({message:error.message});
    }



}
export const signUp = async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    try {
        const oldUser= await User.findOne({email});
        if(oldUser) return res.status(400).json({message:"User already exists"});
        const hashedPassword= await bcrypt.hash(password,12);
        const user= await User.create({email,password:hashedPassword,name:`${firstName} ${lastName}`});
        const token= jwt.sign({email:user.email,id:user._id},"secret",{expiresIn:"1h"});
        res.status(200).json({user,token});
    }catch (error) {
        res.status(500).json({message:error.message});

    }
    }