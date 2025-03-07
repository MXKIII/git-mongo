import { Router } from "express";
import { getAllUser, createUser, getUserById, updateUser, deleteUser } from "../controller/userController.js";
import { verifyUserFields } from "../middleware/verifyUserFields.js";


const usersRouter = Router()

usersRouter.get('/users', getAllUser)
usersRouter.get('/users/:id', getUserById)
usersRouter.post('/users',verifyUserFields, createUser)
usersRouter.put('/users/:id', updateUser)
usersRouter.delete('/users/:id', deleteUser)
export default usersRouter