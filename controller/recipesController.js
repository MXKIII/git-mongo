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

export const getRecipeById = async (req,res)=>{
    const {id} = req.params
    try {
       const recipeById = await recipes.findOne({author:id})
       if(!recipeById){
        return res.status(404).json({ message: 'No recipe found' });
       }
       return res.status(200).json(recipeById)
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

export const updateRecipe = async (req,res)=>{
    const {id} = req.params
    try {
        const recipeById = await recipes.findOneAndUpdate({ author: id },req.body,{ new: true });
       if(!recipeById){
        return res.status(404).json({ message: 'No recipes found' });
       }
       else{
        recipeById.save()
        return res.json({ message: "recipe has been updated", recipe: recipeById});
       }
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"});
    }
}

export const deleteRecipe = async (req,res)=>{
    const {id} = req.params
    try {
       const deletedRecipe = await recipes.findOneAndDelete({author: id})
       if(!deletedRecipe){
        return res.status(404).json({ message: 'No recipe found' });
       }
       else{
        return res.json({message:"recipe has been deleted"});
       }
    } catch (err) {
        console.log(err);
        return res.status(400).json({message:"internal server error"});
    }
}
