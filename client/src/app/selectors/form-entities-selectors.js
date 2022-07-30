const getCategoriesEntities = (state) => state.formEntities;

export const getCategoriesList = (state) =>
  getCategoriesEntities(state).categoriesList;
