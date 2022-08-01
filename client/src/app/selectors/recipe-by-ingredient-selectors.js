const getRecipeByIngredientByState = state => state.recipeByIngredient;

export const getRecipeByIngredientArray = state => getRecipeByIngredientByState(state).array;
export const getRecipeByIngredientsOptions = state => getRecipeByIngredientByState(state).ingredients;
