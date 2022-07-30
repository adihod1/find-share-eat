import actions from "../actions/constants";
import CategoriesApiService from "../../api/categories-client";
import RecipesApiService from "../../api/form-client";
import { spinner } from "../actions/spinner-actions";

const categoriesApiService = new CategoriesApiService();
const recipesApiService = new RecipesApiService();

export function recipeCategory() {
  return async function loadCategoriesListAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await categoriesApiService.getAllCategories();
      console.log(response);
      dispatch({ type: actions.GET_CATEGORIES, categories: response.body });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addRecipe(recipe) {
  return async function addRecipeAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await recipesApiService.postRecipe(recipe);
      console.log(response);
      dispatch({ type: actions.CREATE_RECIPE, recipe: response.body });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}
