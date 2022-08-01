import {
  recipeCategory,
  addRecipe,
  addUserCategory,
  addUserMeasurement,
  addUserQuantity,
  addUserIngredient,
  addUserInstructions,
} from "../middlewares/form-middleware";

import actions from "./constants";

export const addUserRecipe = (id, recipe) => {
  return {
    type: actions.CREATE_RECIPE,
    id,
    recipe,
  };
};

export const addIngredient = (ingredient) => {
  return (dispatch) => {
    const addIngredient = addUserIngredient(ingredient);
    dispatch(addIngredient);
  };
};

export const addQuantity = (quantity) => {
  return (dispatch) => {
    const addQuantity = addUserQuantity(quantity);
    dispatch(addQuantity);
  };
};

export const addMeasurement = (measurement) => {
  return (dispatch) => {
    const addMeasurement = addUserMeasurement(measurement);
    dispatch(addMeasurement);
  };
};

export const addInstructions = (instructions) => {
  return (dispatch) => {
    const addInstructions = addUserInstructions(instructions);
    dispatch(addInstructions);
  };
};

export const addCooktime = (cook_time) => {
  return {
    type: actions.ADD_COOKTIME,
  };
};

export const addCategory = (category) => {
  return (dispatch) => {
    console.log("actionCategory", category);
    dispatch({ category });
  };
};

export const getCategories = () => {
  return (dispatch) => {
    const getCategories = recipeCategory();
    dispatch(getCategories);
  };
};

export const addPicture = (picture) => {
  return {
    type: actions.ADD_PICTURE,
  };
};
