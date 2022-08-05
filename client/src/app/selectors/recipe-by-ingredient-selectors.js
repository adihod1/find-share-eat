const getRecipeByIngredientByState = state => state.recipeByIngredient;

export const getRecipeByIngredientArray = state => getRecipeByIngredientByState(state).selected;
export const getRecipeByIngredientsOptions = state => getRecipeByIngredientByState(state).ingredients;
