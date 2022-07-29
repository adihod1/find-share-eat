const getRecipesListState = state => state.recipeList;

export const getRecipeListValue = state => getRecipesListState(state).recipes;
