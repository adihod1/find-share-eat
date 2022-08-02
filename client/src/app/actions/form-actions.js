import { recipeCategory, addRecipe } from "../middlewares/form-middleware";

import actions from "./constants";

export const addUserRecipe = (id, recipe) => {
  return (dispatch) => {
    const createRecipe = addRecipe(id, recipe);
    dispatch(createRecipe);
  };
};

export const addIngredients = (ingredients) => {
  return (dispatch) => {
    console.log("actionINGREDIENT", ingredients);
    dispatch({ type: actions.ADD_INGREDIENTS, ingredients });
  };
};

export const addInstructions = (instructions) => {
  return (dispatch) => {
    console.log("actionINSTRUCTUONS", instructions);
    dispatch({ type: actions.ADD_INSTRUCTIONS, instructions });
  };
};

export const addCookTime = (cookTime) => {
  return (dispatch) => {
    console.log("actionCOOKTIME", cookTime);
    dispatch({ type: actions.ADD_COOK_TIME, cookTime });
  };
};

export const addCategory = (category) => {
  return (dispatch) => {
    console.log("actionCategory", category);
    dispatch({ type: actions.ADD_CATEGORY, category });
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
