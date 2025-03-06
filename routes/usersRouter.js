import { Router } from "express";
import { getAllUser } from "../controller/userController.js";
import { createUser } from "../controller/userController.js";
import { verifyUserFields } from "../middleware/verifyUserFields.js";
import { getUserById } from "../controller/userController.js";
import { updateUser } from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";

const usersRouter = Router()

usersRouter.get('/users', getAllUser)
usersRouter.get('/users/:id', getUserById)
usersRouter.post('/users',verifyUserFields, createUser)
usersRouter.put('/users/:id', updateUser)
usersRouter.delete('/users/:id', deleteUser)
export default usersRouter