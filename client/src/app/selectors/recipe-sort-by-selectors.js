const getRecipeSortByState = state => state.recipeSort;

export const getSortByObject = state => getRecipeSortByState(state).obj;
export const getSortByLabel = state => getRecipeSortByState(state).label;
export const getSortByValue = state => getRecipeSortByState(state).sort;
