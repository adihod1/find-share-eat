import {fetchRecipes, fetchRecipesByUserId} from "../middlewares/recipe-list-middleware";

export const fetchRecipesAction = (filters = {}) => {
    return dispatch => {
        const fetchRecipesThunk = fetchRecipes(filters);
        dispatch(fetchRecipesThunk)
    };
}

export const fetchRecipesByUserIdAction = (userId) => {
    return dispatch => {
        const fetchRecipesThunk = fetchRecipesByUserId(userId);
        dispatch(fetchRecipesThunk)
    };
}