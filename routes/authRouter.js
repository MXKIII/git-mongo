import { verifyUserFields } from "../middleware/verifyUserFields.js";
import users from "../models/users.js";
import { Router } from "express";
import bcrypt from 'bcryptjs'

const authRouter = Router()

authRouter.post('/register',verifyUserFields,async (req,res)=>{
    const{first_name,last_name,email,password}=req.body
    try {
        const emailVerification= await users.findOne({email})
        if(emailVerification){
            return res.status(409).json({message:'email already taken'})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password, salt)
        const newUser =  new users({
            first_name,
            last_name,
            email,
            password : hashedPassword,
        })
        await newUser.save()
        return res.status(201).json({message:`welcome ${first_name}`})
    } catch (error) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
})

export default authRouter