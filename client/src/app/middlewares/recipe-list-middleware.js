import actions from "../actions/constants";
import { spinner } from "../actions/spinner-actions";
import RecipeClient from "../../api/recipe";

const recipeClient = new RecipeClient()

export function fetchRecipes() {
    return async function fetchRecipesThunk(dispatch, getState) {
        spinner(dispatch, true);
        const response = await recipeClient.fetchRecipes();
        const recipes = response.body || [];
        dispatch({ type: actions.FETCHED_RECIPES, recipes });
        spinner(dispatch, false);
    }
}

export function fetchRecipesByUserId(userId) {
    return async function fetchRecipesThunk(dispatch, getState) {
        spinner(dispatch, true);
        const response = await recipeClient.fetchRecipesByUserId(userId); //Get the user ID
        const recipes = response.body || [];
        dispatch({ type: actions.FETCHED_RECIPES, recipes });
        spinner(dispatch, false);
    }
}
