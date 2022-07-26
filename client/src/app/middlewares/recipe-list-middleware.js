import actions from "../actions/constants";
import { spinner } from "../actions/spinner-actions";
import RecipeClient from "../../api/recipe";
import IngredientClient from "../../api/ingredient";
import CategoryClient from "../../api/category";

const recipeClient = new RecipeClient();
const ingredientsClient = new IngredientClient();
const categoriesClient = new CategoryClient();

export function fetchRecipes(filters) {
  return async function fetchRecipesThunk(dispatch, getState) {
    try {
      spinner(dispatch, true);
      const response = await recipeClient.fetchRecipes(filters);
      const recipes = response.body || [];
      dispatch({ type: actions.FETCHED_RECIPES, recipes });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function getAllIngredients() {
  return async function getAllIngredientsThunk(dispatch, getState) {
    try {
      spinner(dispatch, true);
      const response = await ingredientsClient.fetchIngredientsName();
      const ingredients = response.body || [];
      dispatch({ type: actions.FETCHED_INGREDIENTS, ingredients });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function getAllCategories() {
  return async function getAllCategoriesThunk(dispatch, getState) {
    try {
      spinner(dispatch, true);
      const response = await categoriesClient.fetchCategories();
      const categories = response.body || [];
      dispatch({ type: actions.FETCHED_CATEGORIES, categories });
    } catch (e) {
      console.error(e);
    }
    spinner(dispatch, false);
  };
}

export function fetchRecipesByUserId(userId) {
  return async function fetchRecipesThunk(dispatch, getState) {
    try {
      spinner(dispatch, true);
      const response = await recipeClient.fetchRecipesByUserId(userId); //Get the user ID
      const recipes = response.body || [];
      dispatch({ type: actions.USER_RECIPES, recipes });
    } catch (e) {
      console.error(e);
    }

    spinner(dispatch, false);
  };
}
