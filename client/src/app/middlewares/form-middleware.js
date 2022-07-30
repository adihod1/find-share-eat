import actions from "../actions/constants";
import CategoriesApiService from "../../api/categories-client";
import { spinner } from "../actions/spinner-actions";

const categoriesApiService = new CategoriesApiService();

export function recipeCategory(categories) {
  return async function loadCategoriesListAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await categoriesApiService.getAllCategories(categories);
      console.log(response);
      dispatch({ type: actions.GET_CATEGORIES, categories: response.body });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}
