import actions from "../actions/constants";
import LikeClient from "../../api/like";
import { spinner } from "../actions/spinner-actions";
import { fetchRecipesAction } from "../actions/recipe-list-actions";

const likeClient = new LikeClient();

export function addUserLike(userId, recipeId) {
  return async function addLikeAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await likeClient.addLike(userId, recipeId);
      console.log("create", response, userId, recipeId);
      dispatch(fetchRecipesAction());
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function removeUserLike(userId, recipeId) {
  return async function removeLikeAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await likeClient.removeLike(userId, recipeId);
      console.log("create", response, userId, recipeId);
      dispatch(fetchRecipesAction());
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}
