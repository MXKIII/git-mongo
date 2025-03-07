import { Router } from "express";
import { createRecipe, deleteRecipe, getAllRecipes, getRecipeById, updateRecipe } from "../controller/recipesController.js";


const recipesRouter = Router()
recipesRouter.get('/recipes', getAllRecipes)
recipesRouter.get('/recipes/:id', getRecipeById)
recipesRouter.post('/recipes', createRecipe)
recipesRouter.put('/recipes/:id', updateRecipe)
recipesRouter.delete('/recipes/:id',deleteRecipe)
export default recipesRouter