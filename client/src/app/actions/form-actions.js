import CategoriesApiService from "../../api/categories-client";
// import {
//   ADD_CATEGORY,
//   GET_CATEGORY,
//   ADD_COOKTIME,
//   ADD_INGREDIENTS,
//   ADD_PICTURE,
//   ADD_PROCEDURES,
// } from "./constants/index";
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

export const getCategories = (category) => {
  return {
    type: actions.GET_CATEGORIES,
  };
};

export const addPicture = (picture) => {
  return {
    type: actions.ADD_PICTURE,
  };
};

export const loadCategoriesListAction = () => {
  return async (dispatch) => {
    const response = await CategoriesApiService.getCategories();
    dispatch(getCategories(response));
  };
};
