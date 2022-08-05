const getCategoriesEntities = (state) => state.formEntities;

export const getCategoriesList = (state) =>
  getCategoriesEntities(state).categoriesList;

export const getChosenCategory = (state) =>
  getCategoriesEntities(state).category;

export const getChosenIngredients = (state) =>
  getCategoriesEntities(state).ingredients;

export const getUserInstructions = (state) =>
  getCategoriesEntities(state).instructions;

export const getUserCookTime = (state) =>
  getCategoriesEntities(state).cook_time;
