import { addUserLike, removeUserLike } from "../middlewares/like-middleware";

import actions from "./constants";

export const addLikeToRecipe = (UserId, recipeId) => {
  return (dispatch) => {
    const addLike = addUserLike(UserId, recipeId);
    dispatch(addLike);
  };
};

export const removeLikeToRecipe = (UserId, recipeId) => {
  return (dispatch) => {
    const removeLike = removeUserLike(UserId, recipeId);
    dispatch(removeLike);
  };
};
