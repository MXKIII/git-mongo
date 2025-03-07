import users from "../models/users.js";

export const getAllUser = async (req,res)=>{
    try {
        const usersList= await users.find()
        if(usersList.length<1){
            return res.status(404).json({ message: 'No users found' });
        }
        return res.status(200).json(usersList)
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
}

export const getUserById = async (req,res)=>{
    const {id} = req.params
    try {
       const userById = await users.findById(id)
       if(!userById){
        return res.status(404).json({ message: 'No users found' });
       }
       return res.status(200).json(userById)
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
}

export const createUser = async (req, res)=>{
    try {
        const newUser= await users.create(req.body)
        return res.status(200).json(newUser)
    } catch (error) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
}

export const updateUser = async (req,res)=>{
    const {id} = req.params
    try {
       const userById = await users.findByIdAndUpdate(id, req.body, {new : true})
       if(!userById){
        return res.status(404).json({ message: 'No users found' });
       }
       else{
        userById.save()
        return res.json({ message: "User has been updated", user: userById});
       }
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"});
    }
}

export const deleteUser = async (req,res)=>{
    const {id} = req.params
    try {
       const deletedUser = await users.findByIdAndDelete(id)
       if(!deletedUser){
        return res.status(404).json({ message: 'No users found' });
       }
       else{
        return res.json({message:"user has been deleted"});
       }
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"});
    }
}


