const getCategoriesEntities = (state) => state.formEntities;

export const getCategoriesList = (state) =>
  getCategoriesEntities(state).categoriesList;

export const getChosenCategory = (state) =>
  getCategoriesEntities(state).category;

export const getChosenQuantity = (state) =>
  getCategoriesEntities(state).category;

export const getChosenMeasurement = (state) =>
  getCategoriesEntities(state).category;

export const getChosenIngredient = (state) =>
  getCategoriesEntities(state).ingredient;

export const getUserInstructions = (state) =>
  getCategoriesEntities(state).instructions;
