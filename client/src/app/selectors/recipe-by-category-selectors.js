const getRecipeByCategoryByState = state => state.recipeByCategory;

export const getRecipeByCategoryArray = state => getRecipeByCategoryByState(state).selected;
export const getRecipeByCategoriesOptions = state => getRecipeByCategoryByState(state).categories;
