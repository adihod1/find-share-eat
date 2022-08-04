import { recipeCategory, addRecipe } from "../middlewares/form-middleware";

import actions from "./constants";

export const addLikeToRecipe = (id, recipe) => {
  return (dispatch) => {
    const createRecipe = addRecipe(id, recipe);
    dispatch(createRecipe);
  };
};

export const removeLikeToRecipe = (id, recipe) => {
  return (dispatch) => {
    const createRecipe = addRecipe(id, recipe);
    dispatch(createRecipe);
  };
};
