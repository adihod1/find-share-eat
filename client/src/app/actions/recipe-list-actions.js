import {fetchRecipes, fetchRecipesByUserId} from "../middlewares/recipe-list-middleware";

export const fetchRecipesAction = () => {
    return dispatch => {
        const fetchRecipesThunk = fetchRecipes();
        dispatch(fetchRecipesThunk)
    };
}

export const fetchRecipesByUserIdAction = (userId) => {
    return dispatch => {
        const fetchRecipesThunk = fetchRecipesByUserId(userId);
        dispatch(fetchRecipesThunk)
    };
}