import actions from "../actions/constants";
import CategoryClient from "../../api/category";
import RecipeClient from "../../api/recipe";
import { spinner } from "../actions/spinner-actions";

const categoryClient = new CategoryClient();
const recipeClient = new RecipeClient();

export function recipeCategory() {
  return async function loadCategoriesListAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await categoryClient.fetchCategories();
      console.log("res", response);
      dispatch({ type: actions.GET_CATEGORIES, categories: response.body });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addUserCategory(userCategory) {
  return async function addCategoryAction(dispatch) {
    try {
      spinner(dispatch, true);
      dispatch({ type: actions.ADD_CATEGORY, categoryId: userCategory });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addRecipe(userId, recipe) {
  return async function addRecipeAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await recipeClient.addRecipe(userId, recipe);
      console.log("create", response);
      dispatch({
        type: actions.CREATE_RECIPE,
        userId: userId,
        recipe: recipe,
      });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}
