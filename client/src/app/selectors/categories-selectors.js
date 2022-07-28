const getCategoriesEntities = (state) => state.CategoriesEntities;

export const getCategoriesList = (state) =>
  getCategoriesEntities(state).categoriesList;
