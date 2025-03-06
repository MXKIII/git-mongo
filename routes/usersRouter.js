import { Router } from "express";
import users from "../models/users.js";

const usersRouter = Router()

usersRouter.get('/users',async (req,res)=>{
    try {
        const Users= await users.find()
        if(Users.length<1){
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json(Users)
    } catch (err) {
        console.log(err);
    }
})

export default usersRouter