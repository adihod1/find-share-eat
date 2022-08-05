const getRecipeSearchByState = state => state.recipeSearch;

export const getRecipeSearchValue = state => getRecipeSearchByState(state).search;