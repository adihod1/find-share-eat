import CategoriesApiService from "../../api/categories-client";
import { recipeCategory } from "../middlewares/form-middleware";

import actions from "./constants";

export const addIngredients = (ingredients) => {
  return {
    type: actions.ADD_INGREDIENTS,
  };
};

export const addProcedures = (procedures) => {
  return {
    type: actions.ADD_PROCEDURES,
  };
};

export const addCooktime = (cook_time) => {
  return {
    type: actions.ADD_COOKTIME,
  };
};

export const addCategory = (category) => {
  return {
    type: actions.ADD_CATEGORY,
  };
};

export const getCategories = (categories) => {
  return (dispatch) => {
    const getCategories = recipeCategory(categories);
    dispatch(getCategories);
  };
};

export const addPicture = (picture) => {
  return {
    type: actions.ADD_PICTURE,
  };
};

// export const loadCategoriesListAction = () => {
//   console.log("api");
//   return async (dispatch) => {
//     const response = await CategoriesApiService.getCategories(categories);
//     console.log("ccaatteegories", response);
//     dispatch(getCategories(response));
//   };
// };
