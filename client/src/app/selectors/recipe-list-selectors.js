const getRecipesListState = state => state.recipeList;

export const getRecipeListValue = state => getRecipesListState(state).recipes;
export const getUserRecipeListValue = state => getRecipesListState(state).userRecipes;
