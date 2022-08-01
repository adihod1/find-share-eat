import actions from "../actions/constants";
import RecipesApiService from "../../api/form-client";
import IngredientClient from "../../api/category";
import RecipeClient from "../../api/recipe";
import { spinner } from "../actions/spinner-actions";

const ingredientClient = new IngredientClient();
const recipeClient = new RecipeClient();

export function recipeCategory() {
  return async function loadCategoriesListAction(dispatch) {
    try {
      spinner(dispatch, true);
      const response = await ingredientClient.fetchCategories();
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

export function addUserMeasurement(userMeasurement) {
  return async function addMeasurementAction(dispatch) {
    try {
      spinner(dispatch, true);
      dispatch({ type: actions.ADD_CATEGORY, measurement: userMeasurement });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addUserQuantity(userQuantity) {
  return async function addQuantityAction(dispatch) {
    try {
      spinner(dispatch, true);
      dispatch({ type: actions.ADD_CATEGORY, quantity: userQuantity });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addUserIngredient(userIngredient) {
  return async function addQuantityAction(dispatch) {
    try {
      spinner(dispatch, true);
      dispatch({
        type: actions.ADD_INGREDIENT,
        ingredientName: userIngredient,
      });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function addUserInstructions(userInstructions) {
  return async function addInstructionsAction(dispatch) {
    try {
      spinner(dispatch, true);
      dispatch({
        type: actions.ADD_INSTRUCTIONS,
        instructions: userInstructions,
      });
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
      console.log(response);
      dispatch({
        type: actions.CREATE_RECIPE,
        userId: response.body.userId,
        recipe: response.body,
      });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}
