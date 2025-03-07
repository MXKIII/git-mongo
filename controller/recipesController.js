import recipes from "../models/recipes.js";

export const getAllRecipes = async (req,res)=>{
    try {
        const Recipes= await recipes.find().populate('author')
        if(Recipes.length<1){
            return res.status(404).json({ message: 'No recipe found' });
        }
        return res.status(200).json(Recipes)
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
}

export const createRecipe = async (req, res)=>{
    try {
        const newRecipe= await recipes.create(req.body)
        return res.status(200).json(newRecipe)
    } catch (error) {
        console.log(err);
        return res.status(400).json({message:"internal server error"})
    }
}

